import React from "react";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography } from "@mui/material";

import { useParams, useSearchParams } from "react-router-dom";
import Vector from "../../assets/Images/Vector.png";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import PreviewContainer from "../../Components/CategoryPreviewComponent/PreviewContainer";
import BestTabComponent from "../../Components/BestTabComponent/BestTabComponent";
import BreadCrumbComponent from "../../Components/BreadCrumbComponent/BreadCrumbComponent";
import { StyledLink } from "../../Components/BannerTheme/BannerTheme";
import RangeSlider from "../../Components/PriceRangeComponent/PriceRangeComponent";
export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [listcategory, setListCategory] = useState([]);
  const [hide, setHide] = useState(false);
  const [brandhide, setBrandHide] = useState(false);
  const [checked, setChecked] = useState([]);
  const location = useLocation();
  const [searchparam] = useSearchParams();
  const val = useParams().category;

  const handleToggle = (price) => (e) => {
    e.preventDefault();
    console.log(price);
    const currentIndex = checked.indexOf(price);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(price);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  let searchTerm = searchparam.get("search");

  useMemo(() => {
    ApiCalls.getCategoris()
      .then((res) => setListCategory(res))
      .catch((err) => console.log(err));
  }, []);

  useMemo(() => {
    ApiCalls.getSpecificCategorisProducts(val)
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, [val]);
  {
    console.log(categories);
  }
  return (
    <>
      <Grid
        xs
        md={10}
        container
        sx={{
          top: "130px",
          position: "absolute",
          marginLeft: { md: "130px" },
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{ border: "1px solid red", marginBottom: "30px" }}
        >
          <BreadCrumbComponent />
        </Grid>
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Grid item>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{
                    //styleName: Title-H6;
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "19px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Category
                </Typography>
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    padding: "8.295000076293945px 6px 8.295000076293945px 6px",
                  }}
                  src={Vector}
                  onClick={() => setHide(!hide)}
                />
              </Box>
              <Box>
                <Nav
                  style={hide ? { display: "block" } : { display: "none" }}
                  activeKey={location.pathname}
                >
                  {listcategory.map((e) => {
                    return (
                      <StyledLink to={`/category/${e.category}`}>
                        <Nav.Item
                          style={{
                            width: "240px",
                            height: "36px",
                            color: "black",

                            padding: "9px 11px 8px 0px",
                          }}
                        >
                          {e.category}
                        </Nav.Item>
                      </StyledLink>
                    );
                  })}
                </Nav>
              </Box>
            </Grid>
            <Grid>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Price</Typography>
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    padding: "8.295000076293945px 6px 8.295000076293945px 6px",
                  }}
                  src={Vector}
                  onClick={() => setBrandHide(!brandhide)}
                />
              </Box>
              <Box>
                <List
                  style={brandhide ? { display: "block" } : { display: "none" }}
                >
                  <RangeSlider></RangeSlider>
                </List>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9} sx={{}}>
            <Grid
              item
              xs={12}
              md={12}
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
            <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Show More
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Category</MenuItem>
                      <MenuItem onClick={popupState.close}>Brands</MenuItem>
                      <MenuItem onClick={popupState.close}>Price</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
            <Grid item xs={12} md={8}>
              {checked &&
                checked.map((e) => (
                  <h4>
                    {e} <button>remove</button>
                  </h4>
                ))}
            </Grid>
            <Grid item xs={12} md={12}>
              {searchTerm
                ? categories
                    .filter(({ title }) =>
                      title.toLowerCase().includes(searchTerm)
                    )
                    .filter(
                      ({ title }) =>
                        !searchTerm || title.toLowerCase().includes(searchTerm)
                    )
                    .map((product) => {
                      return <PreviewContainer category={product} />;
                    })
                : categories
                    .filter(
                      ({ title }) =>
                        !searchTerm || title.toLowerCase().includes(searchTerm)
                    )
                    .map((product) => {
                      return <PreviewContainer category={product} />;
                    })}
              {checked?.length != 0
                ? checked.map((e) =>
                    categories
                      .filter((p) => p.price == e)
                      .map((e) => {
                        return (
                          <>
                            <PreviewContainer category={e} />
                          </>
                        );
                      })
                  )
                : " "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
