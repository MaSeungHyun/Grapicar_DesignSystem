import React from "react";
import { cn } from "../../utils/style";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "bg-black-600 text-text-primary min-h-4 min-w-12 rounded-sm border border-gray-200 px-2 outline-none",
        "hover:border-accent-300",
        "focus:border-accent-100",
        (props.readOnly || props.disabled) && "pointer-events-none border-gray-300 text-gray-300",
        className,
      )}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.readOnly) {
          event.stopPropagation();
          props.onKeyDown?.(event);
        }
      }}
      {...props}
    />
  );
};
