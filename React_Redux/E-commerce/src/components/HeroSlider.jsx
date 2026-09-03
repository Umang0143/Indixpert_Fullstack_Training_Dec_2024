import { useEffect, useState } from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "../reduxs/CartSlice";
import { addToWishlist } from "../reduxs/WishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

export default function HeroSlider() {
  const [products, setProducts] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  const chunkSize = 4;
  const productChunks = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    productChunks.push(products.slice(i, i + chunkSize));
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
      <Carousel indicators={false}>
        {productChunks.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="g-4 px-4">
              {group.map((item) => (
                <Col md={3} key={item.id}>
                  <Card className="h-100 text-center shadow-sm">
                    <Card.Img
                      variant="top"
                      src={item.thumbnail}
                      style={{ height: "260px", objectFit: "cover" }}
                    />

                    <Card.Body>
                      <Card.Title className="fs-6 mb-2">
                        {item.title}
                      </Card.Title>

                      <Card.Text className="fw-bold mb-3">
                        ₹{item.price}
                      </Card.Text>
                      <div className="d-flex justify-content-center gap-2">
                        <Link>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleAddToCart(item)}
                          >
                            <FaShoppingCart className="me-1" />
                            Cart
                          </Button>
                        </Link>

                        <Link
                          to="/produdctdetails"
                          state={{ product: item }}
                          className="text-decoration-none"
                        >
                          <Button
                            variant="outline-dark"
                            size="sm"
                            className="d-flex align-items-center"
                          >
                            <FaEye className="me-1" />
                            Detail
                          </Button>
                        </Link>

                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleAddToWishlist(item)}
                        >
                          <FaHeart className="me-1" />
                          Wishlist
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <ToastContainer />
    </>
  );
}
