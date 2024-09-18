import { useDispatch } from "react-redux";
import { Exit } from "../../assets/Icons";
import { logout } from "../../redux/thunk-action/auth.thunk-action";
import { AppDispatch } from "../../redux";
import useSession from "../../hooks/useSession";

const ExitBall = () => {
  const dispatch: AppDispatch = useDispatch();
  const logOut = () => {
    dispatch(logout()).then(() => (window.location.href = "/"));
  };
  return (
    <div
      onClick={logOut}
      hidden={!useSession().getSessionValue("token")}
      className="fixed top-5 right-5 p-4 rounded-full w-16 h-16 cursor-pointer hover:shadow-2xl "
      title="logout"
    >
      <Exit />
    </div>
  );
};

export default ExitBall;
