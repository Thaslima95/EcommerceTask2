import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const subscribeheadingtheme = createTheme();

export const subscribeheadingsubtheme = createTheme();

export const SubscribeBox = styled("div")({
  width: "617px",
  height: "113px",
  border: "1px solid red",
});
export const SubscribeHeadingBox = styled("div")({
  width: "617px",
  height: "52px",
  border: "1px solid blue",
});

export const SubscribeFormLayout = styled("div")({
  width: "392px",
  height: "40px",
  border: "1px solid blue",
  left: "120px",
  position: "relative",
});

subscribeheadingtheme.typography.h4 = {
  styleName: "Title-H4",
  width: "268px",
  height: "28px",
  border: "1px solid green",
  left: "160px",
  top: "10px",
  position: "relative",
  fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "28px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#1C1C1C",
};

subscribeheadingsubtheme.typography.h4 = {
  styleName: "Title-info",
  width: "617px",
  height: "24px",
  border: "1px solid green",

  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#1C1C1C",
};
