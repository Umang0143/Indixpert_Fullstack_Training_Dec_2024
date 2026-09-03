import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import HeroSlider from "../components/HeroSlider";
import { fatchProducts } from "../api/Services";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reduxs/CartSlice";
import { addToWishlist } from "../reduxs/WishlistSlice";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

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

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Item already in cart");
    } else {
      dispatch(addToCart(product));
      toast.success("Item added to cart");
    }
  };

  const handleAddToWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Item already in wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist");
    }
  };

  return (
    <>
      <Container fluid>
        <HeroSlider />

        <Section
          title="Featured Products"
          products={products.slice(0, 4)}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />

        <Section
          title="Best Sellers"
          products={products.slice(4, 8)}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />

        <Section
          title="New Products"
          products={products.slice(8, 12)}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      </Container>
      <ToastContainer />
    </>
  );
}
function Section({ title, products, onAddToCart, onAddToWishlist }) {
  return (
    <>
      <h4 className="mb-4">{title}</h4>

      <Row className="mb-5">
        {products.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                src={product.thumbnail}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6">{product.title}</Card.Title>

                <Badge bg="light" text="dark" className="mb-2">
                  {product.category}
                </Badge>

                <h6 className="fw-bold mt-auto">₹ {product.price}</h6>

                <Row className="mt-3 g-2">
                  <Col xs={4}>
                    <Button
                      size="sm"
                      variant="primary"
                      className="w-100"
                      onClick={() => onAddToCart(product)}
                    >
                      <FaShoppingCart />
                    </Button>
                  </Col>

                  <Col xs={4}>
                    <Link
                      to="/produdctdetails"
                      state={{ product }}
                      className="text-decoration-none"
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
                      onClick={() => onAddToWishlist(product)}
                    >
                      <FaHeart />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
