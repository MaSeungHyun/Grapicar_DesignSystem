import { Input } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";

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
  argTypes: {
    value: {
      control: "text",
      description: "값",
      table: {
        type: { summary: "string" },
      },
    },
    readOnly: {
      control: "boolean",
      description: "읽기 모드",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
    onKeyDown: {
      control: undefined,
      description: "키 입력 이벤트 핸들러 (단축키 비활성화 적용 상태)",
      table: {
        type: { summary: "React.KeyboardEvent<HTMLInputElement>" },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Grapicar Studio",
  },
};

export const Disabled: Story = {
  args: {
    value: "Disabled Input",
    disabled: true,
  },
};
