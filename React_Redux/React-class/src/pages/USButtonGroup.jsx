import React from "react";
import { useState } from "react";
import { TextCenter, TextLeft, TextRight } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"

const USButtonGroup = () => {
  const [align, setAlign] = useState("left");
  const getTextStyle = () => {
    return {
      textAlign: align,
    };
  };
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary d-flex align-items-center" onClick={() => setAlign("left")}><TextLeft className="me-2"/>Left</Button>
        <Button variant="secondary d-flex align-items-center" onClick={() => setAlign("center")}><TextCenter className="me-2"/>Middle</Button>
        <Button variant="secondary d-flex align-items-center" onClick={() => setAlign("right")}><TextRight className="me-2"/>Right</Button>
      </ButtonGroup>
      <h3 className="mt-3 border border-primary p-2" style={getTextStyle()}>
        Here, the actions of the above buttons will be reflected
      </h3>
    </div>
  );
};

export default USButtonGroup;
