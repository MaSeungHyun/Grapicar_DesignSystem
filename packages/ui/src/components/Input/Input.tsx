import React, { useRef, useState } from "react";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";

/** 숫자 전용 문자열로 정제: 음수(선두 '-'), 소수점(하나만), 숫자만 허용 */
function sanitizeNumberString(value: string): string {
  let s = value.replace(/[^\d.-]/g, "");
  const hasLeadingMinus = s.startsWith("-");
  s = s.replace(/-/g, "");
  if (hasLeadingMinus) s = "-" + s;
  const parts = s.split(".");
  if (parts.length > 2) s = parts[0] + "." + parts.slice(1).join("");
  return s;
}

/** blur 시 표시용 정규화: ".5" → "0.5", "-.5" → "-0.5", "." / "-." → "0" / "-0" */
function normalizeNumberStringOnBlur(value: string): string {
  const s = value.trim();
  if (s === "" || s === "-") return s;
  if (s === ".") return "0";
  if (s === "-.") return "-0";
  if (s.startsWith(".")) return "0" + s;
  if (s.startsWith("-.")) return "-0" + s.slice(2);
  return s;
}

const DRAG_THRESHOLD_PX = 6;

/** 현재 값 문자열 + step 방향으로 다음 값 문자열 계산 (min/max 반영) */
function applyStep(
  currentValue: string,
  step: number,
  delta: number,
  min?: number,
  max?: number,
): string {
  const num = parseFloat(currentValue);
  const base = Number.isNaN(num) ? 0 : num;
  let next = base + step * delta;
  if (min !== undefined && next < min) next = min;
  if (max !== undefined && next > max) next = max;
  // 정수 step이면 정수로, 아니면 소수 유지
  const decimals = Number.isInteger(step) ? 0 : (step.toString().split(".")[1]?.length ?? 2);
  if (decimals === 0) return String(Math.round(next));
  return next.toFixed(decimals).replace(/\.?0+$/, "") || "0";
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, type, ...props }: InputProps) => {
  if (type === "color") {
    return <ColorInput className={className} {...props} />;
  }
  if (type === "number") {
    return <NumberInput className={className} {...props} />;
  }
  return (
    <input
      className={cn(
        "bg-black-700 text-text-primary min-h-4 w-[151px] min-w-12 rounded-[2px] border border-gray-700 px-2 outline-none",
        "hover:bg-black-300",
        "focus:border-accent-100 focus:outline-none",
        (props.readOnly || props.disabled) &&
          "text-text-tertiary/50 border-black-300 pointer-events-none",
        className,
      )}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.readOnly) {
          event.stopPropagation();
          props.onKeyDown?.(event);
        }
      }}
      type={type}
      {...props}
    />
  );
};

const ColorInput = ({ className, ...props }: InputProps) => {
  return (
    <input
      type="color"
      className={cn("w-[51px] rounded-[2px] border-black", className)}
      {...props}
    />
  );
};

const NumberInput = ({
  className,
  value,
  defaultValue,
  onChange,
  onBlur,
  step = 1,
  min,
  max,
  ...props
}: InputProps) => {
  const [internalValue, setInternalValue] = useState(() =>
    sanitizeNumberString(String(defaultValue ?? "")),
  );
  const displayValueRef = useRef("");
  const dragStartYRef = useRef(0);

  const isControlled = value !== undefined && value !== null;
  const rawValue = isControlled ? String(value) : internalValue;
  const displayValue = sanitizeNumberString(rawValue);
  displayValueRef.current = displayValue;

  const stepNum = Number(step) || 1;
  const minNum = min !== undefined ? parseFloat(String(min)) : undefined;
  const maxNum = max !== undefined ? parseFloat(String(max)) : undefined;

  const commitValue = (nextStr: string) => {
    if (!isControlled) setInternalValue(nextStr);
    const syntheticEvent = {
      target: { value: nextStr },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = sanitizeNumberString(e.target.value);
    if (!isControlled) setInternalValue(next);
    onChange?.({
      ...e,
      target: { ...e.target, value: next },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const normalized = normalizeNumberStringOnBlur(displayValue);
    if (normalized !== displayValue) {
      if (!isControlled) setInternalValue(normalized);
      onChange?.({
        ...e,
        target: { ...e.target, value: normalized },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    onBlur?.(e);
  };

  const onArrowMouseDown = (e: React.MouseEvent) => {
    if (props.disabled || props.readOnly) return;
    e.preventDefault();
    const containerEl = e.currentTarget as HTMLElement;
    dragStartYRef.current = e.clientY;
    let didMove = false;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dy = moveEvent.clientY - dragStartYRef.current;
      didMove = didMove || Math.abs(dy) >= DRAG_THRESHOLD_PX;
      const steps = Math.trunc(dy / DRAG_THRESHOLD_PX);
      if (steps === 0) return;
      dragStartYRef.current = moveEvent.clientY;
      const next = applyStep(displayValueRef.current, stepNum, -steps, minNum, maxNum);
      commitValue(next);
    };

    const onMouseUp = (upEvent: MouseEvent) => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      if (!didMove) {
        const rect = containerEl.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const delta = upEvent.clientY < mid ? 1 : -1;
        const next = applyStep(displayValueRef.current, stepNum, delta, minNum, maxNum);
        commitValue(next);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        inputMode="decimal"
        className={cn("text-text-tertiary w-[51px]", className)}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        step={step}
        min={min}
        max={max}
        {...props}
      />
      <div
        className="absolute right-2 top-0 flex h-full cursor-n-resize select-none flex-col items-center justify-center"
        role="group"
        aria-label="값 증가/감소"
        onMouseDown={onArrowMouseDown}
      >
        <div className="relative flex h-full max-w-[5px] flex-col items-center justify-center gap-1">
          <div>
            <Icon
              icon="Play"
              className="rotate-270 fill-text-primary h-1.5 max-h-1.5 w-1.5 max-w-1.5 stroke-0"
            />
          </div>
          <div>
            <Icon
              icon="Play"
              className="fill-text-primary h-1.5 max-h-1.5 w-1.5 max-w-1.5 rotate-90 stroke-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
