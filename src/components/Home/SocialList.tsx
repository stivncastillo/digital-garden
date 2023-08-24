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
    <ul className="m-4 mt-0 md:m-auto bg-floral-white md:fixed border border-black dark:border-white rounded-full md:bottom-6 space-y-0 md:space-y-2 space-x-4 md:space-x-0 md:right-8 md:left-auto flex flex-row justify-center md:gap-0 md:flex-col dark:bg-gray-950 p-4 transition-all ease-linear duration-75 hover:shadow-solid-md hover:shadow-black dark:hover:shadow-white">
      {SOCIAL_ITEMS.map(({ url, icon, id, name }) => (
        <li className="group" key={id}>
          <a
            href={url}
            target="_blank"
            className="text-black group-hover:text-blue-marguerite-600 dark:text-slate-100 font-bold flex flex-row items-center w-max group-hover:scale-125 transition-all duration-75 ease-linear"
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
