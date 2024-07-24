import React from "react";
import LinkMenuItem from "./link/LinkMenuItem";
import { menuLinks } from "@/utils/menuLink";

export default function Header() {
  return (
    <>
      <header className="flex w-full h-20 bg-gray-300 justify-between items-center px-5">
        <div className="flex flex-row gap-3">
          {menuLinks.map((link, index) => (
            <LinkMenuItem key={index} link={link} />
          ))}
        </div>
      </header>
    </>
  );
}
