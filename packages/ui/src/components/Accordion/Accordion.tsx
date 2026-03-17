import useControllableState from "../../hooks/useControllableState";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";

export type AccordionProps = {
  title: string;
  open?: boolean;
  onChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export const Accordion = ({ title, open, onChange, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useControllableState({
    prop: open,
    onChange: onChange,
    defaultProp: true,
  });

  const handleChangeOpen = () => {
    setIsOpen(!isOpen);
    onChange?.(!isOpen);
  };

  return (
    <div
      className={cn(
        "border-black-600 w-full overflow-hidden border",
        "divide-black-600 divide-y divide-solid",
      )}
    >
      {/* divide-y: 두 번째 자식부터 위쪽에만 선이 들어가서 가운데 이중선 없음 */}
      <div
        className={cn(
          "bg-black-200 flex h-[19px] max-h-[19px] min-h-[19px] w-full cursor-pointer items-center gap-2 px-4",
        )}
        onClick={handleChangeOpen}
      >
        <div className="flex h-4 w-4 items-center justify-center">
          <Icon
            icon="Play"
            size={8}
            className={cn(
              "fill-text-primary h-2 w-2 stroke-0 transition-transform duration-100 ease-out",
              isOpen ? "rotate-90" : "",
            )}
          />
        </div>
        <label
          htmlFor="Transform"
          className="text-text-primary cursor-pointer text-[10px] font-normal"
        >
          {title}
        </label>
      </div>
      {isOpen && (
        <div className="bg-black-400 flex w-full flex-col gap-2 pb-[9px] pl-10 pr-4">
          <section className="mt-4 flex flex-col gap-2">{children}</section>
        </div>
      )}
    </div>
  );
};
