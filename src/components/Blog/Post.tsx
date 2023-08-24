import React from "react";
import { format } from "date-fns";
import type { CollectionEntry } from "astro:content";
import { getPostUrl } from "src/utils/urlHelpers";

interface Props {
  data: CollectionEntry<"blog">;
  size?: "medium" | "large";
  pinned?: boolean;
}

const Post = ({ data, size = "medium", pinned = false }: Props) => {
  const {
    slug,
    data: { title, publishedAt, description },
  } = data;

  const date = format(new Date(publishedAt), "MMM dd, yyyy");

  return (
    <a
      href={getPostUrl("posts", slug)}
      className={size === "large" ? `col-span-1 md:col-span-2 md:mb-8` : ""}
    >
      <article
        className={`bg-white dark:bg-gray-950 p-8 pb-4 rounded-md outline outline-1 outline-black dark:outline-transparent dark:hover:outline-white hover:outline-2 space-y-6 group transition-all duration-200 ${
          pinned ? " hover:shadow-solid-lg shadow-black dark:shadow-white" : ""
        }  ${
          size === "medium"
            ? "h-full flex flex-col justify-between py-4 pb-6"
            : "pb-8"
        }`}
      >
        <div>
          {size === "medium" ? (
            <h3 className="group-hover:underline">{title}</h3>
          ) : (
            <h2 className="group-hover:underline">{title}</h2>
          )}

          <p
            className={`${
              size === "large" ? "caption" : ""
            } text-gray-500 dark:text-gray-200`}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <span className="text-lavender-rose-400 text-sm font-bold">
            {date}
          </span>
          <span className=" text-white text-sm font-medium mr-2 px-4 py-1.5 rounded-full bg-blue-marguerite-600 border-black dark:border-white border">
            Programming
          </span>
        </div>
      </article>
    </a>
  );
};

export default Post;
