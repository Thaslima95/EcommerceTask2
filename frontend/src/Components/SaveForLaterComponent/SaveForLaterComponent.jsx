import React from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material";
import cartimage from "../../assets/Images/cart.png";
import {
  SaveforLaterBox,
  saveforlaterpricetheme,
  saveforlatertexttheme,
  MovetoCartButton,
  movetocartTheme,
  SaveforLaterImgBox,
} from "./SaveforLaterTheme";

export default function SaveForLaterComponent({ cart }) {
  const localcart = JSON.parse(localStorage.getItem("itemcart"));
  return (
    <>
      <SaveforLaterBox sx={{ border: "1px solid green" }}>
        <SaveforLaterImgBox />
        <ThemeProvider theme={saveforlaterpricetheme}>
          <Typography>$99.50</Typography>
        </ThemeProvider>
        <ThemeProvider theme={saveforlatertexttheme}>
          <Typography>GoPro HERO6 4K Action Camera - Black</Typography>
        </ThemeProvider>
        <MovetoCartButton sx={{ display: "flex" }}>
          <img src={cartimage} alt="" />
          <ThemeProvider theme={movetocartTheme}>
            <Typography>Move to cart</Typography>
          </ThemeProvider>
        </MovetoCartButton>
      </SaveforLaterBox>
    </>
  );
}
