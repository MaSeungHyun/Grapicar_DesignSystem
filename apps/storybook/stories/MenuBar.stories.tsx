// @ts-nocheck - React 18 vs Storybook key/ReactNode 타입 불일치로 인한 스토리 전용 비검사
import { Icon, MenuBar } from "@grapicar-studio/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

/** 스토리 전용 args (Dialog.Content의 outsideClickClose 등) */
type MenuBarStoryArgs = React.ComponentProps<typeof MenuBar.Root> & {
  outsideClickClose?: boolean;
};

const meta = {
  title: "Components/MenuBar",
  component: MenuBar.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "사용자의 클릭 액션을 받는 기본 MenuBar 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    outsideClickClose: {
      control: "boolean",
      description: "메뉴바 외부 클릭 시 닫히는 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    side: {
      control: "select",
      description: "메뉴바 위치",
      options: ["bottom", "top", "left", "right"],
      defaultValue: "bottom",
    },
    align: {
      control: "select",
      description: "메뉴바 정렬",
      options: ["start", "center", "end"],
      defaultValue: "start",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof MenuBar.Root>;

export default meta;

type MenuBarStory = StoryObj<MenuBarStoryArgs>;

export const Default: MenuBarStory = {
  args: {
    outsideClickClose: true,
    side: "bottom",
    align: "start",
  },
  // @ts-expect-error React 18 vs Storybook key 타입 불일치(Key | null vs string | null) — 반환 타입 호환
  render: (args) =>
    // React 18 vs Storybook ReactNode/key 타입 불일치 — as unknown as JSX.Element 강제 캐스팅
    (
      <MenuBar.Root>
        {TitleBarMenuItems.map((item) => (
          <MenuBar.Menu key={item.label}>
            <MenuBar.Trigger>{item.label}</MenuBar.Trigger>
            <MenuBar.Content align="start" sideOffset={3} className="w-[140px]">
              {item.submenu?.map((submenuItem, index) => renderMenuItem(submenuItem, index, 0))}
            </MenuBar.Content>
          </MenuBar.Menu>
        ))}
      </MenuBar.Root>
    ) as unknown as JSX.Element,
};

const MenuLabelWithIcon = ({ label, icon }: { label: string; icon: string }): React.ReactNode => (
  <div className="flex min-w-0 items-center whitespace-nowrap">
    {typeof icon === "string" ? <Icon icon={icon} className="h-[14px] w-[14px] shrink-0" /> : icon}
    <span className="whitespace-nowrap">{label}</span>
  </div>
);

const renderMenuItem = (
  item: MenuItemProps,
  index?: number,
  depth: number = 0,
): React.ReactNode => {
  if (item.type === "separator") {
    return <MenuBar.Separator key={`separator-${index ?? item.label ?? Math.random()}`} />;
  }

  if (item.submenu && item.submenu.length > 0) {
    return (
      <MenuBar.Sub key={item.label}>
        <MenuBar.SubTrigger>
          <MenuLabelWithIcon label={item.label} icon={item.icon} />
        </MenuBar.SubTrigger>
        <MenuBar.SubContent
          alignOffset={-1}
          sideOffset={2}
          className={depth === 0 ? "w-[140px]" : "w-[140px]"}
        >
          {item.submenu.map((submenuItem, subIndex) =>
            renderMenuItem(submenuItem, subIndex, depth + 1),
          )}
        </MenuBar.SubContent>
      </MenuBar.Sub>
    );
  }

  return (
    <MenuBar.Item
      key={item.label}
      onClick={async (): Promise<void> => {
        await item.callback?.();
      }}
    >
      <MenuLabelWithIcon label={item.label} icon={item.icon} />
      {depth > 0 && item.accelerator && (
        <MenuBar.Shortcut className="ml-4 whitespace-nowrap pl-0 text-[10px] leading-[15px]">
          {item.accelerator}
        </MenuBar.Shortcut>
      )}
    </MenuBar.Item>
  );
};

export const TitleBarMenuItems = [
  {
    label: "File",
    submenu: [
      {
        label: "Import",
        icon: <Icon icon="Download" className="mr-2" />,
        submenu: [
          {
            label: "PSD",
            accelerator: "Ctrl+Alt+P",
            callback: async (): Promise<void> => {
              console.log("Import-PSD");
            },
          },
          {
            label: "PNG",
            accelerator: "Ctrl+Alt+N",
            callback: async (): Promise<void> => {
              console.log("Import-PNG");
            },
          },

          {
            label: "GLB",
            accelerator: "Ctrl+Alt+G",
            callback: async (): Promise<void> => {
              console.log("Import-GLB");
            },
          },
          {
            label: "TTF",
            accelerator: "Ctrl+Alt+T",
            callback: async (): Promise<void> => {
              console.log("Import-TTF");
            },
          },
          {
            label: "MP4",
            accelerator: "Ctrl+Alt+M",
            callback: async (): Promise<void> => {
              console.log("Import-MP4");
            },
          },
          {
            label: "Action",
            accelerator: "Ctrl+Alt+A",
            callback: async (): Promise<void> => {
              console.log("Import-ACTION");
            },
          },
          {
            label: "Prefab",
            accelerator: "Ctrl+Alt+S",
            callback: async (): Promise<void> => {
              console.log("Import-ASSET");
            },
          },
          {
            label: "HDRI",
            accelerator: "Ctrl+Alt+H",
            callback: async (): Promise<void> => {
              console.log("Import-HDRI");
            },
          },
        ],
      },
      {
        label: "Export",
        icon: <Icon icon="Upload" className="mr-2" />,
        submenu: [
          {
            label: "Build",
            callback: async (): Promise<void> => {
              console.log("Build");
            },
          },
        ],
      },
      // {
      //         label: "Build",
      //         role: "Build",
      //         accelerator: "F7",
      //         callback: async (): Promise<void> => {
      //           await GCContext.getInstance().menuBuildCallback();
      //         },
      // },
      { type: "separator" },
      {
        label: "Save",
        icon: <Icon icon="Save" className="mr-2" />,
        accelerator: "Ctrl+S",
        callback: async (): Promise<void> => {
          console.log("Save");
        },
      },
      {
        label: "Save all",
        icon: <Icon icon="SaveAll" className="mr-2" />,
        accelerator: "Ctrl+S",
        callback: async (): Promise<void> => {
          console.log("Save all");
        },
      },
      { type: "separator" },
      {
        label: "Close Project",
        icon: <Icon icon="SquareArrowRight" className="mr-2" />,
        accelerator: "Ctrl+Shift+W",
        callback: async (): Promise<void> => {
          console.log("Close Project");
        },
      },
      // {
      //   label: "Exit",
      //   accelerator: "Ctrl+Shift+Q",
      //   callback: (): void => {
      //     api.windowControllerAPI.close();
      //   },
      // },
    ],
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Duplicate",
        callback: async (): Promise<void> => {
          console.log("Duplicate");
        },
      },
      {
        label: "Delete Selected",
        callback: async (): Promise<void> => {
          console.log("Delete Selected");
        },
      },
      { type: "separator" },
      {
        label: "Shortcuts",
        callback: async (): Promise<void> => {
          console.log("Shortcuts");
        },
      },
    ],
  },
  {
    label: "Tool",
    submenu: [
      {
        label: "Start",
        role: "Start",
        accelerator: "Ctrl+Shift+P",
        callback: async (): Promise<void> => {
          console.log("Start");
        },
      },
      {
        label: "Stop",
        role: "Stop",
        accelerator: "Ctrl+Shift+O",
        callback: async (): Promise<void> => {
          console.log("Stop");
        },
      },
      {
        label: "Build",
        role: "Build",
        accelerator: "F7",
        callback: async (): Promise<void> => {
          console.log("Build");
        },
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Full Screen",
        role: "fullScreen",
        accelerator: "F11",
        callback: async (): Promise<void> => {
          console.log("Full Screen");
        },
      },
      {
        label: "Minimize",
        role: "minimize",
        callback: async (): Promise<void> => {
          console.log("Minimize");
        },
      },
      {
        label: "Maximize",
        role: "maximize",
        callback: async (): Promise<void> => {
          console.log("Maximize");
        },
      },
    ],
  },

  {
    label: "Help",
    submenu: [
      // {
      //   label: "Tool Update",
      //   callback: async (): Promise<void> => {
      //     window.dispatchEvent(new CustomEvent("openUpdateDialog"));
      //   },
      // },
      // {
      //   label: "License",
      //   callback: async (): Promise<void> => {
      //     window.dispatchEvent(new CustomEvent("openLicenseDialog"));
      //   },
      // },
      {
        label: "About",
        role: "about",
        callback: (): void => {
          // About 다이얼로그는 TitleBar에서 관리
          console.log("About");
        },
      },
    ],
  },
];
