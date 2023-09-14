import React from "react";
import axios from "axios";

export default {
  getProducts: async function () {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getCategoris: async function () {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getCategorisProductswithlimit: async function () {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/electronics?limit=5`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getProductswithlimit: async function (val) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${val}`
      );
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
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${val}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getSingleProduct: async function (val) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${val}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
