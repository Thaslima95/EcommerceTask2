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

export default function SaveForLaterComponent({ later }) {
  console.log(later);
  console.log(typeof later.product_title);
  console.log(later.product_title.substr(0, 200));
  const truncatedtitle = later.product_title.substr(0, 50);
  console.log(truncatedtitle);
  const localcart = JSON.parse(localStorage.getItem("itemcart"));
  return (
    <>
      <SaveforLaterBox>
        <SaveforLaterImgBox src={later.product_image} />
        <ThemeProvider theme={saveforlaterpricetheme}>
          <Typography variant="h5">${later.product_price}</Typography>
        </ThemeProvider>
        <ThemeProvider theme={saveforlatertexttheme}>
          <Typography>{truncatedtitle}</Typography>
        </ThemeProvider>
        <MovetoCartButton sx={{ display: "flex" }}>
          <img src={cartimage} alt="" />
          <ThemeProvider theme={movetocartTheme}>
            <Typography variant="subtitle1">Move to cart</Typography>
          </ThemeProvider>
        </MovetoCartButton>
      </SaveforLaterBox>
    </>
  );
}
