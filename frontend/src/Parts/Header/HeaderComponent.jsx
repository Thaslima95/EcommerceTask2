import React from "react";
import { Grid } from "@mui/material";
import logosymbol from "../../assets/Images/logo-symbol.png";
import Brand from "../../assets/Images/Brand.png";
import Dropdownbox from "../../Components/Dropdown/Dropdownbox";
import { Box } from "@mui/material";
import SearchButton from "../../Components/Button/SearchButton";
import { Typography } from "@mui/material";
import Profile from "../../assets/Images/Profile.png";
import Message2 from "../../assets/Images/Message2.png";
import Heart from "../../assets/Images/Heart.png";
import Cart2 from "../../assets/Images/Cart2.png";
import "./Header.css";
import { theme } from "../../Components/HeaderTypography/HeaderTypography";
import { ThemeProvider } from "@mui/material";
import { Img } from "../../Components/HeaderTypography/HeaderTypography";
import { InSearch } from "../../Components/HeaderTypography/HeaderTypography";
import HeaderNavbarStyles from "../../Components/NavbarComponents/HeaderNavbar";
import CountryFlag4 from "../../Components/CountryFlagDropDownBox/CountryFlag4";
import { Outlet } from "react-router-dom";
export default function HeaderComponent() {
  return (
    <>
      <Grid
        container
        xs={9}
        md={12}
        sx={{ top: "20px", position: "absolute", border: "1px solid red" }}
      >
        <Grid item xs={1} md={1}></Grid>
        <Grid container xs={12} md={10} sx={{}}>
          <Grid item xs={4} md={2} sx={{}}>
            <Grid>
              <img src={logosymbol} alt="" />
              <img
                src={Brand}
                alt=""
                style={{ top: "-8px", position: "relative" }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={9}
            md={6}
            sx={{
              display: "flex",
              border: "1px solid  #0D6EFD",
              height: "40px",
              borderRadius: "5px",
            }}
          >
            <InSearch type="search" placeholder="Search" />

            <Grid sx={{ display: { xs: "none", md: "block" } }}>
              <Dropdownbox />
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }}>
              <SearchButton />
            </Grid>
          </Grid>
          <Grid item xs md={3} sx={{}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "30px",
                marginTop: "8px",
              }}
            >
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <Img src={Profile} alt="" />

                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle1">Profile</Typography>
                </ThemeProvider>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Img src={Message2} alt="" />
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle1">Message</Typography>
                </ThemeProvider>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Img src={Heart} alt="" />
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle1">Orders</Typography>
                </ThemeProvider>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "45px",
                  height: "41px",
                }}
              >
                <Img src={Cart2} alt="" />
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle1">My cart</Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item spacing={4}></Grid>
      </Grid>
      <Grid
        container
        xs={9}
        md={12}
        sx={{ top: "86px", position: "relative", border: "1px solid green" }}
      >
        <Grid item md={1}>
          item 1
        </Grid>
        <Grid container xs={12} md={10} sx={{ border: "2px solid red" }}>
          <HeaderNavbarStyles />
        </Grid>
        <Grid item spacing={4}>
          <CountryFlag4 />
        </Grid>
        <Outlet />
      </Grid>
    </>
  );
}
