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
        component: "사용자 검색을 위한 기본 SearchBar 컴포넌트로, Icon이 추가된 Input입니다.",
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
        <Icon icon="MousePointer2" size={12} className="fill-white" />
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
        <Icon icon="MousePointer2" size={12} className="fill-white" />
      </Toggle>
    ) as any;
  },
};
