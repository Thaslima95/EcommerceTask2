import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Grid } from "@mui/material";
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
} from "./CartComponentTheme";
import { ThemeProvider } from "@mui/material";
import { Typography, Box } from "@mui/material";
import ApiCalls from "../../API/ApiCalls";

export default function CartComponent({ cart, details, carttotal }) {
  const [qty, setQty] = React.useState(cart.product_quantity);
  const result = JSON.parse(localStorage.getItem("ecommuser")) || [];
  const user_id = result[0].user_id;

  const handleChange = (event) => {
    setQty(event.target.value);
    console.log(qty);
    ApiCalls.updateCart(user_id, cart.product_id, event.target.value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    details();
    carttotal();
  };

  const removeCart = (productid, qty, userid) => {
    ApiCalls.removefromcart(user_id, productid, qty)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    details();
    carttotal();
  };

  const handlesaveforlater = (productid, quantity, userid) => {
    ApiCalls.saveforlater(userid, productid, quantity)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  console.log(cart);
  console.log(qty);
  return (
    <>
      <Grid container md={12} sx={{ marginBottom: "30px" }}>
        <Grid item md={2}>
          <CartComponentImgBox src={cart.product_image} />
        </Grid>
        <Grid item md={6}>
          <Box>
            <ThemeProvider theme={cartTitle}>
              <Typography variant="subtitle1">{cart.product_title}</Typography>
            </ThemeProvider>
            <CartRemove>
              <ThemeProvider theme={cartRemoveTheme}>
                <Typography
                  onClick={() => removeCart(cart.product_id, cart.quantity, 1)}
                  variant="subtitle1"
                >
                  Remove
                </Typography>
              </ThemeProvider>
            </CartRemove>
            <CartSaveForlater>
              <ThemeProvider theme={cartSaveforLaterTheme}>
                <Typography
                  variant="subtitle1"
                  onClick={() =>
                    handlesaveforlater(cart.product_id, cart.quantity, user_id)
                  }
                >
                  Save for Later
                </Typography>
              </ThemeProvider>
            </CartSaveForlater>
          </Box>
        </Grid>
        <Grid item md={3}>
          <ThemeProvider theme={cartPrice}>
            <Typography variant="subtitle1">${cart.product_price}</Typography>
          </ThemeProvider>
          <CartQuantityBox>
            <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
              <InputLabel id="demo-select-small-label">
                QTY:{cart.quantity}
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={qty}
                label="QTY:"
                onChange={handleChange}
              >
                <MenuItem value={1}>QTY:1</MenuItem>
                <MenuItem value={2}>QTY:2</MenuItem>
                <MenuItem value={3}>QTY:3</MenuItem>
                <MenuItem value={4}>QTY:4</MenuItem>
                <MenuItem value={5}>QTY:5</MenuItem>
                <MenuItem value={6}>QTY:6</MenuItem>
              </Select>
            </FormControl>
          </CartQuantityBox>
        </Grid>
      </Grid>
    </>
  );
}
