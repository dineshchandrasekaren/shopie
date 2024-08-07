import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
}
function Input({ error = undefined, className = "", ...props }: InputProps) {
  return (
    <>
      <div
        className={`shadow-lg overflow-hidden relative border-2 flex justify-between items-center  appearance-none   placeholder:text-lg text-lg rounded-md w-full  text-gray-700 leading-tight ${
          error && " border-red-600"
        } `}
      >
        <input
          className={`w-full py-4 px-5 focus:outline-none focus:shadow-outline ${className}`}
          {...props}
        />
        {error && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current mr-2 absolute right-1 text-red-600 bg-transparent "
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>
      <p className="text-red-600 mt-2 mb-8 font-semibold ml-1 text-base h-1">
        {error}
      </p>
    </>
  );
}

export default Input;
