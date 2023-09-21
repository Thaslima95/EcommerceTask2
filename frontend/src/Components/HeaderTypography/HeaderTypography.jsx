import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const theme = createTheme();

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
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

theme.typography.subtitle1 = {
  color: "#8B96A5",
  fontFamily: "Inter",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "15px",
  letterSpacing: "0px",
  textAlign: "center",
  marginLeft: "-4px",
  top: "26px",
  position: "absolute",
  "@media (min-width:600px)": {
    top: "26px",
    position: "absolute",
    fontSize: "8px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
};

export const Img = styled("img")({
  color: "#8B96A5",
  width: "20px",
  height: "19px",
  top: "10px",
  position: "absolute",
  "@media (min-width:600px)": {
    top: "0px",
    position: "absolute",
  },
});

export const InSearch = styled("input")({
  height: "40px",
  border: "1px solid #DEE2E7",
  top: "10px",
  position: "relative",
  borderRadius: "none",
  "@media (min-width:1000px)": {
    top: "0px",
    position: "relative",
    width: "100%",
    height: "40px",
    borderLeft: "1px solid #0D6EFD",
    borderTop: "1px solid #0D6EFD",
    borderBottom: "2px solid #0D6EFD",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
});

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#AF79EB",
    },
  },
});
