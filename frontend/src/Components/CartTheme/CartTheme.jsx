import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const carttheme = createTheme();

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

export const CartImg = styled("img")({
  color: "#8B96A5",
  width: "20px",
  height: "19px",
  top: "10px",
  position: "relative",
  "@media (min-width:600px)": {
    top: "0px",
    position: "relative",
  },
});

export const CartCheckoutBoxmobile = styled("div")({
  border: "0px, 0px, 1px, 0px",

  width: "320px",
  height: "206px",
  borderBottom: "1px solid #DEE2E7",
  background:
    "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
});
