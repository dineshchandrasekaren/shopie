import { HTMLAttributes, DOMAttributes, FC } from "react";

interface IButton
  extends DOMAttributes<HTMLButtonElement>,
    HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  loading?: boolean;
}
const Button: FC<IButton> = ({
  outline: isOutline = false,
  loading = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      disabled={loading}
      className={
        `btn text-base outline-none focus:outline-none min-w-24 overflow-hidden ${
          isOutline
            ? " border-violet-700 border-2 text-violet-700 hover:border-violet-700 hover:bg-violet-700 hover:text-white"
            : " bg-violet-700 text-white border-none hover:bg-violet-500"
        } ` + className
      }
      {...props}
    >
      {loading ? <span className="loading loading-spinner" /> : children}
    </button>
  );
};

export default Button;
