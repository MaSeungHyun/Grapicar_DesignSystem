// @ts-nocheck - React 18 vs Storybook key/ReactNode 타입 불일치로 인한 스토리 전용 비검사
import { Button, Dialog, Icon } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

/** 스토리 전용 args (Dialog.Content의 outsideClickClose 등) */
type DialogStoryArgs = React.ComponentProps<typeof Dialog.Root> & {
  outsideClickClose?: boolean;
};

const meta = {
  title: "Components/Dialog",
  component: Dialog.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자의 클릭 액션을 받는 기본 Dialog 컴포넌트입니다. disabled 상태를 지원합니다.",
      },
    },
  },
  argTypes: {
    outsideClickClose: {
      control: "boolean",
      description: "다이얼로그 외부 클릭 시 닫히는 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Dialog.Root>;

export default meta;

type DialogStory = StoryObj<DialogStoryArgs>;

export const Default: DialogStory = {
  args: {
    outsideClickClose: false,
  },
  // @ts-expect-error React 18 vs Storybook key 타입 불일치(Key | null vs string | null) — 반환 타입 호환
  render: (args) =>
    // React 18 vs Storybook ReactNode/key 타입 불일치 — as unknown as JSX.Element 강제 캐스팅
    (
      <Dialog.Root {...args}>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content outsideClickClose={args.outsideClickClose}>
          <Dialog.Title>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Icon
                icon="TriangleAlert"
                size={16}
                fill="yellow"
                stroke="black"
                style={{ stroke: "black" }}
              />
              다이얼로그 타이틀
            </div>
          </Dialog.Title>
          <Dialog.Description>다이얼로그의 설명을 작성하는 곳입니다.</Dialog.Description>
          <Dialog.Description>
            자세한 사용 방법은{" "}
            <a
              style={{ color: "skyblue", textDecoration: "underline" }}
              target="_blank"
              href="https://code.grapicar.com/studio/design_system"
              rel="noreferrer"
            >
              🔗Grapicar_Design_System
            </a>
            에 <span style={{ color: "#ff4785", fontWeight: "bold" }}> Storybook </span>
            문서를 참고하세요.
          </Dialog.Description>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button className="w-full">Close</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    ) as unknown as JSX.Element,
};
