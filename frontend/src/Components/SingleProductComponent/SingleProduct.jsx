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
import { Button } from "@mui/material";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import BreadCrumbComponent from "../BreadCrumbComponent/BreadCrumbComponent";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

export default function SingleProduct() {
  const navigate = useNavigate();
  const [singleproduct, setSingleProduct] = useState([]);
  const images = [];
  const val = useParams().id;
  const localcart = JSON.parse(localStorage.getItem("itemcart")) || [];

  const handlecart = () => {
    localStorage.setItem(
      "itemcart",
      JSON.stringify([...localcart, singleproduct])
    );
    navigate("/cart2");
  };

  useMemo(() => {
    ApiCalls.getSingleProduct(val)
      .then((res) => setSingleProduct(res))
      .catch((err) => console.log(err));
  }, [val]);
  const { image } = singleproduct;
  console.log(image);
  for (let i = 0; i < 5; i++) {
    images.push(image);
  }

  return (
    <>
      <Grid
        xs
        container
        direction="column"
        sx={{
          top: "206px",

          position: "absolute",
        }}
      >
        <Grid item sx={{ marginLeft: "80px" }}>
          <BreadCrumbComponent />
        </Grid>
        <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid item xs={12} md={4} sx={{}}>
            {images && images.length ? (
              <Carousel showArrows={true} autoPlay infiniteLoop>
                {images &&
                  images.map((i, idx) => {
                    return (
                      <div style={{ height: "200px" }}>
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
                      </div>
                    );
                  })}
              </Carousel>
            ) : (
              <Card cover={<img src="" className="mb-3 card-image" />}></Card>
            )}
          </Grid>
          <Grid item xs={12} md={6} sx={{}}>
            <Grid item xs={12} md={12} sx={{ display: "flex" }}>
              <img src={Check} alt="" /> <span>In Stock</span>
            </Grid>
            <Grid item xs={12} md={12} sx={{}}>
              <Box>
                <Typography>
                  Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ display: "flex" }}>
              <Box>
                <Rating
                  name="hover-feedback"
                  value="4.5"
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <img src={Message} alt="" />
                <Typography>Review</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
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
                <Typography sx={{ marginTop: "10px" }}>customized</Typography>
                <Typography>warranty goes here</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={1} sx={{ margin: "auto" }}>
            <Button variant="contained" onClick={handlecart}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
        <Grid item sx={{}}>
          <Grid item xs={12} md={8}>
            <NavTabComponent description={singleproduct.description} />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
        <Grid item sx={{ marginTop: "20px" }}>
          <RelatedProducts />
        </Grid>
      </Grid>
    </>
  );
}
