import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Envelope } from "react-bootstrap-icons";

const USModals = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} className="d-flex align-items-center">
        <Envelope className="me-1"/>
        Subscribe
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header
          closeButton
          className="ms-3 me-3 ps-0 pe-0"
        >
          <Modal.Title id="example-custom-modal-styling-title">
            Don't miss out
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Signup for our newsletter to stay upto date.
          </p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter your email address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Subscribe
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default USModals;
