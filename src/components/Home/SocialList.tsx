import React from "react";

import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDribbble,
  IoIosMail,
} from "react-icons/io/index";

type Social = {
  id: string;
  name: string;
  url: string;
  icon: any;
};

const SIZE_ICONS = 22;

const SOCIAL_ITEMS: Array<Social> = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/stivncastillo_",
    icon: <IoLogoTwitter size={SIZE_ICONS} />,
  },
  {
    id: "github",
    name: "Github",
    url: "https://github.com/stivncastillo",
    icon: <IoLogoGithub size={SIZE_ICONS} />,
  },
  {
    id: "linkedin",
    name: "Linkedin",
    url: "https://linkedin.com/in/stivncastillo/",
    icon: <IoLogoLinkedin size={SIZE_ICONS} />,
  },
  {
    id: "dribbble",
    name: "Dribbble",
    url: "https://dribbble.com/stivncastillo",
    icon: <IoLogoDribbble size={SIZE_ICONS} />,
  },
  {
    id: "email",
    name: "E-mail",
    url: "mailto:stivencastillo.90@gmail.com",
    icon: <IoIosMail size={SIZE_ICONS} />,
  },
];

const SocialList = () => {
  return (
    <ul className="fixed bottom-0 left-8 after:dark:bg-white after:bg-slate-500 after:block after:content-[''] after:w-px after:h-20 after:my-0 after:mx-auto transition-all ease-linear duration-300">
      {SOCIAL_ITEMS.map(({ url, icon, id, name }) => (
        <li className="group" key={id}>
          <a
            href={url}
            target="_blank"
            className="text-slate-500 dark:text-slate-100 font-bold flex flex-row items-center w-max last:mb-4 group-hover:scale-125 group-hover:rotate-3 transition-all duration-150 ease-linear"
            rel="noreferrer"
            title={name}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
