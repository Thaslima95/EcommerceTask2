import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export default function Responsive({ products }) {
  return (
    <Card sx={{ maxWidth: 255, minHeight: 300 }}>
      <Card
        sx={{
          top: "15px",
          left: "10px",
          position: "relative",
          boxShadow: "none",
        }}
      >
        <img
          src={products.image}
          style={{ objectFit: "contain", width: "200px", height: "200px" }}
        />
      </Card>
      <Box
        sx={{
          p: 2,
          minWidth: 190,
          display: "flex",
          marginTop: 3,

          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            color: "text.primary",

            display: "flex",
            justifyContent: "space-between",
            // marginRight: 5,
            alignItems: "center",
          }}
        >
          <Typography>
            ${products.price}
            <span>
              <strike>$ghb</strike>
            </span>
          </Typography>{" "}
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Box>
        <Box sx={{ color: "text.primary" }}>
          <Rating name="hover-feedback" value="7.5" precision={0.5} readOnly />
        </Box>
        <Box sx={{ color: "text.primary", fontSize: 15, fontWeight: "medium" }}>
          {products.title.substring(0, 40)}
        </Box>
        <Box>
          <Link to={`/single/${products.id}`}>
            <Button variant="outlined">View Details</Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
