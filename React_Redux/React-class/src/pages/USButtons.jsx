import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import {
  Pencil,
  TypeBold,
  TypeItalic,
  TypeStrikethrough,
  TypeUnderline,
} from "react-bootstrap-icons";

const USButtons = () => {
  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);

  const getTextStyle = () => {
    return {
      fontWeight: value.includes(1) ? "bold" : "normal",
      fontStyle: value.includes(2) ? "italic" : "normal",
      textDecoration: `${value.includes(3) ? "underline" : ""} ${
        value.includes(4) ? "line-through" : ""
      }`.trim(),
    };
  };

  return (
    <div>
      <h1>Button Styles</h1>
      <Button variant="primary me-2">Normal Button</Button>
      <Button variant="primary me-2">
        <Pencil className="mx-2" />
        Edit Record
      </Button>
      <Button variant="outline-primary me-2">Outline Button</Button>
      <Button variant="primary" disabled>
        Disabled Button
      </Button>
      <br />
      <br />

      <h1>Button Types</h1>
      <Button href="#" className="me-2">
        Link
      </Button>
      <Button className="me-2">Button</Button>
      <Button as="input" type="button" value="Input" className="me-2" />
      <Button as="input" type="submit" value="Submit" className="me-2" />
      <Button as="input" type="reset" value="Reset" />
      <br />
      <br />

      <h1>Toggle Buttons</h1>
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton id="tbg-btn-1" value={1}>
          <TypeBold />
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={2}>
          <TypeItalic />
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value={3}>
          <TypeUnderline />
        </ToggleButton>
        <ToggleButton id="tbg-btn-4" value={4}>
          <TypeStrikethrough />
        </ToggleButton>
      </ToggleButtonGroup>
      <h3 className="mt-3" style={getTextStyle()}>
        Here, the actions of the above buttons will be reflected
      </h3>
    </div>
  );
};

export default USButtons;
