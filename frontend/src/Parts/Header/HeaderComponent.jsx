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
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function HeaderComponent() {
  const [, setSearchparam] = useSearchParams();
  return (
    <>
      <Grid
        container
        xs={9}
        md={10}
        xl={12}
        sx={{ top: "20px", position: "absolute" }}
      >
        <Grid item xs={1} md={1}></Grid>
        <Grid container xs={12} md={10}>
          <Grid item xs={12} md={2}>
            <Grid container xs={6} md={11} lg={8}>
              <Grid item md={4}>
                <img src={logosymbol} alt="" />
              </Grid>
              <Grid item md={7} sx={{ marginTop: "10px" }}>
                <img src={Brand} alt="" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={9} md={6} xl={7}>
            <Grid md={6} xl={6}>
              <InSearch
                type="search"
                placeholder="Search"
                onChange={(e) => {
                  setSearchparam({ search: e.target.value });
                }}
              />
            </Grid>
            <Grid
              md={3}
              xl={3}
              sx={{
                display: { xs: "none", md: "block" },
                border: "1px solid #0D6EFD",
                height: "40px",
              }}
            >
              <Dropdownbox />
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }} md={3}>
              <SearchButton />
            </Grid>
          </Grid>
          <Grid item xs md={4} xl={2}>
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
      <Grid container xs={9} md={12}>
        <Grid item md={1}></Grid>
        <Grid item xs={11} md={10} sx={{}}>
          <hr
            style={{
              marginTop: "80px",
              marginBottom: "0px",
              color: "#dadce0",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        xs={9}
        md={12}
        sx={{
          top: { md: "26px", xs: "80px" },
          position: "relative",
        }}
      >
        <Grid item md={1}></Grid>
        <Grid container xs={11} md={10} xl={9}>
          <HeaderNavbarStyles />
        </Grid>
        <Grid item spacing={4}></Grid>
        <Outlet />
      </Grid>
    </>
  );
}
