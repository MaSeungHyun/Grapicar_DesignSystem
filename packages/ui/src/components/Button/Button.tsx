import React from "react";
import { cn } from "../../utils/style";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <div
      className="group rounded-md p-[1.5px]"
      style={{
        background: props.disabled
          ? "linear-gradient(to right, #00a78a, #001a1e)" // disabled: 어두운 그라데이션
          : "linear-gradient(to right, #00a7ae, #00696d)", // 기본: 밝은 cyan → 어두움
      }}
    >
      <button
        className={cn(
          "bg-black-700 text-text-primary h-full min-h-8 w-full min-w-24 rounded-md px-6 py-1 hover:bg-cyan-500/80",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
