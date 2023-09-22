import React from "react";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import Vector from "../../assets/Images/Vector.png";
import { List } from "@mui/material";
import { useLocation } from "react-router-dom";
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
import GridViewContainer from "../../Components/CategoryGridviewContainer/GridViewContainer";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}
export default function CategoryPage() {
  const [value, setValue] = useState([500, 3000]);
  const [categories, setCategories] = useState([]);
  const [listcategory, setListCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [priceproducts, setPriceProducts] = useState([]);
  const [displayprodcuts, setDisplayProducts] = useState([]);
  const [hide, setHide] = useState(false);
  const [brandhide, setBrandHide] = useState(false);
  const [checked, setChecked] = useState([]);
  const [filter, setFilter] = useState(false);
  const [grid, setgrid] = useState(null);
  const location = useLocation();
  const [searchparam] = useSearchParams();
  const val = useParams().category;

  let displayarray = [];
  if (priceproducts.length != 0) {
    displayarray = priceproducts;
  } else if (val == "allproducts") {
    displayarray = products;
  } else {
    displayarray = categories;
  }

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
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const clearFilter = () => {
    setFilter(false);
    setPriceProducts([]);
  };

  const handlepricerange = () => {
    console.log(value[0], value[1]);
    ApiCalls.getProductsbetweenRange(value[0], value[1])
      .then((res) => {
        setDisplayProducts(res);
        setPriceProducts(res);
      })
      .catch((err) => console.log(err));
    setFilter(true);
  };

  useMemo(() => {
    ApiCalls.getCategoris()
      .then((res) => {
        setListCategory(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useMemo(() => {
    ApiCalls.getProducts()
      .then((res) => {
        setDisplayProducts(res);
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useMemo(() => {
    ApiCalls.getSpecificCategorisProducts(val)
      .then((res) => {
        setDisplayProducts(res);
        setCategories(res);
      })
      .catch((err) => console.log(err));
  }, [val]);

  console.log(displayprodcuts);

  return (
    <>
      <Grid
        xs
        md={10}
        container
        sx={{
          top: "100px",
          position: "absolute",
          marginLeft: { md: "130px" },
        }}
      >
        <Grid item xs={12} md={12} sx={{ marginBottom: "30px" }}>
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
                  <Box
                    sx={{
                      width: 100,
                      top: "10px",
                      left: "10px",
                      position: "relative",
                    }}
                  >
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      min={500}
                      max={3000}
                    />
                    <Button onClick={() => handlepricerange()}>Apply</Button>
                  </Box>
                </List>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container xs={12} md={10} xl={12}>
              <BestTabComponent
                setgrid={setgrid}
                productslength={displayarray.length}
              />
            </Grid>
            {filter && (
              <Grid container md={12}>
                <Grid item md={1}>
                  <Box>Min:{value[0]}</Box>
                </Grid>
                <Grid item md={1}>
                  <Box>Max:{value[1]}</Box>
                </Grid>
                <Box
                  sx={{ color: "blue", cursor: "pointer" }}
                  onClick={() => clearFilter()}
                >
                  Clear Filter
                </Box>
              </Grid>
            )}

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
            <Grid item xs={12} md={8}></Grid>
            <Grid container xs={12} md={10} xl={10}>
              {searchTerm
                ? displayprodcuts
                    .filter(({ product_title }) =>
                      product_title.toLowerCase().includes(searchTerm)
                    )
                    .filter(
                      ({ product_title }) =>
                        !searchTerm ||
                        product_title.toLowerCase().includes(searchTerm)
                    )
                    .map((product) => {
                      return grid ? (
                        <GridViewContainer
                          category={product}
                        ></GridViewContainer>
                      ) : (
                        <PreviewContainer category={product} />
                      );
                    })
                : displayprodcuts
                    .filter(
                      ({ product_title }) =>
                        !searchTerm ||
                        product_title.toLowerCase().includes(searchTerm)
                    )
                    .map((product) => {
                      return grid ? (
                        <GridViewContainer
                          category={product}
                        ></GridViewContainer>
                      ) : (
                        <PreviewContainer category={product} />
                      );
                    })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
