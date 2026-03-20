import { Toggle as RadixToggle } from "radix-ui";
import React from "react";
import useControllableState from "../../hooks/useControllableState";
import { cn } from "../../utils/style";

export interface ToggleProps extends React.ComponentProps<typeof RadixToggle.Root> {
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
        "bg-black-600 hover:border-accent-100 group relative flex min-h-5 min-w-5 items-center justify-center border border-transparent hover:bg-gray-300",
        value && "bg-accent-700 hover:bg-accent-500/70 border-accent-100",
        value && shape === "circle" && "border-accent-200",
        shape === "circle" && "rounded-full hover:bg-gray-700",
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
