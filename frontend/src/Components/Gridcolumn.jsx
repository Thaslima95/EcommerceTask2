import React from "react";
import { Grid } from "@mui/material";

export default function Gridcolumn() {
  return (
    <Grid direction="column" sx={{ border: "1px solid red" }}>
      <Grid sx={{ border: "1px solid blue" }}>1</Grid>
      <Grid sx={{ border: "1px solid blue" }}>1</Grid>
    </Grid>
  );
}
