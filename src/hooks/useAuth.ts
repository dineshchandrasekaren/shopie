import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { IAuthState } from "../types/auth.type";
import useSession from "./useSession";

const useAuth = (): IAuthState => {
  const { getSession } = useSession();
  const sessionData = getSession();

  // Retrieve the auth state from Redux
  const authState = useSelector(
    (store: RootState) => store.authReducer
  ) as IAuthState;

  // If the Redux state is not available, fall back to session data
  if (!authState || !authState.isAuth) {
    return {
      isAuth: !!sessionData.token,
      user: { role: sessionData.role },
    };
  }

  return authState;
};

export default useAuth;
