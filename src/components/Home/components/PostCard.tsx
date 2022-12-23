import React from "react";
import { format } from "date-fns";
import type { FrontMatter } from "../../../types";
import type { MarkdownInstance } from "astro";

interface Props {
  pinned?: boolean;
  slim?: boolean;
  data: MarkdownInstance<FrontMatter>;
}

const PostCard = ({ pinned, slim, data }: Props) => {
  const {
    url,
    frontmatter: { title, publishedAt, description, heroImage },
  } = data;

  const formattedDate = publishedAt?.replace(/-/g, "/") ?? "--";
  const day = format(new Date(formattedDate), "dd MMM yyyy");
  const month = format(new Date(formattedDate), "MMM");

  return (
    <article className="relative group mb-6 w-full h-full">
      <a
        className="h-full block transition-all duration-150 hover:-translate-x-2 hover:-translate-y-2 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-1"
        href={url}
      >
        <div className="flex flex-row space-x-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-50 rounded-md p-4 h-full">
          <div className="flex flex-col justify-between">
            <h3 className="text-lg mb-8 md:mb-1 mt-0 font-normal dark:text-slate-100  group-hover:underline">
              {title}
            </h3>

            <span className="text-sm group-hover:underline">{day}</span>
          </div>
        </div>
      </a>
      <div className="absolute top-0 bottom-0 right-0 left-0 group-hover:border-slate-900 dark:group-hover:border-white border-2 border-dashed rounded-md -z-10"></div>
    </article>
  );
};

export default PostCard;
