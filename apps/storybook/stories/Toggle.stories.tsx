import { Icon, Toggle } from "@grapicar-studio/design-system";
import { useState } from "@storybook/preview-api";
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
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;

type ToggleStory = StoryObj<typeof Toggle>;

export const Default: ToggleStory = {
  render: (args) => {
    const [pressed, setPressed] = useState(args.pressed ?? false);

    const handlePressedChange = (value: boolean) => {
      setPressed(value);
    };
    return (
      <Toggle {...args} pressed={pressed} onPressedChange={handlePressedChange}>
        <Icon icon="MousePointer2" size={12} fill="white" />
      </Toggle>
    ) as any;
  },
};

export const Circle: ToggleStory = {
  render: (args) => {
    const [pressed, setPressed] = useState(args.pressed ?? false);

    const handlePressedChange = (value: boolean) => {
      setPressed(value);
    };

    return (
      <Toggle {...args} shape="circle" pressed={pressed} onPressedChange={handlePressedChange}>
        <Icon icon="MousePointer2" size={12} fill="white" />
      </Toggle>
    ) as any;
  },
};
