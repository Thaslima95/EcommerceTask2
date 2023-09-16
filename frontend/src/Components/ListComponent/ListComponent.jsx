import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { categorytheme } from "../BannerTheme/BannerTheme";
import { ThemeProvider } from "@mui/material";
import { StyledLink } from "../../Components/BannerTheme/BannerTheme";

export default function ListComponent({ category }) {
  return (
    // <Col
    //   style={{
    //     // border: "1px solid green",
    //     width: "250px",
    //     height: "40px",
    //   }}
    // >
    //   <Link to={`/category/${category}`}>
    //     <Typography
    //       style={{
    //         width: "230px",
    //         height: "19px",
    //         fontSize: "16px",
    //         top: "11px",
    //         left: "10px",
    //         position: "relative",
    //         color: "black",
    //       }}
    //     >
    //       {category[0].toUpperCase() + category.slice(1)}
    //     </Typography>
    //   </Link>
    // </Col>
    <Box sx={{}}>
      <StyledLink
        to={`/category/${category.category}`}
        sx={{ textDecoration: "none" }}
      >
        <ThemeProvider theme={categorytheme}>
          <Typography variant="subtitle1">
            {category?.category[0].toUpperCase() + category?.category.slice(1)}
          </Typography>
        </ThemeProvider>
      </StyledLink>
    </Box>
  );
}
