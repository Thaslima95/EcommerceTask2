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
import { singleproductHeadingtheme } from "../SingleProductBox/SingleProductBox";
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
  const localcart = JSON.parse(localStorage.getItem("itemcart")) || [];

  const handlecart = (product_id) => {
    ApiCalls.addtoCart(product_id, 1, 1)
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
  const { product_image, product_title, product_id } = singleproduct;
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
          top: { md: "200px" },
          position: "absolute",
        }}
      >
        <Grid item md={1}></Grid>
        <Grid container xs={12} md={10}>
          <Grid item xs={12} md={4}>
            {images && images.length ? (
              <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
                sx={{
                  width: "380px",
                  height: "380px",
                  display: { xs: "none", md: "block" },
                }}
              >
                {images &&
                  images.map((i, idx) => {
                    return (
                      <Box
                        sx={{
                          height: "200px",
                        }}
                      >
                        <img
                          src={i}
                          key={idx}
                          width="200px"
                          style={{
                            objectFit: "contain",
                            width: "200px",
                            height: "200px",
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
          <Grid item xs={12} md={5}>
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
                    style={{ width: "24px", height: "24px" }}
                  />{" "}
                  <span>In Stock</span>
                </Grid>
                <Grid item xs={12} md={12} sx={{ marginBottom: "5px" }}>
                  <Box>
                    <ThemeProvider theme={singleproductHeadingtheme}>
                      <Typography>{product_title}</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: "8px" }}>
                    <Rating
                      name="hover-feedback"
                      value="4.5"
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </Box>
                  <Box sx={{ display: "flex", marginRight: "8px" }}>
                    {" "}
                    <img
                      src={Message}
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography>Review</Typography>
                  </Box>
                  <Box sx={{ display: "flex", marginRight: "8px" }}>
                    <img src={Bag} alt="" />
                    <Typography>Sold</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: "10px" }}>
                    <Typography>$67</Typography>
                    <Typography>10 Pcs</Typography>
                  </Box>
                  <Box sx={{ marginRight: "10px" }}>
                    {" "}
                    <Typography>$67</Typography>
                    <Typography>10 Pcs</Typography>
                  </Box>
                  <Box sx={{ marginRight: "10px" }}>
                    <Typography>$67</Typography>
                    <Typography>10 Pcs</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{ display: "flex" }}>
                  <Grid item xs={6} md={6} sx={{ marginTop: "40px" }}>
                    <Typography>Price</Typography>
                    <Typography sx={{ marginTop: "10px" }}>Type</Typography>
                    <Typography>Material</Typography>
                    <Typography>Design</Typography>
                    <Typography sx={{ marginTop: "10px" }}>custom</Typography>
                    <Typography>Warranty</Typography>
                  </Grid>
                  <Grid item xs={6} md={6} sx={{ marginTop: "40px" }}>
                    <Typography>Negotiable</Typography>
                    <Typography sx={{ marginTop: "10px" }}>
                      Type Goes Here
                    </Typography>
                    <Typography>Material Goes here</Typography>
                    <Typography>Modern nice</Typography>
                    <Typography sx={{ marginTop: "10px" }}>
                      customized
                    </Typography>
                    <Typography>warranty goes here</Typography>
                  </Grid>
                </Grid>
              </SingleproductBox>
            ) : (
              <SingleProductBox2 product_title={product_title} />
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
          top: { md: "900px", xs: "1000px" },
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
