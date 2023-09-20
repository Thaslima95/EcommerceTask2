import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const mainprice = createTheme();
export const subprice = createTheme();

export const title = createTheme();
mainprice.typography.h5 = {
  styleName: "Title-h5",

  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [mainprice.breakpoints.up("md")]: {
    fontSize: "18px",
  },
};
subprice.typography.subtitle1 = {
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [subprice.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};
title.typography.subtitle1 = {
  styleName: "Text-info",

  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [title.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

export const CartComponentBox = styled("div")({
  width: "320px",
  height: "155px",
  border: "0px, 0px, 1px, 0px",
  color: "#DEE2E7",
  borderBottom: "1px solid #DEE2E7",
  "@media (min-width:600px)": {
    width: "820px",
    height: "136px",
    top: "0px",
    position: "relative",
  },
});

export const GridViewImgBox = styled("img")({
  width: "100px",
  height: "100px",

  marginTop: "20px",
  marginLeft: "45px",

  "@media (min-width:600px)": {
    width: "200px",
    height: "200px",
  },
});
export const GridViewPriceBox = styled("div")({
  width: "70px",
  height: "23px",

  "@media (min-width:600px)": {
    width: "140px",
    height: "23px",
  },
});
