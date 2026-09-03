import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Facebook, Instagram, Linkedin, TwitterX, Youtube } from "react-bootstrap-icons";

const USListGroup = () => {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <h4>Social Media Traffic</h4>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Facebook className="me-1" color="#1877F2" />
                Facebook
              </div>
              <span>20%</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Instagram className="me-1" color="#1877F2" />
                Instagram
              </div>
              <span>20%</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Youtube className="me-1" color="#1877F2" />
                Youtube
              </div>
              <span>20%</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <TwitterX className="me-1" color="#1877F2" />
                TwitterX
              </div>
              <span>20%</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Linkedin className="me-1" color="#1877F2" />
                Linkedin
              </div>
              <span>20%</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default USListGroup;
