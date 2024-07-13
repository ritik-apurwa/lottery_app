"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface navlinksInterface {
  id: number;
  title: string;
  href: string;
}

const navlinks: navlinksInterface[] = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "about", href: "/about" },
  { id: 3, title: "contact Us", href: "/contact" },
  { id: 4, title: "schedule", href: "/schedule" },
  { id: 5, title: "how to claim", href: "/how-to-claim" },
];

interface MobileNavInterface {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavInterface) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigationClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <section className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="h-full items-center flex" asChild>
          <button className=" bg-blue-900 text-white">
            <Menu className="" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white shadow-lg">
          <div id="navigation" className="w-full pt-20 flex flex-col">
            {navlinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div
                  className={cn(
                    "hover:font-bold capitalize ease-in-out duration-300 px-6 py-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer",
                    isActive && "text-red-400"
                  )}
                  onClick={() => handleNavigationClick(item.href)}
                  key={item.id}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <section className="hidden lg:flex">
      <div className="flex flex-row gap-x-2 capitalize font-medium ">
        {navlinks.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              className={cn(
                "hover:font-bold ease-in-out duration-300 ",
                isActive && "text-red-400"
              )}
              href={item.href}
              key={item.id}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <section className="flex justify-center bg-blue-900 text-white mx-auto  border-b-2">
      <div className="flex gap-x-2 justify-start lg:justify-between lg:p-5  p-4 max-w-7xl items-center w-full">
        <MobileNav isOpen={isOpen} setIsOpen={setisOpen} />
        <Link href="/">
          <h1 className="font-bold">Lootery App</h1>
        </Link>
        <DesktopNav />
      </div>
    </section>
  );
};

export default Navbar;
