// @ts-nocheck
import { Spinner } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "로딩 상태를 표시하는 기본 Spinner 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    size: {
      control: "number",
      defaultValue: 70,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;

type SpinnerStory = StoryObj<typeof Spinner>;

export const Default: SpinnerStory = {
  args: {
    size: 70,
  },
  render: (args) => {
    return <Spinner {...args} />;
  },
};
