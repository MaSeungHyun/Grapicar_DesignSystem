import { Input } from "@grapicar-studio/design-system";
import { useArgs } from "@storybook/preview-api";
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
  argTypes: {
    value: {
      control: "text",
      defaultValue: "Grapicar Studio",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    onChange: {
      action: "onChange",
      table: {
        type: { summary: "function" },
      },
    },
    placeholder: {
      control: "text",
      defaultValue: "Enter your text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Enter your text" },
      },
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type InputStory = StoryObj<typeof Input>;

export const Default: InputStory = {
  args: {
    value: "Grapicar Studio",
    placeholder: "Enter your text",
    readOnly: false,
    disabled: false,
  },
  render: (args) => {
    const [{ value }, setValue] = useArgs();
    return (
      <Input {...args} value={value} onChange={(e) => setValue({ value: e.target.value })} />
    ) as any;
  },
};

export const ReadOnly: InputStory = {
  args: {
    readOnly: true,
  },
  render: (args) => {
    const [{ value }, setValue] = useArgs();
    return (
      <Input {...args} value={value} onChange={(e) => setValue({ value: e.target.value })} />
    ) as any;
  },
};

export const Disabled: InputStory = {
  args: {
    value: "Grapicar Studio",
    readOnly: true,
  },
  render: (args) => {
    const [{ value }, setValue] = useArgs();
    return (<Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />) as any;
  },
};
