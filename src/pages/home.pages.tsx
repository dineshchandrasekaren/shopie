import { useDispatch } from "react-redux";
import heroImage from "../assets/images/hero.jpg";
import { AppDispatch } from "../store";
import { openAuthModal } from "../store/slices/auth.slice";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

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
