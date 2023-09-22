import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import BgImage from "../../assets/Images/bg-warehouse.jpg";
import { Button, Form, Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import {
  SupplierImg,
  SupplierTextLayout,
  SupplierTextLayout1,
  SupplierTextLayout2,
  suppliertext1theme,
  suppliertext2theme,
  SupplierFormLayouts,
  quotestexttheme,
  SendInquiryButton,
  sendinquirytheme,
} from "../../Components/SendFormtoSuppliersTheme/SuppliersForm";
import { ThemeProvider } from "@mui/material";
export default function HomePageSection5() {
  return (
    <>
      <Grid
        container
        xs={9}
        md={12}
        sx={{
          top: { md: "1390px", xs: "1050px" },
          position: "absolute",
        }}
      >
        <Grid item md={1}></Grid>
        <Grid container xs={12} md={9} sx={{}}>
          <SupplierImg component="div">
            <Grid item xs={4} md={6} sx={{ display: { md: "block" } }}>
              <SupplierTextLayout>
                {" "}
                <SupplierTextLayout1>
                  {" "}
                  <ThemeProvider theme={suppliertext1theme}>
                    <Typography variant="h2">
                      An easy way to send requests to all suppliers
                    </Typography>
                  </ThemeProvider>
                </SupplierTextLayout1>
                <SupplierTextLayout2
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  {" "}
                  <ThemeProvider theme={suppliertext2theme}>
                    <Typography variant="subtitle1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt.
                    </Typography>
                  </ThemeProvider>
                </SupplierTextLayout2>
                <SendInquiryButton
                  sx={{ display: { md: "none", xs: "block" } }}
                >
                  {" "}
                  <ThemeProvider theme={sendinquirytheme}>
                    <Typography variant="subtitle1">Send inquiry</Typography>
                  </ThemeProvider>
                </SendInquiryButton>
              </SupplierTextLayout>
            </Grid>
            <Grid
              item
              xs={4}
              md={6}
              sx={{
                display: { md: "flex", xs: "none" },
              }}
            >
              <SupplierFormLayouts component="div">
                {" "}
                <ThemeProvider theme={quotestexttheme}>
                  <Typography variant="h4">Send quote to suppliers</Typography>
                </ThemeProvider>
                <Form.Control
                  style={{
                    width: "440px",
                    height: "40px",
                    top: "25px",
                    position: "relative",
                    left: "20px",
                    border: "1px solid #DEE2E7",
                  }}
                  placeholder="What item do you need?"
                ></Form.Control>
                <Form.Control
                  style={{
                    width: "440px",
                    height: "73px",
                    top: "50px",
                    position: "relative",
                    left: "20px",
                  }}
                  as="textarea"
                  rows={3}
                  placeholder="Type more Details"
                />
                <Form.Control
                  style={{
                    width: "206px",
                    height: "40px",
                    top: "80px",
                    position: "relative",
                    left: "20px",
                    // border: "1px solid red",
                  }}
                  placeholder="Quantity"
                />
                <Form.Select
                  style={{
                    width: "111px",
                    height: "40px",
                    border: "1px",
                    top: "37px",
                    position: "relative",
                    left: "250px",
                  }}
                >
                  <option>PCs</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <SendInquiryButton>
                  {" "}
                  <ThemeProvider theme={sendinquirytheme}>
                    <Typography variant="subtitle1">Send inquiry</Typography>
                  </ThemeProvider>
                </SendInquiryButton>
              </SupplierFormLayouts>
            </Grid>
          </SupplierImg>
        </Grid>
      </Grid>
    </>
  );
}
