import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export const supplierregiontexttheme = createTheme();

export const supplierurltexttheme = createTheme();

export const SupplierRegionBox = styled("div")({
  width: "221px",
  height: "36px",
});

supplierregiontexttheme.typography.subtitle2 = {
  styleName: "Text normal",
  width: "116px",
  height: "24px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#1C1C1C",
  textAlign: "left",
  //   top: "20px",
  //   left: "10px",
  //   position: "relative",
};

supplierurltexttheme.typography.subtitle2 = {
  styleName: "Text-small",
  width: "83px",
  height: "16px",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "15.73px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#8B96A5",
  textAlign: "left",
  top: "0px",
  left: "30px",
  position: "relative",
};

export const RegionImgLayout = styled("img")({
  width: "28px",
  height: "20px",
});
