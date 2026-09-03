import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const USCards = () => {
  return (
    <div className="d-flex gap-2">
      <Card style={{ width: "18rem" }}>
        <Card.Title className="mt-2 ps-3">Bluetooth Headphones</Card.Title>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ="
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>₹1389<span className="ms-2 text-decoration-line-through">MRP ₹2,999</span></p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="outline-primary" size="sm">Add To Cart</Button>
          <Button variant="primary" size="sm">Buy Now</Button>
        </Card.Footer>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Title className="mt-2 ps-3">Gaming Headphones</Card.Title>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ="
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>₹1399<span className="ms-2 text-decoration-line-through">MRP ₹3,929</span></p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="outline-primary" size="sm">Add To Cart</Button>
          <Button variant="primary" size="sm">Buy Now</Button>
        </Card.Footer>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Title className="mt-2 ps-3">Boat Rockerz 460</Card.Title>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ="
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>₹1389<span className="ms-2 text-decoration-line-through">MRP ₹2,999</span></p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="outline-primary" size="sm">Add To Cart</Button>
          <Button variant="primary" size="sm">Buy Now</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default USCards;
