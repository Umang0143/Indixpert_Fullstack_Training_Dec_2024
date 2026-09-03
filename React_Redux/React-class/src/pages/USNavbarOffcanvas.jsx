import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Envelope, Globe, Phone } from "react-bootstrap-icons";

const USNavbarOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="bg-black text-white p-2">
            RB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Services</Nav.Link>
              <NavDropdown title="Company" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Infrastructure
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  Testimonials
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Button variant="primary me-2">Login</Button>
            <Button variant="outline-primary me-2">Sign up</Button>

            <Button variant="dark" onClick={handleShow}>
              Contact
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contact Us</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h3>We are here to help you!</h3>
                <hr />
                <h4>Indixpert</h4>
                <br />
                <h5 className="text-muted d-flex align-items-center"><Globe className="me-1"/> Our Offices :</h5>
                <p className="mb-0">1:Hyderabad, Telangana, India</p>
                <p>2:Gurugram, Haryana, India</p>
                <h5 className="text-muted d-flex align-items-center"><Envelope className="me-1"/>Email</h5>
                <p>Contact@indixpert.com</p>
                <h5 className="text-muted d-flex align-items-center"><Phone className="me-1"/> Phone</h5>
                <p>(+91)7788992897</p>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default USNavbarOffcanvas;
