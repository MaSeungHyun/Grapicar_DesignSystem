// @ts-nocheck - React 18 vs Storybook key/ReactNode 타입 불일치로 인한 스토리 전용 비검사
import { Select } from "@grapicar-studio/design-system";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = {
  title: "Components/Select",
  component: Select.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자의 선택 액션을 받는 기본 Select 컴포넌트입니다. disabled 상태를 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 내용",
      table: {
        type: { summary: "string" },
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
  },
} satisfies Meta<typeof Select.Root>;

export default meta;

type SelectStory = StoryObj<typeof Select.Root>;

export const Default: SelectStory = {
  args: {
    value: "Cube",
    disabled: false,
  },
  render: (args) => {
    const [{ value }, setValue] = useArgs();
    const handleValueChange = (newValue: string) => {
      setValue({ value: newValue });
    };
    return (
      <Select.Root value={value} onValueChange={handleValueChange}>
        <Select.Trigger {...args} style={{ width: "100px" }}>
          <Select.Value placeholder="Select a ObjectType..." />
        </Select.Trigger>

        <Select.Content>
          <Select.Group>
            <Select.Item value="Cube">Cube</Select.Item>
            <Select.Item value="Sphere">Sphere</Select.Item>
            <Select.Item value="Plane">Plane</Select.Item>
            <Select.Item value="Cylinder">Cylinder</Select.Item>
            <Select.Item value="Capsule">Capsule</Select.Item>
            <Select.Item value="Cone">Cone</Select.Item>
            <Select.Item value="Torus">Torus</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    ) as any;
  },
};

export const Disabled: SelectStory = {
  args: {
    value: "Cube",
    disabled: true,
  },
  render: (args) => {
    const [{ value, disabled }, setValue] = useArgs();
    const handleValueChange = (newValue: string) => {
      setValue({ value: newValue });
    };
    return (
      <Select.Root value={value} onValueChange={handleValueChange}>
        <Select.Trigger {...args} style={{ width: "100px" }}>
          <Select.Value placeholder="Select a ObjectType..." />
        </Select.Trigger>

        <Select.Content>
          <Select.Group>
            <Select.Item value="Cube">Cube</Select.Item>
            <Select.Item value="Sphere">Sphere</Select.Item>
            <Select.Item value="Plane">Plane</Select.Item>
            <Select.Item value="Cylinder">Cylinder</Select.Item>
            <Select.Item value="Capsule">Capsule</Select.Item>
            <Select.Item value="Cone">Cone</Select.Item>
            <Select.Item value="Torus">Torus</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    ) as any;
  },
};

export const withLabel: SelectStory = {
  args: {
    value: "Cube",
    disabled: false,
  },
  render: (args) => {
    const [{ value, disabled }, setValue] = useArgs();
    const handleValueChange = (newValue: string) => {
      setValue({ value: newValue });
    };
    return (
      <Select.Root value={value} onValueChange={handleValueChange}>
        <Select.Trigger {...args} style={{ width: "100px" }}>
          <Select.Value placeholder="Select a ObjectType..." />
        </Select.Trigger>

        <Select.Content>
          <Select.Group>
            <Select.Label>Object</Select.Label>
            <Select.Item value="Cube">Cube</Select.Item>
            <Select.Item value="Sphere">Sphere</Select.Item>
            <Select.Item value="Plane">Plane</Select.Item>
            <Select.Item value="Cylinder">Cylinder</Select.Item>
            <Select.Item value="Capsule">Capsule</Select.Item>
            <Select.Item value="Cone">Cone</Select.Item>
            <Select.Item value="Torus">Torus</Select.Item>
          </Select.Group>

          <Select.Group>
            <Select.Label>Material</Select.Label>
            <Select.Item value="BasicMaterial">BasicMaterial</Select.Item>
            <Select.Item value="StandardMaterial">StandardMaterial</Select.Item>
            <Select.Item value="PhysicalMaterial">PhysicalMaterial</Select.Item>
            <Select.Item value="MetallicMaterial">MetallicMaterial</Select.Item>
            <Select.Item value="GlassMaterial">GlassMaterial</Select.Item>
            <Select.Item value="WoodMaterial">WoodMaterial</Select.Item>
            <Select.Item value="FabricMaterial">FabricMaterial</Select.Item>
            <Select.Item value="PaperMaterial">PaperMaterial</Select.Item>
            <Select.Item value="PlasticMaterial">PlasticMaterial</Select.Item>
            <Select.Item value="RubberMaterial">RubberMaterial</Select.Item>
            <Select.Item value="OtherMaterial">OtherMaterial</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    ) as any;
  },
};
