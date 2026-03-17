import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    // @import "tailwindcss" + @source 가 동작하려면 웹앱과 동일하게 @tailwindcss/vite 필요
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    config.resolve = {
      ...config.resolve,
      conditions: [...(config.resolve?.conditions ?? []), "development", "import"],
      // design-system 스타일을 항상 소스로 로드 → styles-base.css 수정 시 빌드 없이 HMR 반영
      alias: {
        ...config.resolve?.alias,
        "@grapicar-studio/design-system/styles": resolve(
          __dirname,
          "../../../packages/ui/src/styles.css"
        ),
      },
    };
    config.server = {
      ...config.server,
      fs: {
        ...config.server?.fs,
        allow: [
          ...(config.server?.fs?.allow ?? []),
          resolve(__dirname, ".."),
          resolve(__dirname, "../../../packages"),
        ],
      },
    };
    config.optimizeDeps = {
      ...config.optimizeDeps,
      exclude: [...(config.optimizeDeps?.exclude ?? []), "@grapicar-studio/design-system"],
    };
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 1000,
    };
    return config;
  },
};

export default config;
