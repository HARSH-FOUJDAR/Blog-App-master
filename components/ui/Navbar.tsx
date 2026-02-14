"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed  top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav
        className="max-w-7xl mx-auto  flex items-center justify-between px-6 py-4 "
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-center rounded-full p-2">
          <div className="relative group cursor-pointer">
            {/* Background Glow Effect */}

            {/* Main Logo Container */}
            <div className="relative  rounded-full leading-none flex items-center space-x-3">
              <div className="flex flex-col space-y-1">
                <span className="flex items-center text-gray-900 dark:text-gray-100">
                  <span className="text-md font-bold tracking-tighter  italic">
                    <span className="text-blue-500 italic">&lt;</span>
                    H.F.S.D
                    <span className="text-blue-500"> /&gt;</span>
                  </span>
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-md font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-accent ",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="lg:hidden p-5 text-foreground hover:bg-accent rounded-md transition-colors"
        >
          {isOpen ? (
            <X size={30} className="relative right-20" />
          ) : (
            <Menu size={35} className="relative right-20" />
          )}
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer border-2"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className=" cursor-pointer"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("system")}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Mobile Menu & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] lg:hidden"
            />

            {/* Slide-down Menu */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-background border-b z-50 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "text-lg font-semibold transition-colors",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
