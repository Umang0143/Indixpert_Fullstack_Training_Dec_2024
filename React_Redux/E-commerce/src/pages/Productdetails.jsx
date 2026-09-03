import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaPlus,
  FaMinus,
  FaArrowLeft,
} from "react-icons/fa";

export default function ProductDetails(id) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;

  if (!product) {
    return (
      <Container className="text-center mt-5">
        <h4>No Product Found</h4>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Img
              src={product.thumbnail}
              style={{ height: "420px", objectFit: "cover" }}
            />
          </Card>

          <Row className="mt-3 g-2">
            {product.images?.map((img, index) => (
              <Col xs={3} key={index}>
                <Card className="shadow-sm">
                  <Card.Img
                    src={img}
                    style={{
                      height: "90px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={6}>
          <h3 className="fw-bold">{product.title}</h3>

          <Badge bg="success" className="mb-2">
            In Stock
          </Badge>

          <p className="text-muted">{product.category}</p>

          <h4 className="text-primary mb-3">₹ {product.price}</h4>

          <div className="d-flex align-items-center gap-3 mb-4">
            <strong>Quantity</strong>

            <div className="d-flex align-items-center border rounded px-2">
              <Button variant="light" size="sm">
                <FaMinus />
              </Button>

              <span className="px-3 fw-bold">1</span>

              <Button variant="light" size="sm">
                <FaPlus />
              </Button>
            </div>
          </div>

          <Row className="g-2 mb-4">
            <Col>
              <Button
                variant="primary"
                className="w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <FaShoppingCart />
                Add to Cart
              </Button>
            </Col>

            <Col>
              <Button
                variant="outline-danger"
                className="w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <FaHeart />
                Wishlist
              </Button>
            </Col>
          </Row>

          <p className="text-muted">{product.description}</p>

          <Button
            variant="secondary"
            className="d-flex align-items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
            Back to Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
