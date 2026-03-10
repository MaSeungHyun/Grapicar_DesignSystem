import "./preview.css";
import type { Preview } from "@storybook/react";
import React from "react";

const THEMES = ["mint", "sky", "blue"] as const;
type ThemeType = (typeof THEMES)[number];

function ThemeDecorator(
  Story: React.ComponentType,
  context: { globals: { theme?: string } }
) {
  const theme = (context.globals?.theme ?? "mint") as ThemeType;
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return React.createElement(Story);
}

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "mint",
      toolbar: {
        icon: "paintbrush",
        items: THEMES,
      },
    },
  },
  decorators: [ThemeDecorator as Preview["decorators"] extends (infer D)[] ? D : never],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
};

export default preview;
