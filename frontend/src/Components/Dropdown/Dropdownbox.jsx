import * as React from "react";

import ApiCalls from "../../API/ApiCalls";
import { Form } from "react-bootstrap";
import { useState, useMemo } from "react";

import { useNavigate } from "react-router-dom";

export default function Dropdownbox() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getCategoriesDetails = () => {
    ApiCalls.getCategoris()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  };
  useMemo(() => {
    getCategoriesDetails();
  }, []);
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    navigate(`/category/${selectedValue}`);
  };

  return (
    <Form>
      <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
        <option>All Category</option>
        {categories?.map((category) => (
          <option value={category.category}>{category.category}</option>
        ))}
      </Form.Select>
    </Form>
  );
}
