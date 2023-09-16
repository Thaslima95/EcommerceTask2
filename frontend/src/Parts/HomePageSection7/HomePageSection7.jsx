import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { homepageheadingtheme } from "../../Components/HomePageProductsTheme/HomePageHeadingTheme";

import Two from "../../assets/Images/2.jpg";
import Three from "../../assets/Images/3.jpg";
import Four from "../../assets/Images/4.jpg";
import Five from "../../assets/Images/5.jpg";
import {
  ServiceBox,
  ServiceImgLayout,
  servicetheme,
  IconLayout,
} from "../../Components/ServicesTheme/ServicesTheme";

export default function HomePageSection7() {
  const servicearray = [
    { image: Two, text: "Source from Industry Hubs", icon: "icon" },
    { image: Three, text: "Customize Your Products", icon: "icon" },
    {
      image: Four,
      text: "Fast, reliable shipping by ocean or air",
      icon: "icong",
    },
    { image: Five, text: "Product monitoring and inspection", icon: "icong" },
  ];
  return (
    <Grid
      container
      xs={12}
      md={12}
      sx={{
        top: { md: "1554px", xs: "1149px" },
        position: "absolute",
        display: { md: "flex", xs: "none" },
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={10} sx={{}}>
        <Grid item md={12} sx={{}}>
          <ThemeProvider theme={homepageheadingtheme}>
            <Typography variant="h3">Our Services</Typography>
          </ThemeProvider>
        </Grid>
        <Grid md={12} sx={{ display: "flex" }}>
          {servicearray.map((e) => {
            return (
              <Grid md={3}>
                <ServiceBox>
                  <ServiceImgLayout src={e.image} />
                  <ThemeProvider theme={servicetheme}>
                    <Typography variant="subtitle2">{e.text}</Typography>
                  </ThemeProvider>
                  <IconLayout></IconLayout>
                </ServiceBox>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
