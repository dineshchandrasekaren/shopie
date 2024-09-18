import { FC } from "react";
import { Link } from "react-router-dom";
interface IFullScreenInfo {
  title: string;
  description?: string;
  isSuccess?: boolean;
}
const FullScreenInfo: FC<IFullScreenInfo> = ({
  title,
  description,
  isSuccess = false,
}) => {
  return (
    <div
      className={`${isSuccess ? "bg-success" : "bg-error"} h-screen text-white`}
    >
      <div
        className="flex flex-col items-center max-w-sm mx-auto text-center"
        style={{ paddingTop: "12%" }}
      >
        <div className="p-3  text-white font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isSuccess ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
          </svg>
        </div>
        <h1 className="mt-3 text-3xl font-bold ">{title}</h1>
        <p
          className="mt-4"
          //   dangerouslySetInnerHTML={{ __html: description }}
        >
          {description ? description : "Click here to "}
          <a href="/" className="underline">
            home
          </a>
        </p>
      </div>
    </div>
  );
};

export default FullScreenInfo;
