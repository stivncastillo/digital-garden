import React from "react";
import format from "date-fns/format";
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
  const day = format(new Date(formattedDate), "dd");
  const month = format(new Date(formattedDate), "MMM");

  return (
    <article className="relative group mb-6">
      <a
        className="block transition-all duration-150 hover:-translate-x-2 hover:-translate-y-2 z-10 bg-gradient-to-r from-[#fc00ff] via-[#3B82F6] to-[#00dbde] rounded-md p-0.5"
        href={url}
      >
        <div className="flex flex-row space-x-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-50 rounded-md p-2">
          <div className="flex flex-col items-center">
            <div
              className={`flex flex-col ${
                pinned
                  ? "bg-indigo-100 dark:bg-yellow-100 group-hover:bg-indigo-200 dark:group-hover:bg-yellow-200 text-indigo-500 dark:text-yellow-600"
                  : "bg-slate-100 group-hover:bg-slate-200"
              } rounded-md py-3 px-4 items-center`}
            >
              <span className="font-thin font-merri leading-3 text-xs mb-1 dark:text-slate-900 uppercase">
                {month}
              </span>
              <span className="font-bold font-merri leading-3 text-xl dark:text-slate-900">
                {day}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg mb-1 mt-0 font-bold dark:text-slate-100">
              {title}
            </h3>
            <p
              className={`text-slate-500 font-thin dark:text-slate-400 ${
                slim ? "text-sm" : "text-md"
              }`}
            >
              {description}
            </p>
          </div>

          <div className={`hidden md:block ${slim ? "w-16" : "w-24"}`}>
            <img
              src={heroImage}
              alt={title}
              width={96}
              height={96}
              className="aspect-square object-cover rounded-md"
            />
          </div>
        </div>
      </a>
      <div className="absolute top-0 bottom-0 right-0 left-0 group-hover:border-slate-900 group-hover:dark:border-white border-2 border-dashed rounded-md -z-10"></div>
    </article>
  );
};

export default PostCard;

// transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all rounded-xl w-full bg-gradient-to-r p-1 justify-center items-center from-[#fc00ff] via-[#3B82F6] to-[#00dbde]
