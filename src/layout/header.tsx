import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux";
import AuthActions from "../redux/action/auth.action";
import AuthModal from "../components/auth/auth-modals.component";
import Logo from "../assets/logo";
import useSession from "../hooks/useSession";
import { FC } from "react";
import { logout } from "../redux/thunk-action/auth.thunk-action";
import { ILayoutType } from "../types/common.type";
import { Link } from "react-router-dom";
import ToggleMode from "../components/common/toggle-theme.component";
import { saveShopDetails } from "../redux/thunk-action/user.thunk-action";

const Header: FC<ILayoutType> = ({ type }) => {
  const { token } = useSession().getSession();
  const dispatch: AppDispatch = useDispatch();
  function openModal() {
    dispatch(AuthActions.updateModalType("login"));

    dispatch(AuthActions.openAuthModal(true));
  }
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="navbar bg-base-100 shadow-md sticky top-0">
        <div className="container">
          <div className="flex-none ">
            <div className="drawer md:hidden z-50">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}

                <label
                  htmlFor="my-drawer"
                  className="btn btn-square btn-ghost drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 relative">
                  {/* Sidebar content here */}
                  <li className="w-8 ml-auto mr-8">
                    <label htmlFor="my-drawer">
                      <svg
                        className=" fill-current drawer-overlay"
                        aria-label="close sidebar"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                      >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                      </svg>
                    </label>
                  </li>
                  {!token && (
                    <li>
                      <a onClick={openModal}>Login</a>
                    </li>
                  )}
                  <li className="hover:bg-transparent active:bg-transparent focus:bg-transparent absolute bottom-8 w-11/12">
                    <ToggleMode />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost  pt-2 tracking-wider hover:bg-transparent ">
              <Logo />
            </a>
          </div>
          <ul className="menu menu-horizontal px-1 hidden md:flex items-center ">
            {!token && (
              <li>
                <a onClick={openModal}>Login</a>
              </li>
            )}
            <li className="hover:bg-transparent active:bg-transparent focus:bg-transparent  ">
              <ToggleMode />
            </li>
          </ul>
          <ul className="menu menu-horizontal px-1 whitespace-nowrap  items-center">
            {token && (
              <>
                <li className="hover:bg-transparent active:bg-transparent focus:bg-transparent">
                  <div className="dropdown dropdown-bottom dropdown-end hover:bg-transparent active:bg-transparent focus:bg-transparent ">
                    <div tabIndex={0} role="button">
                      {" "}
                      <div className="avatar online placeholder hover:bg-transparent active:bg-transparent focus:bg-transparent">
                        <div className="bg-neutral text-neutral-content w-11 rounded-full">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content  bg-base-200 rounded-box z-[1] mt-1 w-fit p-2 border-0 shadow"
                    >
                      <li>
                        <Link to="/profile" className="whitespace-nowrap">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <a className="whitespace-nowrap" onClick={logOut}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <AuthModal />
    </>
  );
};

export default Header;
