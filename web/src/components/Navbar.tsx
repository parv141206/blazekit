"use client";
import { VisuallyHidden } from "radix-ui";
import { Button } from "@/components/ui/button";
import { IoMenuOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Documentation" },
    { href: "/about", label: "About" },
  ];
  return (
    <>
      <nav className="sticky text-white md:flex hidden top-0 left-0 right-0 z-50  flex-row items-center justify-center gap-8 py-4 backdrop-blur-2xl border-border/20 shadow-lg shadow-black/10 dark:shadow-black/45">
        <div className=" pointer-events-none font-bold ">
          <Image
            src={"/logo.svg"}
            alt="Blazekit"
            width={50}
            height={50}
            className=""
          />
        </div>
        <Link href="/" className="name-link">
          Home
        </Link>
        <Link href="/docs" className="name-link">
          Documentation
        </Link>
        <Link href="/about" className="name-link">
          About
        </Link>
      </nav>
      <nav className="flex relative z-[999] md:opacity-0">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="fixed bg-black top-4 left-4 z-50 border border-border/50"
            >
              <IoMenuOutline className="h-6 w-6  text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 flex flex-col p-5 bg-black/50 text-white backdrop-blur-2xl border-r border-border/50"
          >
            <VisuallyHidden.Root>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden.Root>
            <nav className="flex flex-col space-y-4 pt-12">
              <>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:bg-accent text-white p-2 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
