import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
export const addtocartbuttontheme = createTheme();

export const AddtocartButton = styled("button")({
  width: "180px",
  height: "40px",

  padding: "0px 10px 0px 10px",
  borderRadius: "6px",
  border: "1px",
  gap: "10px",
  background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
});

addtocartbuttontheme.typography.subtitle1 = {
  styleName: "text-btn/btn-small",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#FFFFFF",
  background: "#FFFFFF",

  [addtocartbuttontheme.breakpoints.up("md")]: {
    fontSize: "13px",
    color: "#FFFFFF",
    background: "#FFFFFF",
  },
};
