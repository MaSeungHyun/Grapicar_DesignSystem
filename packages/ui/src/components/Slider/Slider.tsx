import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "../../utils/style";

type SliderRootProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  className?: string;
};

const SliderRoot = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderRootProps>(
  (
    {
      className,
      disabled,
      onPointerDown,
      onPointerUp,
      onPointerCancel,
      onLostPointerCapture,
      ...props
    },
    ref,
  ) => {
    const [pressed, setPressed] = React.useState(false);

    return (
      <SliderPrimitive.Root
        ref={ref}
        disabled={disabled}
        data-pressed={pressed && !disabled ? "" : undefined}
        className={cn(
          "group relative flex w-full touch-none select-none items-center",
          "data-disabled:pointer-events-none",
          className,
        )}
        onPointerDown={(e) => {
          if (!disabled) setPressed(true);
          onPointerDown?.(e);
        }}
        onPointerUp={(e) => {
          setPressed(false);
          onPointerUp?.(e);
        }}
        onPointerCancel={(e) => {
          setPressed(false);
          onPointerCancel?.(e);
        }}
        onLostPointerCapture={(e) => {
          setPressed(false);
          onLostPointerCapture?.(e);
        }}
        {...props}
      />
    );
  },
);
SliderRoot.displayName = SliderPrimitive.Root.displayName;

type SliderTrackProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> & {
  className?: string;
};

export const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  SliderTrackProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Track
    ref={ref}
    className={cn(
      "relative h-[3px] w-full grow overflow-hidden rounded-[4px] bg-gray-300",
      "data-disabled:bg-gray-700",

      className,
    )}
    {...props}
  />
));
SliderTrack.displayName = SliderPrimitive.Track.displayName;

type SliderRangeProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range> & {
  className?: string;
};

export const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  SliderRangeProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Range
    ref={ref}
    className={cn("bg-accent-100 absolute h-full", "data-disabled:bg-accent-700", className)}
    {...props}
  />
));
SliderRange.displayName = SliderPrimitive.Range.displayName;

type SliderThumbProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> & {
  className?: string;
};

export const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  SliderThumbProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Thumb
    ref={ref}
    className={cn(
      "bg-accent-100 z-2 relative block h-[12px] w-[12px] cursor-grab rounded-full shadow-sm outline-none",
      /* Root에 data-pressed일 때만 링 (트랙/썸 모두 포인터로 조작 중) */
      "ring-0 ring-accent-100/0 transition-shadow duration-150 ease-out",
      "group-data-pressed:ring-[6px] group-data-pressed:ring-accent-100/30 group-data-pressed:ring-offset-0",
      "focus-visible:outline-none",
      "disabled:bg-accent-700 disabled:pointer-events-none",
      "data-disabled:bg-accent-700 data-disabled:pointer-events-none",
      className,
    )}
    {...props}
  />
));
SliderThumb.displayName = SliderPrimitive.Thumb.displayName;

export type SliderType = typeof SliderRoot & {
  Track: typeof SliderTrack;
  Range: typeof SliderRange;
  Thumb: typeof SliderThumb;
};

export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
  Track: SliderTrack,
  Range: SliderRange,
  Thumb: SliderThumb,
}) as SliderType;

export type SliderProps = SliderRootProps;
export type { SliderRangeProps, SliderThumbProps, SliderTrackProps };
