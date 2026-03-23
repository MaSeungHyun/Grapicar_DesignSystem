// @ts-nocheck - React 18 vs Storybook key/ReactNode 타입 불일치로 인한 스토리 전용 비검사
import { Button, DropdownMenu, Icon } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

/** 스토리 전용 args (Dialog.Content의 outsideClickClose 등) */
type DropdownMenuStoryArgs = React.ComponentProps<typeof DropdownMenu.Root> & {
  outsideClickClose?: boolean;
};

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자의 클릭 액션을 받는 기본 DropdownMenu 컴포넌트입니다. disabled 상태를 지원합니다.",
      },
    },
  },
  argTypes: {
    outsideClickClose: {
      control: "boolean",
      description: "드롭다운 메뉴 외부 클릭 시 닫히는 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    side: {
      control: "select",
      description: "드롭다운 메뉴 위치",
      options: ["bottom", "top", "left", "right"],
      defaultValue: "bottom",
    },
    align: {
      control: "select",
      description: "드롭다운 메뉴 정렬",
      options: ["start", "center", "end"],
      defaultValue: "start",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof DropdownMenu.Root>;

export default meta;

type DropdownMenuStory = StoryObj<DropdownMenuStoryArgs>;

export const Default: DropdownMenuStory = {
  args: {
    outsideClickClose: true,
    side: "bottom",
    align: "start",
  },
  // @ts-expect-error React 18 vs Storybook key 타입 불일치(Key | null vs string | null) — 반환 타입 호환
  render: (args) =>
    // React 18 vs Storybook ReactNode/key 타입 불일치 — as unknown as JSX.Element 강제 캐스팅
    (
      <DropdownMenu.Root {...args}>
        <DropdownMenu.Trigger asChild>
          <Button variant="secondary" className="bg-transparent focus:outline-none">
            Add
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          outsideClickClose={args.outsideClickClose}
          side={args.side}
          align={args.align}
          sideOffset={3}
        >
          <DropdownMenu.Item>
            <Icon icon="Package" className="mr-2" />
            Empty Object
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <Icon icon="Box" className="mr-2" />
              Mesh
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>
                <Icon icon="Box" className="mr-2" />
                Cube
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Circle" className="mr-2" />
                Sphere
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Square" className="mr-2" />
                Plane
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Cylinder" className="mr-2" />
                Cylinder
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Pill" className="mr-2" />
                Capsule
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Cone" className="mr-2" />
                Cone
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Torus" className="mr-2" />
                Torus
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <Icon icon="Video" className="mr-2" />
              Camera
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>
                <Icon icon="Video" className="mr-2" />
                Perspective
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Video" className="mr-2" />
                Orthographic
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <Icon icon="Lightbulb" className="mr-2" />
              Light
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>
                <Icon icon="Flashlight" className="mr-2" />
                Directional
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Sun" className="mr-2" />
                Point
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Icon icon="Spotlight" className="mr-2" />
                Spot
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Item>
            <Icon icon="CaseSensitive" className="mr-2" />
            Text
          </DropdownMenu.Item>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Icon icon="ClipboardCopy" className="mr-2" />
            Copy
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Icon icon="ClipboardPaste" className="mr-2" />
            Paste
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Icon icon="SquareArrowRight" className="mr-2" />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    ) as unknown as JSX.Element,
};
