import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';

export default {
  remarkPlugins: [[remarkToc, { tight: true, ordered: true }], remarkReadingTime],
  rehypePlugins: [
    [
      rehypeToc,
      {
        headings: ["h1", "h2", "h3"],
        cssClasses: {
          toc: "toc-post",
          link: "toc-link",
        },
      },
    ],
  ],
};
