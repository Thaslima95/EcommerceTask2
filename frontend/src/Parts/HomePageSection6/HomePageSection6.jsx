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
      xs={9}
      md={12}
      sx={{
        top: { md: "1554px", xs: "1120px" },
        position: "absolute",
        border: "1px solid red",
      }}
    >
      {" "}
      <Grid item md={1}>
        1
      </Grid>
      <Grid container xs={12} md={9} sx={{ border: "1px solid green" }}>
        <Grid item md={12}>
          R
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            display: { md: "flex" },
            flexWrap: "wrap",
            marginLeft: { md: "12px" },
          }}
        >
          {products.map((p) => {
            return (
              <ProductBox>
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
