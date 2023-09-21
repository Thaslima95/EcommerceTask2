import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      <Grid md={12} sx={{ marginBottom: "30px" }}>
        <PreviewBox sx={{ display: "flex" }}>
          <PreviewBoxImg src={product_image} />
          <PreviewBoxDetails>
            {" "}
            <ThemeProvider theme={productheadingtheme}>
              <Typography
                variant="subtitle2"
                sx={{ marginBottom: { xs: "5px", md: "25px" } }}
              >
                {windowWidth > 798
                  ? product_title
                  : product_title.substr(0, 20)}
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
              <Link
                to={`/single/${product_id}`}
                style={{ textDecoration: "none" }}
              >
                <ThemeProvider theme={productviewdetailstheme}>
                  <Typography variant="subtitle2" sx={{ marginTop: "15px" }}>
                    View details
                  </Typography>
                </ThemeProvider>
              </Link>
            </PreviewTextBox>
          </PreviewBoxDetails>
        </PreviewBox>
      </Grid>
    </>
  );
}
