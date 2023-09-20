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
import { ThemeProvider, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import {
  categorytheme1,
  categorytheme2,
  FeaturedBox,
  VerfiedBox,
  GroupButtonBox,
} from "../../Pages/Category/CategoryPageTheme";

export default function BestTabComponent({ setgrid }) {
  const categoryname = useParams().category;
  const [categories, setCategories] = useState([]);
  useMemo(() => {
    ApiCalls.getSpecificCategorisProducts(categoryname)
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, [categoryname]);

  return (
    <>
      <Grid item md={6}>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <ThemeProvider theme={categorytheme2}>
            <Typography variant="subtitle2" sx={{ marginRight: "8px" }}>
              {categories.length} items in
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={categorytheme1}>
            <Typography variant="h6">{categoryname}</Typography>
          </ThemeProvider>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box sx={{ display: "flex" }}>
          <VerfiedBox
            sx={{
              display: { md: "flex", xs: "none" },
            }}
          >
            {" "}
            <FormGroup>
              <FormControlLabel control={<Checkbox />} />
            </FormGroup>
            <ThemeProvider theme={categorytheme2}>
              <Typography
                variant="subtitle2"
                sx={{ marginRight: "8px", marginTop: "10px" }}
              >
                Verified only
              </Typography>
            </ThemeProvider>
          </VerfiedBox>
          <FeaturedBox
            sx={{ marginRight: "12px", display: { md: "flex", xs: "none" } }}
          >
            <Form.Select>
              <option>Featured</option>
              <option value="1" default>
                One
              </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FeaturedBox>
          <GroupButtonBox sx={{ paddingTop: "5px" }}>
            <GridViewIcon onClick={() => setgrid(true)} />
            <TableRowsIcon onClick={() => setgrid(false)} />
          </GroupButtonBox>
        </Box>
      </Grid>
    </>
  );
}
