import { useDispatch } from "react-redux";
import heroImage from "../assets/images/hero.jpg";
import { AppDispatch } from "../redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthActions from "../redux/action/auth.action";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

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
  function openModal() {
    dispatch(AuthActions.updateModalType("signup"));
    dispatch(AuthActions.openAuthModal(true));
  }

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center z-auto">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Create Your Own Shop in Minutes
            </h1>
            <p className="mb-5">
              Choose from various categories and start selling today!
            </p>
            <button className="btn btn-primary" onClick={openModal}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
