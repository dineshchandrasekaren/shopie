import { useState } from "react";
import Input from "../components/common/input.component";
import heroImage from "../assets/images/hero.jpg";
import Modal from "../components/common/modal.component";

const HomePage = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {" "}
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
      <div className="container">
        <Modal show={isOpen} onClose={closeModal} title="Login">
          <div className="w-full p-2">
            <form className="rounded  pt-6 pb-8 ">
              <div className="mb-6">
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default HomePage;
