import { Outlet } from "react-router-dom";
import { ILayoutType } from "../types/common.type";
import Header from "./header";

const Layout = ({ type = "home" }: ILayoutType) => {
  return (
    <div>
      <Header type={type} />
      <Outlet />
    </div>
  );
};

export default Layout;
