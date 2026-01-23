"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../dropdown-menu";

const navItems = ["Home", "About", "Blog"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur border-b z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Harsh<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="font-medium hover:text-primary"
            >
              {item}
            </Link>
          ))}
  
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative right-60"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
    {open && (
  <div className="md:hidden z-40">
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed right-0 top-0 h-full w-64 bg-background p-6"
    >
      <nav className="mt-12 flex  gap-6 text-lg font-medium justify-center">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="hover:text-primary transition"
          >
            {item}
          </Link>
        ))}
      </nav>
    </motion.div>
  </div>
)}

    </motion.nav>
  );
}
