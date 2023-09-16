import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const footertheme1 = createTheme();

export const footertheme2 = createTheme();

export const FooterBox1 = styled("div")({
  width: "276px",
  height: "157px",
  border: "1px solid red",
});
export const FooterImgBox = styled("div")({
  width: "150px",
  height: "46px",
  border: "1px solid red",
});

export const FooterTextBox = styled("div")({
  width: "277px",
  height: "48px",
  border: "1px solid red",
});

export const IconLayoutBoxfooter = styled("div")({
  width: "200px",
  height: "32px",
  border: "1px solid red",
});

footertheme1.typography.subtitle1 = {
  styleName: "Text-info",
  color: "#8B96A5",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "left",
};
