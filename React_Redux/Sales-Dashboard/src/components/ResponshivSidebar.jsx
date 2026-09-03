import { useState } from "react";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import Sidebar from "./Sidebar";
import logo from "../assets/logo/logo.svg";

const ResponsiveSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="xxl" className="d-xxl-none">
        <Container fluid>
          <Navbar.Brand className="text-white">
            <img
              src={logo}
              width="40"
              height="40"
              className="me-2 img-fluid"
              alt="logo"
            />
            <span className="fs-5 text-white">SalesInfo</span>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setShow(true)} />
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        className="d-xxl-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>

      {/* DESKTOP SIDEBAR */}
      <div className="d-none d-xxl-block">
        <div
          style={{
            minHeight: "100vh",
            background: "#212529",
            color: "#fff",
          }}
        >
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default ResponsiveSidebar;
