import React from "react";

import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Tech from "../../assets/Images/tech.jpg";
import {
  RemoveAllButton,
  removeAllbuttontheme,
} from "../../Components/Button/BacktoShopButton";
import ArrowFoward from "../../assets/Images/arrow_forward.png";
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
  mobileheadingtheme,
  DecorImgLayout,
} from "../../Components/HomePageProductsTheme/HomePageProductsTheme";

export default function HomePageSection4() {
  const [value, setValue] = useState([]);
  useMemo(() => {
    ApiCalls.getCategorisProductswithlimit(8)
      .then((res) => setValue(res))
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
        top: { md: "1100px", xs: "810px" },
        position: "absolute",
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={9} sx={{}}>
        <Grid item xs={4} md={3} sx={{ display: { md: "block", xs: "none" } }}>
          <DecorImgLayout src={Tech} />
        </Grid>
        <Grid item sx={{ display: { md: "none", xs: "block" } }}>
          <ThemeProvider
            theme={mobileheadingtheme}
            sx={{ display: { md: "none" } }}
          >
            <Typography variant="subtitle2">Electronics</Typography>
          </ThemeProvider>
        </Grid>
        <Grid container xs={12} md={9} xl={9}>
          {windowWidth > 798
            ? value.map((e) => {
                return (
                  <Grid item md={3} xs={6}>
                    <ProductBox>
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
                            From <br />
                            USD {e.product_price}
                          </Typography>
                        </ThemeProvider>
                      </PriceLayout>
                      <PriceImgLayout
                        sx={{
                          top: { md: "-15px", xs: "-45px" },
                          left: { md: "30%", lg: "40%", xl: "50%" },
                          position: "relative",
                        }}
                        src={e.product_image}
                      />
                    </ProductBox>
                  </Grid>
                );
              })
            : value.slice(0, 2).map((e) => {
                return (
                  <Grid item md={3} xs={6}>
                    <ProductBox>
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
                            From <br />
                            USD {e.product_price}
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
                  </Grid>
                );
              })}
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: { md: "none", xs: "flex" },
            marginTop: "20px",
          }}
        >
          <Link
            to={`/category/${"allproducts"}`}
            style={{ textDecoration: "none" }}
          >
            <RemoveAllButton sx={{ marginTop: "5px", display: "flex" }}>
              <ThemeProvider theme={removeAllbuttontheme}>
                <Typography variant="subtitle1">Source now</Typography>
              </ThemeProvider>
              <img src={ArrowFoward} alt="" />
            </RemoveAllButton>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
