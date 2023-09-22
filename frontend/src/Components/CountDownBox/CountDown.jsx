import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const joinbuttontheme = createTheme();
export const loginbuttontheme = createTheme();
export const adbuttontheme = createTheme();
export const dealstheme = createTheme();
export const dealstheme2 = createTheme();
export const countstheme = createTheme();
export const countssecondstheme = createTheme();
export const dealproductname = createTheme();
export const dealproductsale = createTheme();

export const CountDownBox = styled("div")({
  width: "198px",
  height: "113px",
  top: "15px",
  left: "15px",
  position: "relative",
  padding: "0px 10px 0px 10px",
  borderRadius: "4px",
});

export const CountBox = styled("div")({
  display: "flex",
  width: "75%",
  height: "44px",
  gap: "4px",
  top: "60px",
  position: "absolute",
  borderRadius: "4px",

  "@media (min-width:600px)": {
    display: "flex",
    width: "100%",
    height: "50px",
    gap: "4px",
    top: "60px",
    position: "absolute",
    borderRadius: "4px",
  },
});

export const Counts = styled("div")({
  width: "30px",
  height: "50px",

  borderRadius: "4px",

  background: "#FFFFFF",
  "@media (min-width:600px)": {
    width: "45px",
    height: "50px",

    borderRadius: "4px",

    background: "#606060",
  },
});

countstheme.typography.subtitle2 = {
  top: "12px",

  position: "absolute",

  height: "19px",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "700",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#8B96A5",

  [countstheme.breakpoints.up("md")]: {
    fontSize: "16px",
    color: "#FFFFFF",
  },
};

countssecondstheme.typography.subtitle2 = {
  height: "15px",
  top: "24px",
  position: "absolute",

  fontFamily: "Inter",
  fontSize: "10px",
  fontWeight: "400",
  lineHeight: "10px",
  letterSpacing: "0em",
  textAlign: "center",
  color: "#8B96A5",

  [countssecondstheme.breakpoints.up("md")]: {
    fontSize: "12px",
    color: "#FFFFFF",
  },
};

dealstheme.typography.h6 = {
  width: "155px",
  height: "28px",

  styleName: "text-btn/btn-small",
  fontFamily: "Inter",
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "28px",
  letterSpacing: "-0.2px",
  textAlign: "left",
  color: "#1C1C1C",

  [dealstheme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
};

export const LoginButton = styled("button")({
  width: "180px",
  height: "30px",
  top: "105px",
  left: "1090px",
  position: "absolute",
  padding: "0px 10px 0px 10px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  background:
    "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
});

dealstheme2.typography.h4 = {
  width: "155px",
  height: "19px",

  styleName: "Title-H4",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#8B96A5",

  [dealstheme2.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

export const DealProductBox = styled("div")({
  width: "140px",
  height: "180px",

  "@media (min-width:600px)": {
    width: "179px",
    height: "235px",
  },
});
export const DealProductItems = styled("div")({
  top: "14px",
  left: "5px",
  position: "relative",
  background: "#FFFFFF",

  width: "98px",
  height: "98px",

  "@media (min-width:600px)": {
    width: "140px",
    height: "140px",
    top: "8px",
    left: "20px",
    position: "relative",
  },
});

dealproductname.typography.subtitle2 = {
  top: "20px",
  position: "relative",
  styleName: "Title-H4",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.2px",
  textAlign: "center",
  color: "#1C1C1C",

  [dealproductname.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

dealproductsale.typography.subtitle2 = {
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "17px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#EB001B",

  [dealproductsale.breakpoints.up("md")]: {
    fontSize: "14px",
  },
};

export const DealLayout = styled("div")({
  padding: "3px 13px 4px 13px",
  borderRadius: "29px",
  top: "30px",
  position: "relative",

  gap: "10px",
  "@media (min-width:600px)": {
    top: "25px",
    left: "58px",
    position: "relative",
    background: "#FFE3E3",
    width: "61px",
    height: "28px",
  },
});

export const DealImg = styled("img")({
  width: "78px",
  height: "78px",

  "@media (min-width:600px)": {
    width: "98px",
    height: "98px",
  },
});
