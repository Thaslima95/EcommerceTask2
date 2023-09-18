import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import "./cart.css";
import {
  CartComponentBox,
  CartComponentImgBox,
  cartTitle,
  cartText,
  cartPrice,
} from "../../Components/CartComponent/CartComponentTheme";

export default function MobileCartPage({ cart }) {
  const [qty, setQty] = React.useState(cart.product_quantity);

  const handleChange = (event) => {
    setQty(event.target.value);
    console.log(qty);
    ApiCalls.updateCart(1, cart.product_id, event.target.value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const removeCart = (productid, qty, userid) => {
    ApiCalls.getRemovecart(1, productid, qty)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  console.log(cart);
  console.log(qty);
  return (
    <>
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
    </>
  );
}
