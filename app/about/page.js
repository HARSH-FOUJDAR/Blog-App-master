"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white mt-20 to-gray-50 dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        {/* 🔹 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight"
        >
          Software Developer & Full Stack Developer
        </motion.h1>

        {/* 🔹 Subheading / description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 opacity-90 mb-12 leading-relaxed">
          Software developer specializing in building scalable web applications
          and digital solutions. Passionate about clean code, modern UI/UX, and
          innovative technologies.
        </p>

        {/* 🔹 Hero Image + Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Hero Image */}
          <Image
            src="/images/Untitled design (1).png"
            alt="Hero"
            width={300}
            height={300}
            className="max-w-xs md:max-w-sm rounded-full  hover:scale-105 transition-transform duration-500"
          />

          {/* Mission Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#d1701f] dark:text-white">
            About Me
          </h2>
          <h1 className="font-bold text-gray-600">Full Stack Developer</h1>
          {/* Mission Description */}
          <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-base md:text-lg opacity-90 leading-relaxed">
            With a strong foundation in MERN stack, JavaScript, and Java, I love
            crafting projects that are both functional and visually appealing.
            My goal is to turn ideas into reality using innovative technologies.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, I enjoy exploring new tech trends, contributing
            to open source, and learning about the latest in web development.
          </p>
        </motion.div>
        <br />
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1bEPY5otArzXEMnclvt3XfOyAUe-RydjA/view?usp=sharing"
          target="_blank"
          className="mt-6 inline-block border-2 border-[#d1701f] bg-[#d1701f] text-white font-semibold px-8 py-3 rounded-full hover:bg-transparent hover:text-black transition"
        >
          Download CV
        </motion.a>
      </section>
      <footer className="py-10 text-center opacity-60 text-sm">
        © 2026 portfolio By Harsh Foujdar
      </footer>
    </main>
  );
}
