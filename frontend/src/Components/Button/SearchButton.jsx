import React from "react";
import { Button } from "@mui/material";

export default function SearchButton() {
  return (
    <Button
      variant="primary"
      style={{
        background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
        color: "White",
        width: "100px",
        height: "40px",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
      }}
    >
      Search
    </Button>
  );
}
