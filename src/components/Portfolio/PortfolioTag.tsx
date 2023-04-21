import React from "react";

type Props = {
  title: string;
};

const CLASSES_BY_TAG = {
  UI: "bg-pink-200 text-pink-400",
  Backend: "bg-indigo-200 text-indigo-400",
  Frontend: "bg-purple-200 text-purple-400",
  Mobile: "bg-amber-100 text-amber-500",
};

const PortfolioTag = ({ title }: Props) => {
  return (
    <span
      className={`py-0.5 px-2 ${
        // @ts-ignore
        CLASSES_BY_TAG[title] || "bg-pink-200 text-pink-400"
      } text-xs rounded-sm`}
    >
      {title}
    </span>
  );
};

export default PortfolioTag;
