import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const headingtheme = createTheme();
export const pricetheme = createTheme();

export const ProductBox = styled("div")({
  width: "223px",
  height: "127px",
});

headingtheme.typography.subtitle2 = {
  width: "138px",
  height: "19px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [headingtheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

pricetheme.typography.subtitle2 = {
  //styleName: Text-small;

  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#8B96A5",

  [pricetheme.breakpoints.up("md")]: {
    fontSize: "13px",
  },
};

export const PriceLayout = styled("div")({
  width: "97.9532699584961px",
  height: "32px",
});

export const PriceImgLayout = styled("img")({
  width: "82px",
  height: "82px",
});

export const DecorImgLayout = styled("img")({
  width: "280px",
  height: "257px",
  border: "1px solid #FFFFFF",
});
