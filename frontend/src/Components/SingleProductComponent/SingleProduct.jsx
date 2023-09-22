import React, { useState } from "react";
import { Card } from "react-bootstrap";

import Check from "../../assets/Images/Check.png";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavTabComponent from "../NavTabComponent";
import { useParams } from "react-router-dom";

import { Grid, Typography } from "@mui/material";
import Bag from "../../assets/Images/Bag.png";

import Message from "../../assets/Images/Message.png";

import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { SingleproductBox } from "../SingleProductBox/SingleProductBox";
import { useMemo, useEffect } from "react";
import {
  singleproductHeadingtheme,
  inStockTheme,
  ratingTheme,
  reviewTheme,
  soldTheme,
  multiplepriceTheme,
  piecesTheme,
  tableHeadingTheme,
  tableContentTheme,
} from "../SingleProductBox/SingleProductBox";
import { ThemeProvider } from "@emotion/react";
import BreadCrumbComponent from "../BreadCrumbComponent/BreadCrumbComponent";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import SingleProductBox2 from "../SingleProductBox/SingleProductBox2";
import { homepageheadingtheme } from "../HomePageProductsTheme/HomePageHeadingTheme";

import {
  AddtocartButton,
  addtocartbuttontheme,
} from "../Button/AddtoCartButton";

