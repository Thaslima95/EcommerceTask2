import React from "react";
import { Typography } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import { Nav, Col } from "react-bootstrap";
import { ThemeProvider } from "@mui/material";
import { theme2 } from "../HeaderTypography/HeaderTypography";
import Hamburger from "../../assets/Images/Hamburger.png";
import { Grid, Box } from "@mui/material";

export default function HeaderNavbarStyles() {
  return (
    <Grid container md={12}>
      <Grid item md={8} lg={8}>
        <Nav
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link
              href="/home"
              style={{
                color: "black",
                marginTop: "-3px",
                marginRight: "8px",
                padding: "0px",
              }}
            >
              {" "}
              <img src={Hamburger} alt="" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/home"
              style={{ color: "black", margin: "0px", padding: "0px" }}
            >
              <ThemeProvider theme={theme2}>
                <Typography variant="subtitle1">All category</Typography>
              </ThemeProvider>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              style={{
                color: "black",
                margin: "0px",
                padding: "0px",
              }}
            >
              <ThemeProvider theme={theme2}>
                <Typography
                  variant="subtitle1"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Hot Offers
                </Typography>
              </ThemeProvider>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              style={{ color: "black", margin: "0px", padding: "0px" }}
            >
              <ThemeProvider theme={theme2}>
                <Typography
                  variant="subtitle1"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Gift boxes
                </Typography>
              </ThemeProvider>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              style={{ color: "black", margin: "0px", padding: "0px" }}
            >
              <ThemeProvider theme={theme2}>
                <Typography
                  variant="subtitle1"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Projects
                </Typography>
              </ThemeProvider>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              style={{ color: "black", margin: "0px", padding: "0px" }}
            >
              <ThemeProvider theme={theme2}>
                <Typography variant="subtitle1">Menu Item</Typography>
              </ThemeProvider>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ xs: "none", display: "block" }}>
            <Dropdown className="show dropdown">
              <Dropdown.Toggle
                variant="primary"
                id="dropdown-basic"
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  background: "white",
                  color: "black",
                  width: "100px",
                  height: "24px",
                  border: "none",
                  borderRadius: "0px",
                  margin: "10px",
                  padding: "0px",
                  display: "flex",
                }}
              >
                <Typography
                  style={{
                    marginTop: "-10px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    letterSpacing: "0px",
                    textAlign: "left",
                    color: "#1C1C1C",
                  }}
                >
                  Help
                </Typography>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Hello</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </Grid>
      <Grid
        item
        md={4}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Nav>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
            }}
          >
            <Nav.Item className="d-none d-sm-block">
              <Dropdown className="show dropdown">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="btn btn-primary"
                  style={{
                    background: "white",
                    color: "black",

                    height: "24px",
                    border: "none",
                    borderRadius: "0px",
                    marginTop: "15px",
                    padding: "0px",
                    display: "flex",
                  }}
                >
                  <Typography
                    style={{
                      marginTop: "-10px",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      letterSpacing: "0px",

                      color: "#1C1C1C",
                    }}
                  >
                    English,USD
                  </Typography>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Hello</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item className="d-none d-sm-block">
              <Dropdown className="show dropdown">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="btn btn-primary"
                  style={{
                    background: "white",
                    color: "black",

                    height: "24px",
                    border: "none",
                    borderRadius: "0px",
                    marginTop: "10px",
                    padding: "0px",
                    display: "flex",
                  }}
                >
                  <Typography
                    style={{
                      marginTop: "-10px",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      letterSpacing: "0px",

                      color: "#1C1C1C",
                    }}
                  >
                    Ship to{" "}
                    <img src="https://flagsapi.com/DE/flat/32.png" alt="" />
                  </Typography>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    {" "}
                    <img src="https://flagsapi.com/AE/flat/32.png" alt="" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Box>
        </Nav>
      </Grid>
    </Grid>
  );
}
