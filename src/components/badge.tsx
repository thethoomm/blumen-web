import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "w-fit bg-gray px-3 py-1.5 border-2 border-primary-avacado text-primary-avacado rounded-3xl",
        className
      )}
    >
      {children}
    </span>
  );
}
