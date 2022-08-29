import { Fragment, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/home",
      active: true,
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <header className={`z-[100] w-full  duration-500 header`}>
        <div className="py-6 container mx-auto flex justify-between font-tertiary items-center">
          <div>
            <h2 className="text-[#787878] text-2xl">Website Logo</h2>
          </div>
          <div className="navBreak:flex gap-8 hidden ">
            {navItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <a
                  className={`text-lg ${
                    item.active ? "text-black font-bold" : "text-[#787878]"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="!#">
                <FaLinkedin className="text-2xl text-[#787878] hover:text-[#696969] duration-300"></FaLinkedin>
              </a>
              <a href="!#">
                <FaInstagram className="text-2xl text-[#787878] hover:text-[#696969] duration-300"></FaInstagram>
              </a>
            </div>
            <div className="navBreak:hidden flex items-center gap-8">
              <button
                className="text-secondary text-4xl"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="nav"
          className="fixed inset-0 z-[500] flex navBreak:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FiX className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <h2 className="text-[#787878] text-3xl">Website Logo</h2>
              </div>
              <nav
                className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 px-2 flex flex-col w-[80%] m-auto text-xl gap-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      className="navItemDesing navItem"
                      href={item.link}
                    >
                      <a
                        className={`${
                          item.active
                            ? "text-black font-bold"
                            : "text-[#787878]"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;
