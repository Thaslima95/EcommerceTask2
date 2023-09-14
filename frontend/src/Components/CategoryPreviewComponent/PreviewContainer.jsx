import React from "react";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function PreviewContainer({ category }) {
  const { title, price, description, image, id } = category;

  return (
    <>
      <Paper
        sx={{
          p: 2,
          // margin: "auto",
          Width: 900,
          minWidth: 200,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {title}
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Typography variant="h6" gutterBottom>
                    ${price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: "5px" }}
                    gutterBottom
                  >
                    <strike>${price + 400}</strike>
                  </Typography>
                </Box>

                <Box sx={{ color: "text.primary" }}>
                  <Rating
                    name="hover-feedback"
                    value="3.5"
                    precision={0.5}
                    readOnly
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {description.substring(0, 100)}
                </Typography>
                <Link to={`/single/${id}`}>
                  <Typography
                    style={{
                      //styleName: text-btn/btn-normal;
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: " #0D6EFD",
                    }}
                  >
                    View details
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",

                alignItems: "flex-end",
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
