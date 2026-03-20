import * as MenuBarPrimitive from "@radix-ui/react-menubar";

import { cn } from "../../utils/style";

import { forwardRef } from "react";
import { Icon } from "../Icon";

const MenuBarRoot = MenuBarPrimitive.Root;

const MenuBarPortal = MenuBarPrimitive.Portal;

const MenuBarSub = MenuBarPrimitive.Sub;

const MenuBarMenu = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Menu>): React.ReactNode => (
  <MenuBarPrimitive.Menu {...props} />
);

const MenuBarTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Trigger>): React.ReactNode => (
  <MenuBarPrimitive.Trigger
    className={cn(
      "relative box-border inline-flex h-full items-center justify-center px-4 text-[12px] leading-[18px] text-[#9E9E9E] outline-none outline-0 [font-family:'Noto_Sans_KR',sans-serif] hover:text-white data-[state=open]:text-[#F0F0F0] data-[state=open]:after:pointer-events-none data-[state=open]:after:absolute data-[state=open]:after:bottom-[-1px] data-[state=open]:after:left-1/2 data-[state=open]:after:h-px data-[state=open]:after:w-[30px] data-[state=open]:after:-translate-x-1/2 data-[state=open]:after:bg-[linear-gradient(90deg,#062133_0%,#1EA7FF_51%,#062133_100%)] data-[state=open]:after:content-['']",
      className,
    )}
    {...props}
  />
);
MenuBarTrigger.displayName = MenuBarPrimitive.Trigger.displayName;

const MenuBarContent = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Content>
>(({ className, ...props }, ref) => (
  <MenuBarPortal>
    <MenuBarPrimitive.Content
      ref={ref}
      className={cn(
        "bg-black-300 border-accent-700 overflow-hidden rounded-[4px] border !p-0 !px-0 shadow-[0px_0px_3px_rgba(30,167,255,0.5)] will-change-[opacity,transform]",
        className,
      )}
      {...props}
    />
  </MenuBarPortal>
));
MenuBarContent.displayName = MenuBarPrimitive.Content.displayName;

const MenuBarItem = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Item>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.Item
    ref={ref}
    className={cn(
      "data-[highlighted]:after:bg-accent-700 group relative flex h-[24px] w-full min-w-0 select-none items-center justify-between gap-2 whitespace-nowrap px-[12px] text-[10px] leading-[15px] text-[#C8C8C8] outline-none [font-family:'Noto_Sans_KR',sans-serif] hover:text-[#F0F0F0] data-[disabled]:pointer-events-none data-[disabled]:text-[#7F7F7F] data-[highlighted]:text-[#F0F0F0] data-[highlighted]:before:pointer-events-none data-[highlighted]:before:absolute data-[highlighted]:before:left-[2px] data-[highlighted]:before:top-[calc(50%-7.5px)] data-[highlighted]:before:z-0 data-[highlighted]:before:h-px data-[highlighted]:before:w-[26px] data-[highlighted]:before:bg-[linear-gradient(90deg,#062133_0%,#1EA7FF_51%,#062133_100%)] data-[highlighted]:before:content-[''] data-[highlighted]:after:pointer-events-none data-[highlighted]:after:absolute data-[highlighted]:after:inset-x-0 data-[highlighted]:after:top-1/2 data-[highlighted]:after:z-0 data-[highlighted]:after:h-[24px] data-[highlighted]:after:-translate-y-1/2 data-[highlighted]:after:content-[''] [&>*]:relative [&>*]:z-10",
      className,
    )}
    {...props}
  />
));

const MenuBarShortcut = forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group-data-[disabled]:text-text-tertiary/50 group-data-[highlighted]:text-text-primary ml-auto pl-5 text-[#9E9E9E]",
        className,
      )}
      {...props}
    />
  ),
);
MenuBarShortcut.displayName = "MenuBarShortcut";

