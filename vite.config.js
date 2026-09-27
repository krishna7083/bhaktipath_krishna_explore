import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// See EDITING_GUIDE.md if you need to change the base path
// (only needed if you deploy under a sub-path instead of a root domain).
export default defineConfig({
  plugins: [react()],
});
