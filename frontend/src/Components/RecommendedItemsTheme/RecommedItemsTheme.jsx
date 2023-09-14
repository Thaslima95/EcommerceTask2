import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const recommendedpricetheme = createTheme();
export const recommendedsubtexttheme = createTheme();

export const ProductBox = styled("div")({
  width: "220px",
  height: "310px",
});

recommendedpricetheme.typography.subtitle2 = {
  //styleName: Text-small;
  width: "65.53px",
  height: "21.24px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
  top: "10px",
  position: "relative",

  [recommendedpricetheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

recommendedsubtexttheme.typography.subtitle2 = {
  //styleName: Text-small;
  width: "186px",
  height: "53px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.2px",
  textAlign: "left",
  color: "#8B96A5",

  [recommendedsubtexttheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

export const RecommendProductLayout = styled("img")({
  width: "200px",
  height: "200px",
  top: "9px",
  left: "10px",
  position: "relative",
});
