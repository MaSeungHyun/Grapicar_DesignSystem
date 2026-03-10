import * as SelectPrimitives from "@radix-ui/react-select";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";

const Root = SelectPrimitives.Root;

const SelectTrigger = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>) => {
  return (
    <SelectPrimitives.Trigger
      className={cn(
        "text-text-primary rounded-xs min-h-4 min-w-12 border border-gray-200 bg-black px-2 outline-none",
        "hover:bg-black-300 border-gray-100",
        props.disabled && "border-gray-300 text-gray-400 hover:bg-none",
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
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>) => {
  return (
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content
        className={cn(
          "bg-black-300 border-accent-700 overflow-hidden rounded-sm border p-0 shadow-md shadow-black",
          className,
        )}
        {...props}
      >
        <SelectPrimitives.ScrollUpButton className="flex items-center justify-center">
          <Icon icon="ChevronUp" />
        </SelectPrimitives.ScrollUpButton>

        <SelectPrimitives.Viewport>{children}</SelectPrimitives.Viewport>

        <SelectPrimitives.ScrollDownButton className="flex items-center justify-center">
          <Icon icon="ChevronDown" />
        </SelectPrimitives.ScrollDownButton>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  );
};

type SelectValueProps = React.ComponentPropsWithoutRef<typeof SelectPrimitives.Value> & {
  placeholder?: string;
};

const SelectValue = ({ className = "", placeholder, ...props }: SelectValueProps) => {
  return (
    <div className="flex items-center justify-between">
      <SelectPrimitives.Value placeholder={placeholder} {...props} />
      <SelectPrimitives.Icon>
        <Icon icon="ChevronDown" />
      </SelectPrimitives.Icon>
    </div>
  );
};

const SelectGroup = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Group>) => {
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
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>) => {
  return (
    <SelectPrimitives.Item
      className={cn(
        "bg-black-300 hover:bg-accent-700 rounded-none border-none px-3 text-white outline-none hover:border-none",
        className,
      )}
      {...props}
    >
      <SelectPrimitives.ItemText className="cursor-default">{children}</SelectPrimitives.ItemText>
    </SelectPrimitives.Item>
  );
};

const SelectSeparator = ({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Separator>) => {
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
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Label>) => {
  return (
    <SelectPrimitives.Label className={cn("bg-black-800 px-1 text-gray-100", className)} {...props}>
      {children}
    </SelectPrimitives.Label>
  );
};

export const Select = {
  Root,
  Trigger: SelectTrigger,
  Value: SelectValue,

  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,

  Separator: SelectSeparator,
  Label: SelectLabel,
};
