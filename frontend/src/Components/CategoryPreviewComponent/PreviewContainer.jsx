import React from "react";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import {
  PreviewBox,
  PreviewBoxImg,
  productheadingtheme,
  PreviewBoxDetails,
  productheadingpricetheme,
  PreviewTextBox,
  productheadingorderstheme,
  PreviewRatingBox,
  productheadingshippingtheme,
  productviewdetailstheme,
} from "../PreviewContainerTheme/PreviewContainerTheme";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function PreviewContainer({ category }) {
  console.log(category);
  const {
    product_title,
    product_price,
    product_description,
    product_image,
    product_id,
  } = category;

  return (
    <>
      <Grid md={12}>
        <PreviewBox sx={{ display: "flex" }}>
          <PreviewBoxImg src={product_image} />
          <PreviewBoxDetails>
            {" "}
            <ThemeProvider theme={productheadingtheme}>
              <Typography
                variant="subtitle2"
                sx={{ marginBottom: { xs: "5px", md: "15px" } }}
              >
                {product_title}
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={productheadingpricetheme}>
              <Typography
                variant="subtitle2"
                sx={{ top: { xs: "13px" }, position: "relative" }}
              >
                ${product_price}
              </Typography>
            </ThemeProvider>
            <PreviewRatingBox sx={{ display: "flex" }}>
              <Rating
                name="size-small"
                defaultValue={2}
                size="small"
                sx={{ marginRight: "5px" }}
              />
              <ThemeProvider theme={productheadingorderstheme}>
                <Typography variant="subtitle2" sx={{ marginRight: "8px" }}>
                  152 orders
                </Typography>
              </ThemeProvider>
              <ThemeProvider theme={productheadingshippingtheme}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginRight: "8px",
                    marginTop: { xs: "23px", md: "0px" },
                    marginLeft: { xs: "-163px", md: "0px" },
                  }}
                >
                  Free Shipping
                </Typography>
              </ThemeProvider>
            </PreviewRatingBox>
            <PreviewTextBox
              sx={{
                display: { md: "block", xs: "none" },
              }}
            >
              {product_description}
              <Link to={`/single/${product_id}`}>
                <ThemeProvider theme={productviewdetailstheme}>
                  <Typography variant="subtitle2">View details</Typography>
                </ThemeProvider>
              </Link>
            </PreviewTextBox>
          </PreviewBoxDetails>
        </PreviewBox>
      </Grid>
    </>
  );
}
