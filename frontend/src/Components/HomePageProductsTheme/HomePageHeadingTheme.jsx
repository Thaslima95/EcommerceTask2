import { createTheme } from "@mui/material";
export const homepageheadingtheme = createTheme();

homepageheadingtheme.typography.h3 = {
  styleName: "Title-H3",
  width: "184px",
  height: "22px",
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "21.78px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [homepageheadingtheme.breakpoints.up("md")]: {
    width: "252px",
    height: "32px",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "32px",
  },
};
