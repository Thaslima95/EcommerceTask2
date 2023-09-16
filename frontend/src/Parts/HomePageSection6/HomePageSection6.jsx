import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import { Grid } from "@mui/material";
import {
  ProductBox,
  RecommendProductLayout,
  recommendedpricetheme,
  recommendedsubtexttheme,
} from "../../Components/RecommendedItemsTheme/RecommedItemsTheme";
import { homepageheadingtheme } from "../../Components/HomePageProductsTheme/HomePageHeadingTheme";
import { ThemeProvider } from "@mui/material";

export default function HomePageSection6() {
  const [products, setProducts] = useState([]);
  useMemo(() => {
    ApiCalls.getProductswithlimit(10)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid
      container
      xs={12}
      md={12}
      sx={{
        top: { md: "1554px", xs: "1149px" },
        position: "absolute",
      }}
    >
      {" "}
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={9} sx={{}}>
        <Grid item md={12} sx={{}}>
          <ThemeProvider theme={homepageheadingtheme}>
            <Typography variant="h3">Recommended items</Typography>
          </ThemeProvider>
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            display: { md: "flex", xs: "flex" },
            flexWrap: { md: "wrap", xs: "wrap" },
            marginLeft: { md: "12px" },
            border: "1px solid blue",
          }}
        >
          {products.map((p) => {
            return (
              <ProductBox sx={{ border: "1px solid red" }}>
                <RecommendProductLayout src={p.image} />
                <ThemeProvider theme={recommendedpricetheme}>
                  <Typography variant="subtitle2">${p.price}</Typography>
                </ThemeProvider>
                <ThemeProvider theme={recommendedsubtexttheme}>
                  <Typography variant="subtitle2">
                    {p.title.substring(0, 20)}
                  </Typography>
                </ThemeProvider>
              </ProductBox>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
