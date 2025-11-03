import { Checkbox } from "@grapicar-studio/design-system";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Checkbox 컴포넌트로, 체크박스를 표시하는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type CheckboxStory = StoryObj<typeof meta>;

export const Default: CheckboxStory = {
  args: {
    value: false,
  } as any,
  render: (args) => {
    const [{ value }, setValue] = useArgs();

    const handleValueChange = (newValue: boolean) => {
      setValue({ value: newValue });
    };

    return (<Checkbox {...args} value={value} onChange={handleValueChange} />) as any;
  },
};
