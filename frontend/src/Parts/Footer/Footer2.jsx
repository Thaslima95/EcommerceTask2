import React from "react";
import { Grid } from "@mui/material";
import logosymbol from "../../assets/Images/logo-symbol.png";
import Brand from "../../assets/Images/Brand.png";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import Twitter from "../../assets/Images/twitter3.png";
import Facebook from "../../assets/Images/facebook3.png";
import Youtube from "../../assets/Images/youtube3.png";
import Instagram from "../../assets/Images/instagram3.png";
import LinkedIn from "../../assets/Images/linkedin3.png";

// import Facebook from "../icon-facebook.svg";

import {
  FooterBox1,
  FooterImgBox,
  FooterTextBox,
  IconLayoutBoxfooter,
  footertheme1,
} from "../../Components/FooterTheme/FooterTheme";
// import Store from "../Store.png";

export default function Footer2() {
  return (
    <Grid
      container
      xs={12}
      md={12}
      sx={{
        top: { md: "2160px", xs: "1149px" },
        position: "absolute",
        display: { md: "flex" },
        border: "1px solid blue",
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={10} sx={{ border: "2px solid red" }}>
        <Grid md={3} sx={{ border: "2px solid green" }}>
          <FooterBox1>
            <FooterImgBox>
              <img src={logosymbol} alt="" />
              <img src={Brand} alt="" />
            </FooterImgBox>
            <FooterTextBox>
              <ThemeProvider theme={footertheme1}>
                <Typography variant="subtitle1">
                  Best information about the company gies here but now lorem
                  ipsum is
                </Typography>
              </ThemeProvider>
            </FooterTextBox>
            <IconLayoutBoxfooter>
              <img src={Facebook} alt="" />
              <img src={Youtube} alt="" />
              <img src={Twitter} alt="" />
            </IconLayoutBoxfooter>
          </FooterBox1>
        </Grid>
        <Grid md={1.5} sx={{ border: "2px solid green" }}>
          hello
        </Grid>
        <Grid md={1.5} sx={{ border: "2px solid green" }}>
          hello
        </Grid>
        <Grid md={1.5} sx={{ border: "2px solid green" }}>
          hello
        </Grid>
        <Grid md={1.5} sx={{ border: "2px solid green" }}>
          hello
        </Grid>
        <Grid md={2} sx={{ border: "2px solid green" }}>
          hello
        </Grid>
        <Grid container xs={12} md={12} sx={{ border: "2px solid red" }}>
          Hello
        </Grid>
      </Grid>
    </Grid>
  );
}
