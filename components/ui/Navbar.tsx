"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "../dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = ["Home", "About", "Blog"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-lg border-b z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight cursor-pointer"
          >
            Harsh<span className="text-primary">.</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div key={item} whileHover="hover" className="relative">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="font-medium cursor-pointer"
              >
                {item}
              </Link>

              {/* Underline animation */}
              <motion.span
                variants={{
                  hover: { width: "100%" },
                  initial: { width: 0 },
                }}
                initial="initial"
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-[2px] bg-primary"
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
        </div>

        {/* Mobile Drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <SheetHeader>
              <SheetDescription className="text-xl font-bold mt-4">
                Harsh Blogs
              </SheetDescription>
            </SheetHeader>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col gap-5 text-lg font-medium mt-6"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { x: 40, opacity: 0 },
                    show: { x: 0, opacity: 1 },
                  }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block p-2 rounded-xl hover:bg-accent transition"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
