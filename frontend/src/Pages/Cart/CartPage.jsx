import React from "react";
import Box from "@mui/material/Box";
import {
  SaveforLaterBox,
  SaveforLaterImgBox,
  SaveforTextMobileBox,
} from "../../Components/SaveForLaterComponent/SaveforLaterTheme";
import Brand from "../../assets/Images/Brand.png";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import {
  CartRemove,
  CartSaveForlater,
  cartSaveforLaterTheme,
  cartRemoveTheme,
} from "../../Components/CartComponent/CartComponentTheme";
import {
  CartImg,
  carttheme,
  CartCheckoutBoxmobile,
} from "../../Components/CartTheme/CartTheme";
import Profile from "../../assets/Images/Profile.png";
import Message2 from "../../assets/Images/Message2.png";
import Heart from "../../assets/Images/Heart.png";
import Cart2 from "../../assets/Images/Cart2.png";
import { Typography } from "@mui/material";
import Arrowback from "../../assets/Images/arrow_back.png";
import { useState, useEffect } from "react";
import CartComponent from "../../Components/CartComponent/CartComponent";
import ApiCalls from "../../API/ApiCalls";
import {
  BacktoShopButton,
  RemoveAllButton,
  backtoshopbuttontheme,
  removeAllbuttontheme,
} from "../../Components/Button/BacktoShopButton";
import Back from "../../assets/Images/Back.png";
import Secure from "../../assets/Images/Group 1006.png";
import Customer from "../../assets/Images/item-feature.png";
import FreeDelivery from "../../assets/Images/item-feature (1).png";
import SaveForLaterComponent from "../../Components/SaveForLaterComponent/SaveForLaterComponent";
import Banner from "../../assets/Images/Banner.png";
import logosymbol from "../../assets/Images/logo-symbol.png";
import Twitter from "../../assets/Images/twitter3.png";
import Facebook from "../../assets/Images/facebook3.png";
import Youtube from "../../assets/Images/youtube3.png";
import LinkedIn from "../../assets/Images/linkedin3.png";
import Market from "../../assets/Images/market-button.png";
import Group from "../../assets/Images/Group.png";

