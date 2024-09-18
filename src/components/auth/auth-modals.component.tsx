import { useDispatch, useSelector } from "react-redux";
import InformationModal from "../common/information-modal.component";
import Input from "../common/input.component";
import Modal from "../common/modal.component";
import { AppDispatch, RootState } from "../../redux";
import { closeAllModal } from "../../redux/slices/common.slice";
import { authAPIAction } from "../../redux/thunk-action/auth.thunk-action";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AUTH_ROLES } from "../../constants/roles.constant";
import { IAuthState } from "../../types/auth.type";
import { Info, Alert } from "../../assets/Icons";
import AuthActions from "../../redux/action/auth.action";

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
  const { username = "" } = useParams();
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
  const { status, authModal, errors, failure, modalType }: IAuthState =
    useSelector((state: RootState): any => state.authReducer);
  const dispatch: AppDispatch = useDispatch();
  function closeModal() {
    dispatch(AuthActions.openAuthModal(false));
    dispatch(closeAllModal());
    resetState();
  }
  // const next = ({ setup, user: { role } }: IAuthSuccessResponse) => {
  //   console.log("Setup:", setup);
  //   console.log("Role:", role);

  //   if (setup) {
  //     console.log("Navigating to shop-setup");
  //     navigate("/shop-setup");
  //     return;
  //   }

  //   console.log("Navigating to /" + role);
  //   navigate("/" + role);
  // };

  const handleSubmit = () => {
    const payload = {
      email: getInputValue("email") || undefined,
      username: getInputValue("username") || undefined,
      name: getInputValue("name") || undefined,
      password: getInputValue("password") || undefined,
      role: username ? AUTH_ROLES.USER : AUTH_ROLES.SHOP,
      // next,
    };

    dispatch(authAPIAction(payload));

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
    dispatch(AuthActions.updateModalType("forgotPassword"));
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

  const title =
    modalType === "forgotPassword"
      ? "Forgot Password"
      : `${username ? "" : "Shop"} ${modalType}`;

  const info =
    modalType === "login"
      ? `Please enter your Credential`
      : modalType === "forgotPassword"
      ? "Please enter your Email"
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
            <Info />
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
                    error={errors?.["name"]}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    id="username"
                    type="text"
                    value={getInputValue("username")}
                    placeholder="Enter your unique username*"
                    onChange={handleChange}
                    error={errors?.["username"]}
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
                error={errors?.["email"]}
              />
            </div>
            {modalType === "login" && (
              <>
                <Input
                  id="password"
                  type="password"
                  value={getInputValue("password")}
                  placeholder="Enter your password*"
                  onChange={handleChange}
                  error={errors?.["password"]}
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
              <Alert />
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
