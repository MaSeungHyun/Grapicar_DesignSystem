import React from "react";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";
import { Input } from "../Input";

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchBar = ({ className = "", ...props }: SearchBarProps) => {
  return (
    <div
      className={cn(
        "bg-black-700 border-accent-700 group relative flex min-w-12 items-center rounded-sm border",
        "focus-within:border-accent-100 focus-within:hover:border-accent-300 hover:border-gray-100",
        className,
      )}
    >
      <Input
        className={cn(
          "pl-6.5 relative h-full w-full border-none focus:border-none focus:ring-0",
          "placeholder:text-gray-400 group-focus-within:text-gray-100 group-hover:text-gray-100",
        )}
        {...props}
      />
      <Icon
        icon="Search"
        className={cn(
          "pointer-events-none absolute left-1.5 stroke-gray-400",
          "group-focus-within:stroke-gray-100 group-hover:stroke-gray-100",
        )}
      />
    </div>
  );
};
