import * as SelectPrimitives from "@radix-ui/react-select";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";

// Radix Select Root의 반환 타입(ReactNode | Promise<ReactNode>)을
// JSX 컴포넌트로 안전하게 사용할 수 있도록 래핑
const Root: React.FC<React.ComponentPropsWithoutRef<typeof SelectPrimitives.Root>> = (props) => {
  return <SelectPrimitives.Root {...props} />;
};

const SelectTrigger = ({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>) => {
  return (
    <SelectPrimitives.Trigger
      className={cn(
        "border-black-600 bg-black-700 text-text-primary rounded-xs min-h-4 min-w-12 border outline-none",
        "hover:border-accent-300 hover:bg-black-300",
        props.disabled && "border-gray-300 text-gray-400 hover:bg-transparent",
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
          "border-accent-700 bg-black-300 overflow-hidden rounded-sm border p-0 shadow-md shadow-black",
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
    <div className="border-black-600 bg-black-700 text-text-tertiary flex h-full items-center justify-between px-2">
      <SelectPrimitives.Value
        className={cn("placeholder:text-text-tertiary", className)}
        placeholder={placeholder}
        {...props}
      />
      <SelectPrimitives.Icon>
        <Icon icon="Play" className="fill-text-primary h-2 w-2 rotate-90 stroke-transparent" />
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
        "bg-black-300 text-text-primary rounded-none border-none px-3 outline-none",
        "hover:bg-accent-700 hover:border-none",
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

export type SelectRootProps = React.ComponentPropsWithoutRef<typeof SelectPrimitives.Root>;

export type SelectType = {
  Root: React.FC<SelectRootProps>;
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
