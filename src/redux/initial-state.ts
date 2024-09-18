const initialState = {
  userReducer: {
    user: {},
    loading: false,
    message: "",
  },
  commonReducer: { AlertModalMsg: "", SuccessModalMsg: "" },
  authReducer: {
    status: "",
    failure: "",
    errors: {},
    authModal: false,
    modalType: "",
    isAuth: false,
    user: {},
  },
};
export default initialState;
