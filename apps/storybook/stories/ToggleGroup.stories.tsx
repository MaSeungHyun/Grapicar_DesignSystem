// @ts-nocheck - React 18 vs Storybook key/ReactNode 타입 불일치로 인한 스토리 전용 비검사
import { Icon, ToggleGroup } from "@grapicar-studio/design-system";
import { cn } from "@grapicar-studio/design-system/src/utils/style.js";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        component: "ToggleGroup 컴포넌트로, ToggleGroupItem을 관리하는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "토글 그룹 타입",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "토글 그룹 방향",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },
    value: {
      control: "text",
      description: "선택된 값",
    },
    onValueChange: {
      control: undefined,
      description: "값 변경 핸들러",
    },
  },
} satisfies Meta<typeof ToggleGroup.Root>;

export default meta;

type ToggleGroupStory = StoryObj<typeof meta>;

const MULTIPLE_VALUES = ["Bold", "Italic", "Underline"];

export const Default: ToggleGroupStory = {
  args: {
    type: "multiple",
    orientation: "horizontal",
    value: ["Bold", "Underline"],
  } as any,
  render: (args) => {
    const [{ value }, setValue] = useArgs();

    const handleValueChange = (newValue: string[] | string | undefined) => {
      setValue({ value: newValue });
    };

    return (
      <ToggleGroup.Root {...args} onValueChange={handleValueChange}>
        {MULTIPLE_VALUES.map((item, index) => (
          <ToggleGroup.Item
            key={item}
            value={item}
            className={cn("h-[30px] w-[30px]", value.includes(item) && "border-accent-100")}
          >
            <Icon
              icon={item}
              size={ICON_SIZE}
              style={{
                strokeWidth: index === 0 ? 3 : index === MULTIPLE_VALUES.length - 1 ? 2 : 2,
              }}
            />
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    ) as any;
  },
};

const ICON_SIZE = 18;

export const Vertical: ToggleGroupStory = {
  args: {
    type: "single",
    orientation: "vertical",
    value: "translate",
  } as any,
  render: (args) => {
    const [{ value }, setValue] = useArgs();

    const handleValueChange = (result: string) => {
      if (!result) return;

      setValue({ value: result });
    };
    return (
      <ToggleGroup.Root
        {...args}
        onValueChange={handleValueChange}
        style={{ borderRadius: "3px", overflow: "hidden" }}
      >
        <ToggleGroup.Item
          value="translate"
          className={cn(
            "h-[40px] w-[50px] rounded-t-[3px]",
            value === "translate" && "border-accent-100",
          )}
        >
          <Icon icon="Move3d" size={ICON_SIZE} />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="rotate"
          className={cn("h-[40px] w-[50px]", value === "rotate" && "border-accent-100")}
        >
          <Icon icon="Rotate3d" size={ICON_SIZE} />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="scale"
          className={cn(
            "h-[40px] w-[50px] rounded-b-[3px]",
            value === "scale" && "border-accent-100",
          )}
        >
          <Icon icon="Scale3d" size={ICON_SIZE} />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    ) as any;
  },
};
