import { Button, TreeView, type TreeNode } from "@grapicar-studio/design-system";
import { useTheme } from "./hooks/useTheme";
import { THEMES } from "./theme";

function App() {
  const { handleThemeChange } = useTheme();

  return (
    <main>
      <div className="min-w-screen flex min-h-screen items-center justify-center bg-black bg-neutral-700">
        <div className="absolute left-5 top-5 flex gap-3">
          {THEMES.map((theme) => (
            <Button key={theme} onClick={() => handleThemeChange(theme)}>
              {theme}
            </Button>
          ))}
        </div>
        <div className="min-h flex h-[400px] w-[400px] justify-between">
          <TreeView tree={items} headerTitle="New Scene" />
        </div>
        <div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">
          {/* <Accordion title="Text">
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
          </Accordion> */}
        </div>
      </div>
    </main>
  );
}

export default App;

const items: TreeNode[] = [
  {
    id: 1,
    name: "new_canvas",
    type: "canvas",
    visible: true,
    locked: false,
    children: [
      { id: 2, name: "new_object_01", type: "object", visible: true, locked: false, children: [] },
      { id: 3, name: "new_object_02", type: "object", visible: false, locked: false, children: [] },
    ],
  },
  {
    id: 4,
    name: "new_canvas_02",
    type: "canvas",
    visible: true,
    locked: false,
    children: [
      {
        id: 5,
        name: "new_object_01",
        type: "object",
        visible: true,
        locked: false,
        children: [
          { id: 6, name: "child_a", type: "object", visible: true, locked: false, children: [] },
          { id: 7, name: "child_b", type: "object", visible: false, locked: true, children: [] },
        ],
      },
      { id: 8, name: "new_object_02", type: "object", visible: true, locked: false, children: [] },
      { id: 9, name: "new_object_03", type: "object", visible: true, locked: false, children: [] },
      { id: 10, name: "new_object_04", type: "object", visible: true, locked: false, children: [] },
    ],
  },
  { id: 11, name: "new_object_05", type: "object", visible: true, locked: false, children: [] },
  { id: 12, name: "new_object_06", type: "object", visible: true, locked: false, children: [] },
  {
    id: 13,
    name: "new_object_07",
    type: "object",
    visible: true,
    locked: false,
    children: [
      { id: 14, name: "new_object_08", type: "object", visible: true, locked: false, children: [] },
      {
        id: 15,
        name: "new_object_09 new_object_17asdfasfsdfnew_object_17asdfasfsdfnew_object_17asdfasfsdfnew_object_17asdfasfsdfnew_object_17asdfasfsdf",
        type: "object",
        visible: true,
        locked: false,
        children: [
          {
            id: 16,
            name: "new_object_10",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 17,
            name: "new_object_11",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 18,
            name: "new_object_12",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 19,
            name: "new_object_13",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 20,
            name: "new_object_14",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 21,
            name: "new_object_15",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 22,
            name: "new_object_16",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 23,
            name: "new_object_17asdfasfsdfnew_object_17asdfasfsdfnew_object_17asdfasfsdfnew_object_17asdfasfsdfnew_object_17asdfasfsdf",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
        ],
      },
      { id: 24, name: "new_object_10", type: "object", visible: true, locked: false, children: [] },
    ],
  },
  { id: 25, name: "new_object_08", type: "object", visible: true, locked: false, children: [] },
  { id: 26, name: "new_object_09", type: "object", visible: true, locked: false, children: [] },
  {
    id: 27,
    name: "new_object_10",
    type: "object",
    visible: true,
    locked: false,
    children: [
      {
        id: 28,
        name: "new_object_11",
        type: "object",
        visible: true,
        locked: false,
        children: [
          {
            id: 29,
            name: "new_object_12",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 30,
            name: "new_object_13",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
          {
            id: 31,
            name: "new_object_14",
            type: "object",
            visible: true,
            locked: false,
            children: [],
          },
        ],
      },
      { id: 32, name: "new_object_15", type: "object", visible: true, locked: false, children: [] },
      { id: 33, name: "new_object_16", type: "object", visible: true, locked: false, children: [] },
      { id: 34, name: "new_object_17", type: "object", visible: true, locked: false, children: [] },
    ],
  },
  { id: 35, name: "new_object_18", type: "object", visible: true, locked: false, children: [] },
  { id: 36, name: "new_object_19", type: "object", visible: true, locked: false, children: [] },
  { id: 37, name: "new_object_20", type: "object", visible: true, locked: false, children: [] },
  { id: 38, name: "new_object_21", type: "object", visible: true, locked: false, children: [] },
  { id: 39, name: "new_object_22", type: "object", visible: true, locked: false, children: [] },
  { id: 40, name: "new_object_23", type: "object", visible: true, locked: false, children: [] },
  { id: 41, name: "new_object_24", type: "object", visible: true, locked: false, children: [] },
  { id: 42, name: "new_object_25", type: "object", visible: true, locked: false, children: [] },
];
