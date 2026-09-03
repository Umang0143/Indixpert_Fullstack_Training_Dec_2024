import { useState, useEffect } from "react";
import { Card, Table, Form, Dropdown, Badge } from "react-bootstrap";
import {
  ArrowsVertical,
  CheckCircleFill,
  CheckSquareFill,
  Star,
  StarFill,
} from "react-bootstrap-icons";
import ordersData from "../util/OrdersData";

const ProductTable = () => {
  const getToday = () => new Date().toISOString().slice(0, 10);

  const [data] = useState(ordersData);
  const [selectedDate, setSelectedDate] = useState(getToday());
  const [selectedName, setSelectedName] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let result = data.filter((item) => item.date === selectedDate);

    if (selectedName) {
      result = result.filter((item) => item.name === selectedName);
    }

    if (priceSort === "low") {
      result.sort((a, b) => a.price * a.quantity - b.price * b.quantity);
    }

    if (priceSort === "high") {
      result.sort((a, b) => b.price * b.quantity - a.price * a.quantity);
    }

    setFilteredData(result);
  }, [data, selectedDate, selectedName, priceSort]);

  const names = [...new Set(filteredData.map((i) => i.name))];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <StarFill key={i} className="text-warning me-1" />
        ) : (
          <Star key={i} className="text-warning me-1" />
        ),
      );
    }
    return stars;
  };

  return (
    <Card>
      <Card.Body style={{ height: "330px", overflow: "auto" }}>
        <Table responsive>
          <thead className="border">
            <tr>
              <th></th>

              <th>
                <Dropdown >
                  <Dropdown.Toggle
                    size="lg"
                    bsPrefix=" "
                    className="ps-0 text-info bg-white border-0 fs-6 fw-semibold d-flex align-items-center"
                  >
                    No.
                    <span className="ms-2">
                      <ArrowsVertical />
                    </span>
                  </Dropdown.Toggle>
                </Dropdown>
              </th>

              {/* NAME FILTER */}
              <th>
                <Dropdown autoClose="true">
                  <Dropdown.Toggle
                    bsPrefix=" "
                    className=" ps-0 text-info bg-white border-0 fw-semibold fs-6 d-flex align-items-center"
                  >
                    Name <ArrowsVertical className="ms-1" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSelectedName("")}>
                      All
                    </Dropdown.Item>
                    {names.map((n) => (
                      <Dropdown.Item key={n} onClick={() => setSelectedName(n)}>
                        {n}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </th>

              {/* PRICE SORT */}
              <th>
                <Dropdown autoClose="true">
                  <Dropdown.Toggle
                    bsPrefix=" "
                    className="ps-0 text-info bg-white border-0 fw-semibold fs-6 d-flex align-items-center"
                  >
                    Price <ArrowsVertical className="ms-1" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setPriceSort("low")}>
                      Low → High
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setPriceSort("high")}>
                      High → Low
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>

              <th>
                <Dropdown>
                  <Dropdown.Toggle
                    size="lg"
                    bsPrefix=" "
                    className="ps-0 text-info bg-white border-0 fs-6 fw-semibold d-flex align-items-center"
                  >
                    Status
                    <span className="ms-2">
                      <ArrowsVertical />
                    </span>
                  </Dropdown.Toggle>
                </Dropdown>
              </th>

              {/* DATE */}
              <th>
                <Dropdown autoClose="true">
                  <Dropdown.Toggle
                    size="lg"
                    bsPrefix=" "
                    className="ps-0 text-info bg-white border-0 fs-6 fw-semibold d-flex align-items-center"
                  >
                    Date
                    <span className="ms-2">
                      <ArrowsVertical />
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="p-2">
                    <Form.Control
                      type="date"
                      size="sm"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setSelectedName("");
                      }}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </th>

              <th>
                <Dropdown>
                  <Dropdown.Toggle
                    size="lg"
                    bsPrefix=" "
                    className="ps-0 text-info bg-white border-0 fs-6 fw-semibold d-flex align-items-center"
                  >
                    Rating
                    <span className="ms-2">
                      <ArrowsVertical />
                    </span>
                  </Dropdown.Toggle>
                </Dropdown>
              </th>

              <th>
                <Dropdown>
                  <Dropdown.Toggle
                    size="lg"
                    bsPrefix=" "
                    className="ps-0 text-info bg-white border-0 fs-6 fw-semibold d-flex align-items-center"
                  >
                    Details
                    <span className="ms-2">
                      <ArrowsVertical />
                    </span>
                  </Dropdown.Toggle>
                </Dropdown>
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length ? (
              filteredData.map((item) => (
                <tr key={item.id} className="border border-start-0 border-end-0">
                  <td className="border-0">
                    <CheckSquareFill size={20} />
                  </td>

                  <td className="fs-6 fw-semibold d-flex align-items-center border-0">
                    {item.id}
                    <img
                      src={item.img}
                      alt={item.name}
                      width="40"
                      height="40"
                      className="ms-3"
                    />
                  </td>

                  <td className="fs-6 fw-semibold border-0">{item.name}</td>

                  <td className="fs-6 fw-semibold border-0">
                    $ {item.price * item.quantity}
                  </td>

                  <td className="border-0">
                    <Badge className="bg-white text-info border fs-6 fw-semibold">
                      <CheckCircleFill
                        size={14}
                        className="text-success me-2 "
                      />
                      {item.status}
                    </Badge>
                  </td>

                  <td className="text-info fs-6 fw-semibold border-0">{item.date}</td>

                  <td className="border-0">
                    {renderStars(item.rating)}
                    <span className="ms-1 fs-6 fw-semibold text-muted border-0">
                      {item.rating}
                    </span>
                  </td>

                  <td className="border-0">
                    <Badge className="bg-white text-black fs-6 fw-semibold border">
                      Details
                    </Badge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-muted">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ProductTable;
