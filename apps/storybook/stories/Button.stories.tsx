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
          "사용자의 클릭 액션을 받는 기본 Button 컴포넌트입니다. disabled 상태를 지원합니다.",
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
type Story = StoryObj<typeof meta>;

export const Deafult: Story = {
  args: {
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};
