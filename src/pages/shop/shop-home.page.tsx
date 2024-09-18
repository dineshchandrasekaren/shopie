import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ShopHomePage: FC = () => {
  const navigate = useNavigate();
  const {
    isAuth,
    user: { role },
    setup,
  } = useAuth();

  useEffect(() => {
    if (!isAuth || setup === undefined) return;

    navigate(!setup ? `/${role}-setup` : `/${role}`);
  }, []);
  return <div>ShopHomePage</div>;
};

export default ShopHomePage;
