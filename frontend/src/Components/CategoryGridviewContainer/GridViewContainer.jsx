import React from "react";
import {
  GridViewImgBox,
  GridViewPriceBox,
  mainprice,
  subprice,
  title,
} from "./GridViewContainerTheme";
import Checkbox from "@mui/material/Checkbox";
import { Img } from "../../Components/HeaderTypography/HeaderTypography";
import Favorite from "@mui/icons-material/Favorite";
import { Rating } from "@mui/material";
import { Grid, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Heart from "../../assets/Images/Vector (4).png";
export default function GridViewContainer({ category }) {
  const {
    product_title,
    product_price,

    product_image,
    product_id,
  } = category;
  return (
    <Grid item md={4} xs={6} sm={6} sx={{ marginBottom: "50px" }}>
      <Box>
        <GridViewImgBox src={product_image} sx={{ marginBottom: "30px" }} />
        <GridViewPriceBox sx={{ display: "flex", gap: "5px" }}>
          {" "}
          <ThemeProvider theme={mainprice}>
            <Typography variant="h5">${product_price}</Typography>
          </ThemeProvider>
          <ThemeProvider theme={subprice}>
            <Typography
              variant="subtitle1"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <strike>${product_price}</strike>
            </Typography>
          </ThemeProvider>
          <Checkbox
            sx={{ marginLeft: "80px" }}
            icon={<Img src={Heart} />}
            checkedIcon={<Favorite />}
          />
        </GridViewPriceBox>

        <Rating
          name="size-small"
          defaultValue={2}
          size="small"
          sx={{ marginRight: "5px" }}
        />
        <ThemeProvider theme={title}>
          <Typography variant="subtitle1">
            {product_title.substr(0, 20)}
          </Typography>
        </ThemeProvider>
      </Box>
    </Grid>
  );
}
