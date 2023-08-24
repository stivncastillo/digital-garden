import rehypeToc from "rehype-toc";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default {
  shikiConfig: {
    theme: "dracula",
  },
  rehypePlugins: [
    rehypeHeadingIds,
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
    [rehypeAutolinkHeadings, { behavior: 'append' }]
  ],
};
