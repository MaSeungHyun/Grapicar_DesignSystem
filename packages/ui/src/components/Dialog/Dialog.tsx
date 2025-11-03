import * as DialogPrimitives from "@radix-ui/react-dialog";
import { cn } from "../../utils/style";

const Root = DialogPrimitives.Root;

type DialogTriggerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitives.Trigger> & {
  children: React.ReactNode;
  className?: string;
};

const DialogTrigger = ({ children, className = "", ...props }: DialogTriggerProps) => {
  return (
    <DialogPrimitives.Trigger className={cn("cursor-pointer", className)} {...props}>
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
}: DialogContentProps) => {
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
          "bg-black-300 z-2 absolute left-1/2 top-1/2 min-h-[200px] min-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-md border border-cyan-500 px-6 py-4 shadow-md shadow-black/70",
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

const DialogTitle = ({ children, className = "", ...props }: DialogTitleProps) => {
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
const DialogDescription = ({ children, className = "", ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitives.Description className={cn("text-lg text-gray-200", className)} {...props}>
      {children}
    </DialogPrimitives.Description>
  );
};

type DialogCloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitives.Close> & {
  className?: string;
};
const DialogClose = ({ className = "", ...props }: DialogCloseProps) => {
  return <DialogPrimitives.Close className={cn("cursor-pointer", className)} {...props} />;
};

type DialogFooterProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
  className?: string;
};
const DialogFooter = ({ children, className = "", ...props }: DialogFooterProps) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 flex min-h-[40px] w-full items-center px-6",
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
