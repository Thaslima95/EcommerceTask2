import React, { useEffect } from "react";

import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import { Grid } from "@mui/material";
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
    ApiCalls.getCategorisProductswithlimit()
      .then((res) => setSpecificCategories(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid
        container
        xs={9}
        md={12}
        sx={{ top: "592px", position: "absolute" }}
      >
        <Grid item md={1}></Grid>
        <Grid container xs={12} md={9} sx={{}}>
          <Grid item xs={4} md={3} sx={{ display: { md: "block" } }}>
            <CountDownBox>
              <ThemeProvider theme={dealstheme}>
                <Typography variant="h6">Deals and offers</Typography>
              </ThemeProvider>
              <ThemeProvider theme={dealstheme2}>
                <Typography variant="h4">Hygiene equipments</Typography>
              </ThemeProvider>
              <CountBox>
                <Counts>
                  <ThemeProvider theme={countstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      04
                    </Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={countssecondstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      Hours
                    </Typography>
                  </ThemeProvider>
                </Counts>
                <Counts>
                  {" "}
                  <ThemeProvider theme={countstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      13
                    </Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={countssecondstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      mins
                    </Typography>
                  </ThemeProvider>
                </Counts>
                <Counts>
                  {" "}
                  <ThemeProvider theme={countstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      34
                    </Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={countssecondstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      secs
                    </Typography>
                  </ThemeProvider>
                </Counts>
                <Counts>
                  {" "}
                  <ThemeProvider theme={countstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      56
                    </Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={countssecondstheme}>
                    <Typography variant="subtitle2" sx={{ marginLeft: "12px" }}>
                      mins
                    </Typography>
                  </ThemeProvider>
                </Counts>
              </CountBox>
            </CountDownBox>
          </Grid>
          <Grid item xs={4} md={9} sx={{ display: "flex" }}>
            {specificCategories.map((s) => {
              return (
                <DealProductBox>
                  <DealProductItems>
                    <DealImg src={s.image} />
                  </DealProductItems>
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
