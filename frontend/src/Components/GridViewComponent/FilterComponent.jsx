import * as React from "react";

import Grid from "@mui/material/Grid";
import Responsive from "../GridViewCardComponent/Responsive";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbComponent from "../BreadCrumbComponent/BreadCrumbComponent";
import BestTabComponent from "../BestTabComponent/BestTabComponent";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";

export default function FilterComponent() {
  const categoryname = useParams().category;
  const [categories, setCategories] = useState([]);
  useMemo(() => {
    ApiCalls.getSpecificCategorisProducts(categoryname)
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, [categoryname]);
  return (
    <Grid
      xs
      md={10}
      container
      sx={{
        top: "180px",
        position: "absolute",
        marginLeft: "130px",
      }}
    >
      <Grid item xs={12} md={12} sx={{}}>
        <BreadCrumbComponent />
      </Grid>
      <Grid item xs={12} md={12} sx={{ display: "flex" }}>
        <Grid item xs={12} md={3} sx={{}}>
          Left
        </Grid>
        <Grid item xs={12} md={9} sx={{}}>
          <Grid
            item
            xs={12}
            md={11}
            sx={{
              display: "flex",
              flexWrap: "wrap",

              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <BestTabComponent />
          </Grid>

          <Grid xs={12} md={12} sx={{ display: "flex", flexWrap: "wrap" }}>
            {categories &&
              categories.map((e) => {
                return (
                  <Grid
                    item
                    md={4}
                    spacing={1}
                    sx={
                      {
                        // border: "1px solid blue",
                      }
                    }
                  >
                    <Responsive products={e} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
