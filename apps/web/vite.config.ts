import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // development 시 @grapicar-studio/design-system을 빌드 결과물이 아닌 소스(src)로 resolve
    conditions: ["development", "import"],
  },
  server: {
    fs: {
      // 기본 프로젝트 루트(앱 서빙) + 워크스페이스 패키지(packages/ui) 소스 허용
      allow: [resolve(__dirname), resolve(__dirname, "../../packages")],
    },
  },
  optimizeDeps: {
    // UI 패키지를 소스로 변환하므로 pre-bundle 제외
    exclude: ["@grapicar-studio/design-system"],
  },
});
