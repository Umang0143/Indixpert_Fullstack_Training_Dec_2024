import { Card, Row, Col, } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { salesData } from "../util/SalesData";

const SalesHistory = () => {
  return (
    <>
      <Card className="shadow-sm rounded-4">
        <Card.Body>
          <h5 className="fw-semibold mb-4">Sales History</h5>

          {salesData.map((item, index) => (
            <Row key={index} className="align-items-center mb-3">
              {/* LEFT */}
              <Col>
                <div className="fw-semibold fs-3">{item.title}</div>
                <small className="text-muted fw-medium fs-5">
                  {item.country}
                </small>
              </Col>

              {/* CENTER */}
              <Col xs="auto" className="d-flex align-items-center gap-1">
                <CheckCircleFill size={16} className="text-success" />
                <small className="fw-semibold fs-6">paid</small>
              </Col>

              {/* RIGHT */}
              <Col xs="auto" className="fw-semibold text-primary fs-5">
                ${item.price.toFixed(2)}
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default SalesHistory;
