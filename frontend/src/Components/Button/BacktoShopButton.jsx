import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const backtoshopbuttontheme = createTheme();
export const removeAllbuttontheme = createTheme();

export const BacktoShopButton = styled("button")({
  width: "159px",
  height: "40px",
  padding: "9px, 14px, 9px, 9px",
  borderRadius: "6px",
  border: "1px",
  background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
});

export const RemoveAllButton = styled("button")({
  width: "115px",
  height: "40px",
  padding: "0px, 16px, 0px, 16px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  color: "#0D6EFD",
  background:
    "linear-gradient(0deg, #DEE2E7, #DEE2E7),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
  border: "1px solid #DEE2E7",
});

backtoshopbuttontheme.typography.subtitle1 = {
  width: "120px",
  height: "19px",
  styleName: "text-btn/btn-normal",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19.36px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#FFFFFF",
};

removeAllbuttontheme.typography.subtitle1 = {
  width: "83px",
  height: "19px",
  styleName: "text-btn/btn-normal",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "center",
  background: "#0D6EFD",
  color: "0D6EFD",
};
