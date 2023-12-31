import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const footertheme1 = createTheme();

export const footertheme2 = createTheme();

export const copyrighttheme = createTheme();

export const FooterBox1 = styled("div")({
  width: "100%",
  height: "157px",
});
export const FooterImgBox = styled("div")({
  width: "150px",
  height: "46px",
});

export const FooterTextBox = styled("div")({
  width: "100%",
  height: "48px",
});

export const IconLayoutBoxfooter = styled("div")({
  width: "200px",
  height: "32px",
});

footertheme1.typography.subtitle1 = {
  styleName: "Text-info",
  color: "#8B96A5",
  fontFamily: "Inter",
  fontSize: "95%",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "left",
};

copyrighttheme.typography.subtitle1 = {
  width: "320px",
  height: "24px",
  styleName: "Text normal",
  color: "#8B96A5",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "left",
};
