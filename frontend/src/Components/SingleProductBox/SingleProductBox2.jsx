import React from "react";
import { SingleproductBox } from "./SingleProductBox";
import { Box, Typography, Rating, Grid } from "@mui/material";
import Bag from "../../assets/Images/Bag.png";

import Message from "../../assets/Images/Message.png";
import {
  singleproductHeadingtheme,
  ratingTheme,
  reviewTheme,
  soldTheme,
  multiplepriceTheme,
  piecesTheme,
  tableHeadingTheme,
  tableContentTheme,
} from "../SingleProductBox/SingleProductBox";
import { ThemeProvider } from "@mui/material";

export default function SingleProductBox2({ product }) {
  const { product_title, product_price } = product;
  return (
    <SingleproductBox>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginRight: "8px", display: "flex" }}>
          <Rating
            name="hover-feedback"
            value="4.5"
            precision={0.5}
            readOnly
            size="small"
          />
        </Box>
        <Box sx={{ display: "flex", marginRight: "8px" }}>
          <img src={Message} alt="" style={{ width: "15px", height: "15px" }} />
          <ThemeProvider theme={reviewTheme}>
            <Typography
              variant="subtitle1"
              sx={{ marginLeft: "5px", marginTop: "-3px" }}
            >
              32 reviews
            </Typography>
          </ThemeProvider>
        </Box>
        <Box sx={{ display: "flex", marginRight: "8px" }}>
          <img src={Bag} alt="" style={{ width: "15px", height: "15px" }} />
          <ThemeProvider theme={soldTheme}>
            <Typography
              variant="subtitle1"
              sx={{ marginLeft: "5px", marginTop: "-3px" }}
            >
              153 sold
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>
      <Box>
        <ThemeProvider theme={singleproductHeadingtheme}>
          <Typography>{product_title.substring(0, 20)}</Typography>
        </ThemeProvider>
      </Box>
      <Box
        sx={{
          marginRight: "10px",
          width: "150px",
          borderRight: "1px solid #BDC1C8",
          display: "flex",
        }}
      >
        <ThemeProvider theme={multiplepriceTheme}>
          <Typography variant="subtitle1">${product_price}</Typography>
        </ThemeProvider>
        <ThemeProvider theme={piecesTheme}>
          <Typography variant="subtitle1">(50-100 pcs)</Typography>
        </ThemeProvider>
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
