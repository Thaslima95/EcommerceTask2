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
import Market from "../../assets/Images/market-button.png";
import Group from "../../assets/Images/Group.png";
import { Box } from "@mui/material";

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
        top: { md: "2530px", xs: "1149px" },
        position: "absolute",
        display: { md: "flex", xs: "none" },
      }}
    >
      <Grid item md={1}></Grid>
      <Grid container xs={12} md={10}>
        <Grid md={3}>
          <FooterBox1>
            <FooterImgBox>
              <img src={logosymbol} alt="" />
              <img src={Brand} alt="" />
            </FooterImgBox>
            <FooterTextBox sx={{ marginTop: "10px", marginLeft: "10px" }}>
              <ThemeProvider theme={footertheme1}>
                <Typography variant="subtitle1">
                  Best information about the company gies here but now lorem
                  ipsum is
                </Typography>
              </ThemeProvider>
            </FooterTextBox>
            <IconLayoutBoxfooter sx={{ marginTop: "10px", marginLeft: "10px" }}>
              <img src={Facebook} style={{ marginRight: "5px" }} alt="" />
              <img src={Youtube} style={{ marginRight: "5px" }} alt="" />
              <img src={Twitter} style={{ marginRight: "5px" }} alt="" />
              <img src={LinkedIn} style={{ marginRight: "5px" }} alt="" />
              <img src={Twitter} style={{ marginRight: "5px" }} alt="" />
            </IconLayoutBoxfooter>
          </FooterBox1>
        </Grid>
        <Grid md={1.5}>
          <Box>
            <Typography sx={{ marginBottom: "10px" }}>About us</Typography>
            <nav>
              {["About us", "Find Store", "Category", "Blog"].map((e) => {
                return <Typography>{e}</Typography>;
              })}
            </nav>
          </Box>
        </Grid>
        <Grid md={1.5}>
          <Box>
            <Typography sx={{ marginBottom: "10px" }}>About us</Typography>
            <nav>
              {["About us", "Find Store", "Category", "Blog"].map((e) => {
                return <Typography>{e}</Typography>;
              })}
            </nav>
          </Box>
        </Grid>
        <Grid md={1.5}>
          <Box>
            <Typography sx={{ marginBottom: "10px" }}>About us</Typography>
            <nav>
              {["About us", "Find Store", "Category", "Blog"].map((e) => {
                return <Typography>{e}</Typography>;
              })}
            </nav>
          </Box>
        </Grid>
        <Grid md={1.5}>
          <Box>
            <Typography sx={{ marginBottom: "10px" }}>About us</Typography>
            <nav>
              {["About us", "Find Store", "Category", "Blog"].map((e) => {
                return <Typography>{e}</Typography>;
              })}
            </nav>
          </Box>
        </Grid>
        <Grid md={2}>
          <Box>
            <Typography sx={{ marginBottom: "10px" }}>Get App</Typography>
            <img src={Market} style={{ marginBottom: "10px" }} alt="" />
            <img src={Group} alt="" />
          </Box>
        </Grid>
        <Grid container xs={12} md={12}>
          Hello
        </Grid>
      </Grid>
    </Grid>
  );
}
