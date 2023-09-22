import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const headingtheme = createTheme();
export const pricetheme = createTheme();
export const mobileheadingtheme = createTheme();

export const ProductBox = styled("div")({
  width: "230px",
  height: "127px",
});

mobileheadingtheme.typography.subtitle2 = {
  styleName: "Title-h5",
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [mobileheadingtheme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
};

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
  width: "72px",
  height: "72px",
});

export const DecorImgLayout = styled("img")({
  width: "100%",
  height: "257px",
  border: "1px solid #FFFFFF",
});
