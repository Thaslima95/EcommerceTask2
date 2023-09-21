import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const singleproductHeadingtheme = createTheme();
export const inStockTheme = createTheme();
export const ratingTheme = createTheme();
export const reviewTheme = createTheme();
export const soldTheme = createTheme();
export const multiplepriceTheme = createTheme();
export const piecesTheme = createTheme();
export const tableHeadingTheme = createTheme();
export const tableContentTheme = createTheme();

export const SingleproductBox = styled("div")({
  width: "300px",
  height: "386px",

  "@media (min-width:600px)": {
    width: "410px",
    height: "514px",
  },
});

singleproductHeadingtheme.typography.h6 = {
  width: "384px",
  height: "56px",

  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19.3px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [singleproductHeadingtheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

inStockTheme.typography.subtitle1 = {
  styleName: "Text normal",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#00B517",

  [inStockTheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

ratingTheme.typography.subtitle1 = {
  styleName: "Text -base",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#FF9017",

  [ratingTheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

reviewTheme.typography.subtitle1 = {
  styleName: "Text -base",
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "19.36px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#787A80",

  [reviewTheme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
};

soldTheme.typography.subtitle1 = {
  styleName: "Text -base",
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "19.36px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#787A80",

  [soldTheme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
};

multiplepriceTheme.typography.subtitle1 = {
  styleName: "Text -h5",
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#FA3434",

  [multiplepriceTheme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
};

piecesTheme.typography.subtitle1 = {
  styleName: "Text-small",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#606060",

  [piecesTheme.breakpoints.up("md")]: {
    fontSize: "13px",
  },
};

tableHeadingTheme.typography.subtitle1 = {
  styleName: "Text-small",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#8B96A5",

  [tableHeadingTheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

tableContentTheme.typography.subtitle1 = {
  styleName: "Text-small",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  textAlign: "left",
  color: "#505050",

  [tableContentTheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};
