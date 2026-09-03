import os
import pyodbc
from dotenv import load_dotenv

load_dotenv()

DB_ENV = os.getenv("DB_ENV", "local")

def get_db_connection():

    driver = os.getenv("DB_DRIVER")
    server = os.getenv("DB_SERVER")
    database = os.getenv("DB_DATABASE")

    if DB_ENV == "local":
        conn_str = (
            f"DRIVER={{{driver}}};"
            f"SERVER={server};"
            f"DATABASE={database};"
            "Trusted_Connection=yes;"
            "TrustServerCertificate=yes;"
        )
    else:
        username = os.getenv("DB_USERNAME")
        password = os.getenv("DB_PASSWORD")

        conn_str = (
            f"DRIVER={{{driver}}};"
            f"SERVER={server};"
            f"DATABASE={database};"
            f"UID={username};"
            f"PWD={password};"
            "TrustServerCertificate=yes;"
        )

    return pyodbc.connect(conn_str)