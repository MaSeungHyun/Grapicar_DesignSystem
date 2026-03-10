import { Button } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자의 클릭 액션을 받는 기본 Button 컴포넌트입니다. 여러 Status에 대응하는 스타일과 각 스타일의 disabled 상태를 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 내용",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type ButtonStory = StoryObj<typeof Button>;

export const Default: ButtonStory = {
  args: {
    children: "Button",
  },
};

export const Primary: ButtonStory = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: ButtonStory = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Danger: ButtonStory = {
  args: {
    children: "Button",
    variant: "danger",
  },
};

export const Disabled: ButtonStory = {
  args: {
    children: "Button",
    disabled: true,
  },
};
