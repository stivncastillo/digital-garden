import React from "react";

export type BreadcrumbItemType = { url: string; name: string };

interface Props {
  items: Array<BreadcrumbItemType>;
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <nav className="w-full rounded-md text-sm my-2">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index === items.length - 1 ? (
              <ItemActive name={item.name} />
            ) : (
              <>
                <Item name={item.name} url={item.url} />
                <Separator />
              </>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

const Item = ({ url, name }: BreadcrumbItemType) => (
  <li>
    <a
      href={url}
      className="capitalize text-primary hover:underline hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
    >
      {name}
    </a>
  </li>
);

const ItemActive = ({ name }: { name: string }) => (
  <li className="capitalize text-gray-500 dark:text-gray-200">{name}</li>
);

const Separator = () => (
  <li>
    <span className="mx-2 text-black dark:text-neutral-400">/</span>
  </li>
);
