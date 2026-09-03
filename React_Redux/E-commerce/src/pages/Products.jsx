import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import CustomPagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { Container, Row, Spinner, Col, Card, Button } from "react-bootstrap";
import { fatchProducts } from "../api/Services";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxs/CartSlice";
import { addToWishlist } from "../reduxs/WishlistSlice";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const res = await fatchProducts();
      setProducts(res.data.products);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container fluid>
      <h3 className="mb-4">🛒 Product List</h3>

      {loading && <Spinner animation="border" />}

      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}

      <Row>
        {currentProducts.map((product) => (
          <Col md={4} lg={3} key={product.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6">{product.title}</Card.Title>
                <Card.Text className="text-muted small">
                  {product.category}
                </Card.Text>
                <h6 className="mt-auto">₹ {product.price}</h6>
                <Row className="mt-2 g-2">
                  <Col xs={4}>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-100 d-flex align-items-center justify-content-center gap-1"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: product.id,
                            title: product.title,
                            price: Number(product.price),
                            thumbnail: product.thumbnail,
                            category: product.category,
                            quantity: 1,
                          })
                        )
                      }
                    >
                      <FaShoppingCart />
                      Cart
                    </Button>
                  </Col>

                  <Col xs={4}>
                    <Link
                      to="/produdctdetails"
                      state={{ product }}
                      className="w-100 text-decoration-none"
                    >
                      <Button
                        variant="outline-dark"
                        size="sm"
                        className="w-100 d-flex align-items-center justify-content-center gap-1"
                      >
                        <FaEye />
                        Detail
                      </Button>
                    </Link>
                  </Col>

                  <Col xs={4}>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="w-100 d-flex align-items-center justify-content-center gap-1"
                      onClick={() => dispatch(addToWishlist(item))}
                    >
                      <FaHeart />
                      Wish
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}
