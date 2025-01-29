import React, { LabelHTMLAttributes } from "react";
import clsx from "clsx";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

export function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label {...rest} className={clsx("font-medium text-lg text-black", className)}>
      {children}
    </label>
  );
}
