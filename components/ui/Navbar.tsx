"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Blog"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ BODY SCROLL CONTROL (PROPER WAY)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    // cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Harsh<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="font-medium hover:text-primary transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          aria-label="Toggle Menu xl:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="xl:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={`xl:hidden fixed top-[72px] left-0 w-full bg-background z-50 shadow-lg ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8 text-lg font-medium">
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
    </motion.nav>
  );
}
