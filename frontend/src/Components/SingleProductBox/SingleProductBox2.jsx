import React from "react";
import { SingleproductBox } from "./SingleProductBox";
import { Box, Typography, Rating, Grid } from "@mui/material";
import { singleproductHeadingtheme } from "../SingleProductBox/SingleProductBox";
import { ThemeProvider } from "@mui/material";

export default function SingleProductBox2({ product_title }) {
  return (
    <SingleproductBox>
      <Box sx={{ marginRight: "8px" }}>
        <Rating
          name="hover-feedback"
          value="4.5"
          precision={0.5}
          readOnly
          size="small"
        />
      </Box>
      <Box>
        <ThemeProvider theme={singleproductHeadingtheme}>
          <Typography>{product_title.substring(0, 20)}</Typography>
        </ThemeProvider>
      </Box>
      <Box sx={{ marginRight: "10px", display: "flex", gap: "10px" }}>
        <Typography>$67</Typography>
        <Typography>10 Pcs</Typography>
      </Box>
      <Grid item xs={12} md={12} sx={{ display: "flex" }}>
        <Grid item xs={6} md={6} sx={{ marginTop: "40px" }}>
          <Typography>Price</Typography>
          <Typography sx={{ marginTop: "10px" }}>Type</Typography>
          <Typography>Material</Typography>
          <Typography>Design</Typography>
          <Typography sx={{ marginTop: "10px" }}>custom</Typography>
          <Typography>Warranty</Typography>
        </Grid>
        <Grid item xs={6} md={6} sx={{ marginTop: "40px" }}>
          <Typography>Negotiable</Typography>
          <Typography sx={{ marginTop: "10px" }}>Type Goes Here</Typography>
          <Typography>Material Goes here</Typography>
          <Typography>Modern nice</Typography>
          <Typography sx={{ marginTop: "10px" }}>customized</Typography>
          <Typography>warranty goes here</Typography>
        </Grid>
      </Grid>
    </SingleproductBox>
  );
}
