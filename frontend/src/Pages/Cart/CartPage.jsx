import React from "react";
import Box from "@mui/material/Box";
import logosymbol from "../../assets/Images/logo-symbol.png";
import Brand from "../../assets/Images/Brand.png";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { CartImg, carttheme } from "../../Components/CartTheme/CartTheme";
import Profile from "../../assets/Images/Profile.png";
import Message2 from "../../assets/Images/Message2.png";
import Heart from "../../assets/Images/Heart.png";
import Cart2 from "../../assets/Images/Cart2.png";
import { Typography } from "@mui/material";
import Arrowback from "../../assets/Images/arrow_back.png";
import { useState, useEffect } from "react";
import { FooterImgBox } from "../../Components/FooterTheme/FooterTheme";
import CartComponent from "../../Components/CartComponent/CartComponent";
import ApiCalls from "../../API/ApiCalls";

// import SaveForLaterComponent from "../../Components/SaveForLaterComponent/SaveForLaterComponent";
// import CartItemComponent from "../../Components/CartItemsComponent/CartItemComponent";
export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const carttotal = [];
  const discount = 53;
  const tax = 10;

  useEffect(() => {
    ApiCalls.getCartItems(1)
      .then((res) => setCart(res))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    ApiCalls.getCartTotal(1)
      .then((res) => setTotal(res[0]))
      .catch((err) => console.log(err));
  }, []);
  console.log(total);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handlecheckout = () => {
    ApiCalls.checkOut(1)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };
  return (
    <>
      <Grid container sx={{ border: "2px solid red" }}>
        <Grid container sx={{ border: "2px solid blue", marginTop: "20px" }}>
          {windowWidth > 798 ? (
            <>
              <Grid item md={1}></Grid>
              <Grid
                container
                xs={12}
                md={9}
                sx={{
                  border: "2px solid green",
                }}
              >
                <FooterImgBox>
                  <img src={logosymbol} alt="" />
                  <img src={Brand} alt="" />
                </FooterImgBox>
                <Grid item md={7}></Grid>
                <Grid item xs md={3} sx={{ border: "3px solid yellow" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "30px",
                      border: "2px solid green",
                    }}
                  >
                    <Box
                      style={{
                        color: "#8B96A5",
                        width: "27px",
                        height: "41px",
                        // border: "1px solid red",
                      }}
                    >
                      <CartImg src={Profile} alt="" />

                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">Profile</Typography>
                      </ThemeProvider>
                    </Box>
                    <Box
                      style={{
                        color: "#8B96A5",
                        width: "27px",
                        height: "41px",
                        // border: "1px solid red",
                      }}
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      <CartImg src={Message2} alt="" />
                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">Message</Typography>
                      </ThemeProvider>
                    </Box>
                    <Box
                      style={{
                        color: "#8B96A5",
                        width: "27px",
                        height: "41px",
                        // border: "1px solid red",
                      }}
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      <CartImg src={Heart} alt="" />
                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">Orders</Typography>
                      </ThemeProvider>
                    </Box>
                    <Box
                      style={{
                        color: "#8B96A5",
                        width: "45px",
                        height: "41px",
                      }}
                    >
                      <CartImg src={Cart2} alt="" />
                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">My cart</Typography>
                      </ThemeProvider>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid xs={12}>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <img src={Arrowback} alt="" />
                  </Box>
                  <Box>
                    <Typography>Shopping Cart</Typography>
                  </Box>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
        <Grid container sx={{ border: "2px solid blue" }}>
          <Grid item md={1}></Grid>
          <Grid
            container
            xs={12}
            md={9}
            sx={{
              border: "2px solid green",
            }}
          >
            MY Cart (3)
          </Grid>
        </Grid>
        <Grid container sx={{ border: "2px solid blue" }}>
          <Grid item md={1}></Grid>
          <Grid
            container
            xs={12}
            md={7}
            sx={{
              border: "2px solid red",
            }}
          >
            {cart.map((e) => {
              return <CartComponent cart={e}></CartComponent>;
            })}
          </Grid>
          <Grid md={2} sx={{ border: "1px solid blue" }}>
            {" "}
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
                <Typography sx={{ top: "90px", position: "relative" }}>
                  Total:
                </Typography>
              </Grid>
              <Grid item xs sx={{ height: "230px" }}>
                <Button>Apply</Button>
                <Typography
                  sx={{ top: "90px", position: "relative" }}
                ></Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  {/* ${total?.total.total_price} */}
                  {total && total.total_price}
                </Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  -${discount}
                </Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  -${tax}
                </Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  ${total.total_price - discount - tax}
                </Typography>
              </Grid>
            </Grid>
            <Grid xs>
              <Button
                variant="contained"
                color="success"
                sx={{ width: "100%", marginTop: "20px" }}
                onClick={() => handlecheckout()}
              >
                Check Out
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ border: "2px solid blue" }}>
          <Grid item md={1}></Grid>
          <Grid
            container
            xs={12}
            md={9}
            sx={{
              border: "2px solid green",
            }}
          >
            initems
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
