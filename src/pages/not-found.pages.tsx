import { Link, useLocation } from "react-router-dom";
import ToggleThemeCircle from "../components/common/toggle-theme-ball.component";
import ExitBall from "../components/common/exit-ball.component";

const NotFound = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <section className="min-h-full bg-base-100  dark:bg-gray-900 overflow-hidden">
      <ToggleThemeCircle />
      <ExitBall />
      <div className="container flex items-center px-6 py-12 mx-auto">
        <div
          className="flex flex-col items-center max-w-sm mx-auto text-center"
          style={{ paddingTop: "12%" }}
        >
          <div className="p-3 text-sm font-medium text-violet-500 rounded-full bg-violet-50 dark:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-violet-500 dark:text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="mt-3 text-3xl font-bold ">Page not found</h1>
          <p className="mt-4">
            Sorry, The page you are looking for doesn't exist.
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 sm:w-auto">
            <Link
              to={from}
              className="btn btn-outline w-1/2 sm:w-auto text-gray-700 hover:text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-transparent  dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Go back
            </Link>

            <Link
              to="/"
              className="btn w-1/2 sm:w-auto bg-violet-500 hover:bg-violet-600 dark:bg-violet-600 dark:hover:bg-violet-500 text-white"
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
