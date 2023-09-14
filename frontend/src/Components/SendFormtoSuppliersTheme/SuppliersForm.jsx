import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Bgwarehouse from "../../assets/Images/bg-warehouse.jpg";
export const suppliertext1theme = createTheme();
export const suppliertext2theme = createTheme();
export const quotestexttheme = createTheme();
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
  width: "440px",
  height: "139px",
  top: "20px",
  left: "20px",
  position: "relative",
  border: "3px solid red",
  // top: 42px
  // left: 140px
  // padding: 6.559999942779541px 7.6533379554748535px 6.195554256439209px 7.6533331871032715px
});
export const SupplierTextLayout1 = styled("div")({
  width: "440px",
  height: "78px",
  top: "20px",
  left: "20px",
  position: "relative",
  border: "3px solid red",
  // top: 42px
  // left: 140px
  // padding: 6.559999942779541px 7.6533379554748535px 6.195554256439209px 7.6533331871032715px
});
export const SupplierTextLayout2 = styled("div")({
  width: "390px",
  height: "48px",
  top: "30px",
  left: "20px",
  position: "relative",
  border: "3px solid red",
  // top: 42px
  // left: 140px
  // padding: 6.559999942779541px 7.6533379554748535px 6.195554256439209px 7.6533331871032715px
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

// export const JoinNowButton = styled("button")({
//   width: "180px",
//   height: "30px",
//   top: "65px",
//   left: "1090px",
//   position: "absolute",
//   padding: "0px 10px 0px 10px",
//   borderRadius: "6px",
//   border: "1px",
//   gap: "10px",
//   background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
// });

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
  fontSize: "32px",
  fontWeight: "600",
  lineHeight: "38.73px",
  letterSpacing: "-0.2px",
  color: "#FFFFFF",

  [suppliertext1theme.breakpoints.up("md")]: {
    fontSize: "32px",
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
