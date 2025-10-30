import React from "react";
import { cn } from "../../utils/style";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-black-700 text-text-primary h-full min-h-10 w-full min-w-24 rounded-md px-5 py-2",
        "border border-gray-300",
        "hover:bg-black-100 hover:cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
