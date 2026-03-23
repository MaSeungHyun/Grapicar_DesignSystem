// @ts-nocheck
import { Slider } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "슬라이더를 표시하는 기본 Slider 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    value: {
      control: "array",
      defaultValue: [50],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

type SliderStory = StoryObj<typeof Slider>;

export const Default: SliderStory = {
  args: {
    value: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    disabled: false,
    minStepsBetweenThumbs: 0,
    defaultValue: [0],
    onValueChange: () => {},
    onValueCommit: () => {},
    inverted: false,
    form: "",
    name: "slider",
    dir: "ltr",
  },
  render: (args) => {
    const [value, setValue] = React.useState([50]);

    const handleValueChange = (value: number[]) => {
      setValue(value);
    };

    return (
      <Slider
        className="h-10 min-w-[150px]"
        {...args}
        value={value}
        onValueChange={handleValueChange}
      >
        <Slider.Track>
          <Slider.Range></Slider.Range>
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    );
  },
};
