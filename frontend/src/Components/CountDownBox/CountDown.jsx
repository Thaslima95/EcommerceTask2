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
  //   top: "65px",
  //   left: "1090px",
  //   position: "absolute",
  top: "15px",
  left: "15px",
  position: "relative",
  padding: "0px 10px 0px 10px",
  borderRadius: "4px",
});

export const CountBox = styled("div")({
  //     width: 198px
  // height: 50px
  // top: 675px
  // left: 150px
  // border-radius: 4px
  display: "flex",
  width: "198px",
  height: "5px",
  gap: "4px",
  top: "60px",
  position: "absolute",
  //   top: "65px",
  //   left: "1090px",
  //   position: "absolute",
  borderRadius: "4px",
});

export const Counts = styled("div")({
  width: "45px",
  height: "50px",
  //   top: "65px",
  //   left: "1090px",
  //   position: "absolute",

  borderRadius: "4px",

  background: "#606060",
});

countstheme.typography.subtitle2 = {
  top: "12px",

  position: "absolute",
  width: "22px",
  height: "19px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#FFFFFF",

  [countstheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

countssecondstheme.typography.subtitle2 = {
  width: "22px",
  height: "15px",
  top: "24px",
  position: "absolute",
  // top: 612px
  // left: 150px
  //styleName: Title-H4;

  fontFamily: "Inter",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "15px",
  letterSpacing: "0em",
  textAlign: "center",
  color: "#FFFFFF",

  [countssecondstheme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
};

dealstheme.typography.h6 = {
  width: "155px",
  height: "28px",
  // top: 612px
  // left: 150px
  //styleName: Title-H4;

  styleName: "text-btn/btn-small",
  fontFamily: "Inter",
  fontSize: "20px",
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
  // top: 612px
  // left: 150px
  //styleName: Title-H4;
  //styleName: Text-base;

  styleName: "Title-H4",
  fontFamily: "Inter",
  fontSize: "16px",
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
  width: "179px",
  height: "235px",
});
export const DealProductItems = styled("div")({
  top: "8px",
  left: "20px",
  position: "relative",
  background: "#FFFFFF",
  //   padding:
  //     "9.333333015441895px 19.28888511657715px 9.333331108093262px 19.288888931274414px",
  width: "140px",
  height: "140px",
});

dealproductname.typography.subtitle2 = {
  //   width: "155px",
  //   height: "19px",
  //   // top: 612px
  // left: 150px
  //styleName: Title-H4;
  //styleName: Text-base;
  //styleName: Text normal;
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
  //   width: "155px",
  //   height: "19px",
  // top: 612px
  // left: 150px
  //styleName: Title-H4;
  //styleName: Text-base;

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
  //     width: Hug (61px)
  // height: Fixed (28px)
  // top: 190px
  // left: 57px
  padding: "3px 13px 4px 13px",
  borderRadius: "29px",
  top: "25px",
  left: "58px",
  position: "relative",

  //   top: "8px",
  //   left: "20px",
  //   position: "relative",
  background: "#FFE3E3",
  width: "61px",
  height: "28px",
  gap: "10px",
});

export const DealImg = styled("img")({
  //     width: Hug (61px)
  // height: Fixed (28px)
  // top: 190px
  // left: 57px
  padding: "3px 13px 4px 13px",

  width: "140px",
  height: "140px",

  //   top: "8px",
  //   left: "20px",
  //   position: "relative",
});
