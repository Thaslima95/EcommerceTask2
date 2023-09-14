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
} from "../../Components/SendFormtoSuppliersTheme/SuppliersForm";
import { ThemeProvider } from "@mui/material";
export default function HomePageSection5() {
  return (
    <>
      <Grid
        container
        xs={9}
        md={12}
        sx={{ top: "1120px", position: "absolute", border: "1px solid red" }}
      >
        {" "}
        {/* <ThemeProvider theme={bannertheme1}>
            <Typography variant="subtitle1">Latest trending</Typography>
          </ThemeProvider>
          <ThemeProvider theme={bannertheme2}>
            <Typography variant="h1">Electronic items</Typography>
          </ThemeProvider>
          <LearnMoreButton>
            <ThemeProvider theme={buttontheme}>
              <Typography variant="subtitle1">Learn More</Typography>
            </ThemeProvider> */}
        {/* </LearnMoreButton> */}
        <Grid item md={1}></Grid>
        <Grid container xs={12} md={9} sx={{ border: "1px solid green" }}>
          <SupplierImg component="div">
            <Grid
              item
              xs={4}
              md={6}
              sx={{ display: { md: "block" }, border: "1px solid red" }}
            >
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
                <SupplierTextLayout2>
                  {" "}
                  <ThemeProvider theme={suppliertext2theme}>
                    <Typography variant="subtitle1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt.
                    </Typography>
                  </ThemeProvider>
                </SupplierTextLayout2>
              </SupplierTextLayout>
            </Grid>
            <Grid
              item
              xs={4}
              md={6}
              sx={{ display: "flex", border: "1px solid blue" }}
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
                    // border: "1px solid blue",
                    // top: "25px",
                    // position: "relative",
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
              </SupplierFormLayouts>
            </Grid>
          </SupplierImg>
        </Grid>
      </Grid>
    </>
  );
}
