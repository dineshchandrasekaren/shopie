import { InputHTMLAttributes } from "react";
import { Alert } from "../../assets/Icons";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
          <Alert className="mr-2 absolute right-1 text-red-600 bg-transparent" />
        )}
      </div>
      <p className="text-red-600 mt-2 mb-8 font-semibold ml-1 text-base h-1">
        {error}
      </p>
    </>
  );
}

export default Input;
