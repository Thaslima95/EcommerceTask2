import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ApiCalls from "../../API/ApiCalls";
import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "../BannerTheme/BannerTheme";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Dropdownbox() {
  const theme = useTheme();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesDetails();
  }, []);

  const getCategoriesDetails = () => {
    ApiCalls.getCategoris()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <FormControl sx={{ width: 130, height: 35, color: "blue" }} size="small">
        <InputLabel id="demo-multiple-name-label" sx={{ color: "black" }}>
          All Category
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={categories}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {categories?.map((category) => (
            <StyledLink to={`/category/${category.category}`}>
              <MenuItem key={category.category} value={category.category}>
                {category.category}
              </MenuItem>
            </StyledLink>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
