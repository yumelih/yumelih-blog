"use client";

import Button from "./button";
import Logo from "./logo";
import CloseSidebar from "./close-sidebar";
import { use, useEffect, useRef, useState } from "react";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { CSSTransition, Transition } from "react-transition-group";
import Image from "next/image";
import Link from "next/link";
import ConnectionButtons from "./connection-buttons";
import NavLinks from "./nav-links";

type Navbar = string[];

const duration: number = 300;

const defaultStyle: { transition: string; opacity: number } = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: { [index: string]: { opacity: number } } = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const { width, height } = useWindowDimensions();
  const nodeRef = useRef(null);

  function handleCloseSidebar(): void {
    setIsSidebarOpen((prev) => !prev);
  }

  useEffect(() => {
    if (width > 1024) setIsSidebarOpen(true);
    if (width === 1023) setIsSidebarOpen(false);
  }, [width]);

  return (
    <div className="bg-green-500 px-8 py-6">
      <div className="flex items-end lg:items-baseline">
        <CloseSidebar onCloseSidebar={handleCloseSidebar} />
        <Logo />
      </div>

      <CSSTransition
        nodeRef={nodeRef}
        in={isSidebarOpen}
        timeout={duration}
        mountOnEnter
        unmountOnExit
        // classNames={{...}}
      >
        {(state) => (
          <div
            ref={nodeRef}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
            className="text-gray-100"
          >
            <div className="flex flex-col items-center justify-center gap-1 border-b-[1px] border-b-neutral-500 pb-8 pt-6">
              <Image
                src="/avatars.png"
                width={188}
                height={200}
                alt="avatar"
                className="mb-4 rounded-full"
              />
              <p className="text-center">
                Hi, my name is Yusuf Ak. Briefly introduce yourself here. You
                can also provide a link to the about page.
              </p>
              <Link href="/about" className="underline">
                Find out more about me
              </Link>
              <ConnectionButtons />
            </div>
            <NavLinks />
            <Button>Get in Touch</Button>
          </div>
        )}
      </CSSTransition>
    </div>
  );
}

export default Navbar;
