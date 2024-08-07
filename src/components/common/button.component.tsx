import React from "react";

interface IButton
  extends React.DOMAttributes<HTMLButtonElement>,
    React.HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  loading?: boolean;
}
const Button: React.FC<IButton> = ({
  outline: isOutline = false,
  loading = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={
        `btn text-base ${
          isOutline
            ? " border-violet-700 border-2 text-violet-700 hover:bg-violet-700 hover:text-white"
            : " bg-violet-700 text-white hover:bg-violet-500"
        } ` + className
      }
      {...props}
    >
      {loading ? <span className="loading loading-spinner" /> : children}
    </button>
  );
};

export default Button;
