import React from "react";

import type { CollectionEntry } from "astro:content";
// import { BRAND_ICONS } from "src/helpers/brandIcons";

interface Props {
  data: CollectionEntry<"portfolio">;
}

const PortfolioItemLink = ({ data }: Props) => {
  console.log("read");
  const {
    slug,
    data: { title, description, year, tags, color, link },
  } = data;
  return (
    <article className="group mb-4 w-full rounded-md overflow-hidden outline outline-1 outline-black hover:outline-2 dark:hover:outline-white hover:shadow-solid-lg hover:shadow-black dark:hover:shadow-white transition-all duration-150">
      <a className="h-full block rounded-md" href={link} target="_blank">
        <div
          className={`flex flex-col justify-end text-slate-800 dark:text-slate-50 rounded-md h-full`}
        >
          <div
            className={`flex flex-col justify-between rounded-md p-4 ${
              color ?? "bg-black"
            } dark:${color ?? "bg-black"}`}
          >
            <h3 className="text-lg mb-8 md:mb-1 mt-0 font-normal !text-white  group-hover:underline">
              {title}
            </h3>

            <p className="text-sm !text-white">{description}</p>

            <div className="flex flex-col justify-between items-start gap-4 flex-1">
              <span className="text-xs text-white dark:text-white">{year}</span>

              <div className="flex flex-wrap gap-2">
                {tags?.map((tag: string, index: number) => {
                  return (
                    <span
                      title={tag}
                      key={index}
                      className={`bg-white  text-black border border-black text-xs font-medium px-2.5 py-0.5 rounded`}
                    >
                      {tag}
                    </span>
                  );
                  // // @ts-ignore
                  // const Component = BRAND_ICONS[tag];
                  // return (
                  //   <span title={tag}>
                  //     <Component key={index} className=" text-xl" />
                  //   </span>
                  // );
                })}
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default PortfolioItemLink;
