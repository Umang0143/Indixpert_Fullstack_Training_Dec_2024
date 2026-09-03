import { Card, Col, Button } from "react-bootstrap";
import { useDashboard } from "../context/DashboardContext";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import revenueCard from "../assets/icons/revenueCard.svg";
import orderCard from "../assets/icons/orderCard.svg";
import audianceCard from "../assets/icons/audianceCard-1.svg";

import moreIcon from "../assets/icons/more.svg";

import badgeRevenue from "../assets/icons/Badge.svg";
import badgeOrder from "../assets/icons/Badge-1.svg";
import badgeAudience from "../assets/icons/Badge-2.svg";

const StatCards = () => {
  const { data } = useDashboard();

  const revenue = Number(data?.cards?.revenue ?? 0);
  const orders = Number(data?.cards?.orders ?? 0);
  const audience = Number(data?.cards?.audience ?? 0);

  return (
    <>
      <Col xl={4} lg={4} md={6} sm={12}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-start">
              <img src={revenueCard} alt="revenueCard-icon" />
              <img src={moreIcon} alt="more-icon" className="mt-2" />
            </Card.Title>
            <Card.Text className="fs-5 medium">Total Revenue</Card.Text>
            <p className="display-6 fw-bold">$ {revenue.toFixed(3)}</p>
            <div>
              <img src={badgeRevenue} alt=" badgeRevenue" />
              <span className="text-info ms-2 fs-5 medium">
                activity from July 1st to July 31th{" "}
              </span>
            </div>
          </Card.Body>

          <Card.Footer>
            <Link to="#">
              <Button variant=" " className="fw-semibold fs-4">
                View Report
                <ArrowRight className="ms-3" />
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col xl={4} lg={4} md={6} sm={12}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-start">
              <img src={orderCard} alt="orderCard-icon" />
              <img src={moreIcon} alt="more-icon" className="mt-2" />
            </Card.Title>
            <Card.Text className="fs-5 medium">Product Orders</Card.Text>
            <p className="display-6 fw-bold">{orders.toFixed(3)}</p>
            <div>
              <img src={badgeOrder} alt="badgeOrder" />
              <span className="text-info ms-2 fs-5 medium">
                activity from July 1st to July 31th{" "}
              </span>
            </div>
          </Card.Body>

          <Card.Footer>
            <Link to="#">
              <Button variant=" " className="fw-semibold fs-4">
                View Report
                <ArrowRight className="ms-3" />
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col xl={4} lg={4} md={6} sm={12}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-start">
              <img src={audianceCard} alt="audianceCard-icon" />
              <img src={moreIcon} alt="more-icon" className="mt-2" />
            </Card.Title>
            <Card.Text className="fs-5 medium">Total Audience</Card.Text>
            <p className="display-6 fw-bold">{audience.toFixed(3)}</p>
            <div>
              <img src={badgeAudience} alt="badgeAudience" />
              <span className="text-info ms-2 fs-5 medium">
                activity from July 1st to July 31th{" "}
              </span>
            </div>
          </Card.Body>

          <Card.Footer>
            <Link to="#">
              <Button variant=" " className="fw-semibold fs-4">
                View Report
                <ArrowRight className="ms-3" />
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default StatCards;
