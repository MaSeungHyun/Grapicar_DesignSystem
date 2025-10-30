import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@grapicar-studio/design-system";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // variant: {
    //   control: "select",
    //   options: ["primary", "secondary", "outline"],
    // },
    // size: {
    //   control: "select",
    //   options: ["small", "medium", "large"],
    // },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Deafult: Story = {
  args: {
    children: "Default Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
  },
};
