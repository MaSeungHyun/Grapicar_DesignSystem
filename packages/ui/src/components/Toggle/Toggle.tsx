import { Toggle as RadixToggle } from "radix-ui";
import React from "react";
import useControllableState from "../../hooks/useControllableState";
import { cn } from "../../utils/style";

export interface ToggleProps extends React.ComponentProps<typeof RadixToggle.Root> {
  children?: React.ReactNode;
  defaultPressed?: boolean;
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  shape?: "square" | "circle";
}

export const Toggle = ({ className = "", children, shape = "square", ...props }: ToggleProps) => {
  const [value, setValue] = useControllableState({
    prop: props.pressed,
    defaultProp: props.defaultPressed ?? false,
    onChange: props.onPressedChange,
  });

  const handleClick = (value: boolean) => {
    setValue(value);
    props.onPressedChange?.(value as boolean);
  };

  return (
    <RadixToggle.Root
      className={cn(
        "bg-black-600 group relative flex min-h-5 min-w-5 items-center justify-center hover:bg-gray-600/90",
        value && "bg-cyan-500 hover:bg-cyan-500/70",
        value && shape === "circle" && "border border-cyan-200",
        shape === "circle" && "rounded-full hover:border hover:border-cyan-200",
        className,
      )}
      pressed={value}
      onPressedChange={(value: boolean) => {
        handleClick(value);
      }}
      {...props}
    >
      {children}
    </RadixToggle.Root>
  );
};
