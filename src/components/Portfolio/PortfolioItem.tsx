import React from "react";
import { format } from "date-fns";
import type { MarkdownInstance } from "astro";
import type { PortfolioFrontMatter } from "../../types";
import PortfolioTag from "./PortfolioTag";

interface Props {
  data: MarkdownInstance<PortfolioFrontMatter>;
}

const PortfolioItem = ({ data }: Props) => {
  const {
    url,
    frontmatter: { title, description, heroImage, year, tags },
  } = data;
  return (
    <article className="relative group mb-6 w-full h-72">
      <a
        className="h-full block transition-all duration-150 hover:-translate-x-2 hover:-translate-y-2 z-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-md p-1"
        href={url}
      >
        <div
          style={{ backgroundImage: `url('${heroImage}'` }}
          className={`flex flex-col justify-end bg-[url('${heroImage}')] bg-cover bg-center text-slate-800 dark:text-slate-50 rounded-md h-full`}
        >
          <div className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-md p-4">
            <h3 className="text-lg mb-8 md:mb-1 mt-0 font-normal dark:text-slate-100  group-hover:underline">
              {title}
            </h3>

            <p className=" text-sm text-slate-400">{description}</p>

            <div className="flex flex-row justify-between items-center">
              <span className="text-xs text-slate-500">{year}</span>

              <div className="flex gap-2">
                {tags?.map((tag, index) => (
                  <PortfolioTag title={tag} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="absolute top-0 bottom-0 right-0 left-0 group-hover:border-slate-900 dark:group-hover:border-white border-2 border-dashed rounded-md -z-10"></div>
    </article>
  );
};

export default PortfolioItem;
