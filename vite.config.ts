import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages 프로젝트 사이트: https://doryong42.github.io/mbti-check/
 * 상대 base(./)는 서브패스 배포에서 절대경로(/repo/)보다 환경별 이슈가 적습니다.
 */
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "gh-pages" ? "./" : "/",
}));
