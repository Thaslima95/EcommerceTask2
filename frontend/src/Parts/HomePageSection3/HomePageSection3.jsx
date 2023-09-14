import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
// import Interior from ".../../assets/Images/interior.jpg";

import { Link } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import {
  PriceLayout,
  ProductBox,
  headingtheme,
  pricetheme,
  PriceImgLayout,
} from "../../Components/HomePageProductsTheme/HomePageProductsTheme";

export default function HomePageSection3() {
  const [value, setValue] = useState([]);
  useMemo(() => {
    ApiCalls.getCategorisProductswithlimit(8)
      .then((res) => setValue(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid
      container
      xs={9}
      md={12}
      sx={{ top: "852px", position: "absolute", border: "1px solid red" }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={9} sx={{ border: "1px solid green" }}>
        <Grid item xs={4} md={3} sx={{ display: { md: "block" } }}>
          1
        </Grid>
        <Grid item xs={4} md={9} sx={{ display: "flex" }}>
          {value.map((e) => {
            return (
              <ProductBox sx={{ border: "1px solid red" }}>
                {" "}
                <ThemeProvider theme={headingtheme}>
                  <Typography
                    variant="subtitle2"
                    sx={{ top: "20px", left: "16px", position: "relative" }}
                  >
                    {e.category}
                  </Typography>
                </ThemeProvider>
                <PriceLayout>
                  <ThemeProvider theme={pricetheme}>
                    <Typography
                      variant="subtitle2"
                      sx={{ top: "30px", left: "16px", position: "relative" }}
                    >
                      From <br />
                      {e.price}
                    </Typography>
                  </ThemeProvider>
                </PriceLayout>
                <PriceImgLayout
                  sx={{ top: "-15px", left: "85px", position: "relative" }}
                  src={e.image}
                />
              </ProductBox>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
