import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [massage, setMassage] = useState("");

  const Increment = () => {
    if (counter < 20) {
      setCounter(counter + 1); // Maximum 20

      if (massage) setMassage("");
    } else {
      setMassage("Max Limit Reached!");
    }
  };

  const Decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1); // Minimum 0

      if (massage) setMassage("");
    } else {
      setMassage("Min Limit Reached!");
    }
  };

  const Reset = () => {
    return setCounter(0), setMassage(""); // Reset 0
  };

  return (
    <>
      <h1 className="text-white">useState Method</h1>
      <div className="card">
        <div className="card-body">
          <h4> Current value of counter = {counter}</h4>
          <hr />
          <button className="btn btn-outline-primary me-2" onClick={Increment}>
            Increment
          </button>
          <button className="btn btn-outline-success me-2" onClick={Decrement}>
            Decrement
          </button>
          <button className="btn btn-outline-danger" onClick={Reset}>
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

export default Counter;
