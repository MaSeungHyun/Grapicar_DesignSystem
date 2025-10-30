import React from "react";
import "./Button.css";

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
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
