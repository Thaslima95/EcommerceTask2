import React from "react";
import { Typography } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import { Nav, Col } from "react-bootstrap";
import { ThemeProvider } from "@mui/material";
import { theme2 } from "../HeaderTypography/HeaderTypography";

export default function HeaderNavbarStyles() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home"></Nav.Link>
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
          style={{ color: "black", margin: "0px", padding: "0px" }}
        >
          <ThemeProvider theme={theme2}>
            <Typography variant="subtitle1">Hot Offers</Typography>
          </ThemeProvider>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          style={{ color: "black", margin: "0px", padding: "0px" }}
        >
          <ThemeProvider theme={theme2}>
            <Typography variant="subtitle1">Gift boxes</Typography>
          </ThemeProvider>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          style={{ color: "black", margin: "0px", padding: "0px" }}
        >
          <ThemeProvider theme={theme2}>
            <Typography variant="subtitle1">Projects</Typography>
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
      <Nav.Item>
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
                marginTop: "-10px", //styleName: Text-title;
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
  );
}
