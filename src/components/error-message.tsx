import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  error?: FieldError;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return error ? <span className="text-rose-500">{error.message}</span> : null;
}
