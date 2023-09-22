import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const joinbuttontheme = createTheme();
export const loginbuttontheme = createTheme();
export const adbuttontheme = createTheme();

export const JoinNowButton = styled("button")({
  width: "180px",
  height: "30px",
  top: "65px",
  // left: "1090px",
  position: "absolute",
  padding: "0px 10px 0px 10px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
});

joinbuttontheme.typography.subtitle1 = {
  styleName: "text-btn/btn-small",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#FFFFFF",

  [joinbuttontheme.breakpoints.up("md")]: {
    fontSize: "13px",
  },
};

export const LoginButton = styled("button")({
  width: "180px",
  height: "30px",
  top: "105px",
  // left: "1090px",
  position: "absolute",
  padding: "0px 10px 0px 10px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  background:
    "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
});

loginbuttontheme.typography.subtitle1 = {
  styleName: "text-btn/btn-small",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#0D6EFD",

  [loginbuttontheme.breakpoints.up("md")]: {
    fontSize: "13px",
  },
};

adbuttontheme.typography.subtitle1 = {
  //styleName: Text-base;
  // width: "144px",
  height: "57px",

  styleName: "text-btn/btn-small",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  letterSpacing: "0px",
  color: "#FFFFFF",

  [adbuttontheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};
