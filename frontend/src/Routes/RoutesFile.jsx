import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "../Parts/Header/HeaderComponent";
import Home from "../Pages/Home/Home";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<HeaderComponent />}>
        <Route index element={<Home />} />
        {/* <Route path="/category/:category" element={<SecondPage />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="/filter/:category" element={<FilterComponent />} /> */}
      </Route>
      {/* <Route path="/cart" element={<CartPage />} />

      <Route path="/cart2" element={<CartPage2 />} /> */}
    </Routes>
  );
}
