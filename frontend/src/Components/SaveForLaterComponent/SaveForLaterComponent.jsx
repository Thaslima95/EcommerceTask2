import React from "react";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box/Box";

import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import cartimage from "../../Images/cart.png";

export default function SaveForLaterComponent({ cart }) {
  const localcart = JSON.parse(localStorage.getItem("itemcart"));
  return (
    <>
      <Grid item xs={12} md={3} sx={{}}>
        <Card sx={{ maxWidth: 255, minHeight: 300 }}>
          <Card
            sx={{
              top: "15px",
              left: "10px",
              position: "relative",
              boxShadow: "none",
            }}
          >
            <img
              src={cart.image}
              style={{ objectFit: "contain", width: "200px", height: "200px" }}
            />
          </Card>
          <Box
            sx={{
              p: 2,
              minWidth: 190,
              display: "flex",
              marginTop: 3,

              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                color: "text.primary",

                display: "flex",
                justifyContent: "space-between",
                // marginRight: 5,
                alignItems: "center",
              }}
            >
              <Typography>
                ${cart.price}
                <span>
                  <strike>$ghb</strike>
                </span>
              </Typography>{" "}
            </Box>

            <Box
              sx={{ color: "text.primary", fontSize: 15, fontWeight: "medium" }}
            >
              {cart.title.substring(0, 40)}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="outlined">
              {" "}
              <img src={cartimage} alt="" />
              Move to cart
            </Button>
          </Box>
        </Card>
      </Grid>
    </>
  );
}
