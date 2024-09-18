import useSession from "../hooks/useSession";

const errorHandler = (isAccessDenied: boolean, error?: any, thunkAPI?: any) => {
  if (!isAccessDenied) {
    return thunkAPI.rejectWithValue({ error: error.response.data });
  } else {
    useSession().clearSession(true);
  }
};

export default errorHandler;
