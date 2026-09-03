import { Container, Card, Button, ListGroup, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const orders = useSelector((state) => state.order?.orders || []);

  const user = {
    name: "Ruhela Umang Anilkumar",
    email: "umang123@gmail.com",
  };

  return (
    <Container className="my-4">
      <h3 className="mb-4">My Account</h3>

      {/* Profile */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="align-items-center">
            {/* Profile Image */}
            <Col md={3} className="text-center">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="profile"
                className="rounded-circle mb-2"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "3px solid #0d6efd",
                }}
              />
              <p className="text-muted mb-0">Member</p>
            </Col>

            {/* Profile Info */}
            <Col md={6}>
              <h5 className="mb-2">{user.name}</h5>
              <p className="text-muted mb-1">{user.email}</p>

              <p className="text-muted mb-0">
                Joined on: <strong>Jan 2025</strong>
              </p>
            </Col>

            {/* Actions */}
            <Col md={3} className="text-md-end mt-3 mt-md-0">
              <Link to="/login">
                <Button variant="primary" size="sm" className="me-2">
                  Login
                </Button>
              </Link>

              <Button variant="outline-danger" size="sm">
                Logout
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Orders */}
      <Card>
        <Card.Body>
          <Card.Title>My Orders</Card.Title>

          {orders.length === 0 ? (
            <p>No orders placed yet</p>
          ) : (
            <ListGroup>
              {orders.map((order) => (
                <Card key={order.id} className="mb-3">
                  <Card.Body>
                    {order.items.map((item) => (
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
                          <h5 className="card-title">{item.title}</h5>
                          <p className="text-muted text-capitalize">
                            Category: {item.category}
                          </p>
                          <p className="text-muted text-capitalize">
                            Quantity: {item.quantity}
                          </p>
                        </Col>

                        <Col md={2} className="text-end">
                          <p className="fw-bold">
                            Total: ₹ {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </Col>
                      </Row>
                    ))}
                    <p>
                      <strong>Date:</strong> {order.date}
                    </p>
                    <p>
                      <strong>Payment:</strong> {order.payment}
                    </p>
                    <p>
                      <strong>Subtotal:</strong> ₹ {order.subTotal}
                    </p>
                    <p>
                      <strong>Tax:</strong> ₹ {order.tax.toFixed(2)}
                    </p>
                    <p>
                      <strong>Shipping:</strong> ₹ {order.shipping}
                    </p>
                    <p>
                      <strong>Total: ₹ {order.total.toFixed(2)}</strong>
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyAccount;
