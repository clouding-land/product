import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
// import Login from "../Components/Login";
import Products from "../Components/Products";
import DetailedProduct from "../Components/DetailedProduct";
import Error from "../Components/Error";
import Nav from "../Components/Nav";
// import PrivateRoute from "../Contexts/PrivateRoute";

const MainRoutes = () => {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/:id" element={<DetailedProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default MainRoutes;
