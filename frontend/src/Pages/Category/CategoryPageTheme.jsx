import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const carttheme = createTheme();
export const cartTitle = createTheme();
export const cartText = createTheme();
export const cartPrice = createTheme();
export const cartSaveforLaterTheme = createTheme();
export const cartRemoveTheme = createTheme();

export const VerfiedBox = styled("div")({
  width: "164px",
  height: "36px",
  padding: " 6px, 16px, 6px, 0px",
});
export const FeaturedBox = styled("div")({
  width: "174px",
  height: "36px",
  padding: " 6px, 16px, 6px, 0px",
});
export const GroupButtonBox = styled("div")({
  width: "76px",
  height: "40px",
});

export const categorytheme1 = createTheme();
export const categorytheme2 = createTheme();
categorytheme1.typography.h6 = {
  styleName: "Title-H6",

  fontFamily: "Inter",

  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [categorytheme1.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

categorytheme2.typography.subtitle2 = {
  styleName: "Text-base",
  fontFamily: "Inter",

  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [categorytheme2.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};
