import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import exclamationIcon from "../assets/icons/Exclamation.svg";

const Header = () => {
  return (
    <>
      <Card className="border-0">
        <Card.Body className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
          <div className="d-flex">
            <div className="me-2">
              <img src={exclamationIcon} alt="Exclamation icon" />
            </div>
            <div>
              <Card.Title className="text-dark">
                Welcome to your daily dashboard view. Getting started with
                WunderUI.
              </Card.Title>
              <Card.Subtitle className="mb-2 text-info">
                Start building with your own data dashboard and insights with
                our new design system.
              </Card.Subtitle>
            </div>
          </div>
          <div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                name="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Header;
