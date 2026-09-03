import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useDashboard } from "../context/DashboardContext";
import { Badge, Card } from "react-bootstrap";

const Chart = () => {
  const { data } = useDashboard();

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fs-1"> Advanced Insights</p>
              <div>
                <Badge className="fs-5 fw-medium me-3">Total Views</Badge>
                <Badge className="fs-5 fw-medium">Product Sales</Badge>
              </div>
            </div>
          </Card.Title>
          <ResponsiveContainer width="100%" height={460}>
            <AreaChart data={data.chart}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                dataKey="sales"
                stroke="#8884d8"
                fill="#C686F8"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Area
                dataKey="views"
                stroke="#8571F4"
                fill="#C686F8"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Chart;
