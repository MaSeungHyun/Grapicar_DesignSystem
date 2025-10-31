import { Input } from "@grapicar-studio/design-system";
import { useState } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 입력을 받는 기본 Input 컴포넌트입니다. readOnly, disabled 상태를 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type InputStory = StoryObj<typeof Input>;

export const Default: InputStory = {
  render: (args) => {
    const [value, setValue] = useState("Grapicar Studio");
    return (<Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />) as any;
  },
};

export const ReadOnly: InputStory = {
  args: {
    readOnly: true,
  },
  render: (args) => {
    const [value, setValue] = useState("Grapicar Studio");
    return (<Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />) as any;
  },
};

export const Disabled: InputStory = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState("Grapicar Studio");
    return (<Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />) as any;
  },
};
