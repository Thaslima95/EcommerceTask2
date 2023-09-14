import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadCrumbComponent() {
  const location = useLocation();
  const str = location.pathname;

  const result = str.split(/[/]/);

  console.log(result);
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href=""
      onClick={handleClick}
    >
      {result[1]}
    </Link>,
    <Typography key="3" color="text.primary">
      {result[2]}
    </Typography>,
  ];
  return (
    <Container style={{}}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Container>
  );
}
