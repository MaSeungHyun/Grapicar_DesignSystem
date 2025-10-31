import { Icon, Toggle } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    docs: {
      description: {
        component: "사용자 검색을 위한 기본 SearchBar 컴포넌트로, Icon이 추가된 Input입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultPressed: {
      control: "boolean",
      description: "기본 체크 상태",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    shape: {
      control: "select",
      options: ["square", "circle"],
      description: "토글 모양",
      table: {
        type: { summary: "square | circle" },
        defaultValue: { summary: "square" },
      },
    },
    pressed: {
      control: "boolean",
      description: "체크 상태",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onPressedChange: {
      control: undefined,
      description: "체크 상태 변경 이벤트 핸들러",
      table: {
        type: { summary: "React.Dispatch<React.SetStateAction<boolean>>" },
      },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Icon icon="MousePointer2" className="fill-white" size={16} onClick={() => {}} />,
    pressed: false,
    shape: "square",
    onPressedChange: (value: boolean) => {
      console.log(value);
    },
  },
};
