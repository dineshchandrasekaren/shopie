import { useDispatch } from "react-redux";
import heroImage from "../assets/images/hero.jpg";
import { AppDispatch } from "../redux";
import { openAuthModal } from "../redux/slices/auth.slice";
import { useEffect } from "react";
import useSession from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { token, role } = useSession().getSession();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/shop");
    }
  });
  function openModal() {
    dispatch(openAuthModal(true, "signup"));
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
