import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "radio";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx("outline-none border-2 border-gray-300 rounded-sm p-3 pl-4", className)}
        {...rest}
      />
    );
  }
);