import {
  FooterBox1,
  FooterImgBox,
  FooterTextBox,
  IconLayoutBoxfooter,
  footertheme1,
} from "../../Components/FooterTheme/FooterTheme";
import MobileCartPage from "./MobileCartPage";
export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
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
      <Grid container sx={{ border: "2px solid red" }} md={12} xs={10}>
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
              <Grid container sx={{ border: "2px solid green" }}>
                <Grid item md={1}></Grid>
                <Grid
                  container
                  xs={12}
                  md={7}
                  sx={{
                    border: "2px solid brown",
                    display: "block",
                  }}
                >
                  {cart.map((e) => {
                    return <CartComponent cart={e}></CartComponent>;
                  })}
                  <Box
                    sx={{
                      border: "2px solid yellow",
                      display: { md: "flex", xs: "none" },
                      justifyContent: "space-between",
                    }}
                  >
                    <BacktoShopButton sx={{ display: "flex" }}>
                      <img
                        src={Back}
                        alt=""
                        style={{
                          top: "10px",
                          position: "relative",
                          left: "10px",
                        }}
                      />
                      <ThemeProvider theme={backtoshopbuttontheme}>
                        <Typography
                          sx={{
                            top: "10px",
                            position: "relative",
                            left: "15px",
                          }}
                          variant="subtitle1"
                        >
                          Back to Shop
                        </Typography>
                      </ThemeProvider>
                    </BacktoShopButton>
                    <RemoveAllButton>
                      <ThemeProvider
                        theme={removeAllbuttontheme}
                      ></ThemeProvider>
                      <Typography variant="subtitle1">Remove all</Typography>
                    </RemoveAllButton>
                  </Box>
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
                  md={7}
                  sx={{
                    border: "2px solid green",
                  }}
                >
                  <Grid item md={4}>
                    <Box>
                      <img src={Secure} alt="" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box>
                      <img src={Customer} alt="" />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box>
                      <img src={FreeDelivery} alt="" />
                    </Box>
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
                  <Grid item md={12} sx={{ border: "2px solid red" }}>
                    <SaveForLaterComponent></SaveForLaterComponent>
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
                  <Grid item md={12} sx={{ border: "2px solid red" }}>
                    <img src={Banner} alt="" />
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
                    top: "40px",
                    position: "relative",
                  }}
                >
                  <Grid container xs={12} md={12}>
                    <Grid md={4}>
                      <FooterBox1>
                        <FooterImgBox>
                          <img src={logosymbol} alt="" />
                          <img src={Brand} alt="" />
                        </FooterImgBox>
                        <FooterTextBox
                          sx={{ marginTop: "10px", marginLeft: "10px" }}
                        >
                          <ThemeProvider theme={footertheme1}>
                            <Typography variant="subtitle1">
                              Best information about the company gies here but
                              now lorem ipsum is
                            </Typography>
                          </ThemeProvider>
                        </FooterTextBox>
                        <IconLayoutBoxfooter
                          sx={{ marginTop: "10px", marginLeft: "10px" }}
                        >
                          <img
                            src={Facebook}
                            style={{ marginRight: "5px" }}
                            alt=""
                          />
                          <img
                            src={Youtube}
                            style={{ marginRight: "5px" }}
                            alt=""
                          />
                          <img
                            src={Twitter}
                            style={{ marginRight: "5px" }}
                            alt=""
                          />
                          <img
                            src={LinkedIn}
                            style={{ marginRight: "5px" }}
                            alt=""
                          />
                          <img
                            src={Twitter}
                            style={{ marginRight: "5px" }}
                            alt=""
                          />
                        </IconLayoutBoxfooter>
                      </FooterBox1>
                    </Grid>
                    <Grid md={1.5}>
                      <Box>
                        <Typography sx={{ marginBottom: "10px" }}>
                          About us
                        </Typography>
                        <nav>
                          {["About us", "Find Store", "Category", "Blog"].map(
                            (e) => {
                              return <Typography>{e}</Typography>;
                            }
                          )}
                        </nav>
                      </Box>
                    </Grid>
                    <Grid md={1.5}>
                      <Box>
                        <Typography sx={{ marginBottom: "10px" }}>
                          About us
                        </Typography>
                        <nav>
                          {["About us", "Find Store", "Category", "Blog"].map(
                            (e) => {
                              return <Typography>{e}</Typography>;
                            }
                          )}
                        </nav>
                      </Box>
                    </Grid>
                    <Grid md={1.5}>
                      <Box>
                        <Typography sx={{ marginBottom: "10px" }}>
                          About us
                        </Typography>
                        <nav>
                          {["About us", "Find Store", "Category", "Blog"].map(
                            (e) => {
                              return <Typography>{e}</Typography>;
                            }
                          )}
                        </nav>
                      </Box>
                    </Grid>
                    <Grid md={1.5}>
                      <Box>
                        <Typography sx={{ marginBottom: "10px" }}>
                          About us
                        </Typography>
                        <nav>
                          {["About us", "Find Store", "Category", "Blog"].map(
                            (e) => {
                              return <Typography>{e}</Typography>;
                            }
                          )}
                        </nav>
                      </Box>
                    </Grid>
                    <Grid md={2}>
                      <Box>
                        <Typography sx={{ marginBottom: "10px" }}>
                          Get App
                        </Typography>
                        <img
                          src={Market}
                          style={{ marginBottom: "10px" }}
                          alt=""
                        />
                        <img src={Group} alt="" />
                      </Box>
                    </Grid>
                    <Grid container xs={12} md={12}>
                      Hello
                    </Grid>
                  </Grid>
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
                {cart.map((e) => {
                  return <MobileCartPage cart={e} />;
                })}
                <CartCheckoutBoxmobile sx={{ border: "2px solid green" }}>
                  <Grid container xs={10}>
                    <Grid item xs={6}>
                      <Typography>Items</Typography>
                      <Typography>Shipping</Typography>
                      <Typography>Tax</Typography>
                      <Typography>Total</Typography>
                    </Grid>
                    <Grid item sx={6}>
                      <Typography>$567</Typography>
                      <Typography>$67</Typography>
                      <Typography>$57</Typography>
                      <Typography>$57</Typography>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ width: "100%", marginTop: "20px" }}
                    onClick={() => handlecheckout()}
                  >
                    Check Out
                  </Button>
                </CartCheckoutBoxmobile>
                <Typography>Save for Later</Typography>
                <SaveforLaterBox sx={{ border: "2px solid red" }}>
                  <SaveforLaterImgBox />
                  <SaveforTextMobileBox></SaveforTextMobileBox>
                  <CartRemove>
                    {" "}
                    <ThemeProvider theme={cartRemoveTheme}>
                      <Typography variant="subtitle1">Move to cart</Typography>
                    </ThemeProvider>
                  </CartRemove>
                  <CartSaveForlater>
                    <ThemeProvider theme={cartSaveforLaterTheme}>
                      <Typography variant="subtitle1">Remove</Typography>
                    </ThemeProvider>
                  </CartSaveForlater>
                </SaveforLaterBox>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}
