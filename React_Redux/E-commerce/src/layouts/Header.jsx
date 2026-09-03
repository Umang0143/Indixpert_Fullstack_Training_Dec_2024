import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src="src\assets\logo\logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          eStore
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/Products"}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to={"/Categories"}>
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to={"/About"}>
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Cart">
              Cart{" "}
              {cartItems.length > 0 && (
                <Badge bg="danger" pill>
                  {cartItems.length}
                </Badge>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/WishList">
              Wishlist{" "}
              {wishlistItems.length > 0 && (
                <Badge bg="success" pill>
                  {wishlistItems.length}
                </Badge>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/MyAccount">
              MyAccount
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
