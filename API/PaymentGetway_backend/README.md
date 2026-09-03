# PaymentGetway_backend
# DataBase Table & SP (Stored Procedure)

-- 1. Create Tables
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    created_at DATETIME DEFAULT GETDATE()
);
GO

 -- Invoices Table
CREATE TABLE Invoices (
    id INT IDENTITY(1,1) PRIMARY KEY,
    invoice_id VARCHAR(100) NOT NULL UNIQUE,
    user_email VARCHAR(100) NOT NULL,

    amount INT NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',

    status VARCHAR(50) NOT NULL,

    short_url VARCHAR(255),

    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME NULL
);
GO

-- Payments Table
CREATE TABLE Payments (
    id INT IDENTITY(1,1) PRIMARY KEY,
    invoice_id VARCHAR(100) NOT NULL,

    razorpay_payment_id VARCHAR(100),
    razorpay_order_id VARCHAR(100),

    amount INT,
    method VARCHAR(50),

    status VARCHAR(50),

    created_at DATETIME DEFAULT GETDATE()
);
GO

-- WebHook Logs Table 
CREATE TABLE WebhookLogs (
    id INT IDENTITY(1,1) PRIMARY KEY,

    event_type VARCHAR(100),
    source VARCHAR(50),

    payload NVARCHAR(MAX),

    received_at DATETIME DEFAULT GETDATE()
);
GO

-- InvoiceStatusHistory Table 
CREATE TABLE InvoiceStatusHistory (
    id INT IDENTITY(1,1) PRIMARY KEY,

    invoice_id VARCHAR(100),

    old_status VARCHAR(50),
    new_status VARCHAR(50),

    changed_at DATETIME DEFAULT GETDATE()
);
GO
 
-- 2. Stored Procedure: User details insert karne ke liye
CREATE PROCEDURE sp_InsertUser
    @Name VARCHAR(100),
    @Email VARCHAR(100),
    @Phone VARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;
    -- Agar user pehle se exist nahi karta tabhi insert karega
    IF NOT EXISTS (SELECT 1 FROM Users WHERE email = @Email)
    BEGIN
        INSERT INTO Users (name, email, phone, created_at) VALUES (@Name, @Email, @Phone, GETDATE());
    END
END;
GO
 
-- 3. Stored Procedure: Pending Invoice insert karne ke liye
CREATE PROCEDURE sp_InsertInvoice
    @InvoiceId VARCHAR(100),
    @Amount INT,
    @Status VARCHAR(50),
    @UserEmail VARCHAR(100)
    @ShortUrl VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO Invoices (invoice_id, amount, status, user_email, short_url)
    VALUES (@InvoiceId, @Amount, @Status, @UserEmail, @ShortUrl);
END;
GO
 
-- 4. Stored Procedure: Payment ke baad Status Update karne ke liye
CREATE PROCEDURE sp_UpdateInvoiceStatus
    @InvoiceId VARCHAR(100),
    @Status VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE Invoices SET status = @Status WHERE invoice_id = @InvoiceId;
END;
GO

-- ==========================================
-- JOIN QUERY
-- ==========================================

SELECT 
    U.id AS user_id,
    U.name,
    U.email,
    U.phone,
    U.created_at AS user_created_at,

    I.invoice_id,
    I.amount,
    I.currency,
    I.status,
    I.short_url,
    I.created_at AS invoice_created_at,

    P.razorpay_payment_id,
    P.razorpay_order_id,
    P.amount AS payment_amount,
    P.method,
    P.status AS payment_status,
    P.created_at AS payment_created_at

FROM Users U
INNER JOIN Invoices I
    ON U.email = I.user_email
LEFT JOIN Payments P
    ON I.invoice_id = P.invoice_id

ORDER BY I.created_at DESC;


-- ==========================================
-- VIEW
-- ==========================================

CREATE VIEW vw_FullInvoiceSystem AS
SELECT 
    U.name,
    U.email,
    U.phone,

    I.invoice_id,
    I.amount,
    I.currency,
    I.status,
    I.short_url,

    P.razorpay_payment_id,
    P.method,
    P.status AS payment_status

FROM Users U
INNER JOIN Invoices I
    ON U.email = I.user_email
LEFT JOIN Payments P
    ON I.invoice_id = P.invoice_id;


-- ==========================================
-- CHECK DATA
-- ==========================================

SELECT * FROM Users;

SELECT * FROM Invoices;

SELECT * FROM vw_UserInvoices;