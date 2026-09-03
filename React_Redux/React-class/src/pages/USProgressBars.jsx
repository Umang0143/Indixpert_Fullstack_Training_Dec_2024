import { useReducer } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const USProgressBars = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        if (state < 100) {
          return state + 5;
        }
        break;

      case "Decrement":
        if (state > 5) {
          return state - 5;
        }
        break;

      default:
        return state;
    }
    return state;
  };
  const [counter, dispatch] = useReducer(reducer, 5);

  return (
    <div>
      <div>
        <div>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: "Increment" })}
          >
            Progress + 5%
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: "Decrement" })}
          >
            Progress - 5%
          </button>
        </div>

        <h4 className="mt-4">Completed {counter}%</h4>
        <ProgressBar striped animated now={counter} label={`${counter}%`} />
        <ProgressBar
          striped animated
          variant="danger"
          className="mt-2"
          now={counter}
          label={`${counter}%`}
          visuallyHidden
          style={{ height: "10px" }}
        />
      </div>

      <div>
        <Card className="mt-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Boostrap Dashboard Application</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Web Development
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Button variant="primary mb-2" size="sm">
              In Progress
            </Button>
            <ProgressBar now={5} />

            <Card.Footer className="mt-2">
              <Row>
                <Col md={6}>
                  Due Date: <br /> <span>1 Jan, 2022</span>
                </Col>
                <Col  md={6}>
                  Budget: <br /> <span>$123,000</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default USProgressBars;
