import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "../../utils/style";

import { forwardRef } from "react";
import { Icon } from "../Icon";

const DropdownMenuRoot = DropdownPrimitive.Root;

const DropdownMenuTrigger = DropdownPrimitive.Trigger;

const DropdownMenuPortal = DropdownPrimitive.Portal;

const DropdownMenuSub = DropdownPrimitive.Sub;

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> & {
    outsideClickClose?: boolean;
  }
>(({ className, outsideClickClose = false, ...props }, ref) => (
  <DropdownMenuPortal>
    <DropdownPrimitive.Content
      ref={ref}
      className={cn(
        "text-text-primary bg-black-300 ring-accent-100/20 data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade z-9000 ring-`1 min-w-[180px] rounded-[4px] border-none pb-[9px] pt-[4px] shadow-[0_0_8px_rgba(0,200,255,0.45)] will-change-[opacity,transform]",
        className,
      )}
      onPointerDownOutside={(e) => {
        if (!outsideClickClose) {
          e.preventDefault();
        }
      }}
      {...props}
    />
  </DropdownMenuPortal>
));
DropdownMenuContent.displayName = DropdownPrimitive.Content.displayName;

const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(
      "text-text-tertiary data-[highlighted]:bg-accent-700 data-[disabled]:text-text-tertiary/50 hover:bg-accent-700 data-[highlighted]:text-text-primary group relative flex h-[25px] select-none items-center rounded-[3px] pl-[10px] pr-[5px] text-[10px] leading-none outline-none",
      className,
    )}
    {...props}
  />
));

const DropdownMenuShortcut = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-text-primary group-data-[disabled]:text-text-tertiary/50 group-data-[highlighted]:text-text-primary ml-auto pl-5",
      className,
    )}
    {...props}
  />
));
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

const DropdownMenuSubTrigger = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "text-text-tertiary data-[state=open]:bg-violet4 data-[disabled]:text-text-tertiary/50 data-[state=open]:bg-accent-700 hover:bg-accent-700 data-[disabled]:text-gc-gray-500 group relative flex h-[25px] select-none items-center rounded-[3px] pl-[10px] pr-[5px] text-[10px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:data-[state=open]:text-white data-[highlighted]:text-white data-[state=open]:text-white",
      className,
    )}
    {...props}
  >
    {children}
    <div className="text-text-primary group-data-[disabled]:text-text-tertiary/50 group-data-[highlighted]:text-text-primary ml-auto pl-5">
      <Icon icon="ChevronRight" />
    </div>
  </DropdownPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPortal>
    <DropdownPrimitive.SubContent
      ref={ref}
      className={cn(
        "text-text-primary bg-black-300 ring-accent-100/20 data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade z-9000 min-w-[140px] rounded-[4px] border-none pb-[9px] pt-[4px] shadow-[0_0_8px_rgba(0,200,255,0.45)] ring-1 will-change-[opacity,transform]",
        className,
      )}
      {...props}
    />
  </DropdownMenuPortal>
));
DropdownMenuSubContent.displayName = DropdownPrimitive.SubContent.displayName;

const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn("mx-auto my-[3px] flex h-px w-11/12 self-center bg-gray-700", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownPrimitive.Separator.displayName;

const DropdownMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "text-violet11 data-[highlighted]:bg-accent-700 data-[disabled]:text-mauve8 data-[disabled]:text-gc-gray-500 hover:bg-accent-700 group relative flex h-[25px] select-none items-center rounded-[3px] pl-[10px] pr-[5px] text-[13px] leading-none outline-none hover:text-white data-[disabled]:pointer-events-none data-[highlighted]:text-white",
      className,
    )}
    {...props}
  />
));
DropdownMenuCheckboxItem.displayName = DropdownPrimitive.CheckboxItem.displayName;

const DropdownMenuItemIndicator = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.ItemIndicator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.ItemIndicator
    ref={ref}
    className={cn("absolute left-0 inline-flex w-[25px] items-center justify-center", className)}
    {...props}
  />
));
DropdownMenuItemIndicator.displayName = DropdownPrimitive.ItemIndicator.displayName;

const DropdownMenuLabel = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cn("text-mauve11 rounded-xs pl-[10px] text-xs leading-[25px] text-white", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownPrimitive.Label.displayName;

const DropdownMenuRadioGroup = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioGroup>
>(({ ...props }, ref) => <DropdownPrimitive.RadioGroup ref={ref} {...props} />);
DropdownMenuRadioGroup.displayName = DropdownPrimitive.RadioGroup.displayName;

const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.RadioItem
    ref={ref}
    className={cn(
      "text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 hover:bg-accent-700 relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none hover:text-white data-[disabled]:pointer-events-none data-[highlighted]:text-white",
      className,
    )}
    {...props}
  />
));
DropdownMenuRadioGroup.displayName = DropdownPrimitive.RadioItem.displayName;

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Item: DropdownMenuItem,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
  Content: DropdownMenuContent,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Separator: DropdownMenuSeparator,
  CheckboxItem: DropdownMenuCheckboxItem,
  ItemIndicator: DropdownMenuItemIndicator,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Shortcut: DropdownMenuShortcut,
};
