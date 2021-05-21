import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: "@mantine/core",
        replacement: path.resolve(__dirname, "@mantine/core"),
      },
      {
        find: "@mantine/hooks",
        replacement: path.resolve(__dirname, "@mantine/hooks"),
      },
      {
        find: "@mantine/utils",
        replacement: path.resolve(__dirname, "@mantine/utils"),
      },
      {
        find: "@mantine/theme",
        replacement: path.resolve(__dirname, "@mantine/theme"),
      },
      {
        find: "@mantine/types",
        replacement: path.resolve(__dirname, "@mantine/types"),
      },
    ],
  },
});
