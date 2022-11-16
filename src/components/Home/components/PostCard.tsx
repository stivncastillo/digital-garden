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
    <a className="group mb-6" href={url}>
      <article className="flex flex-row space-x-4">
        <div className="flex flex-col items-center">
          <div
            className={`flex flex-col ${
              pinned
                ? "bg-indigo-100 dark:bg-yellow-100 group-hover:bg-indigo-200 dark:group-hover:bg-yellow-200 text-indigo-500 dark:text-yellow-600"
                : "bg-slate-100 group-hover:bg-slate-200"
            }  rounded-md py-3 px-4 items-center`}
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

        <div className={`hidden md:block ${slim ? "w-16" : "w-24"}`}>
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
  );
};

export default PostCard;
