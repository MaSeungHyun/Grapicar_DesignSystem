import * as DialogPrimitives from "@radix-ui/react-dialog";
import { cn } from "../../utils/style";

const Root = (props: React.ComponentProps<typeof DialogPrimitives.Root>) => (
  <DialogPrimitives.Root {...props} />
);

type DialogTriggerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitives.Trigger> & {
  className?: string;
};

const DialogTrigger = ({
  children,
  className = "",
  ...props
}: DialogTriggerProps): React.ReactElement => {
  return (
    <DialogPrimitives.Trigger className={cn(className)} {...props}>
      {children}
    </DialogPrimitives.Trigger>
  );
};

type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content> & {
  children: React.ReactNode;
  className?: string;
  outsideClickClose?: boolean;
};

const DialogContent = ({
  children,
  className = "",
  outsideClickClose = false,
  ...props
}: DialogContentProps): React.ReactElement => {
  return (
    <DialogPrimitives.Portal>
      <DialogPrimitives.Overlay className="z-1 absolute inset-0 left-0 top-0 bg-black/90" />
      <DialogPrimitives.Content
        onPointerDownOutside={(e) => {
          if (!outsideClickClose) {
            e.preventDefault();
          }
        }}
        className={cn(
          "bg-black-900 z-2 absolute left-1/2 top-1/2 flex min-h-[200px] min-w-[420px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[14px] border border-gray-800 px-6 py-4 shadow-md shadow-black/70",
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitives.Content>
    </DialogPrimitives.Portal>
  );
};

type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title> & {
  children: React.ReactNode;
  className?: string;
};

const DialogTitle = ({
  children,
  className = "",
  ...props
}: DialogTitleProps): React.ReactElement => {
  return (
    <DialogPrimitives.Title
      className={cn("mb-5 text-xl font-bold text-white", className)}
      {...props}
    >
      {children}
    </DialogPrimitives.Title>
  );
};

type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitives.Description
> & {
  children: React.ReactNode;
  className?: string;
};
const DialogDescription = ({
  children,
  className = "",
  ...props
}: DialogDescriptionProps): React.ReactElement => {
  return (
    <DialogPrimitives.Description className={cn("text-lg text-gray-200", className)} {...props}>
      {children}
    </DialogPrimitives.Description>
  );
};

type DialogCloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitives.Close> & {
  className?: string;
};
const DialogClose = ({ className = "", ...props }: DialogCloseProps): React.ReactElement => {
  return (
    <DialogPrimitives.Close
      className={cn("relative w-full cursor-pointer", className)}
      {...props}
    />
  );
};

type DialogFooterProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
  className?: string;
};
const DialogFooter = ({
  children,
  className = "",
  ...props
}: DialogFooterProps): React.ReactElement => {
  return (
    <div
      className={cn(
        "relative bottom-0 left-0 flex min-h-[40px] w-full flex-1 items-end",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Dialog = {
  Root,
  Trigger: DialogTrigger,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  Close: DialogClose,
  Content: DialogContent,
};
