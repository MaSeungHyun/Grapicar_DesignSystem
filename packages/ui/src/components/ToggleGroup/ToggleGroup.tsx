import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React from "react";

import { cn } from "../../utils/style";

const ToggleGroupRoot = ({
  className,
  children,
  orientation = "horizontal",
  ...props
}: React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>) => {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        "flex items-center justify-center data-[orientation=vertical]:flex-col",
        orientation === "vertical" && "flex-col",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
};

const ToggleGroupItem = ({
  className = "",
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>) => {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        "bg-black-600 hover:bg-accent-700 text-text-primary group relative flex min-h-5 min-w-5 items-center justify-center border border-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
});
