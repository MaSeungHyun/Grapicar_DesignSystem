import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "../../utils/style";

type SliderRootProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  className?: string;
};

const SliderRoot = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderRootProps>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "group relative flex w-full touch-none select-none items-center",
        "data-disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  ),
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
      /* Thumb 기준: 키보드 포커스·클릭/드래그 시 바깥쪽 반투명 링 */
      "ring-accent-100/0 ring-0 transition-shadow duration-150 ease-out",
      "focus-visible:ring-accent-100/35 focus-visible:ring-8 focus-visible:ring-offset-0",
      "active:ring-accent-100/30 active:ring-[6px] active:ring-offset-0",
      /* Radix가 주는 상태(버전에 따라 있을 수 있음) */
      "data-[state=active]:ring-accent-100/30 data-[state=active]:ring-[6px] data-[state=active]:ring-offset-0",
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
