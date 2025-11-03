import { Check } from "lucide-react";
import { ComponentProps, ReactNode } from "react";
import { cn } from "../../utils/style";

export type CheckboxProps = Omit<ComponentProps<"button">, "value" | "onClick" | "onChange"> & {
  value: boolean;
  className?: string;
  name?: string;
  onClick?: (value: boolean) => void;
  onChange?: (value: boolean) => void;
};

export const Checkbox = ({
  value,
  className,
  onChange,
  onClick,
  ...props
}: CheckboxProps): ReactNode => {
  const handleClickOnChange = () => {
    onClick?.(!value);
    onChange?.(!value);
  };
  return (
    <button
      className={cn(
        "rounded-xs hover:brightness-120 relative flex aspect-square h-5 w-5 items-center justify-center border-[0.031rem] border-gray-400 bg-gray-400 hover:cursor-pointer",
        value && "bg-black-600 hover:bg-black-500 border-cyan-200",
        className,
      )}
      onClick={() => {
        handleClickOnChange();
      }}
      {...props}
    >
      {value && <Check size={15} className="text-gray-100" />}
    </button>
  );
};
