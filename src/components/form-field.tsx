import React from "react";

interface FormFieldProps {
  children?: React.ReactNode;
}

export function FormField({ children }: FormFieldProps) {
  return <div className="w-full flex flex-col gap-1">{children}</div>;
}