const MenuBarSubTrigger = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <MenuBarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "data-[highlighted]:after:bg-accent-700 group relative flex h-[24px] w-full min-w-0 select-none items-center justify-between gap-2 whitespace-nowrap px-[12px] text-[10px] leading-[15px] text-[#C8C8C8] outline-none [font-family:'Noto_Sans_KR',sans-serif] hover:text-[#F0F0F0] data-[disabled]:pointer-events-none data-[disabled]:text-[#7F7F7F] data-[highlighted]:text-[#F0F0F0] data-[highlighted]:before:pointer-events-none data-[highlighted]:before:absolute data-[highlighted]:before:left-[2px] data-[highlighted]:before:top-[calc(50%-7.5px)] data-[highlighted]:before:z-0 data-[highlighted]:before:h-px data-[highlighted]:before:w-[26px] data-[highlighted]:before:bg-[linear-gradient(90deg,#062133_0%,#1EA7FF_51%,#062133_100%)] data-[highlighted]:before:content-[''] data-[highlighted]:after:pointer-events-none data-[highlighted]:after:absolute data-[highlighted]:after:inset-x-0 data-[highlighted]:after:top-1/2 data-[highlighted]:after:z-0 data-[highlighted]:after:h-[24px] data-[highlighted]:after:-translate-y-1/2 data-[highlighted]:after:content-[''] [&>*]:relative [&>*]:z-10",
      className,
    )}
    {...props}
  >
    <span className="relative z-10 w-full whitespace-nowrap">{children}</span>
    <div className="group-data-[disabled]:text-text-tertiary/50 group-data-[highlighted]:text-text-primaryml-auto pl-4">
      <Icon icon="ChevronRight" />
    </div>
  </MenuBarPrimitive.SubTrigger>
));
MenuBarSubTrigger.displayName = MenuBarPrimitive.SubTrigger.displayName;

const MenuBarSubContent = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenuBarPortal>
    <MenuBarPrimitive.SubContent
      ref={ref}
      className={cn(
        "overflow-hidden rounded-[4px] border border-[#4B4B4B] bg-[#3C3C3C] p-[1px] shadow-[0px_0px_3px_rgba(30,167,255,0.5)] will-change-[opacity,transform]",
        className,
      )}
      {...props}
    />
  </MenuBarPortal>
));
MenuBarSubContent.displayName = MenuBarPrimitive.SubContent.displayName;

const MenuBarSeparator = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.Separator
    ref={ref}
    className={cn("mx-[8px] my-[1px] h-0 border-t border-[#9E9E9E]", className)}
    {...props}
  />
));
MenuBarSeparator.displayName = MenuBarPrimitive.Separator.displayName;

const MenuBarCheckboxItem = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.CheckboxItem>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "text-violet11 data-[highlighted]:bg-accent-400/30 data-[disabled]:text-mauve8 data-[disabled]:text-gc-gray-500 hover:bg-accent-400/30 group relative flex h-[25px] select-none items-center rounded-[3px] pl-[10px] pr-[5px] text-[13px] leading-none outline-none hover:text-white data-[disabled]:pointer-events-none data-[highlighted]:text-white",
      className,
    )}
    {...props}
  />
));
MenuBarCheckboxItem.displayName = MenuBarPrimitive.CheckboxItem.displayName;

const MenuBarItemIndicator = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.ItemIndicator>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.ItemIndicator
    ref={ref}
    className={cn("absolute left-0 inline-flex w-[25px] items-center justify-center", className)}
    {...props}
  />
));
MenuBarItemIndicator.displayName = MenuBarPrimitive.ItemIndicator.displayName;

const MenuBarLabel = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Label>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.Label
    ref={ref}
    className={cn("text-mauve11 rounded-xs pl-[10px] text-xs leading-[25px] text-white", className)}
    {...props}
  />
));
MenuBarLabel.displayName = MenuBarPrimitive.Label.displayName;

const MenuBarRadioGroup = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.RadioGroup>
>(({ ...props }, ref) => <MenuBarPrimitive.RadioGroup ref={ref} {...props} />);
MenuBarRadioGroup.displayName = MenuBarPrimitive.RadioGroup.displayName;

const MenuBarRadioItem = forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.RadioItem>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 hover:bg-accent-400/30 relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none hover:text-white data-[disabled]:pointer-events-none data-[highlighted]:text-white",
      className,
    )}
    {...props}
  />
));
MenuBarRadioGroup.displayName = MenuBarPrimitive.RadioItem.displayName;

export const MenuBar = {
  Root: MenuBarRoot,
  Menu: MenuBarMenu,
  Item: MenuBarItem,
  Trigger: MenuBarTrigger,
  Portal: MenuBarPortal,
  Content: MenuBarContent,
  Sub: MenuBarSub,
  SubTrigger: MenuBarSubTrigger,
  SubContent: MenuBarSubContent,
  Separator: MenuBarSeparator,
  CheckboxItem: MenuBarCheckboxItem,
  ItemIndicator: MenuBarItemIndicator,
  RadioGroup: MenuBarRadioGroup,
  RadioItem: MenuBarRadioItem,
  Label: MenuBarLabel,
  Shortcut: MenuBarShortcut,
};
