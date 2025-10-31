import { icons, type LucideProps } from "lucide-react";
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
}: IconProps): React.ReactNode => {
  const Icon = icons[icon as keyof typeof icons];

  return <Icon className={cn("stroke-white", className)} size={size} {...props} />;
};
