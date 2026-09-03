import { useEffect, useState } from "react";
import { fetchCategories } from "../api/Services";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Spinner,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxs/CartSlice";
import { addToWishlist } from "../reduxs/WishlistSlice";

const CategoryProducts = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // 🔹 fetch categories
  useEffect(() => {
    fetchCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  // 🔹 fetch products by category
  const loadProducts = async (slug) => {
    setLoading(true);
    setActiveCategory(slug);

    const res = await axios.get(
      `https://dummyjson.com/products/category/${slug}`
    );

    setProducts(res.data.products);
    setLoading(false);
  };

  return (
    <Container fluid className="py-4">
      <Row>
        {/* LEFT SIDEBAR */}
        <Col md={3}>
          <h5 className="mb-3">Categories</h5>
          <ListGroup>
            {categories.map((cat) => (
              <ListGroup.Item
                key={cat.slug}
                action
                active={activeCategory === cat.slug}
                onClick={() => loadProducts(cat.slug)}
                style={{ cursor: "pointer" }}
              >
                {cat.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* RIGHT OUTPUT */}
        <Col md={9}>
          <h5 className="mb-3 fw-bold">List of Products</h5>

          <h5 className="mb-3 text-capitalize">{activeCategory}</h5>

          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Row>
              {products.length === 0 ? (
                <p>No products found</p>
              ) : (
                products.map((item) => (
                  <Col md={4} key={item.id} className="mb-4">
                    <Card className="h-100 shadow-sm">
                      <Card.Img
                        src={item.thumbnail}
                        style={{ height: "200px", objectFit: "cover" }}
                      />

                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="fs-6">{item.title}</Card.Title>

                        <Badge bg="light" text="dark" className="mb-2">
                          {item.category}
                        </Badge>

                        <h6 className="fw-bold mt-auto">₹ {item.price}</h6>

                        <Row className="mt-3 g-2">
                          <Col xs={4}>
                            <Button
                              size="sm"
                              variant="primary"
                              className="w-100"
                              onClick={() => dispatch(addToCart(item))}
                            >
                              <FaShoppingCart />
                            </Button>
                          </Col>

                          <Col xs={4}>
                            <Link
                              to="/produdctdetails"
                              state={{ product: item }}
                            >
                              <Button
                                size="sm"
                                variant="outline-dark"
                                className="w-100"
                              >
                                <FaEye />
                              </Button>
                            </Link>
                          </Col>

                          <Col xs={4}>
                            <Button
                              size="sm"
                              variant="outline-danger"
                              className="w-100"
                              onClick={() => dispatch(addToWishlist(item))}
                            >
                              <FaHeart />
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryProducts;
