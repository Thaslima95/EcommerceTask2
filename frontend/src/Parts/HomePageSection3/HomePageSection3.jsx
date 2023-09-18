import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import InteriorImg from "../../assets/Images/left-aside.png";

import { Link } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import {
  DecorImgLayout,
  PriceLayout,
  ProductBox,
  headingtheme,
  pricetheme,
  PriceImgLayout,
  mobileheadingtheme,
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
      xs={12}
      md={12}
      sx={{
        top: { md: "852px", xs: "600px" },
        position: "absolute",
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={9} sx={{}}>
        <Grid item xs={4} md={3} sx={{ display: { md: "block", xs: "none" } }}>
          <DecorImgLayout src={InteriorImg} />
        </Grid>
        <Grid item sx={{ display: { md: "none", xs: "block" } }}>
          <ThemeProvider
            theme={mobileheadingtheme}
            sx={{ display: { md: "none" } }}
          >
            <Typography variant="subtitle2">Home and Outdoor</Typography>
          </ThemeProvider>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            display: { md: "flex", xs: "flex" },
            overflowX: { xs: "hidden", md: "flow" },
            overflowY: { md: "hidden" },
          }}
        >
          {value.map((e) => {
            return (
              <ProductBox sx={{}}>
                {" "}
                <ThemeProvider theme={headingtheme}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      top: { md: "20px", xs: "96px" },
                      left: { md: "16px" },
                      position: "relative",
                    }}
                  >
                    {e.category}
                  </Typography>
                </ThemeProvider>
                <PriceLayout>
                  <ThemeProvider theme={pricetheme}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        top: { md: "30px", xs: "96px" },
                        left: { md: "16px" },
                        position: "relative",
                      }}
                    >
                      From {e.product_price}
                    </Typography>
                  </ThemeProvider>
                </PriceLayout>
                <PriceImgLayout
                  sx={{
                    top: { md: "-15px", xs: "-45px" },
                    left: { md: "85px" },
                    position: "relative",
                  }}
                  src={e.product_image}
                />
              </ProductBox>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
