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
import ApiCalls from "../../API/ApiCalls";

export default function MobileCartPage({ cart, details, carttotal }) {
  const [qty, setQty] = React.useState(cart.quantity);
  const result = JSON.parse(localStorage.getItem("ecommuser")) || [];
  const user_id = result[0].user_id;

  const handleadd = (quty, id) => {
    const q = quty + 1;
    ApiCalls.updateCart(user_id, id, q)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  const handleremove = (quty, id) => {
    const q = quty - 1;
    ApiCalls.updateCart(user_id, id, q)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <>
      {cart.length == 0 ? (
        <>
          <h3>Cart is Empty</h3>
        </>
      ) : (
        <CartComponentBox sx={{ border: "2px solid green", display: "flex" }}>
          <CartComponentImgBox src={cart.product_image} />
          <Box>
            <ThemeProvider theme={cartTitle}>
              <Typography variant="subtitle1">
                {cart && cart.product_title.substr(0, 20)}
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={cartPrice}>
              <Typography variant="subtitle1">${cart.product_price}</Typography>
            </ThemeProvider>
          </Box>
          <Box sx={{ top: "80px", left: "-220px", position: "relative" }}>
            {" "}
            <div className="countHandler" style={{ display: "flex" }}>
              <button
                onClick={() => handleremove(cart.quantity, cart.product_id)}
              >
                {" "}
                -{" "}
              </button>
              <input value={cart.quantity} />
              <button onClick={() => handleadd(cart.quantity, cart.product_id)}>
                {" "}
                +{" "}
              </button>
            </div>
          </Box>
        </CartComponentBox>
      )}
      <CartComponentBox sx={{ border: "2px solid green", display: "flex" }}>
        <CartComponentImgBox src={cart.product_image} />
        <Box>
          <ThemeProvider theme={cartTitle}>
            <Typography variant="subtitle1">
              {cart && cart.product_title.substr(0, 20)}
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={cartPrice}>
            <Typography variant="subtitle1">${cart.product_price}</Typography>
          </ThemeProvider>
        </Box>
        <Box sx={{ top: "80px", left: "-220px", position: "relative" }}>
          {" "}
          <div className="countHandler" style={{ display: "flex" }}>
            <button
              onClick={() => handleremove(cart.quantity, cart.product_id)}
            >
              {" "}
              -{" "}
            </button>
            <input value={cart.quantity} />
            <button onClick={() => handleadd(cart.quantity, cart.product_id)}>
              {" "}
              +{" "}
            </button>
          </div>
        </Box>
      </CartComponentBox>
    </>
  );
}
