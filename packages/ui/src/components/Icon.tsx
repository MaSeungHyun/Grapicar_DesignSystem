import { icons, type LucideProps } from "lucide-react";
import { cn } from "../utils/style";

type IconProps = LucideProps & {
  icon: keyof typeof icons;
  className?: string;
  fill?: string;
  size?: number;
  onClick?: () => void;
};

export const Icon = ({
  className = "",
  icon = "Box",
  fill = "transparent",
  size = 12,
  onClick = () => {},
  ...props
}: IconProps): React.ReactNode => {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <Icon
      className={cn("stroke-white", className)}
      fill={fill}
      size={size}
      onClick={onClick}
      {...props}
    />
  );
};
