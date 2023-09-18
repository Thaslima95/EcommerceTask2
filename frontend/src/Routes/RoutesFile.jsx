import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "../Parts/Header/HeaderComponent";
import Home from "../Pages/Home/Home";
import CategoryPage from "../Pages/Category/CategoryPage";
import SingleProduct from "../Components/SingleProductComponent/SingleProduct";
import CartPage from "../Pages/Cart/CartPage";
import Registration from "../Pages/Register/Resgistration";
import Gridcolumn from "../Components/Gridcolumn";
import Login from "../Pages/Login/Login";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<HeaderComponent />}>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        {/* <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="/filter/:category" element={<FilterComponent />} /> */}
      </Route>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      {/* 
        <Route path="/cart" element={<CartPage />} />
      <Route path="/cart2" element={<CartPage2 />} /> */}
    </Routes>
  );
}
