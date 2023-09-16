import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const servicetheme = createTheme();

export const ServiceBox = styled("div")({
  width: "280px",
  height: "200px",
});

servicetheme.typography.subtitle2 = {
  width: "168px",
  height: "44px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "22px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
  styleName: "Text-title",
  textAlign: "left",
  top: "20px",
  left: "10px",
  position: "relative",
};

export const IconLayout = styled("div")({
  width: "55px",
  height: "55px",
  border: "2px",
  top: "-70px",
  position: "relative",
  left: "195px",

  borderRadius: "50%",

  background:
    "linear-gradient(0deg, #FFFFFF, #FFFFFF),linear-gradient(0deg, #D1E7FF, #D1E7FF)",
  border: "2px solid #FFFFFF",
});

export const ServiceImgLayout = styled("img")({
  width: "280px",
  height: "120px",
});
