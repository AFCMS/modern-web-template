import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: true,
  sortPackageJson: true,
  sortTailwindcss: true,
  ignorePatterns: [".github/workflows/actions.lock"],
});
