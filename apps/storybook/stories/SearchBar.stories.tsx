import { SearchBar } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "사용자 검색을 위한 기본 SearchBar 컴포넌트로, Icon이 추가된 Input입니다.",
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
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "SearchBar",
  },
};

export const Large: Story = {
  args: {
    value: "SearchBar",
  },
};
