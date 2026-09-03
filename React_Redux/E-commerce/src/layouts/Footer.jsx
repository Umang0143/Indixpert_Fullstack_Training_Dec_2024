import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>
              <img
                alt="Logo"
                src="src\assets\logo\logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              eStore
            </h5>
            <p>Best online shopping experience.</p>
          </Col>

          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Wishlist</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Contact</h6>
            <p>Email: support@estore.com</p>
            <p>Phone: +91 9876543210</p>
          </Col>
        </Row>

        <hr />
        <p className="text-center mb-0">© 2025 eStore. All Rights Reserved</p>
      </Container>
    </footer>
  );
}
