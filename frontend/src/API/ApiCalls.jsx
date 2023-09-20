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
    } catch (err) {
      console.log(err);
    }
  },
  getCartItems: async function (userid) {
    try {
      const response = await axios.get(`/cartdetails/${userid}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getCartTotal: async function (userid) {
    try {
      const response = await axios.get(`/carttotal/${userid}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  removefromcart: async function (userid, productid, quantity) {
    try {
      const response = await axios.patch(`/removecart/${productid}`, {
        user_id: userid,
        quantity: quantity,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  updateCart: async function (userid, productid, quantity) {
    try {
      const response = await axios.patch(`/updatecart`, {
        user_id: userid,
        quantity: quantity,
        product_id: productid,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  checkOut: async function (userid) {
    try {
      const response = await axios.post(`/proceedtocheckout/${userid}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  register: async function (username, useremail, password) {
    try {
      const response = await axios.post(`/adduser`, {
        name: username,
        email: useremail,
        password: password,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  login: async function (useremail, password) {
    try {
      const response = await axios.post(`/login`, {
        email: useremail,
        password: password,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getProductsbetweenRange: async function (price1, price2) {
    try {
      const response = await axios.get(`/filter/${price1}/${price2}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  saveforlater: async function (userid, productid, quantity) {
    try {
      const response = await axios.post(`/saveforlater`, {
        user_id: userid,
        product_id: productid,
        quantity: quantity,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  getsaveforlateritems: async function (userid) {
    try {
      const response = await axios.get(`/getsaveforlateritems/${userid}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
