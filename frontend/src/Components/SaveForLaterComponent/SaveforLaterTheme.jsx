import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const saveforlaterpricetheme = createTheme();
export const movetocartTheme = createTheme();
export const saveforlatertexttheme = createTheme();
export const SaveforLaterBox = styled("div")({
  width: "310px",
  height: "114px",
  "@media (min-width:600px)": {
    width: "270px",
    height: "382px",
  },
});

export const SaveforTextMobileBox = styled("div")({
  width: "184px",
  height: "43px",
});

export const SaveforLaterImgBox = styled("img")({
  width: "98px",
  height: "98px",
  padding: "4.36px, 9.58px, 3.92px, 9.58px",

  "@media (min-width:600px)": {
    padding: "15px, 16px, 16px, 15px",
    width: "225px",
    height: "225px",
  },
});

export const MovetoCartButton = styled("button")({
  padding: "9px, 16.08px, 9px, 9px",
  width: "156.58px",
  height: "40px",
  borderRadius: "6px",
  border: "1px",
  marginTop: "10px",
  background:
    "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
});

movetocartTheme.typography.subtitle1 = {
  width: "97px",
  height: "19px",
  styleName: "text-btn/btn-normal",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19.36px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#0D6EFD",
  marginLeft: "15px",
};

saveforlaterpricetheme.typography.h5 = {
  width: "63.23px",
  height: "22px",
  styleName: "Title-h5",
  fontFamily: "Inter",
  fontSize: "calc(7px + 1vw)",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
};

saveforlatertexttheme.typography.subtitle1 = {
  width: "215.8px",
  height: "48px",
  styleName: "Text-info",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#606060",
};
