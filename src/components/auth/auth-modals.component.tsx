import { useDispatch, useSelector } from "react-redux";
import InformationModal from "../common/information-modal.component";
import Input from "../common/input.component";
import Modal from "../common/modal.component";
import { AppDispatch, RootState } from "../../redux";
import { openAuthModal } from "../../redux/slices/auth.slice";
import { closeAllModal } from "../../redux/slices/common.slice";
import { auth } from "../../redux/thunk-action/auth.thunk-action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  name: string;
  password: string;
  email: string;
  username: string;
}
const initialState = {
  name: "",
  password: "",
  email: "",
  username: "",
};
function AuthModal() {
  const [user, setUser] = useState<IUser>(initialState);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();
  const resetState = () => {
    setUser(() => ({
      name: "",
      password: "",
      email: "",
      username: "",
    }));
    setIsForgotPassword(() => false);
  };
  const { AlertModalMsg = "", SuccessModalMsg = "" } = useSelector(
    (state: RootState): any => state.commonReducer
  );
  const { status, authModal, error, failure, modalType } = useSelector(
    (state: RootState): any => state.authReducer
  );
  const dispatch: AppDispatch = useDispatch();
  function closeModal() {
    dispatch(openAuthModal(false));
    dispatch(closeAllModal());
    resetState();
  }

  const handleSubmit = () => {
    const payload = {
      email: getInputValue("email") || "",
      username: getInputValue("username") || "",
      name: getInputValue("name") || "",
      password: getInputValue("password") || undefined,
    };

    dispatch(
      auth({
        ...payload,
        role: "shop",
        next: () => {
          navigate("/shop");
        },
      })
    );
    if (SuccessModalMsg) {
      resetState();
    }
  };

  const handleChange = ({
    target: { id = "", value = "" },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const forgotPasswordClick = () => {
    setIsForgotPassword(true);
    setUser((preV) => ({
      username: "",
      name: "",
      password: "",
      email: preV.email,
    }));
  };

  const getInputValue = (id: keyof IUser) => {
    return user[id] as string;
  };
  const title = isForgotPassword ? "Forgot Password" : `Shop ${modalType}`;
  const info =
    modalType === "login"
      ? `Please enter your ${isForgotPassword ? "Email" : "credential"}`
      : "Your credential will send to your mail";
  return (
    <div className="container">
      <Modal
        show={authModal}
        onClose={closeModal}
        onSave={handleSubmit}
        buttonLoading={status === "loading"}
        title={title}
      >
        <div className="w-full p-2">
          <p className="text-violet-700 font-semibold ml-1 text-base flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{info}</span>
          </p>
          <form className="rounded  pt-6  ">
            {modalType === "signup" && (
              <>
                <div className="mb-6">
                  <Input
                    id="name"
                    type="text"
                    value={getInputValue("name")}
                    placeholder="Enter your Shop Name*"
                    onChange={handleChange}
                    error={error["name"]}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    id="username"
                    type="text"
                    value={getInputValue("username")}
                    placeholder="Enter your unique username*"
                    onChange={handleChange}
                    error={error["username"]}
                  />
                </div>
              </>
            )}
            <div className="mb-6">
              <Input
                id="email"
                type="email"
                value={getInputValue("email")}
                placeholder="Enter your email*"
                onChange={handleChange}
                error={error["email"]}
              />
            </div>
            {modalType === "login" && !isForgotPassword && (
              <>
                <Input
                  id="password"
                  type="password"
                  value={getInputValue("password")}
                  placeholder="Enter your password*"
                  onChange={handleChange}
                  error={error["password"]}
                />

                <p
                  className="font-bold text-violet-700 text-end mb-3 cursor-pointer -mt-4 pr-2"
                  onClick={forgotPasswordClick}
                >
                  {" "}
                  Forgot Password?
                </p>
              </>
            )}
          </form>
          {failure ? (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{failure}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </Modal>
      <InformationModal
        message={SuccessModalMsg || AlertModalMsg}
        isSuccess={!AlertModalMsg}
        onClose={closeModal}
      />
    </div>
  );
}

export default AuthModal;
