import React from "react";
import { Routes, Route } from "react-router-dom";

// Home pages
import HomePage from "../pages/home.pages";
import ShopHomePage from "../pages/shop/shop-home.page";

// Private route and not found component
import RoleBasedRoute from "./role-based.routes";
import NotFound from "../pages/not-found.pages";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<RoleBasedRoute role="shop" />}>
        <Route path="/shop" element={<h1>welcome to shop</h1>} />
      </Route>
      <Route path="/home/:username" element={<ShopHomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
