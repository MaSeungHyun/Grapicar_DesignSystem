import { Icon, Toggle } from "@grapicar-studio/design-system";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 클릭 액션을 받는 기본 Toggle 컴포넌트입니다. shape 속성을 통해 모양을 변경할 수 있습니다.",
      },
    },
  },
  argTypes: {
    shape: {
      control: "select",
      options: ["square", "circle"],
      defaultValue: "square",
      table: {
        type: { summary: "square | circle" },
        defaultValue: { summary: "square" },
      },
    },
    pressed: {
      control: "boolean",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    defaultPressed: {
      control: "boolean",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onPressedChange: {
      action: "onPressedChange",
      table: {
        type: { summary: "function" },
      },
    },
    children: {
      control: "text",
      defaultValue: <Icon icon="MousePointer2" size={12} fill="white" />,
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;

type ToggleStory = StoryObj<typeof Toggle>;

export const Default: ToggleStory = {
  render: (args) => {
    const [{ pressed }, setPressed] = useArgs();

    const handlePressedChange = (value: boolean) => {
      setPressed({ pressed: value });
    };

    return (
      <Toggle
        {...args}
        style={{ height: "24px", width: "24px" }}
        pressed={pressed}
        onPressedChange={handlePressedChange}
      >
        <Icon icon="MousePointer2" size={12} fill="white" />
      </Toggle>
    ) as any;
  },
};

export const Circle: ToggleStory = {
  args: {
    pressed: false,
    shape: "circle",
  },
  render: (args) => {
    const [{ pressed }, setPressed] = useArgs();

    const handlePressedChange = (value: boolean) => {
      setPressed({ pressed: value });
    };

    return (
      <Toggle
        {...args}
        shape="circle"
        style={{ height: "30px", width: "30px" }}
        pressed={pressed}
        onPressedChange={handlePressedChange}
      >
        <Icon icon="MousePointer2" size={12} fill="white" />
      </Toggle>
    ) as any;
  },
};
