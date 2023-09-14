import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import ListComponent from "../../Components/ListComponent/ListComponent";
import { Box } from "@mui/material";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import { Grid } from "@mui/material";
import Avatar from "../../assets/Images/Avatar.png";

import { ThemeProvider } from "@mui/material";
import {
  BannerImg,
  buttontheme,
} from "../../Components/BannerTheme/BannerTheme";
import { LearnMoreButton } from "../../Components/BannerTheme/BannerTheme";
import {
  bannertheme1,
  bannertheme2,
} from "../../Components/BannerTheme/BannerTheme";
import {
  LoginButton,
  JoinNowButton,
  loginbuttontheme,
  adbuttontheme,
} from "../../Components/Button/JoinNowButton";
import { joinbuttontheme } from "../../Components/Button/JoinNowButton";
export default function HomePageSection1() {
  const [categories, setCategories] = useState([]);

  useMemo(() => {
    ApiCalls.getCategoris()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      container
      xs={9}
      md={12}
      sx={{ top: { md: "102px", xs: "60px" }, position: "absolute" }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={9} sx={{}}>
        <Grid item xs={4} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          {categories.map((c) => {
            return <ListComponent category={c} />;
          })}
        </Grid>
        <Grid item xs={4} md={7} sx={{}}>
          <BannerImg component="div">
            <ThemeProvider theme={bannertheme1}>
              <Typography variant="subtitle1">Latest trending</Typography>
            </ThemeProvider>
            <ThemeProvider theme={bannertheme2}>
              <Typography variant="h1">Electronic items</Typography>
            </ThemeProvider>
            <LearnMoreButton>
              <ThemeProvider theme={buttontheme}>
                <Typography variant="subtitle1">Learn More</Typography>
              </ThemeProvider>
            </LearnMoreButton>
          </BannerImg>
        </Grid>
        <Grid item xs={4} md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              width: "195px",
              height: "150px",

              marginBottom: "8px",
            }}
          >
            <Box>
              <img
                src={Avatar}
                alt=""
                style={{
                  top: "10px",
                  left: "1100px",
                  position: "absolute",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "112px",
                height: "38px",
                left: "1153px",
                position: "absolute",
                top: "10px",
              }}
            >
              <Typography
                style={{
                  //styleName: Text-base;
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "19px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Hi, user <br />
                let’s get stated
              </Typography>
            </Box>
            <JoinNowButton>
              <ThemeProvider theme={joinbuttontheme}>
                <Typography variant="subtitle1">Join now</Typography>
              </ThemeProvider>
            </JoinNowButton>
            <LoginButton>
              <ThemeProvider theme={loginbuttontheme}>
                <Typography variant="subtitle1">Log in</Typography>
              </ThemeProvider>
            </LoginButton>
          </Box>
          <Box
            sx={{
              width: "195",
              height: "95px",

              background: "#F38332",
              borderRadius: "6px",
              marginBottom: "8px",
            }}
          >
            <ThemeProvider theme={adbuttontheme}>
              <Typography
                variant="subtitle1"
                sx={{ left: "1106px", position: "absolute", top: "175px" }}
              >
                Get US $10 off <br />
                with a new <br /> supplier
              </Typography>
            </ThemeProvider>
          </Box>
          <Box
            sx={{
              width: "195",
              height: "95px",

              background: "#55BDC3",
              borderRadius: "8px",
            }}
          >
            <ThemeProvider theme={adbuttontheme}>
              <Typography
                variant="subtitle1"
                sx={{ left: "1106px", position: "absolute", top: "275px" }}
              >
                Send quotes with <br /> supplier <br /> preferences
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
      <Grid item spacing={3}></Grid>
    </Grid>
  );
}
