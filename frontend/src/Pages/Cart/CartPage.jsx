import React from "react";
import Box from "@mui/material/Box";
import {
  SaveforLaterBox,
  SaveforLaterImgBox,
  saveforlatertexttheme,
  SaveforTextMobileBox,
  saveforlaterpricetheme,
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
  cartHeadingTitle,
  CartHeading,
  saveforlaterheading,
  CartHeaderImgBox,
  cartTotalheading,
  cartTotalPrice,
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
import { useNavigate } from "react-router-dom";

import {
  FooterBox1,
  FooterImgBox,
  FooterTextBox,
  IconLayoutBoxfooter,
  footertheme1,
} from "../../Components/FooterTheme/FooterTheme";
import MobileCartPage from "./MobileCartPage";
import { useMemo } from "react";
export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const [saveforlater, setSaveforlater] = useState([]);
  const discount = 53;
  const tax = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getCartDetails({ signal });
    return () => {
      controller.abort();
    };
  }, []);

  const getCartDetails = (signal) => {
    ApiCalls.getCartItems(1, { signal })
      .then((res) => setCart(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    cartTotalDetails({ signal });
    return () => {
      controller.abort();
    };
  }, []);

  const cartTotalDetails = (signal) => {
    ApiCalls.getCartTotal(1, { signal })
      .then((res) => setTotal(res[0]))
      .catch((err) => console.log(err));
  };
  console.log(total);

  useMemo(() => {
    const getsaveforlaterlist = (userid) => {
      ApiCalls.getsaveforlateritems(userid)
        .then((res) => setSaveforlater(res))
        .catch((err) => console.log(err));
    };
    getsaveforlaterlist(1);
  }, []);
  console.log(saveforlater);

  const handleBack = () => {
    window.history.back();
  };

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
    navigate("/orderplaced");
  };
  return (
    <>
      <Grid container md={12} xs={10}>
        <Grid container sx={{ marginTop: "20px" }}>
          {windowWidth > 798 ? (
            <>
              <Grid item md={1}></Grid>
              <Grid container xs={12} md={9}>
                <FooterImgBox>
                  <img src={logosymbol} alt="" />
                  <img src={Brand} alt="" />
                </FooterImgBox>
                <Grid item md={7}></Grid>
                <Grid item xs md={3}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "30px",
                    }}
                  >
                    <CartHeaderImgBox>
                      <CartImg src={Profile} alt="" />

                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">Profile</Typography>
                      </ThemeProvider>
                    </CartHeaderImgBox>
                    <CartHeaderImgBox>
                      <CartImg src={Message2} alt="" />
                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">Message</Typography>
                      </ThemeProvider>
                    </CartHeaderImgBox>

                    <CartHeaderImgBox>
                      <CartImg src={Heart} alt="" />
                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">Orders</Typography>
                      </ThemeProvider>
                    </CartHeaderImgBox>

                    <CartHeaderImgBox>
                      <CartImg src={Cart2} alt="" />
                      <ThemeProvider theme={carttheme}>
                        <Typography variant="subtitle1">My cart</Typography>
                      </ThemeProvider>
                    </CartHeaderImgBox>
                  </Box>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: "60px" }}>
                <Grid item md={1}></Grid>
                <Grid container xs={12} md={9}>
                  <CartHeading>
                    <ThemeProvider theme={cartHeadingTitle}>
                      <Typography variant="h3">
                        My cart ({cart && cart.length})
                      </Typography>
                    </ThemeProvider>
                  </CartHeading>
                </Grid>
              </Grid>
              {cart.length > 0 ? (
                <>
                  <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid
                      container
                      xs={12}
                      md={7}
                      sx={{
                        display: "block",
                      }}
                    >
                      {cart.map((e) => {
                        return (
                          <CartComponent
                            cart={e}
                            details={getCartDetails}
                            carttotal={cartTotalDetails}
                          ></CartComponent>
                        );
                      })}
                      <Grid md={10}>
                        <Box
                          sx={{
                            display: { md: "flex", xs: "none" },
                            justifyContent: "space-between",
                          }}
                        >
                          <BacktoShopButton
                            sx={{ display: "flex" }}
                            onClick={handleBack}
                          >
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
                          <RemoveAllButton sx={{ marginLeft: "-40px" }}>
                            <ThemeProvider theme={removeAllbuttontheme}>
                              <Typography variant="subtitle1">
                                Remove all
                              </Typography>
                            </ThemeProvider>
                          </RemoveAllButton>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid md={2}>
                      {" "}
                      <Grid sx={{ display: "flex" }}>
                        <Grid item xs sx={{ height: "230px" }}>
                          <Typography>Have a Coupon?</Typography>
                          <TextField
                            id="outlined-basic"
                            label="Add Coupon"
                            variant="outlined"
                            size="small"
                          />
                          <Typography
                            sx={{ top: "90px", position: "relative" }}
                          >
                            SubTotal:
                          </Typography>
                          <Typography
                            sx={{ top: "90px", position: "relative" }}
                          >
                            Discout:
                          </Typography>
                          <Typography
                            sx={{ top: "90px", position: "relative" }}
                          >
                            Tax:
                          </Typography>
                          <ThemeProvider theme={cartTotalheading}>
                            <Typography
                              variant="h5"
                              sx={{
                                top: "100px",
                                position: "relative",
                              }}
                            >
                              Total
                            </Typography>
                          </ThemeProvider>
                        </Grid>
                        <Grid item xs sx={{ height: "230px" }}>
                          <Button></Button>
                          <Button>Apply</Button>
                          <Typography
                            sx={{ top: "90px", position: "relative" }}
                          ></Typography>
                          <Typography
                            sx={{ top: "90px", position: "relative" }}
                          >
                            {total != undefined && total.total_price}
                          </Typography>
                          <Typography
                            sx={{
                              top: "90px",
                              position: "relative",
                              color: "#FA3434",
                            }}
                          >
                            -${discount}
                          </Typography>
                          <Typography
                            sx={{
                              top: "90px",
                              position: "relative",
                              color: "#00B517",
                            }}
                          >
                            +${tax}
                          </Typography>
                          <ThemeProvider theme={cartTotalPrice}>
                            <Typography
                              variant="h6"
                              sx={{
                                top: "100px",
                                position: "relative",
                              }}
                            >
                              $
                              {total != undefined &&
                                total.total_price - discount + tax}
                            </Typography>
                          </ThemeProvider>
                        </Grid>
                      </Grid>
                      <Grid xs>
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ width: "100%", marginTop: "50px" }}
                          onClick={() => handlecheckout()}
                        >
                          Check Out
                        </Button>
                        <Box sx={{ border: "2px solid red" }}>
                          <img src="" alt="" />
                          <img src="" alt="" />
                          <img src="" alt="" />
                          <img src="" alt="" />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>Cart is Empty</>
              )}
              <Grid container sx={{ marginTop: "50px" }}>
                <Grid item md={1}></Grid>
                <Grid container xs={12} md={7}>
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
              <Grid container xs sx={{ marginTop: "50px" }}>
                <Grid md={1}></Grid>
                <Grid container xs md={9}>
                  <Grid item md={12}>
                    <ThemeProvider theme={saveforlaterheading}>
                      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
                        Saved for later
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                  {saveforlater.map((e) => {
                    return (
                      <Grid item md={3}>
                        <SaveForLaterComponent
                          later={e}
                        ></SaveForLaterComponent>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: "40px" }}>
                <Grid item md={1}></Grid>
                <Grid container xs={12} md={9}>
                  <Grid item md={12}>
                    <img src={Banner} alt="" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={1}></Grid>
                <Grid
                  container
                  xs={12}
                  md={9}
                  sx={{
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
                  return (
                    <MobileCartPage
                      cart={e}
                      details={getCartDetails}
                      carttotal={cartTotalDetails}
                    />
                  );
                })}
                <CartCheckoutBoxmobile>
                  <Grid container xs={10}>
                    <Grid item xs={6}>
                      <Typography>Items</Typography>
                      <Typography>Discount</Typography>
                      <Typography>Tax</Typography>
                      <Typography>Total</Typography>
                    </Grid>
                    <Grid item sx={6}>
                      <Typography>
                        {" "}
                        ${total != undefined && total.total_price}
                      </Typography>
                      <Typography> -${discount}</Typography>
                      <Typography>-${tax}</Typography>
                      <Typography>
                        $
                        {total != undefined &&
                          total.total_price - discount - tax}
                      </Typography>
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
                <Typography>Saved for Later</Typography>
                {saveforlater.map((e) => {
                  return (
                    <SaveforLaterBox>
                      <SaveforLaterImgBox src={e.product_image} />
                      <SaveforTextMobileBox
                        sx={{ marginLeft: "110px", marginTop: "-80px" }}
                      >
                        <ThemeProvider theme={saveforlatertexttheme}>
                          <Typography variant="subtitle1">
                            {e.product_title.substr(0, 20)}
                          </Typography>
                        </ThemeProvider>
                        <ThemeProvider theme={saveforlaterpricetheme}>
                          <Typography
                            sx={{ marginTop: "-20px" }}
                            variant="subtitle1"
                          >
                            {e.product_price}
                          </Typography>
                        </ThemeProvider>
                      </SaveforTextMobileBox>
                      <CartRemove sx={{ marginTop: "100px" }}>
                        {" "}
                        <ThemeProvider theme={cartRemoveTheme}>
                          <Typography variant="subtitle1">
                            Move to cart
                          </Typography>
                        </ThemeProvider>
                      </CartRemove>
                      <CartSaveForlater>
                        <ThemeProvider theme={cartSaveforLaterTheme}>
                          <Typography variant="subtitle1">Remove</Typography>
                        </ThemeProvider>
                      </CartSaveForlater>
                    </SaveforLaterBox>
                  );
                })}
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}
