import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Card } from "react-bootstrap";
import { useState } from "react";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import {
  RelatedProdcutsBox,
  RelatedProdcutsImgBox,
  RelatedProdcutsTextBox,
  relatedproducttexttheme,
  relatedproductpricetheme,
} from "../RelatedProductsTheme/RelatedProductsTheme";
import { Grid, Typography } from "@mui/material";
import { homepageheadingtheme } from "../HomePageProductsTheme/HomePageHeadingTheme";
import { ThemeProvider } from "@mui/material";

export default function RelatedProducts() {
  const [products, setProducts] = useState([]);

  useMemo(() => {
    ApiCalls.getCategorisProductswithlimit(6)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {products.map((e) => {
        return (
          <RelatedProdcutsBox>
            <RelatedProdcutsImgBox src={e.product_image} />
            <RelatedProdcutsTextBox>
              {" "}
              <ThemeProvider theme={relatedproducttexttheme}>
                <Typography>{e.product_title.substring(0, 20)}</Typography>
              </ThemeProvider>
              <ThemeProvider theme={relatedproductpricetheme}>
                <Typography>${e.product_price}</Typography>
              </ThemeProvider>
            </RelatedProdcutsTextBox>
          </RelatedProdcutsBox>
        );
      })}
    </>
  );
}
