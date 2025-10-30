import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={"bg-black-200 w-full h-full px-5 rounded-md text-white"}
      {...props}
    >
      {children}
    </button>
  );
};
