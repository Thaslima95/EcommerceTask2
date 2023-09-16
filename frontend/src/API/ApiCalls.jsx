import React from "react";
import axios from "axios";

export default {
  getProducts: async function () {
    try {
      const response = await axios.get(`/allproducts`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getCategoris: async function () {
    try {
      const response = await axios.get(`/typeofcategory`);
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getCategorisProductswithlimit: async function () {
    try {
      const response = await axios.get(`/getproducts/5`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getProductswithlimit: async function (val) {
    try {
      const response = await axios.get(`/getproducts/${val}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getProductswithdesclimit: async function () {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?sort=desc&limit=8`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getSpecificCategorisProducts: async function (val) {
    try {
      const response = await axios.get(`/category/${val}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getSingleProduct: async function (val) {
    try {
      const response = await axios.get(`/singleproduct/${val}`);
      return response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  },
};
