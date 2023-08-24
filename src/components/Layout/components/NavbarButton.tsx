import React, { useState } from "react";
import type { ReactNode } from "react";
import { IoMdMenu, IoIosClose } from "react-icons/io/index";
import NavbarList from "./NavbarList";

type Props = {
  children: ReactNode;
};

const NavbarButton = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="relative group block md:hidden z-20">
        <button
          onClick={handleClick}
          className="bg-blue-marguerite-600 rounded-md p-2 border border-black text-white transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
          aria-label="Open menu"
        >
          {open ? <IoIosClose size={20} /> : <IoMdMenu size={20} />}
        </button>

        <div className="absolute top-0 bottom-0 right-0 left-0 group-hover:bg-black rounded-md -z-10"></div>
      </div>

      {open && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-white dark:bg-black z-10 flex flex-col justify-center items-center">
          <NavbarList
            classWrapper="flex-col space-x-0 space-y-4"
            classItem="text-center text-xl"
          />
        </div>
      )}
    </>
  );
};

export default NavbarButton;
