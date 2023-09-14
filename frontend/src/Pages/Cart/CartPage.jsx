import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EcommLogo from "../../Images/EcommLogo.svg";
import { User } from "@styled-icons/remix-fill/User";
import { Message } from "@styled-icons/boxicons-regular/Message";
import Typography from "@mui/material/Typography";
import { HeartFill } from "styled-icons/bootstrap";
import { CartFill } from "styled-icons/bootstrap";
import SaveForLaterComponent from "../../Components/SaveForLaterComponent/SaveForLaterComponent";
import CartItemComponent from "../../Components/CartItemsComponent/CartItemComponent";
export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [localcart, setlocalcart] = useState([]);
  useEffect(() => {
    const datas = localStorage.getItem("itemcart") || [];
    setlocalcart(JSON.parse(datas));
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((json) => setCart(json));
  }, []);
  return (
    <>
      <Grid sx={{ flexGrow: 1 }}>
        <Grid xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              width: "100%",
              marginLeft: "50px",
            }}
          >
            {" "}
            <Box>
              <img src={EcommLogo} alt="" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              width: "80%",
              marginRight: "50px",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", gap: "30px" }}
            >
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <User
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  profile
                </Typography>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <Message
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Message
                </Typography>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <HeartFill
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Orders
                </Typography>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <CartFill
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Cart
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            top: "200px",
            position: "absolute",
            marginLeft: "50px",
          }}
          spacing={{ xs: 2, md: 1, lg: 1 }}
          columns={{ sm: 6, md: 10, xs: 6 }}
        >
          <Grid
            container
            xs={12}
            spacing={{ xs: 1, md: 1, lg: 1 }}
            columns={{ sm: 8, md: 12, xs: 8 }}
            sx={{ marginLeft: "30px" }}
          >
            <Grid>
              <Box sx={{ marginLeft: "50px" }}>
                {" "}
                <Typography>My Cart({`${localcart.length}`})</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} sx={{ margin: "0px" }}>
              {localcart.map((e) => (
                <CartItemComponent cart={e} />
              ))}
              <Grid sx={{ display: "flex" }}>
                <Grid xs item>
                  <Button variant="contained">Back to Shop</Button>
                </Grid>
                <Grid xs item sx={{ display: "flex", alignItems: "flex-end" }}>
                  Remove All
                </Grid>
              </Grid>
              <Grid sx={{ display: "flex" }}>
                <Grid xs item>
                  Item 1
                </Grid>
                <Grid xs item>
                  Item 2
                </Grid>
                <Grid xs item>
                  Item 2
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={2} sx={{}}>
              <Grid sx={{ display: "flex" }}>
                <Grid item xs sx={{ height: "230px" }}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    size="small"
                  />
                  <Typography sx={{ top: "90px", position: "relative" }}>
                    SubTotal:
                  </Typography>
                  <Typography sx={{ top: "90px", position: "relative" }}>
                    Discout:
                  </Typography>
                  <Typography sx={{ top: "90px", position: "relative" }}>
                    Tax:
                  </Typography>
                </Grid>
                <Grid item xs sx={{ height: "230px" }}>
                  <Button>Apply</Button>
                  <Typography sx={{ top: "90px", position: "relative" }}>
                    $4535
                  </Typography>
                  <Typography sx={{ top: "90px", position: "relative" }}>
                    $4643
                  </Typography>
                  <Typography sx={{ top: "90px", position: "relative" }}>
                    $53
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "100%", marginTop: "20px" }}
                >
                  Check Out
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            sx={{
              //   top: "1000px",
              //   position: "absolute",
              marginTop: "50px",
              marginLeft: "40px",
            }}
          >
            <Grid>Save for Later</Grid>
            <Grid
              sx={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {localcart.map((e) => {
                return <SaveForLaterComponent cart={e} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
