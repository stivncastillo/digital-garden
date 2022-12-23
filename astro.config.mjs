import { defineConfig } from "astro/config";
import markdownConfig from './markdown.config.mjs';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://stiven.dev',
  markdown: markdownConfig,
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), mdx({
    ...markdownConfig,
    extendPlugins: false
  }), sitemap()],
  // output: "server",
  // adapter: vercel()
});