import * as SelectPrimitives from "@radix-ui/react-select";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";

const Root: React.FC<React.ComponentPropsWithoutRef<typeof SelectPrimitives.Root>> = (
  props,
): React.ReactNode => {
  return <SelectPrimitives.Root {...props} />;
};

const SelectTrigger = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>): React.ReactNode => {
  return (
    <SelectPrimitives.Trigger
      className={cn(
        "bg-black-700 text-text-primary group min-h-4 min-w-12 rounded-[2px] border border-gray-700 p-0 px-0 outline-none",
        !props.disabled && "hover:bg-black-300",
        "data-disabled:cursor-not-allowed data-disabled:opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitives.Trigger>
  );
};

const SelectContent = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>): React.ReactNode => {
  return (
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content
        className={cn(
          "bg-black-700 border-px shadow-black-700 overflow-hidden rounded-[2px] border-gray-700 p-0 shadow-md outline-none",
          className,
        )}
        {...props}
      >
        <SelectPrimitives.ScrollUpButton className="flex items-center justify-center">
          <Icon icon="ChevronUp" className="text-text-tertiary" />
        </SelectPrimitives.ScrollUpButton>

        <SelectPrimitives.Viewport>{children}</SelectPrimitives.Viewport>

        <SelectPrimitives.ScrollDownButton className="flex items-center justify-center">
          <Icon icon="ChevronDown" className="text-text-tertiary" />
        </SelectPrimitives.ScrollDownButton>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  );
};

type SelectValueProps = React.ComponentPropsWithoutRef<typeof SelectPrimitives.Value> & {
  placeholder?: string;
};

const SelectValue = ({
  className = "",
  placeholder,
  ...props
}: SelectValueProps): React.ReactNode => {
  return (
    <div
      className={cn(
        "text-text-tertiary flex h-full w-full items-center justify-between gap-8 pl-[3px] pr-[3px] text-[10px]",
        "group-data-disabled:text-gray-400",
        className,
      )}
    >
      <SelectPrimitives.Value placeholder={placeholder} {...props} />
      <SelectPrimitives.Icon>
        <Icon
          icon="Play"
          className="fill-text-primary group-data-disabled:fill-gray-400 h-2 w-2 rotate-90 stroke-transparent"
        />
      </SelectPrimitives.Icon>
    </div>
  );
};

const SelectGroup = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Group>): React.ReactNode => {
  return (
    <SelectPrimitives.Group className={cn("flex flex-col gap-1", className)} {...props}>
      {children}
    </SelectPrimitives.Group>
  );
};

const SelectItem = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>): React.ReactNode => {
  return (
    <SelectPrimitives.Item
      className={cn(
        "text-text-secondary rounded-none border-none px-3 py-1 text-[10px] outline-none",
        "hover:bg-accent-700 hover:border-none",
        className,
      )}
      {...props}
    >
      <SelectPrimitives.ItemText className="text-text-tertiary cursor-default">
        {children}
      </SelectPrimitives.ItemText>
    </SelectPrimitives.Item>
  );
};

const SelectSeparator = ({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Separator>): React.ReactNode => {
  return (
    <div className="px-1">
      <SelectPrimitives.Separator
        className={cn("my-2 h-[0.5px] w-full bg-gray-300", className)}
        {...props}
      />
    </div>
  );
};

const SelectLabel = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Label>): React.ReactNode => {
  return (
    <SelectPrimitives.Label
      className={cn("bg-black-900 text-text-primary px-2", className)}
      {...props}
    >
      {children}
    </SelectPrimitives.Label>
  );
};

export type SelectRootProps = React.ComponentPropsWithoutRef<typeof SelectPrimitives.Root>;

export type SelectType = {
  Root: React.ComponentType<SelectRootProps>;
  Trigger: typeof SelectTrigger;
  Value: typeof SelectValue;
  Content: typeof SelectContent;
  Group: typeof SelectGroup;
  Item: typeof SelectItem;
  Separator: typeof SelectSeparator;
  Label: typeof SelectLabel;
};

export const Select: SelectType = {
  Root,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Separator: SelectSeparator,
  Label: SelectLabel,
};
