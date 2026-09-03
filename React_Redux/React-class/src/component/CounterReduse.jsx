import { useReducer, useState } from "react";

const CounterReduse = () => {
  const [massage, setMassage] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        if (state < 20) {
          setMassage("");
          return state + 1; // Maximum 20
        } else {
          setMassage("Max Limit Reached! (20)");
        }
        break;

      case "Decrement":
        if (state > 0) {
          setMassage("");
          return state - 1; // Minimum 0
        } else {
          setMassage("Min Limit Reached! (0)");
        }
        break;

      case "Reset":
        setMassage("");
        return 0; // Reset 0

      default:
        return state;
    }
    return state;
  };
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1 className="text-white">useReduse Method</h1>
      <div className="card">
        <div className="card-body">
          <h4> Current value of counter = {counter}</h4>
          <hr />
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => dispatch({ type: "Increment" })}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-success me-2"
            onClick={() => dispatch({ type: "Decrement" })}
          >
            Decrement
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch({ type: "Reset" })}
          >
            Reset
          </button>
          <p style={{ color: "red", marginTop: "15px", fontWeight: "bold" }}>
            {massage}
          </p>
        </div>
      </div>
    </>
  );
};

export default CounterReduse;
