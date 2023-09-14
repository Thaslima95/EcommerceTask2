import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const headingtheme = createTheme();
export const pricetheme = createTheme();

export const ProductBox = styled("div")({
  width: "223px",
  height: "127px",
  //   top: "65px",
  //   left: "1090px",
  //   position: "absolute",
  //   top: "15px",
  //   left: "15px",
  //   position: "relative",
  //   padding: "0px 10px 0px 10px",
  //   borderRadius: "4px",
});

headingtheme.typography.subtitle2 = {
  width: "138px",
  height: "19px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",

  [headingtheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

pricetheme.typography.subtitle2 = {
  //styleName: Text-small;

  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#8B96A5",

  [pricetheme.breakpoints.up("md")]: {
    fontSize: "13px",
  },
};

export const PriceLayout = styled("div")({
  //     width: 198px
  // height: 50px
  // top: 675px
  // left: 150px
  // border-radius: 4px
  width: "97.9532699584961px",
  height: "32px",
});

export const PriceImgLayout = styled("img")({
  width: "82px",
  height: "82px",
  // top: 42px
  // left: 140px
  // padding: 6.559999942779541px 7.6533379554748535px 6.195554256439209px 7.6533331871032715px
});
