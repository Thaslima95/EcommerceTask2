import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Bgwarehouse from "../../assets/Images/bg-warehouse.jpg";
export const suppliertext1theme = createTheme();
export const suppliertext2theme = createTheme();
export const quotestexttheme = createTheme();

export const sendinquirytheme = createTheme();
export const SupplierImg = styled("div")({
  display: "flex",
  position: "absolute",
  width: "300px",
  height: "180px",
  backgroundImage: `url(${Bgwarehouse})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  objectFit: "contain",
  "@media (min-width:600px)": {
    width: "1180px",
    height: "420px",
  },
});

export const SupplierTextLayout = styled("div")({
  width: "217px",
  height: "44px",
  top: "20px",
  // left: "20px",
  // position: "relative",
  "@media (min-width:600px)": {
    width: "440px",
    height: "139px",
    top: "20px",
    left: "20px",
    position: "relative",
  },
});
export const SupplierTextLayout1 = styled("div")({
  width: "217px",
  height: "44px",
  // top: "20px",
  // left: "20px",
  // position: "relative",
  top: "8px",
  left: "10px",
  position: "relative",
  "@media (min-width:600px)": {
    width: "440px",
    height: "78px",
    top: "20px",
    left: "20px",
    position: "relative",
  },
});
export const SupplierTextLayout2 = styled("div")({
  width: "390px",
  height: "48px",
  top: "30px",
  left: "20px",
  position: "relative",
  border: "3px solid red",
});

export const SupplierFormLayouts = styled("div")({
  width: " 491px",
  height: "346px",
  top: "20px",
  left: "20px",

  position: "relative",
  background: "#FFFFFF",
  boxShadow: " 0px 1px 2px 0px #38383840",
});

export const SendInquiryButton = styled("button")({
  width: "98px",
  height: "30px",
  top: "45px",
  left: "10px",
  position: "relative",

  borderRadius: "6px",
  border: "1px",
  gap: "10px",

  background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
  "@media (min-width:600px)": {
    width: "128px",
    height: "40px",
    top: "65px",
    left: "20px",
    position: "relative",
    padding: "0px 16px 0px 16px",
  },
});

sendinquirytheme.typography.subtitle1 = {
  styleName: "text-btn/btn-normal",
  fontFamily: "Inter",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "19.3px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#FFFFFF",

  [sendinquirytheme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

suppliertext2theme.typography.subtitle1 = {
  styleName: "text-info",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.2px",
  color: "#FFFFFF",

  [suppliertext2theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
};

suppliertext1theme.typography.h2 = {
  styleName: "text-H2",
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "21.73px",
  letterSpacing: "-0.2px",
  color: "#FFFFFF",

  [suppliertext1theme.breakpoints.up("md")]: {
    fontSize: "32px",
    lineHeight: "38.73px",
  },
};

quotestexttheme.typography.h4 = {
  top: "20px",
  position: "relative",
  left: "20px",
  width: "332px",
  height: "28px",
  styleName: "text-H4",
  fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "28px",
  letterSpacing: "-0.2px",
  color: "#1C1C1C",

  [quotestexttheme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
};
