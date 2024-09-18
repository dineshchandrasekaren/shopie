import commonReducer from "./slices/common.slice";
import authReducer from "./slices/auth.slice";
import userReducer from "./slices/user.slice";

const rootReducer = { commonReducer, authReducer, userReducer };

export default rootReducer;
