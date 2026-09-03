import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../reduxs/CartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);

  const tax = subtotal * 0.18; // 18%
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + tax + shipping - discount;

  const applyPromo = () => {
    if (promoCode === "SAVE10") {
      setDiscount(subtotal * 0.1); // 10% discount
      setPromoApplied(true);
    } else if (promoCode === "FLAT50") {
      setDiscount(50); // flat ₹50 off
      setPromoApplied(true);
    } else {
      alert("Invalid Promo Code");
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Card className="p-5 text-center shadow-sm">
        <h3>Your cart is empty</h3>
        <p className="text-muted">Add items to see them here</p>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </Card>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-5">Your Shopping Cart</h1>
      <Row>
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <Card className="mb-4" key={item.id}>
              <Card.Body>
                <Row className="cart-item mb-3">
                  <Col md={3}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </Col>

                  <Col md={5}>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="text-muted text-capitalize">
                      Category: {item.category}
                    </p>
                  </Col>

                  <Col md={2}>
                    <div className="input-group">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => dispatch(decreaseQty(item.id))}
                      >
                        -
                      </Button>

                      <input
                        type="text"
                        className="form-control form-control-sm text-center"
                        value={item.quantity}
                        readOnly
                      />

                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => dispatch(increaseQty(item.id))}
                      >
                        +
                      </Button>
                    </div>
                  </Col>

                  <Col md={2} className="text-end">
                    <p className="fw-bold">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <BiTrash />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

          <div className="text-start mb-4">
            <Link to="/">
              <Button variant="outline-primary">
                <BsArrowLeft className="me-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        <Col lg={4}>
          {/* <!-- Promo Code --> */}
          <Card className="mb-2">
            <Card.Body>
              <h5 className="card-title mb-3">Apply Promo Code</h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button variant="outline-secondary" onClick={applyPromo}>
                  Apply
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* <!-- Cart Summary --> */}
          <Card className="cart-summary">
            <Card.Body>
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹ {subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹ ${shipping}`}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>₹ {tax.toFixed(2)}</span>
              </div>
              {promoApplied && (
                <div className="d-flex justify-content-between mb-2 text-success">
                  <span>Discount</span>
                  <span>- ₹ {discount.toFixed(2)}</span>
                </div>
              )}
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>₹ {total.toFixed(2)}</strong>
              </div>
              <Link to="/checkout">
                <Button variant="primary" className="w-100">
                  Proceed to Checkout
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
