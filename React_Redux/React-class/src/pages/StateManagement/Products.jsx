import ProductsData from "../../Data/ProductsJson";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { useStore } from "../../context/StoreProvider";
import { IoHeart, IoCart } from 'react-icons/io5';
import { Link } from "react-router-dom";

export default function Product() {

    const { addToWishlist, addToCart, wishlist, cart } = useStore();
    
    return (

        <div className="container mt-4">
            <Row className="mb-4 sticky-top bg-white py-3 shadow-sm">
                <Col className="d-flex justify-content-end gap-3">

                    <Button variant="outline-danger" className="position-relative d-flex align-items-center">
                        <IoHeart size={22} className="me-1" /><Link to="/wishlist">Wiislist</Link>
                        {wishlist?.length >=0 && (
                            <Badge pill bg="danger" className="ms-2">
                                {wishlist.length}
                            </Badge>
                        )}
                    </Button>

                    <Button variant="success" className="position-relative d-flex align-items-center">
                        <IoCart size={22} className="me-1" /> <Link to="/cart">Cart</Link>
                        {cart?.length > 0 && (
                            <Badge pill bg="warning" text="dark" className="ms-2">
                                {cart.length}
                            </Badge>
                        )}
                    </Button>
                </Col>
            </Row>

            <Row>
                {ProductsData.map(product => (
                    <Col sm={4} key={product.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={product.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <div className="d-flex justify-content-between mt-3">
                                    <Button variant="outline-danger" onClick={() => addToWishlist(product)}>
                                        <IoHeart />
                                    </Button>
                                    <Button variant="success" onClick={() => addToCart(product)}>
                                        Add to Cart <IoCart className="ms-1" />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}