import React from "react";
import { cn } from "../../utils/style";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className = "", style, ...props }: ButtonProps) => {
  return (
    <div
      className={cn("group rounded-md p-[1.5px]", className)}
      style={{
        background: props.disabled
          ? "linear-gradient(106deg, var(--color-accent-600) 0%, var(--color-accent-800) 65%, var(--color-accent-900) 100%)"
          : "linear-gradient(106deg, var(--color-accent-100) 0%, var(--color-accent-300) 65%, var(--color-accent-700) 100%)",
      }}
    >
      <button
        className={cn(
          "bg-black-700 text-text-primary h-full min-h-8 w-full min-w-24 rounded-[calc(0.375rem-1.5px)] px-6 py-1 hover:bg-[var(--color-accent-700)] hover:text-[var(--color-text-secondary)]",
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
