import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthRole } from "../types/auth.type";
import Header from "../layout/header";
import ToggleMode from "../components/common/toggle-theme.component";
import ToggleThemeCircle from "../components/common/toggle-theme-ball.component";
import ExitBall from "../components/common/exit-ball.component";
const RoleBasedRoute = ({
  role,
  no_header,
}: {
  role: AuthRole;
  no_header?: true;
}) => {
  const { isAuth, user } = useAuth();
  const location = useLocation();
  return !(isAuth && user.role === role) ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <div>
      {no_header && <ToggleThemeCircle />}
      {no_header && <ExitBall />}

      {!no_header && <Header type={role} />}
      <Outlet />
    </div>
  );
};

export default RoleBasedRoute;
