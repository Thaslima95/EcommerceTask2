import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const singleproductHeadingtheme = createTheme();

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
  color: "#FFFFFF",

  [singleproductHeadingtheme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
};
