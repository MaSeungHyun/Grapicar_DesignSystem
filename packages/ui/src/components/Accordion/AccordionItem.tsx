import { cn } from "../../utils/style";

export type AccordionItemProps = {
  direction: "vertical" | "horizontal";
  title: string;
  children: React.ReactNode;
};
export default function AccordionItem({
  direction = "horizontal",
  title,
  children,
}: AccordionItemProps) {
  return (
    <div className={cn("flex flex-col", direction === "vertical" ? "flex-col gap-2" : "flex-row")}>
      <div className="flex flex-1 items-center">
        <label className="text-text-tertiary text-[10px] font-normal">{title}</label>
      </div>
      <div className="flex w-full flex-1 items-center">{children}</div>
    </div>
  );
}
