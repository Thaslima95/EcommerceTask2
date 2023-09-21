import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const carttheme = createTheme();
export const cartTitle = createTheme();
export const cartText = createTheme();
export const cartPrice = createTheme();
export const cartSaveforLaterTheme = createTheme();
export const cartRemoveTheme = createTheme();
export const cartHeadingTitle = createTheme();
export const saveforlaterheading = createTheme();
export const cartTotalheading = createTheme();
export const cartTotalPrice = createTheme();

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

export const CartQuantityBox = styled("div")({
  width: "123px",
  height: "40px",
  border: "0px, 0px, 1px, 0px",
  boxShadow: "0px 1px 2px 0px #38383814",
  color: "red",
  float: "right",
});

export const CartHeading = styled("div")({
  width: "132px",
  height: "32px",
});
export const CartHeaderImgBox = styled("div")({
  color: "#8B96A5",
  width: "45px",
  height: "41px",
});
cartHeadingTitle.typography.h3 = {
  styleName: "Text-H3",

  fontFamily: "Inter",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "32px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
  [cartHeadingTitle.breakpoints.up("md")]: {
    fontSize: "24px",
  },
};

export const CartComponentImgBox = styled("img")({
  width: "63px",
  height: "63px",
  borderRadius: "6px",
  border: "1px",
  left: "10px",
  position: "reltaive",
  "@media (min-width:600px)": {
    width: "80px",
    height: "80px",
    left: "0px",
    position: "relative",
  },
});

cartTitle.typography.subtitle1 = {
  styleName: "Text-title",

  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  "@media (min-width:600px)": {
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
  styleName: "Text-title",

  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "right",
  color: "black",
  "@media (min-width:600px)": {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "22px",
  },
  [cartPrice.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

export const CartRemove = styled("button")({
  width: "99px",
  height: "30px",
  top: "-80px",
  left: "100px",

  position: "relative",
  "@media (min-width:600px)": {
    width: "70px",
    height: "30px",
    border: "0px, 0px, 1px, 0px",
    padding: "0px, 10px, 0px, 10px",
    borderRadius: "6px",
    border: "1px",
    left: "0px",
    top: "0px",
    position: "relative",
    gap: "10px",
    background:
      "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
  },
});

export const CartSaveForlater = styled("button")({
  width: "110px",
  height: "30px",
  top: "-80px",
  left: "100px",
  position: "relative",
  "@media (min-width:600px)": {
    width: "103px",
    height: "30px",
    top: "0px",
    left: "0px",
    position: "relative",
    border: "0px, 0px, 1px, 0px",
    padding: "0px, 10px, 0px, 10px",
    borderRadius: "6px",
    border: "1px",
    gap: "10px",
    background:
      "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
  },
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

saveforlaterheading.typography.h6 = {
  styleName: "Text-H4",
  fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "28px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
  [saveforlaterheading.breakpoints.up("md")]: {
    fontSize: "20px",
  },
};

cartTotalheading.typography.h6 = {
  styleName: "Text-H6",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
  [cartTotalheading.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

cartTotalPrice.typography.h4 = {
  styleName: "Text-H4",
  fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "28px",
  letterSpacing: "0px",
  textAlign: "right",
  color: "#1C1C1C",
  [cartTotalPrice.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};
