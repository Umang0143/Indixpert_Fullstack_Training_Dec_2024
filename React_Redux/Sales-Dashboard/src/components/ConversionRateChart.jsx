import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card } from "react-bootstrap";
import { useDashboard } from "../context/DashboardContext";

const COLORS = ["#c084fc", "#8b5cf6", "#e9d5ff"];

const ConversionRateChart = () => {
  const { data } = useDashboard();

  const audience = Number(data?.cards?.audience || 0);
  const visitors = Number(data?.cards?.visitors || 1);
  const sales = Number(data?.cards?.sales || 0);

  const chartData = [
    { name: "Audience", value: audience },
    { name: "Visitors", value: visitors },
    { name: "Sales", value: sales },
  ];

  const conversionRate =
    visitors > 0 ? ((sales / visitors) * 100).toFixed(1) : "0";

  return (
    <Card className="bg-dark text-light p-3 rounded-4 mb-5">
      <h6 className="mb-3">Conversion Rate</h6>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            cx="50%"
            cy="80%"
          >
            {chartData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontSize="22"
            fontWeight="bold"
          >
            {conversionRate}%
          </text>
        </PieChart>
      </ResponsiveContainer>

      <div className="text-success small text-center mb-2">
        ▲ +3.5% <span className="text-info ms-3">latest activity</span>
      </div>

      <div className="d-flex justify-content-between mt-2">
        {chartData.map((item, index) => (
          <div
            key={item.name}
            className="px-3 py-1 rounded-pill border text-light"
            style={{ borderColor: COLORS[index % COLORS.length] }}
          >
            <span
              style={{
                background: COLORS[index % COLORS.length],
                width: 8,
                height: 8,
                display: "inline-block",
                borderRadius: "50%",
                marginRight: 6,
              }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ConversionRateChart;
