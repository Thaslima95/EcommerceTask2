import { Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { homepageheadingtheme } from "../../Components/HomePageProductsTheme/HomePageHeadingTheme";
import {
  RegionImgLayout,
  SupplierRegionBox,
  supplierregiontexttheme,
  supplierurltexttheme,
} from "../../Components/RegionTheme/RegionTheme";

export default function HomePageSection8() {
  const regionarray = [
    { image: "AE", title: "Arabic Emirates", url: "shopname.ae" },
    { image: "AU", title: "Australia", url: "shopname.ae" },
    { image: "US", title: "United States", url: "shopname.ae" },
    { image: "RU", title: "Russia", url: "shopname.ae" },
    { image: "IT", title: "Italy", url: "shopname.ru" },
    { image: "DK", title: "Denmark", url: "denmark.com.dk" },
    { image: "FR", title: "France", url: "shopname.com.fr" },
    { image: "AE", title: "Arabic Emirates", url: "shopname.ae" },
    { image: "CN", title: "China", url: "shopname.ae" },
    { image: "GB", title: "Great Britain", url: "shopname.co.uk" },
  ];
  return (
    <Grid
      container
      xs={12}
      md={12}
      sx={{
        top: { md: "1834px", xs: "1149px" },
        position: "absolute",
        display: { md: "flex", xs: "none" },
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={10} sx={{}}>
        <Grid item md={12} sx={{}}>
          <ThemeProvider theme={homepageheadingtheme}>
            <Typography variant="h3">Suppliers by region</Typography>
          </ThemeProvider>
        </Grid>
        <Grid md={12} sx={{ display: "flex", flexWrap: "wrap" }}>
          {regionarray.map((e) => {
            return (
              <Grid md={2.4} sx={{ marginBottom: "10px" }}>
                <SupplierRegionBox>
                  <RegionImgLayout
                    src={`https://flagsapi.com/${e.image}/flat/32.png`}
                  />
                  <ThemeProvider theme={supplierregiontexttheme}>
                    <Typography variant="subtitel2">{e.title}</Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={supplierurltexttheme}>
                    <Typography variant="subtitle2">{e.url}</Typography>
                  </ThemeProvider>
                </SupplierRegionBox>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
