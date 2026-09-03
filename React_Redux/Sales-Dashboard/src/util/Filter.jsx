import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useDashboard } from "../context/DashboardContext";
import { Calendar3, Pencil } from "react-bootstrap-icons";

const Filter = () => {
  const { activeFilter, setActiveFilter } = useDashboard();

  return (
    <>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup
          className="me-3 bg-white border d-flex flex-wrap"
          aria-label="First group"
        >
          <Button variant=" " className="text-black">
            <Pencil className="me-2" />
            Custom
          </Button>
          <Button
            variant=" "
            onClick={() => setActiveFilter("24h")}
            className={activeFilter === "24h" ? "text-dark" : "text-info"}
          >
            24 Hours
          </Button>
          <Button
            variant=" "
            onClick={() => setActiveFilter("7d")}
            className={activeFilter === "7d" ? "text-dark" : "text-info"}
          >
            7 Days
          </Button>
          <Button
            variant=" "
            onClick={() => setActiveFilter("30d")}
            className={activeFilter === "30d" ? "text-dark" : "text-info"}
          >
            30 Days
          </Button>
          <Button
            variant=" "
            onClick={() => setActiveFilter("1y")}
            className={activeFilter === "1y" ? "text-dark" : "text-info"}
          >
            1 Year
          </Button>
        </ButtonGroup>

        <Button variant=" " className="me-3 bg-white">
          Select dates <Calendar3 />
        </Button>

        <Dropdown className="bg-white">
          <Dropdown.Toggle variant=" " className="text-black">
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => setActiveFilter("24h")}
              className={activeFilter === "24h" ? "text-dark" : ""}
            >
              24 Hours
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setActiveFilter("7d")}
              className={activeFilter === "7d" ? "text-dark" : ""}
            >
              7 Days
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setActiveFilter("30d")}
              className={activeFilter === "30d" ? "text-dark" : ""}
            >
              30 Days
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setActiveFilter("1y")}
              className={activeFilter === "1y" ? "text-dark" : ""}
            >
              1 Year
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    </>
  );
};

export default Filter;
