"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Documentation" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-[100]">
      <nav className=" flex bg-with-noise dark:text-white flex-col md:items-center justify-between gap-3 drop-shadow-2xl drop-shadow-[#FF4F0010]  p-3 dark:border-gray-700  md:flex-row md:bg-white/50 md:px-10 md:backdrop-blur-3xl ">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image src="/logo.svg" alt="Blazekit" width={40} height={40} />
            Blazekit
          </Link>
          <button
            className="text-xl md:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div
              className={`${isExpanded ? "rotate-90" : ""} transition-transform`}
            >
              <RiMenu3Fill />
            </div>
          </button>
        </div>
        <ul
          className={`transition-[max-height, opacity] flex flex-col gap-3 overflow-hidden text-center duration-500 ease-in-out md:flex md:flex-row md:text-start ${
            isExpanded
              ? "max-h-40 opacity-100 md:max-h-max md:opacity-100"
              : "max-h-0 opacity-0 md:max-h-max md:opacity-100"
          } items-center`}
        >
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-lg">
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>
    </nav>
  );
}
