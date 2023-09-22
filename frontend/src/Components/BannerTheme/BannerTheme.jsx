import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainImg from "../../assets/Images/main-tech.png";
import { Link } from "react-router-dom";

export const buttontheme = createTheme();

export const bannertheme2 = createTheme();

export const bannertheme1 = createTheme();

export const categorytheme = createTheme();
bannertheme1.typography.subtitle1 = {
  //styleName: Text-title;
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
  left: "20px",
  position: "absolute",
  color: "#1C1C1C",
  "@media (min-width:600px)": {
    top: "53px",
    left: "46px",
    position: "absolute",
  },
  [bannertheme1.breakpoints.up("md")]: {
    fontSize: "28px",
  },
};

bannertheme2.typography.h1 = {
  //styleName: Text-title;
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "39px",
  letterSpacing: "0em",
  textAlign: "left",
  top: "16px",
  // top: "26px",
  left: "20px",

  position: "absolute",
  "@media (min-width:600px)": {
    top: "80px",
    left: "45px",
    position: "absolute",
    // top: "26px",
    // position: "absolute",
    // fontSize: "8px",
  },
  [bannertheme2.breakpoints.up("md")]: {
    fontSize: "32px",
  },
};

categorytheme.typography.subtitle1 = {
  styleName: "Text-base",

  //styleName: Text-title;
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "5px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#1C1C1C",
  [categorytheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

buttontheme.typography.subtitle1 = {
  //styleName: text-btn/btn-small;

  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "15.3px",
  letterSpacing: "0px",
  textAlign: "center",

  //   top: "26px",
  //   position: "absolute",
  //   "@media (min-width:600px)": {
  //     top: "26px",
  //     position: "absolute",
  //     fontSize: "8px",
  //   },
  [buttontheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};
export const BannerImg = styled("div")({
  position: "absolute",
  width: "130%",
  height: "180px",
  backgroundImage: `url(${MainImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  objectFit: "contain",
  "@media (min-width:600px)": {
    width: "40%",
    height: "365px",
    position: "absolute",
    marginLeft: "-12px",
  },
});

export const LearnMoreButton = styled("button")({
  width: "91px",
  height: "30px",
  top: "48px",
  left: "20px",
  position: "absolute",
  padding: "0px 10px 0px 10px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  "@media (min-width:600px)": {
    width: "119px",
    height: "40px",
    top: "130px",
    left: "46px",
    position: "absolute",
    padding: "0px 16px 0px 16px",
  },
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  width: "25px",
  height: "40px",
  margin: "5px",
  position: "relative",
});

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
  width: "421px",
  height: "40px",
  borderLeft: "1px solid #0D6EFD",
  borderTop: "1px solid #0D6EFD",
  borderBottom: "1px solid #0D6EFD",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
});

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#AF79EB",
    },
  },
});
