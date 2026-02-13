import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "node18",
  clean: true,
  dts: false,
  sourcemap: false,
  splitting: false,
  banner: {
    js: "#!/usr/bin/env node",
  },
});
