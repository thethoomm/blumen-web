import React from "react";
import clsx from "clsx";
import { tv, VariantProps } from "tailwind-variants";

const buttonStyles = tv({
  base: "w-fit font-raleway py-2 px-4 font-medium cursor-pointer",
  variants: {
    variant: {
      default: "bg-primary-lunar text-athena-gray",
      outline:
        "text-primary-lunar hover:text-primary-avacado border border-primary-lunar hover:border-primary-avacado",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface ButtonProps extends ButtonVariants {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  disabled,
  className,
  onClick,
  variant,
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonStyles({ variant }), className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
