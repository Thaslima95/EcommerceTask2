import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { Button } from "react-bootstrap";
function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([500, 3000]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlepricerange = () => {};

  return (
    <Box sx={{ width: 100, top: "10px", left: "10px", position: "relative" }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={500}
        max={3000}
      />
      <Button>Apply</Button>
    </Box>
  );
}
