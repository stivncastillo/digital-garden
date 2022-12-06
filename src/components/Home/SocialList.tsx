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

const SIZE_ICONS = 22;

const SOCIAL_ITEMS: Array<Social> = [
  {
    name: "Twitter",
    url: "https://twitter.com/stivncastillo_",
    icon: <IoLogoTwitter size={SIZE_ICONS} />,
  },
  {
    name: "Github",
    url: "https://github.com/stivncastillo",
    icon: <IoLogoGithub size={SIZE_ICONS} />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/stivncastillo/",
    icon: <IoLogoLinkedin size={SIZE_ICONS} />,
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/stivncastillo",
    icon: <IoLogoDribbble size={SIZE_ICONS} />,
  },
  {
    name: "E-mail",
    url: "mailto:stivencastillo.90@gmail.com",
    icon: <IoIosMail size={SIZE_ICONS} />,
  },
];

const SocialList = () => {
  return (
    <ul className="fixed bottom-0 left-8 after:bg-white after:block after:content-[''] after:w-px after:h-20 after:my-0 after:mx-auto transition-all ease-linear duration-300">
      {SOCIAL_ITEMS.map(({ url, icon }) => (
        <li className="group">
          <a
            href={url}
            target="_blank"
            className="text-slate-100 font-bold flex flex-row items-center w-max last:mb-4 group-hover:scale-125 group-hover:rotate-3 transition-all duration-150 ease-linear"
            rel="noreferrer"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
