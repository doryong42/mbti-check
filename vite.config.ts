import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages 프로젝트 사이트: https://doryong42.github.io/mbti-check/ */
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "gh-pages" ? "/mbti-check/" : "/",
}));
