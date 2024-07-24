import { MenuLinkProps } from "@/utils/menuLink";
import Link from "next/link";

interface LinkMenuItemProps {
  link: MenuLinkProps;
}

const LinkMenuItem = ({ link }: LinkMenuItemProps) => {
  return (
    <>
      <Link
        href={link.path}
        className="flex flex-row items-center justify-center bg-teal-400 hover:bg-teal-200 rounded-lg p-3"
      >
        <span className="mr-2">{link.icon}</span>
        <span className="items-center justify-center pr-2">{link.name}</span>
      </Link>
    </>
  );
};

export default LinkMenuItem;