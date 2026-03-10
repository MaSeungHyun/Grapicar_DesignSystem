import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { ComponentProps, ReactNode, useId } from "react";
import { cn } from "../../utils/style";

export type CheckboxProps = Omit<
  ComponentProps<typeof CheckboxPrimitive.Root>,
  "checked" | "onCheckedChange"
> & {
  /** 제어 모드: 현재 체크 상태 */
  value?: boolean;
  /** 비제어 모드: 초기 체크 상태 */
  defaultValue?: boolean;
  /** 체크 상태 변경 시 호출 (제어 모드에서는 value와 함께 사용) */
  onChange?: (checked: boolean) => void;
  /** 라벨. 클릭 시 체크박스 토글 */
  label?: ReactNode;
  className?: string;
};

export const Checkbox = ({
  value,
  defaultValue,
  onChange,
  label,
  className,
  id: idProp,
  ...props
}: CheckboxProps): ReactNode => {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  const root = (
    <CheckboxPrimitive.Root
      id={id}
      checked={value}
      defaultChecked={defaultValue}
      onCheckedChange={(checked: boolean | "indeterminate") => onChange?.(checked === true)}
      className={cn(
        "rounded-xs hover:brightness-120 relative flex aspect-square h-5 w-5 shrink-0 items-center justify-center border-[0.031rem] border-gray-500 bg-gray-400 outline-none transition-[border-color,background-color] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-200)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-black-600)]",
        "data-[state=checked]:bg-black-600 data-[state=checked]:hover:bg-black-500 data-[state=checked]:border-[var(--color-accent-200)]",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-gray-100">
        <Check size={15} strokeWidth={2.5} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label != null) {
    return (
      <label className="flex cursor-pointer items-center gap-2">
        {root}
        <span className="select-none text-sm leading-5 text-gray-100">{label}</span>
      </label>
    );
  }
  return <div className="flex items-center gap-2">{root}</div>;
};
