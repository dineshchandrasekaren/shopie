import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded components
const HomePage = lazy(() => import("../pages/home.pages"));
const ShopHomePage = lazy(() => import("../pages/shop/shop-home.page"));
const ShopSetUp = lazy(() => import("../pages/shop/shop-setup.page"));
const RoleBasedRoute = lazy(() => import("./role-based.route"));
const NotFound = lazy(() => import("../pages/not-found.pages"));
const PageLoading = lazy(
  () => import("../components/common/loading.component")
);
const Layout = lazy(() => import("../layout/home.layout"));
const VerifyComponent = lazy(() => import("../pages/verify-token.component"));

// Constants
import { AUTH_ROLES } from "../constants/roles.constant";

const AllRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<Layout type="home" />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/home/:username" element={<ShopHomePage />} />
        </Route>
        <Route element={<RoleBasedRoute role={AUTH_ROLES.SHOP} no_header />}>
          <Route path="/shop-setup" element={<ShopSetUp />} />
        </Route>
        <Route element={<RoleBasedRoute role={AUTH_ROLES.USER} no_header />}>
          <Route path="/user-setup" element={<ShopSetUp />} />
        </Route>
        <Route element={<RoleBasedRoute role={AUTH_ROLES.SHOP} />}>
          <Route path="/shop" element={<h1>welcome to shop</h1>} />
        </Route>
        <Route
          path="/verify-token/:type/:token"
          element={<VerifyComponent />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
