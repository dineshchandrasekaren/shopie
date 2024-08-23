import { useDispatch, useSelector } from "react-redux";
import InformationModal from "../common/information-modal.component";
import Input from "../common/input.component";
import Modal from "../common/modal.component";
import { AppDispatch, RootState } from "../../store";
import { openAuthModal } from "../../store/slices/auth.slice";
import { closeAllModal } from "../../store/slices/common.slice";
import { auth } from "../../api/auth.api";
import { useState } from "react";

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
  const resetState = () => {
    setUser(() => ({
      name: "",
      password: "",
      email: "",
      username: "",
    }));
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
      password: getInputValue("password") || "",
    };

    dispatch(auth({ ...payload, role: "shop" }));
    if (SuccessModalMsg) {
      resetState();
    }
  };
  const handleChange = ({
    target: { id = "", value = "" },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const getInputValue = (id: keyof IUser) => {
    return user[id] as string;
  };
  return (
    <div className="container">
      <Modal
        show={authModal}
        onClose={closeModal}
        onSave={handleSubmit}
        buttonLoading={status === "loading"}
        title={`Shop ${modalType}`}
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
            <span>
              {modalType === "login"
                ? "Please enter your credential"
                : "Your credential will send to your mail"}
            </span>
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
            {modalType === "login" && (
              <div className="mb-6">
                <Input
                  id="password"
                  type="password"
                  value={getInputValue("password")}
                  placeholder="Enter your password*"
                  onChange={handleChange}
                  error={error["password"]}
                />
              </div>
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
