import React, { useEffect } from "react";

import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import { Grid, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import {
  CountDownBox,
  dealstheme,
  dealstheme2,
  Counts,
  CountBox,
  countstheme,
  countssecondstheme,
  DealProductBox,
  DealProductItems,
  dealproductname,
  DealLayout,
  dealproductsale,
  DealImg,
} from "../../Components/CountDownBox/CountDown";
export default function HomePageSection2() {
  const [specificCategories, setSpecificCategories] = useState([]);

  useMemo(() => {
    ApiCalls.getCategorisProductswithlimit(5)
      .then((res) => setSpecificCategories(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(specificCategories);
  return (
    <>
      <Grid
        container
        xs={12}
        md={12}
        sx={{
          top: { md: "592px", xs: "280px" },
          position: "absolute",
        }}
      >
        <Grid item md={1}></Grid>
        <Grid
          container
          xs={12}
          md={9}
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: {
                xs: "flex",
                md: "block",
                flexDirection: { xs: "column", md: "row" },
              },
            }}
          >
            <CountDownBox sx={{ display: { xs: "flex", md: "block" } }}>
              <Box>
                <ThemeProvider theme={dealstheme}>
                  <Typography variant="h6">Deals and offers</Typography>
                </ThemeProvider>
                <ThemeProvider theme={dealstheme2}>
                  <Typography variant="h4">Hygiene equipments</Typography>
                </ThemeProvider>
              </Box>
              <Box>
                <CountBox
                  sx={{
                    top: { xs: "-10px", md: "10px" },
                    left: { xs: "-10px", md: "10px" },
                    position: { xs: "relative" },
                  }}
                >
                  <Counts>
                    <ThemeProvider theme={countstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px" }}
                      >
                        04
                      </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={countssecondstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px", marginTop: "5px" }}
                      >
                        Days
                      </Typography>
                    </ThemeProvider>
                  </Counts>
                  <Counts>
                    {" "}
                    <ThemeProvider theme={countstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px" }}
                      >
                        13
                      </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={countssecondstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px", marginTop: "5px" }}
                      >
                        Hour
                      </Typography>
                    </ThemeProvider>
                  </Counts>
                  <Counts>
                    {" "}
                    <ThemeProvider theme={countstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px" }}
                      >
                        34
                      </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={countssecondstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px", marginTop: "5px" }}
                      >
                        Min
                      </Typography>
                    </ThemeProvider>
                  </Counts>
                  <Counts>
                    {" "}
                    <ThemeProvider theme={countstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px" }}
                      >
                        56
                      </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={countssecondstheme}>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginLeft: "12px", marginTop: "5px" }}
                      >
                        Sec
                      </Typography>
                    </ThemeProvider>
                  </Counts>
                </CountBox>
              </Box>
            </CountDownBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: "flex",

              overflowX: "hidden",
              gap: "20px",
            }}
          >
            {specificCategories.map((s) => {
              return (
                <DealProductBox>
                  <Link to={`/single/${s.product_id}`}>
                    <DealProductItems>
                      {console.log(s.image)}
                      <DealImg src={s.product_image} />
                    </DealProductItems>
                  </Link>
                  <ThemeProvider theme={dealproductname}>
                    <Typography variant="subtitle2">{s.category}</Typography>
                  </ThemeProvider>
                  <DealLayout>
                    <ThemeProvider theme={dealproductsale}>
                      <Typography variant="subtitle2">-25%</Typography>
                    </ThemeProvider>
                  </DealLayout>
                </DealProductBox>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
