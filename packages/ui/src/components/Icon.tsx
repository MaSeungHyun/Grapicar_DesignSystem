import { icons, type LucideProps } from "lucide-react";
import * as React from "react";
import { cn } from "../utils/style";

export type IconProps = LucideProps & {
  icon: keyof typeof icons;
  className?: string;
  size?: number;
};

export const Icon = ({
  className = "",
  icon = "Box",
  size = 12,
  ...props
}: IconProps): React.ReactElement => {
  const Icon = icons[icon as keyof typeof icons];

  return <Icon className={cn("", className)} size={size} {...props} />;
};
