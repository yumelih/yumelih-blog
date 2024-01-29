import {
  HomeIcon,
  BookmarkIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

const navLinks: { href: string; title: string; icon: React.ReactElement }[] = [
  { href: "/", title: "Blog Home", icon: <HomeIcon className="h-6 w-6" /> },
  {
    href: "/65b3c3ad5e0b0f3fa46580d7",
    title: "Blog Post",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },
  {
    href: "/about",
    title: "About me",
    icon: <UserCircleIcon className="h-6 w-6" />,
  },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-start pt-8 text-lg font-normal ">
      <ul className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <li
            key={link.title}
            className={clsx("flex justify-start gap-2 text-gray-100", {
              "text-gray-700": pathname === link.href,
            })}
          >
            {link.icon}
            <Link href={link.href} className=" text-lg">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
