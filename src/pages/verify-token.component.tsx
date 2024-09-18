import { ChangeEvent, MouseEvent, useState } from "react";
import Button from "../components/common/button.component";
import Input from "../components/common/input.component";
import AuthApi from "../api/auth.api";
import { VerifyType } from "../types/auth.type";
import PageLoading from "../components/common/loading.component";
import useFetchData from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import FullScreenInfo from "../components/common/fullscreen-info-component";
import NotFound from "./not-found.pages";
import { AxiosResponse } from "axios";
import ToggleThemeCircle from "../components/common/toggle-theme-ball.component";

interface IResponse {
  success: boolean;
  message: string;
}

const VerifyComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState({
    password: "",
    confirmPassword: "",
  });
  const [resetResponse, setResetResponse] = useState<IResponse>({
    success: false,
    message: "",
  });
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const { token = "", type = "resetToken" } = useParams<{
    token: string;
    type: VerifyType;
  }>();

  const fetchData = async (
    signal: AbortSignal
  ): Promise<AxiosResponse<IResponse>> => {
    return AuthApi.tokenApi({ token }, type, signal);
  };

  const { data, loading } = useFetchData<IResponse>({ apiCall: fetchData });

  const handlePassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { password = "", confirmPassword = "" } = inputValue;
    setBtnLoading(true);
    AuthApi.tokenApi({ token, password, confirmPassword })
      .then((response) => {
        setResetResponse(response.data);
        setBtnLoading(false);
      })
      .catch((err) => {
        setResetResponse(err.response.data);
        setBtnLoading(false);
      })
      .finally(() => setBtnLoading(false));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
    setResetResponse({ message: "", success: false });
  };

  if (!["signupToken", "resetToken"].includes(type)) return <NotFound />;
  if (loading) return <PageLoading />;
  // console.log({ data });

  return loading ? (
    <PageLoading />
  ) : resetResponse.success ? (
    <FullScreenInfo title={resetResponse.message} isSuccess />
  ) : data && data?.success && type === "resetToken" ? (
    <div className="max-h-fit max-w-80 px-6 py-10 m-auto rounded-2xl shadow-2xl mt-14">
      <ToggleThemeCircle />
      <h1 className="text-center mb-5 text-3xl font-bold">Reset Password</h1>

      <form>
        <Input
          placeholder="Password"
          name="password"
          value={inputValue.password}
          onChange={handleChange}
          error={
            !resetResponse.success && resetResponse.message
              ? resetResponse.message
              : ""
          }
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          value={inputValue.confirmPassword}
          onChange={handleChange}
          error={
            !resetResponse.success && resetResponse.message
              ? resetResponse.message
              : ""
          }
        />
        <div>
          <Button
            className="w-full m-auto"
            loading={btnLoading}
            onClick={handlePassword}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  ) : data && data?.success && type === "signupToken" ? (
    <FullScreenInfo title={"Email Verified"} isSuccess />
  ) : data && !data?.success ? (
    <FullScreenInfo title={"Token expired try again"} />
  ) : (
    ""
  );
};

export default VerifyComponent;
