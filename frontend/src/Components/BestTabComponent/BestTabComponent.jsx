import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";

export default function BestTabComponent() {
  const categoryname = useParams().category;
  const [categories, setCategories] = useState([]);
  useMemo(() => {
    ApiCalls.getSpecificCategorisProducts(categoryname)
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, [categoryname]);

  return (
    <>
      <Grid item xs={12} md={6}>
        {categories.length} items in
        <strong>{categoryname}</strong>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: "flex", gap: "20px" }}>
        <FormGroup
          style={{
            width: "144px",
            height: "36px",

            padding: "6px 16px 6px 0px",
          }}
        >
          <FormControlLabel
            style={{
              width: "34px",
              height: "24px",
              padding: "2px 13px 2px 1px",
            }}
            control={<Checkbox />}
          />
          <Card.Text style={{ width: "94px", height: "19px" }}>
            <Typography
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
                color: "#1C1C1C",
              }}
            >
              Verified only
            </Typography>
          </Card.Text>
        </FormGroup>
        <Container
          style={{
            width: "172px",
            height: "40px",
          }}
        >
          <Form.Select>
            <option>Featured</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Container>
        <ButtonGroup
          style={{
            width: "76px",
            height: "40px",
          }}
          aria-label="Basic example"
        >
          <TableRowsIcon />
          <Link to={`/filter/${categoryname}`}>
            <GridViewIcon />
          </Link>
        </ButtonGroup>
      </Grid>
    </>
  );
}
