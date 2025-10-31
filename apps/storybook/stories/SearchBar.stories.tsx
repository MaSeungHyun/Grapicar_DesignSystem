import { SearchBar } from "@grapicar-studio/design-system";
import { useState } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

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
} satisfies Meta<typeof SearchBar>;

export default meta;

type SearchBarStory = StoryObj<typeof SearchBar>;

export const Default: SearchBarStory = {
  render: (args) => {
    const [value, setValue] = useState("Grapicar Studio");

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (<SearchBar {...args} value={value} onChange={handleChangeValue} />) as any;
  },
};
