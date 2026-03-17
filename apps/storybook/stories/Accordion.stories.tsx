// @ts-nocheck
import {
  Accordion,
  AccordionItem,
  type AccordionProps,
  Input,
  Select,
  TextArea,
} from "@grapicar-studio/design-system";
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
      <div style={{ width: "400px", height: "250px" }}>
        <Accordion {...accordionArgs}>
          <AccordionItem direction="vertical" title={"Text"}>
            <TextArea className="h-16 w-full" />
          </AccordionItem>
          <AccordionItem direction="horizontal" title={"Font"}>
            <Select.Root onValueChange={() => {}}>
              <Select.Trigger className="w-full">
                <Select.Value placeholder="Arial" />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="Arial">Arial</Select.Item>
                  <Select.Item value="Helvetica">Helvetica</Select.Item>
                  <Select.Item value="Times New Roman">Times New Roman</Select.Item>
                  <Select.Item value="Courier New">Courier New</Select.Item>
                  <Select.Item value="Verdana">Verdana</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </AccordionItem>
          <AccordionItem direction="horizontal" title={"Font Style"}>
            <Select.Root onValueChange={() => {}}>
              <Select.Trigger className="w-full">
                <Select.Value placeholder="Medium" />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="Light">Light</Select.Item>
                  <Select.Item value="Medium">Medium</Select.Item>
                  <Select.Item value="Regular">Regular</Select.Item>
                  <Select.Item value="Bold">Bold</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </AccordionItem>
          <AccordionItem direction="horizontal" title={"Font Size"}>
            <Input type="number" />
          </AccordionItem>
          <AccordionItem direction="horizontal" title={"Color"}>
            <Input type="color" />
          </AccordionItem>
        </Accordion>
      </div>
    );
  }) as any,
};
