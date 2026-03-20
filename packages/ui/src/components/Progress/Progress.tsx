import { Progress as ProgressPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "../../utils/style";

export type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

export function Progress({
  className,
  value,
  ...props
}: ProgressProps): React.ReactElement {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-black-300 relative h-[3px] w-full overflow-hidden rounded-[4px]",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-[3px] bg-[linear-gradient(to_right,var(--color-accent-600)_0%,var(--color-accent-100)_100%)] transition-all"
        style={{ width: `${value || 0}%` }}
      />
    </ProgressPrimitive.Root>
  );
}
