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
  const truncatedtitle = later.product_title.substr(0, 50);

  return (
    <>
      <SaveforLaterBox>
        <SaveforLaterImgBox src={later.product_image} />
        <ThemeProvider theme={saveforlaterpricetheme}>
          <Typography variant="h5" sx={{ marginTop: "20px" }}>
            ${later.product_price}
          </Typography>
        </ThemeProvider>
        <ThemeProvider theme={saveforlatertexttheme}>
          <Typography sx={{ marginTop: "20px" }}>{truncatedtitle}</Typography>
        </ThemeProvider>
        <MovetoCartButton sx={{ display: "flex", marginTop: "20px" }}>
          <img src={cartimage} alt="" />
          <ThemeProvider theme={movetocartTheme}>
            <Typography variant="subtitle1">Move to cart</Typography>
          </ThemeProvider>
        </MovetoCartButton>
      </SaveforLaterBox>
    </>
  );
}
