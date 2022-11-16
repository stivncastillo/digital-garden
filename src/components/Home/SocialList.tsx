import React from "react";

import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDribbble,
  IoIosMail,
} from "react-icons/io";

type Social = {
  name: string;
  url: string;
  icon: any;
};

const SOCIAL_ITEMS: Array<Social> = [
  {
    name: "Twitter",
    url: "https://twitter.com/stivncastillo_",
    icon: <IoLogoTwitter size={19} />,
  },
  {
    name: "Github",
    url: "https://github.com/stivncastillo",
    icon: <IoLogoGithub size={19} />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/stivncastillo/",
    icon: <IoLogoLinkedin size={19} />,
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/stivncastillo",
    icon: <IoLogoDribbble size={19} />,
  },
  {
    name: "E-mail",
    url: "mailto:stivencastillo.90@gmail.com",
    icon: <IoIosMail size={19} />,
  },
];

const SocialList = () => {
  return (
    <section className="flex flex-col flex-1 space-y-1 mb-8">
      <span className="text-slate-400 dark:text-slate-500 text-xs">
        Follow me
      </span>
      <ul className="flex flex-row space-y-1 md:space-y-0 md:space-x-4">
        {SOCIAL_ITEMS.map(({ url, icon }) => (
          <li>
            <a
              href={url}
              target="_blank"
              className="text-slate-500 dark:dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-500 font-bold flex flex-row items-center w-max"
              rel="noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialList;
