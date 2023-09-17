import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const carttheme = createTheme();
export const cartTitle = createTheme();
export const cartText = createTheme();
export const cartPrice = createTheme();
export const cartSaveforLaterTheme = createTheme();
export const cartRemoveTheme = createTheme();

export const theme2 = createTheme();
theme2.typography.subtitle1 = {
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
  marginRight: "18px",

  "@media (min-width:600px)": {},
  [theme2.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

carttheme.typography.subtitle1 = {
  color: "#8B96A5",
  fontFamily: "Inter",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "15px",
  letterSpacing: "0px",
  textAlign: "center",
  marginLeft: "-4px",
  top: "26px",
  position: "relative",
  "@media (min-width:600px)": {
    top: "0px",
    position: "relative",
    fontSize: "8px",
  },
  [carttheme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
};

export const CartComponentBox = styled("div")({
  width: "360px",
  height: "165px",
  border: "0px, 0px, 1px, 0px",
  color: "#DEE2E7",
  borderBottom: "1px solid #DEE2E7",
  //   top: "10px",
  //   position: "relative",
  "@media (min-width:600px)": {
    width: "840px",
    height: "136px",
    top: "0px",
    position: "relative",
  },
});

export const CartQuantityBox = styled("div")({
  width: "123px",
  height: "40px",
  left: "500px",
  position: "relative",
  top: "-80px",
  border: "0px, 0px, 1px, 0px",
  boxShadow: "0px 1px 2px 0px #38383814",
  color: "red",
});

export const CartComponentImgBox = styled("img")({
  width: "63px",
  height: "63px",
  borderRadius: "6px",
  border: "1px",

  //   top: "10px",
  //   position: "relative",
  "@media (min-width:600px)": {
    width: "80px",
    height: "80px",
    border: "1px solid red",
  },
});

cartTitle.typography.subtitle1 = {
  width: "175px",
  height: "38px",
  styleName: "Text-title",

  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "red",

  position: "relative",
  "@media (min-width:600px)": {
    width: "462px",
    height: "22px",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "22px",
  },
  [cartTitle.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

cartText.typography.subtitle1 = {
  width: "203px",
  height: "32px",
  styleName: "Text-title",

  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "red",

  position: "relative",
  "@media (min-width:600px)": {
    width: "429px",
    height: "48px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
  },
  [cartText.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

cartPrice.typography.subtitle1 = {
  width: "54px",
  height: "22px",
  styleName: "Text-title",
  top: "-50px",
  left: "150px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "right",
  color: "red",

  position: "relative",
  "@media (min-width:600px)": {
    width: "54px",
    height: "22px",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "22px",
    top: "-70px",
    left: "500px",
    position: "relative",
  },
  [cartPrice.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

export const CartRemove = styled("button")({
  width: "70px",
  height: "30px",
  border: "0px, 0px, 1px, 0px",
  padding: "0px, 10px, 0px, 10px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  background:
    "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
});

export const CartSaveForlater = styled("button")({
  width: "103px",
  height: "30px",
  border: "0px, 0px, 1px, 0px",
  padding: "0px, 10px, 0px, 10px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  background:
    "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
});

cartRemoveTheme.typography.subtitle1 = {
  styleName: "Text-title",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "15.73px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#FA3434",
  position: "relative",
  [cartRemoveTheme.breakpoints.up("md")]: {
    fontSize: "13px",
  },
};

cartSaveforLaterTheme.typography.subtitle1 = {
  styleName: "Text-title",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "15.73px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#0D6EFD",
  position: "relative",
  [cartSaveforLaterTheme.breakpoints.up("md")]: {
    fontSize: "13px",
  },
};
