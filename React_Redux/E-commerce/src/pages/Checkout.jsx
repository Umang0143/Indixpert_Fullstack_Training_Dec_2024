import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { clearCart } from "../reduxs/CartSlice";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../reduxs/OrderSlice";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = cartItems.reduce(
    (t, i) => t + i.price * i.quantity,
    0
  );
  const tax = subTotal * 0.18;
  const shipping = subTotal > 500 ? 0 : 50;
  const total = subTotal + tax + shipping;

  const [payment, setPayment] = useState("");

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    dispatch(
      placeOrder({
        id: Date.now(),
        payment,
        items: cartItems,
        total,
        subTotal,
        tax,
        shipping,
        date: new Date().toLocaleString(),
      })
    );

    dispatch(clearCart());
    toast.success("Order placed successfully");
    navigate("/myaccount");
  };

  return (
    <>
      <Card className="p-4">
        <h4>Order Summary</h4>
        <hr />

        <Card.Body>
          {cartItems.map((item) => (
            <Row className="cart-item mb-3" key={item.id}>
              <Col md={3}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{ width: "100px", height: "100px" }}
                />
              </Col>

              <Col md={5}>
                <h5>{item.title}</h5>
                <p className="text-muted">
                  Quantity: {item.quantity}
                </p>
              </Col>

              <Col md={2} className="text-end">
                <p className="fw-bold">
                  ₹ {(item.price * item.quantity).toFixed(2)}
                </p>
              </Col>
            </Row>
          ))}
          <hr />
          <p>Subtotal: ₹ {subTotal.toFixed(2)}</p>
          <p>Tax: ₹ {tax.toFixed(2)}</p>
          <p>Shipping: ₹ {shipping.toFixed(2)}</p>
          <h5>Total: ₹ {total.toFixed(2)}</h5>
        </Card.Body>

        <Form.Select
          className="mt-3"
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">Select Payment</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
          <option value="COD">Cash on Delivery</option>
        </Form.Select>

        <Button className="mt-3" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </Card>

      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Checkout;
