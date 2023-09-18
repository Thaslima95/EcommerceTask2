import React from "react";
import Arrowback from "../../assets/Images/arrow_back.png";
import { Grid, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import "./cart.css";
import {
  CartComponentBox,
  CartComponentImgBox,
  cartTitle,
  cartText,
  cartPrice,
  CartRemove,
  CartSaveForlater,
  cartSaveforLaterTheme,
  cartRemoveTheme,
  CartQuantityBox,
} from "../../Components/CartComponent/CartComponentTheme";

export default function MobileCartPage({ cart }) {
  return (
    <CartComponentBox sx={{ border: "2px solid green", display: "flex" }}>
      <CartComponentImgBox
        sx={{ border: "3px solid red" }}
        src={cart.product_image}
      />
      <Box>
        <ThemeProvider theme={cartTitle}>
          <Typography variant="subtitle1">
            {cart && cart.product_title.substr(0, 20)}
          </Typography>
        </ThemeProvider>
        <ThemeProvider theme={cartText}>
          <Typography variant="subtitle1"></Typography>
        </ThemeProvider>
      </Box>
      <Box sx={{ top: "80px", left: "-260px", position: "relative" }}>
        {" "}
        <div className="countHandler" style={{ display: "flex" }}>
          <button> - </button>
          <input value={cart.quantity} />
          <button> + </button>
        </div>
      </Box>

      <ThemeProvider theme={cartPrice}>
        <Typography variant="subtitle1">{cart.product_price}</Typography>
      </ThemeProvider>
    </CartComponentBox>
  );
}
