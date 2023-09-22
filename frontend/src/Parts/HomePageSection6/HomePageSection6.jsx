import React from "react";

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
  return (
    <Grid
      container
      xs={12}
      md={12}
      sx={{
        top: { md: "1854px", xs: "1280px" },
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
          container
          md={12}
          sx={{
            marginLeft: { md: "12px" },
          }}
        >
          {windowWidth > 798
            ? products.map((p) => {
                return (
                  <Grid item md={4} xl={3}>
                    <ProductBox>
                      <RecommendProductLayout src={p.product_image} />
                      <ThemeProvider theme={recommendedpricetheme}>
                        <Typography variant="subtitle2">
                          ${p.product_price}
                        </Typography>
                      </ThemeProvider>
                      <ThemeProvider theme={recommendedsubtexttheme}>
                        <Typography variant="subtitle2">
                          {p.product_title.substring(0, 20)}
                        </Typography>
                      </ThemeProvider>
                    </ProductBox>
                  </Grid>
                );
              })
            : products.slice(0, 4).map((p) => {
                return (
                  <Grid item md={3}>
                    <ProductBox>
                      <RecommendProductLayout src={p.product_image} />
                      <ThemeProvider theme={recommendedpricetheme}>
                        <Typography variant="subtitle2">
                          ${p.product_price}
                        </Typography>
                      </ThemeProvider>
                      <ThemeProvider theme={recommendedsubtexttheme}>
                        <Typography variant="subtitle2">
                          {p.product_title.substring(0, 20)}
                        </Typography>
                      </ThemeProvider>
                    </ProductBox>
                  </Grid>
                );
              })}
        </Grid>
      </Grid>
    </Grid>
  );
}
