import React from "react";
import { format } from "date-fns";
import type { FrontMatter } from "../../types";
import type { MarkdownInstance } from "astro";

interface Props {
  pinned?: boolean;
  slim?: boolean;
  data: MarkdownInstance<FrontMatter>;
}

const Post = ({ slim, data }: Props) => {
  const {
    url,
    frontmatter: { title, publishedAt, description, heroImage },
  } = data;

  const formattedDate = publishedAt.replace(/-/g, "/");
  const day = format(new Date(formattedDate), "dd");
  const month = format(new Date(formattedDate), "MMM");

  return (
    <article className="group mb-6">
      <a href={url}>
        <article className="flex flex-row space-x-4 items-start">
          <div className="relative">
            <div className="flex flex-col h-auto items-center p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md transition-all duration-150 group-hover:-translate-x-2 group-hover:-translate-y-2 z-10">
              <div className="flex flex-col rounded-md py-2 px-3 items-center dark:bg-slate-900 bg-white">
                <span className="font-thin font-merri leading-3 text-xs mb-1 dark:text-white uppercase">
                  {month}
                </span>
                <span className="font-bold font-merri leading-3 text-xl dark:text-white">
                  {day}
                </span>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 right-0 left-0 group-hover:border-slate-900 dark:group-hover:border-white border border-dashed rounded-md -z-10"></div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl mb-2 mt-0 font-bold dark:text-slate-100">
              {title}
            </h3>
            <p
              className={`text-slate-500 font-normal dark:text-slate-400 ${
                slim ? "text-sm" : "text-md"
              }`}
            >
              {description}
            </p>
          </div>

          <div
            className={`hidden md:block group-hover:-rotate-3 duration-150 transition-all group-hover:scale-110 ${
              slim ? "w-16" : "w-24"
            }`}
          >
            <img
              src={heroImage}
              alt={title}
              width={96}
              height={96}
              className="aspect-square object-cover rounded-md"
            />
          </div>
        </article>
      </a>
    </article>
  );
};

export default Post;
