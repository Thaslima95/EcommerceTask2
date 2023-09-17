import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const productheadingtheme = createTheme();
// export const pricetheme = createTheme();
export const relatedproducttexttheme = createTheme();
export const relatedproductpricetheme = createTheme();

export const RelatedProdcutsBox = styled("div")({
  width: "138px",
  height: "200px",
  padding: "0px, 0px, 2px, 0px",

  "@media (min-width:600px)": {
    width: "172px",
    height: "254px",
  },
});

export const RelatedProdcutsImgBox = styled("img")({
  width: "125px",
  height: "125px",
  "@media (min-width:600px)": {
    width: "172px",
    height: "172px",
    borderRadius: "6px",
  },
});

export const RelatedProdcutsTextBox = styled("div")({
  "@media (min-width:600px)": {
    width: "142px",
    height: "66px",
  },
});

relatedproducttexttheme.typography.subtitle2 = {
  width: "142px",
  height: "38px",
  fontSize: "16px",
  top: "59px",
  position: "relative",
  color: "#505050",

  [relatedproducttexttheme.breakpoints.up("md")]: {
    width: "142px",
    height: "38px",
    styleName: "Text-base",
    top: "40px",
    position: "relative",
    fontSize: "16px",

    fontFamily: "Inter",

    fontWeight: "600",
    lineHeight: "28px",
    letterSpacing: "0px",
    textAlign: "left",
  },
};

relatedproductpricetheme.typography.subtitle2 = {
  width: "116px",
  height: "19px",
  fontSize: "16px",

  color: "#8B96A5",

  [relatedproductpricetheme.breakpoints.up("md")]: {
    width: "116px",
    height: "19px",
    styleName: "Text-base",

    fontSize: "16px",

    fontFamily: "Inter",

    fontWeight: "600",
    lineHeight: "28px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#8B96A5",
  },
};
