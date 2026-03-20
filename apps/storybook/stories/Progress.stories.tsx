// @ts-nocheck
import { Progress } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 입력을 받는 기본 Progress 컴포넌트입니다. readOnly, disabled 상태를 지원합니다.",
      },
    },
  },
  argTypes: {
    value: {
      control: "number",
      defaultValue: 0,
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;

type ProgressStory = StoryObj<typeof Progress>;

export const Default: ProgressStory = {
  args: {
    value: 55,
  },
  render: (args) => {
    return <Progress className="w-[300px]" {...args} />;
  },
};
