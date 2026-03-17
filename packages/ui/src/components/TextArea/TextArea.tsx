import { cn } from "../../utils/style";

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={cn(
        "border-black-600 bg-black-700 text-text-tertiary min-h-4 min-w-12 resize-y rounded-sm border px-2",
        "hover:border-accent-300 outline-none",
        "focus:border-accent-100 focus:outline-none",
        (props.readOnly || props.disabled) && "pointer-events-none border-gray-300 text-gray-300",
        className,
      )}
      {...props}
    />
  );
};
