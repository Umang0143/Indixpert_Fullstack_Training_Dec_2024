import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ResponsiveSidebar from "../components/ResponshivSidebar";
import Filter from "../util/Filter";
import SalesHistory from "../components/SalesHistory";
import ConversionRateChart from "../components/ConversionRateChart";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row className="g-4 dashboard-bg">
          {/* SIDEBAR */}
          <Col xxl={2}>
            <ResponsiveSidebar />
          </Col>

          {/* MAIN CONTENT */}
          <Col xxl={10} className="dashboard-bg">
            <Row className="g-3">
              {/* HEADER */}
              <Col xs={12}>
                <Header />
              </Col>

              {/* FILTER */}
              <Col xs={12}>
                <Filter />
              </Col>

              {/* CONTENT + RIGHT PANEL */}
              <Col xxl={9}>
                <Outlet />
              </Col>

              <Col xxl={3}>
                <Row className="g-3">
                  <Col xs={12}>
                    <SalesHistory />
                  </Col>
                  <Col xs={12}>
                    <ConversionRateChart/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
