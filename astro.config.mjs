import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import markdownConfig from "./markdown.config.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://stiven.dev",
  markdown: markdownConfig,
  integrations: [
    react(),
    sitemap(),
    mdx({
      ...markdownConfig,
      extendPlugins: false,
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
