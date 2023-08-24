import React from "react";
import { format } from "date-fns";
import type { CollectionEntry } from "astro:content";
import { getPostUrl } from "src/utils/urlHelpers";

interface Props {
  data: CollectionEntry<"blog">;
}

const PostCard = ({ data }: Props) => {
  const {
    slug,
    data: { title, publishedAt },
  } = data;

  const day = format(new Date(publishedAt), "dd MMM yyyy");

  return (
    <article className="relative group mb-4 w-full h-full">
      <a
        className="h-full block rounded-md outline outline-1 outline-black dark:outline-transparent dark:hover:outline-white hover:outline-2 hover:shadow-solid-lg hover:shadow-black dark:hover:shadow-white transition-all duration-150 dark:duration-200"
        href={getPostUrl("posts", slug)}
      >
        <div className="flex flex-col justify-between bg-white dark:bg-gray-950 text-slate-800 dark:text-white rounded-md p-4 h-full">
          <h3 className="text-lg mb-8 md:mb-1 mt-0 font-normal group-hover:underline">
            {title}
          </h3>

          <span className="text-sm group-hover:underline text-black-text dark:text-gray-200">
            {day}
          </span>
        </div>
      </a>
    </article>
  );
};

export default PostCard;
