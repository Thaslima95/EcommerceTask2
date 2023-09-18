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
  getCategorisProductswithlimit: async function (val) {
    try {
      const response = await axios.get(`/getproducts/${val}`);
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
  addtoCart: async function (product_id, userid, quantity) {
    try {
      const response = await axios.post(`/addtocart`, {
        user_id: userid,
        productid: product_id,
        quantity: quantity,
      });
      if (response.data) {
        return response.data;
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  },
  getCartItems: async function (userid) {
    try {
      const response = await axios.get(`/cartdetails/${userid}`);
      console.log(response.data);
      return response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  },
  getCartTotal: async function (userid) {
    try {
      const response = await axios.get(`/carttotal/${userid}`);
      console.log(response.data);
      return response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  },
  getRemovecart: async function (userid, productid, quantity) {
    try {
      const response = await axios.patch(`/removecart/${productid}`, {
        user_id: userid,
        quantity: quantity,
      });
      console.log(response.data);
      return response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  },
  updateCart: async function (userid, productid, quantity) {
    console.log("update");
    try {
      const response = await axios.patch(`/updatecart`, {
        user_id: userid,
        quantity: quantity,
        product_id: productid,
      });
      console.log(response.data);
      return response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  },
  checkOut: async function (userid) {
    console.log("checkout");
    try {
      const response = await axios.post(`/proceedtocheckout/${userid}`);
      console.log(response.data);
      return response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  },
};
