import { Row, Col } from "react-bootstrap";
import StatCards from "../components/StatCards";
import Chart from "../components/Chart";
import SalesTable from "../components/SalesTable";

const Overview = () => {
  return (
    <>
      <Row className="g-3 mb-4">
        <StatCards />
      </Row>

      <Row>
        <Col><Chart /></Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <SalesTable />
        </Col>
      </Row>
    </>
  );
};

export default Overview;