export default function SingleProduct() {
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
  const navigate = useNavigate();
  const [singleproduct, setSingleProduct] = useState([]);
  const images = [];
  const val = useParams().id;
  const userdetails = JSON.parse(localStorage.getItem("ecommuser")) || [];

  const userid = userdetails[0].user_id;

  const handlecart = (product_id) => {
    ApiCalls.addtoCart(product_id, userid, 1)
      .then((res) => {
        console.log(singleproduct);
        navigate("/cart");
      })
      .catch((err) => console.log(err));
  };
  useMemo(() => {
    ApiCalls.getSingleProduct(val)
      .then((res) => {
        console.log(singleproduct);
        setSingleProduct(res[0]);
      })
      .catch((err) => console.log(err));
  }, [val]);
  console.log(singleproduct);
  const { product_image, product_title, product_id, product_price } =
    singleproduct;
  console.log(product_image);
  for (let i = 0; i < 5; i++) {
    images.push(product_image);
  }
  console.log(images);
  return (
    <>
      <Grid
        container
        xs={12}
        md={12}
        sx={{
          top: { md: "60px", xs: "100px" },
          position: "absolute",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{ marginBottom: "30px", marginLeft: "16px" }}
        >
          <BreadCrumbComponent />
        </Grid>

        <Grid item md={1}></Grid>
        <Grid container xs={12} md={10}>
          <Grid item xs={12} md={3} xl={4}>
            {images && images.length ? (
              <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
                sx={{
                  width: { xl: "380px", md: "280px" },
                  height: "380px",
                  display: { xs: "none", md: "block" },
                }}
              >
                {images &&
                  images.map((i, idx) => {
                    return (
                      <Box sx={{ width: "400px", height: "400px" }}>
                        <img
                          src={i}
                          key={idx}
                          style={{
                            objectFit: "contain",

                            border: "none",
                          }}
                        />
                      </Box>
                    );
                  })}
              </Carousel>
            ) : (
              <Card cover={<img src="" className="mb-3 card-image" />}></Card>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={5}
            sx={{
              paddingLeft: { md: "20px", xl: "10px" },
            }}
          >
            {windowWidth > 768 ? (
              <SingleproductBox>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ display: "flex", marginBottom: "5px" }}
                >
                  <img
                    src={Check}
                    alt=""
                    style={{ width: "14px", height: "14px" }}
                  />{" "}
                  <ThemeProvider theme={inStockTheme}>
                    <Typography
                      variant="subtitle1"
                      sx={{ marginTop: "-5px", marginLeft: "5px" }}
                    >
                      In stock
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={12} md={12} sx={{ marginBottom: "4px" }}>
                  <Box>
                    <ThemeProvider theme={singleproductHeadingtheme}>
                      <Typography variant="h6">{product_title}</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: "8px", display: "flex" }}>
                    <Rating
                      name="hover-feedback"
                      value="4.5"
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <ThemeProvider theme={ratingTheme}>
                      <Typography variant="subtitle1">9.3</Typography>
                    </ThemeProvider>
                  </Box>
                  <Box sx={{ display: "flex", marginRight: "8px" }}>
                    <img
                      src={Message}
                      alt=""
                      style={{ width: "15px", height: "15px" }}
                    />
                    <ThemeProvider theme={reviewTheme}>
                      <Typography
                        variant="subtitle1"
                        sx={{ marginLeft: "5px", marginTop: "-3px" }}
                      >
                        32 reviews
                      </Typography>
                    </ThemeProvider>
                  </Box>
                  <Box sx={{ display: "flex", marginRight: "8px" }}>
                    <img
                      src={Bag}
                      alt=""
                      style={{ width: "15px", height: "15px" }}
                    />
                    <ThemeProvider theme={soldTheme}>
                      <Typography
                        variant="subtitle1"
                        sx={{ marginLeft: "5px", marginTop: "-3px" }}
                      >
                        153 sold
                      </Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    display: "flex",
                    background: "#FFF0DF",
                    marginTop: "10px",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "10px",
                      width: "100px",
                      borderRight: "1px solid #BDC1C8",
                    }}
                  >
                    <ThemeProvider theme={multiplepriceTheme}>
                      <Typography variant="subtitle1">
                        ${product_price}
                      </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={piecesTheme}>
                      <Typography variant="subtitle1">50-100 pcs</Typography>
                    </ThemeProvider>
                  </Box>
                  <Box
                    sx={{
                      marginRight: "10px",
                      width: "100px",
                      borderRight: "1px solid #BDC1C8",
                    }}
                  >
                    <ThemeProvider theme={multiplepriceTheme}>
                      <Typography variant="subtitle1" sx={{ color: "#1C1C1C" }}>
                        ${Number(product_price) - 10}
                      </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={piecesTheme}>
                      <Typography variant="subtitle1">100-500 pcs</Typography>
                    </ThemeProvider>
                  </Box>
                  <Box sx={{ marginRight: "10px" }}>
                    <ThemeProvider theme={multiplepriceTheme}>
                      <Typography variant="subtitle1" sx={{ color: "#1C1C1C" }}>
                        ${Number(product_price) - 28}
                      </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={piecesTheme}>
                      <Typography variant="subtitle1">700+ pcs</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{ display: "flex" }}>
                  <Grid item xs={6} md={6} sx={{ marginTop: "40px" }}>
                    <ThemeProvider theme={tableHeadingTheme}>
                      <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "20px" }}
                      >
                        Price
                      </Typography>
                    </ThemeProvider>
                    {["Type", "Material", "Design"].map((e) => {
                      return (
                        <ThemeProvider theme={tableHeadingTheme}>
                          <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: "15px" }}
                          >
                            {e}
                          </Typography>
                        </ThemeProvider>
                      );
                    })}
                    {["Customization"].map((e) => {
                      return (
                        <ThemeProvider theme={tableHeadingTheme}>
                          <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: "30px", marginTop: "20px" }}
                          >
                            {e}
                          </Typography>
                        </ThemeProvider>
                      );
                    })}
                    {["Protection", "Warranty"].map((e) => {
                      return (
                        <ThemeProvider theme={tableHeadingTheme}>
                          <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: "15px" }}
                          >
                            {e}
                          </Typography>
                        </ThemeProvider>
                      );
                    })}
                  </Grid>
                  <Grid item xs={6} md={6} sx={{ marginTop: "40px" }}>
                    <ThemeProvider theme={tableContentTheme}>
                      <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "17px" }}
                      >
                        Negotiable
                      </Typography>
                    </ThemeProvider>
                    {["Classic  shoes", "Plastic material", "Modern nice"].map(
                      (e) => {
                        return (
                          <ThemeProvider theme={tableContentTheme}>
                            <Typography
                              variant="subtitle1"
                              sx={{ marginBottom: "10px" }}
                            >
                              {e}
                            </Typography>
                          </ThemeProvider>
                        );
                      }
                    )}
                    {["Customized logo and design custom packages"].map((e) => {
                      return (
                        <ThemeProvider theme={tableHeadingTheme}>
                          <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: "14px", marginTop: "20px" }}
                          >
                            {e}
                          </Typography>
                        </ThemeProvider>
                      );
                    })}
                    {["Refund Policy", "2 years full warranty "].map((e) => {
                      return (
                        <ThemeProvider theme={tableHeadingTheme}>
                          <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: "15px" }}
                          >
                            {e}
                          </Typography>
                        </ThemeProvider>
                      );
                    })}
                  </Grid>
                </Grid>
              </SingleproductBox>
            ) : (
              <SingleProductBox2 product={singleproduct} />
            )}
          </Grid>
          <Grid item xs={12} md={2} sx={{ marginBottom: "50px" }}>
            <AddtocartButton
              sx={{
                marginTop: { md: "200px", xs: "10px" },
                marginLeft: { xs: "50px", md: "10px" },
              }}
              onClick={() => handlecart(product_id)}
            >
              <ThemeProvider theme={addtocartbuttontheme}>
                <Typography>Add to Cart</Typography>
              </ThemeProvider>
            </AddtocartButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        md={12}
        sx={{
          top: { md: "750px" },
          position: "absolute",
        }}
      >
        <Grid item md={1}></Grid>
        <Grid
          container
          xs={12}
          md={8}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Grid item xs={12} md={8}>
            <NavTabComponent description={singleproduct.product_description} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        md={12}
        sx={{
          top: { md: "900px", xs: "1200px" },
          position: "relative",
        }}
      >
        <Grid item md={1}></Grid>
        <Grid container xs={12} md={11}>
          <Grid item xs={12} md={12}>
            <Grid item md={12} sx={12}>
              <ThemeProvider theme={homepageheadingtheme}>
                <Typography variant="h3">Related Products</Typography>
              </ThemeProvider>
            </Grid>
            <Grid
              container
              sx={{ display: "flex", gap: "50px" }}
              xs={12}
              md={12}
            >
              <RelatedProducts />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
