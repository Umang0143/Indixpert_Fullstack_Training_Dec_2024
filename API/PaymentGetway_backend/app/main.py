import os
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
from requests.auth import HTTPBasicAuth
from dotenv import load_dotenv
from app.database import get_db_connection
import hmac
import hashlib
import json
 
load_dotenv()
 
app = FastAPI()
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")
WEBHOOK_SECRET = os.getenv("WEBHOOK_SECRET")

class InvoiceRequest(BaseModel):
    name: str
    email: str
    phone: str
    amount: int
    description: str
 
@app.post("/create-invoice")
def create_invoice(data: InvoiceRequest):

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("{CALL sp_InsertUser (?, ?, ?)}",
                       (data.name, data.email, data.phone))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))

    razorpay_url = "https://api.razorpay.com/v1/invoices"

    payload = {
        "type": "invoice",
        "description": data.description,
        "customer": {
            "name": data.name,
            "email": data.email,
            "contact": data.phone
        },
        "line_items": [
            {
                "name": data.description,
                "amount": data.amount * 100,
                "currency": "INR",
                "quantity": 1
            }
        ],
        "sms_notify": 1,
        "email_notify": 1
    }

    response = requests.post(
        razorpay_url,
        json=payload,
        auth=HTTPBasicAuth(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET)
    )

    if response.status_code != 200:
        raise HTTPException(status_code=400, detail="Razorpay Failed")

    rzp_invoice = response.json()

    try:
        cursor.execute(
            "{CALL sp_InsertInvoice (?, ?, ?, ?, ?)}",
            (
                rzp_invoice['id'],
                data.amount,
                "pending",
                data.email,
                rzp_invoice['short_url']
            )
        )
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()

    return {
        "invoice_url": rzp_invoice['short_url'],
        "invoice_id": rzp_invoice['id']
    }

@app.post("/razorpay-webhook")
async def razorpay_webhook(request: Request):

    body = await request.body()

    signature = request.headers.get("X-Razorpay-Signature")
    if not signature:
        raise HTTPException(status_code=400)

    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode(),
        body,
        hashlib.sha256
    ).hexdigest()

    if signature != expected_signature:
        raise HTTPException(status_code=400, detail="Invalid signature")

    data = json.loads(body)

    # 🔥 Log webhook
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO WebhookLogs (event_type, source, payload) VALUES (?, ?, ?)",
        (data.get("event"), "razorpay", json.dumps(data))
    )
    conn.commit()

    if data.get("event") == "invoice.paid":

        invoice = data["payload"]["invoice"]["entity"]
        payment = data["payload"].get("payment", {}).get("entity", {})
    
        invoice_id = invoice["id"]

        razorpay_payment_id = payment.get("id")
        razorpay_order_id = payment.get("order_id")
        amount = (payment.get("amount") or 0) / 100
        method = payment.get("method")
        status = payment.get("status")

        conn = get_db_connection()
        cursor = conn.cursor()

        try:
            # 1. update invoice status
            cursor.execute(
                "{CALL sp_UpdateInvoiceStatus (?, ?)}",
                (invoice_id, "paid")
            )

            # 2. store payment details (NEW)
            cursor.execute(
                """
                INSERT INTO Payments 
                (invoice_id, razorpay_payment_id, razorpay_order_id, amount, method, status)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    invoice_id,
                    razorpay_payment_id,
                    razorpay_order_id,
                    amount,
                    method,
                    status
                )
            )

            # 3. history log (already correct)
            cursor.execute(
                "INSERT INTO InvoiceStatusHistory (invoice_id, old_status, new_status) VALUES (?, ?, ?)",
                (invoice_id, "pending", "paid")
            )

            conn.commit()

        except Exception as e:
            conn.rollback()
            return {"status": "failed", "error": str(e)}

        finally:
            conn.close()

        return {"status": "success"}

    return {"status": "ignored"}