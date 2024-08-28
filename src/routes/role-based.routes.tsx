import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthRole } from "../types/auth.type";
const RoleBasedRoute = ({ role }: { role: AuthRole }) => {
  const { isAuth, user } = useAuth();
  const location = useLocation();
  return !(isAuth && user.role === role) ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <>
      <Outlet />
    </>
  );
};

export default RoleBasedRoute;
