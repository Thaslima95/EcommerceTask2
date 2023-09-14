import React from "react";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";

export default function FormGroupCheckbox({ name }) {
  return (
    <FormGroup
      style={{
        width: "114.5px",
        height: "36px",
        top: "440px",
        left: "133px",
        padding: "6px 16px 6px 0px",
        position: "relative",
      }}
    >
      <FormControlLabel
        style={{
          width: "34px",
          height: "24px",
          padding: "2px 13px 2px 1px",
        }}
        control={<Checkbox />}
      />
      <Card.Text style={{ width: "70px", height: "19px" }}>
        <Typography
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left",
            color: "#1C1C1C",
          }}
        >
          {name}
        </Typography>
      </Card.Text>
    </FormGroup>
  );
}
