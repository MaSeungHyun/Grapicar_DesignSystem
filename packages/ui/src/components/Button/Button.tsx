import React from "react";
import { cn } from "../../utils/style";

import { cva } from "class-variance-authority";

/** wrapper: 그라데이션 테두리 (Tailwind arbitrary value, data-disabled로 비활성 그라데이션) */
const wrapperClasses = "group rounded-md p-[1.5px] ";

const wrapperVariants = cva(
  "bg-black-600 text-text-primary h-full min-h-8 w-full min-w-24 rounded-[calc(0.375rem-1.5px)]  hover:text-text-tertiary",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(106deg,var(--color-accent-100)_0%,var(--color-accent-300)_65%,var(--color-accent-700)_100%)] " +
          "data-[disabled=true]:bg-[linear-gradient(106deg,var(--color-accent-600)_0%,var(--color-accent-800)_65%,var(--color-accent-900)_100%)]",
        primary: "bg-accent-100 data-[disabled=true]:bg-accent-500",
        secondary: "bg-gray-700 data-[disabled=true]:bg-gray-500",
        danger: "bg-danger data-[disabled=true]:bg-danger/50 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const buttonVariants = cva(
  "bg-black-600 data-[disabled=false]:text-text-primary h-full min-h-8 w-full min-w-24 rounded-[calc(0.375rem-1.5px)] px-6 py-1 hover:text-[var(--color-text-secondary)] data-[disabled=true]:text-text-tertiary",
  {
    variants: {
      variant: {
        default: "bg-black-600 data-[disabled=false]:hover:bg-accent-700",
        primary: "bg-accent-100 data-[disabled=true]:bg-accent-500",
        secondary: "bg-black-600",
        danger: "bg-black-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "danger";
}

export const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) => {
  return (
    <div
      className={cn(wrapperClasses, wrapperVariants({ variant }), className)}
      data-disabled={props.disabled ? "true" : "false"}
    >
      <button
        className={cn(buttonVariants({ variant }))}
        data-disabled={props.disabled ? "true" : "false"}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
