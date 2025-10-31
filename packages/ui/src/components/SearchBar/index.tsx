import React, { useState } from "react";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";
import { Input } from "../Input";

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchBar = ({
  className = "",
  onFocus = () => {},
  onBlur = () => {},
  ...props
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClickFocusCallback = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlurFocusCallback = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  return (
    <div className={cn("bg-black-700 group relative flex min-w-12 items-center", className)}>
      <Input
        className={cn(
          "pl-6.5 relative h-full w-full border-cyan-400 group-hover:text-gray-100",
          !isFocused && "text-gray-200",
        )}
        onFocus={handleClickFocusCallback}
        onBlur={handleBlurFocusCallback}
        {...props}
      />
      <Icon
        icon="Search"
        className={cn(
          "absolute left-1.5 group-hover:stroke-gray-100",
          !isFocused && "stroke-gray-200",
        )}
      />
    </div>
  );
};
