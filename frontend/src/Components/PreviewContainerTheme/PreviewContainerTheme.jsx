import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const productheadingtheme = createTheme();
// export const pricetheme = createTheme();
export const productheadingpricetheme = createTheme();
export const productheadingorderstheme = createTheme();
export const productheadingshippingtheme = createTheme();
export const productviewdetailstheme = createTheme();

export const PreviewBox = styled("div")({
  width: "300px",
  height: "114px",

  "@media (min-width:600px)": {
    width: "920px",
    height: "230px",
  },
});
export const PreviewTextBox = styled("div")({
  top: "55px",
  position: "relative",
  "@media (min-width:600px)": {
    width: "70%",
    height: "75px",
  },
});
export const PreviewRatingBox = styled("div")({
  width: "196px",
  height: "17px",
  top: "15px",
  position: "relative",
  "@media (min-width:600px)": {
    width: "344px",
    height: "19px",
    top: "35px",
    position: "relative",
  },
});

export const PreviewBoxImg = styled("img")({
  width: "98px",
  height: "98px",
  top: "10px",
  left: "10px",
  position: "relative",
  "@media (min-width:600px)": {
    width: "210px",
    height: "210px",
  },
});

export const PreviewBoxDetails = styled("div")({
  width: "150px",
  height: "98px",
  top: "10px",
  left: "20px",
  position: "relative",
  "@media (min-width:600px)": {
    width: "680px",
    height: "210px",
  },
});

export const PreviewBoxPriceDetails = styled("div")({
  width: "52px",
  height: "19px",

  "@media (min-width:600px)": {
    width: "162px",
    height: "28px",
  },
});

productheadingpricetheme.typography.subtitle2 = {
  fontSize: "16px",
  top: "120px",
  position: "relative",

  [productheadingpricetheme.breakpoints.up("md")]: {
    styleName: "Title-H4",
    top: "120px",
    position: "relative",
    fontSize: "20px",

    fontFamily: "Inter",

    fontWeight: "600",
    lineHeight: "28px",
    letterSpacing: "0px",
    textAlign: "left",
  },
};

productheadingtheme.typography.subtitle2 = {
  width: "184px",
  height: "19px",
  fontSize: "13px",

  [productheadingtheme.breakpoints.up("md")]: {
    fontSize: "16px",
    width: "395px",
    height: "22px",

    styleName: "Text-title",

    fontFamily: "Inter",

    fontWeight: "500",
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  },
};

productheadingorderstheme.typography.subtitle2 = {
  width: "66px",
  height: "16px",
  fontSize: "13px",
  styleName: "Text-base",

  lineHeight: "15.73px",

  [productheadingorderstheme.breakpoints.up("md")]: {
    width: "81px",
    height: "19px",
    styleName: "Title-H4",

    fontSize: "16px",

    fontFamily: "Inter",

    fontWeight: "400",
    lineHeight: "19px",
    letterSpacing: "0px",
    textAlign: "left",
  },
};

productheadingshippingtheme.typography.subtitle2 = {
  width: "85px",
  height: "16px",

  fontSize: "13px",
  styleName: "Text-small",

  lineHeight: "15.73px",
  color: "#00B517",

  [productheadingshippingtheme.breakpoints.up("md")]: {
    width: "104px",
    height: "19px",
    styleName: "Title-base",

    fontSize: "16px",

    fontFamily: "Inter",

    fontWeight: "400",
    lineHeight: "19px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#00B517",
  },
};

productviewdetailstheme.typography.subtitle2 = {
  // width: "85px",
  height: "16px",

  fontSize: "100%",
  styleName: "Text-small",

  lineHeight: "15.73px",

  [productviewdetailstheme.breakpoints.up("md")]: {
    // width: "94px",
    height: "19px",
    styleName: "Title-base",
    color: "#0D6EFD",
    fontSize: "100%",

    fontFamily: "Inter",

    fontWeight: "400",
    lineHeight: "19px",
    letterSpacing: "0px",
    textAlign: "left",
  },
};
