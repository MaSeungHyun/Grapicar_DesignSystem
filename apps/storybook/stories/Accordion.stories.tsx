// @ts-nocheck
import { Accordion, type AccordionProps } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Accordion 컴포넌트로, 확장 가능한 컨텐츠를 표시하는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type AccordionStory = StoryObj<typeof meta>;

export const Default: AccordionStory = {
  args: {
    title: "Accordion",
  } as any,
  render: ((args) => {
    const { children: _children, ...accordionArgs } = args as AccordionProps & {
      children?: React.ReactNode;
    };
    return (
      <div style={{ width: "400px", height: "100px" }}>
        <Accordion {...accordionArgs}></Accordion>
      </div>
    );
  }) as any,
};
