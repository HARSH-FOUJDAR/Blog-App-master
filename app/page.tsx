"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { Footer } from "@/components/ui/Footer";
import { TbArrowMoveRightFilled } from "react-icons/tb";
import { Download, Terminal } from "lucide-react";
import Head from "next/head";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";
import { title } from "process";
const imageses = [
  {
    img: "https://media.istockphoto.com/id/2114295998/photo/asian-and-indian-developer-devops-team-discussion-about-coding-promgram-with-software.jpg?s=2048x2048&w=is&k=20&c=815QNju4g70uc0fFTGiDFsEhhSej2qs99M3o0Hx8ChE=",
    desc: "A software developer typing code on a laptop, focused on a dark-themed IDE.",
  },
  {
    img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3Hza57OTLRJzS2w69oT7VJ/97e92e9f54b741d95208463c97bd6fe9/GettyImages-2022975324.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
    desc: "Young developer brainstorming in front of a whiteboard with code diagrams and notes.",
  },
  {
    img: "https://d1vwxdpzbgdqj.cloudfront.net/enterprise/career_path_landing_1/career_path.webp",
    desc: "Full-stack developer working with multiple screens showing code.",
  },
  {
    img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_a_Data_Analytics_Managerr.jpg",
    desc: "Female software engineer working on a laptop in a modern office space.",
  },
];

const images = [
  {
    img: "https://recipekeeperonline.com/Images/en/laptopphone.png  ",
    title: "Recipe Sharing Platform (MERN Stack)",
    desc: "The Recipe Sharing Platform is a full-stack web application that allows users to share, discover, and interact with recipes. Users can upload their own recipes, view recipes from others, leave ratings and comments, watch video tutorials, and search for recipes based on ingredients, cuisine, dietary preferences, or meal types..",
    technologies: [
      "React.js",
      "React Router",
      "Axios / Fetch API",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "Node.js",
      "JWT (JSON Web Token)",
      "Express j.s",
      "MongoDB",
    ],
    skills: [
      "UI Development",
      "Responsive Design",
      "Animation",
      "Performance Optimization",
    ],
    live: "https://remarkable-haupia-d108cb.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/Job-portel-Mern-frontend-",
  },

  {
    img: "https://enginetemplates.com/wp-content/uploads/edd/2017/09/et-job-portal-free-responsive-joomla-template.png",
    title: "Job Portal Application(MERN Stack)",
    desc: "A job portal web application that allows users to search for jobs, view job details, and apply for positions through a clean and responsive interface.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "API Integration",
      "Node.js",
      "Express j.s",
      "MongoDB",
    ],
    skills: ["API Integration", "Search Functionality", "Data Rendering"],
    live: "https://earnest-semifreddo-9217f3.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/Job-portel-Mern-Backend-",
  },
  {
    img: "https://simplybook.me/build/images/trial-section/medical.7358dc7d.png",
    title: "Doctor Apoitment Booking System(MERN Stack)",
    desc: "A job portal web application that allows users to search for jobs, view job details, and apply for positions through a clean and responsive interface.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "API Integration",
      "Node.js",
      "Express j.s",
      "MongoDB",
      "Payment Integration"
    ],
    skills: ["API Integration", "Search Functionality", "Data Rendering"],
    live: "https://earnest-semifreddo-9217f3.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/Job-portel-Mern-Backend-",
  },
  {
    img: "https://kanbanboard.co.uk/public/storage/uploads/page/1724051548_1724051218_kanbanboards.png",
    title: "Kanban Board Task Manager",
    desc: "A task management Kanban board application designed to organize tasks efficiently using drag-and-drop style workflow and clean UI patterns.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    skills: ["Task Management", "State Management", "UI/UX Design"],
    live: "https://playful-croissant-4d9c1b.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/Task-Meneger-task",
  },
];

const certifications = [
  {
    title: "Python",
    desc: "Gained strong fundamentals of Python programming including variables, loops, functions, data structures, and basic problem-solving techniques. Applied Python concepts to real-world examples and logic building.",
    image: "/images/image.png",
    link: "https://www.guvi.in/verify-certificate?id=8r72000F4PO6pSl17i",
  },
  {
    title: "AWS Account, Navigation & Instances",
    desc: "Learned core AWS cloud concepts including account setup, AWS console navigation, EC2 instance creation, management, and basic cloud infrastructure understanding..",
    image: "/images/image2.png",
    link: "https://www.guvi.in/verify-certificate?id=9b23l6q9E4C07d5191",
  },
  {
    title: "Git",
    desc: "Learned version control using Git including repositories, commits, branches, merging, and collaboration workflows. Used Git for managing and tracking code changes in real projects..",
    image: "/images/image3.png",
    link: "https://www.guvi.in/verify-certificate?id=w3156T771LNP78a616",
  },
  {
    title: "TypeScript",
    desc: "Developed strong understanding of TypeScript including types, interfaces, enums, and type safety. Improved JavaScript code quality, scalability, and maintainability using TypeScript.",
    image: "/images/image4.png",
    link: "https://www.guvi.in/verify-certificate?id=6Z6W2kM2aOKs675631",
  },
  {
    title: "100 Days of JavaScript with CodeKata",
    desc: "Solved daily JavaScript coding challenges focusing on logic building, arrays, strings, loops, functions, and problem-solving skills through consistent practice on CodeKata.",
    image: "/images/image4.png",
    link: "https://www.guvi.in/verify-certificate?id=w3156T771LNP78a616",
  },
  {
    title: "ChatGPT for Everyone Bengali",
    desc: "Learned practical usage of ChatGPT for productivity, learning, and problem-solving Explored prompt writing techniques and AI-assisted workflows explained in the Bengali language..",
    image: "/images/image5.png",
    link: "https://www.guvi.in/verify-certificate?id=w3156T771LNP78a616",
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-200  mt-32 ">
        <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-16 ">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full  text-center lg:text-left "
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Harsh <span className="text-[#d1701f]">Foujdar</span>
            </h1>
            <div className="flex gap-6 items-center ">
              <a href="https://github.com/HARSH-FOUJDAR">
                <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=228BE6"
                  alt="Icon 1"
                  className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
                />
              </a>
              <a href="mailto:harshbtp738@gmail.com">
                <img
                  src="https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000"
                  alt="Icon 2"
                  className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
                />
              </a>
              <a href="https://www.linkedin.com/in/harsh-fauzdar-a74716333/">
                <img
                  src="https://img.icons8.com/?size=100&id=qNUNvR9aEWql&format=png&color=000000"
                  alt="Icon 2"
                  className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
                />
              </a>
            </div>
            <p className="mt-6 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 ">
              Hi, I'm Harsh Foujdar — a passionate Full Stack Developer
            </p>

            <p className="mt-3 text-gray-500">
              Strong knowledge of modern software technologies
            </p>

            {/* TECH STACK */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start ">
              {[
                // Frontend
                {
                  name: "DSA",
                  src: "https://img.icons8.com/?size=100&id=JHNvegaTfHjR&format=png&color=000000",
                },
                {
                  name: "HTML5",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                },
                {
                  name: "CSS3",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                },
                {
                  name: "JavaScript",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                },
                {
                  name: "TypeScript",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                  name: "React",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  name: "Next.js",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                },
                {
                  name: "Tailwind",
                  src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                },
                {
                  name: "Redux",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                },

                // Backend & DB
                {
                  name: "Node.js",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "Express",
                  src: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
                },
                {
                  name: "MongoDB",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                },

                {
                  name: "GitHub",
                  src: "https://img.icons8.com/?size=100&id=lkh3AbJLmFpp&format=png&color=000000",
                },

                {
                  name: "Vercel",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHurnH0bDUuIp5MVFN2Y-faHhvk0lvVFzJ-nvtr4sZES1UL7kIIr7jKYywWla60DE8YhVhmfb27zRRXAg6fA9U&s&ec=121528423",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2"
                >
                  {/* Icon Container */}
                  <div className="w-[75px] h-[75px] flex bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-200 items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-[#d1701f]/50 transition-all duration-300">
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="w-[42px] h-[42px] object-contain transition-transform group-hover:scale-110 "
                    />
                  </div>
                  {/* Tech Name */}
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-[#d1701f] transition-colors ">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center "
          >
            <Image
              src="/images/Untitled design (1).png"
              alt="Harsh Foujdar"
              width={380}
              height={380}
              className="rounded-full  -scale-x-100  transition-transform duration-500  "
            />
          </motion.div>
        </section>

        <hr className="my-12 border-gray-300 dark:border-gray-700 " />
        <main
          id="about"
          className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-200 overflow-x-hidden pt-28"
        >
          <section className="container mx-auto px-6 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 ">
              {/* 🔹 Left Content: Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#d1701f] text-sm font-medium mb-6">
                  <Terminal size={16} />
                  <span>Available for Hire</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
                  Full Stack <span className="text-[#d1701f]">Developer</span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Specializing in building scalable web applications with the
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    MERN stack
                  </span>
                  . I turn complex problems into elegant, functional digital
                  solutions.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://drive.google.com/file/d/1qxuDyLGclJWCZPRmsm5SA7oUbhQulcqm/view?usp=sharing"
                    target="_blank"
                    className="flex items-center gap-2 bg-[#d1701f] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:bg-[#b8621b] transition-all"
                  >
                    <Download size={20} className="size-6 animate-bounce " />
                    Download CV
                  </motion.a>
                </div>
              </motion.div>

              {/*  Right Content: Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Background Decorative Element */}
                <div className="absolute"></div>

                <div className="relative group">
                  <Image
                    src="/images/Untitled design (1).png"
                    alt="Hero"
                    width={400}
                    height={400}
                    className="relative -scale-x-100 z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]  mt-10 rounded-full object-cover transition-all duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/*  About Me Section (Simplified) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-32 max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#d1701f]"></span>
                About Me
                <span className="h-px w-12 bg-[#d1701f]"></span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                With a strong foundation in{" "}
                <span className="text-[#d1701f] font-medium">
                  JavaScript and Java
                </span>
                , I love crafting projects that are both functional and visually
                appealing. When I'm not coding, I enjoy exploring new tech
                trends and contributing to open source.
              </p>
            </motion.div>
          </section>
        </main>
        {/* Project SECTION */}
        <section
          id="Projects"
          className="py-24 bg-gradient-to-b from-background/40 to-background/10"
        >
          {/* agar full screen width chahiye to container hata do */}
          <div className="w-full px-6 text-center">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              Projects
            </motion.h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each project is a unique piece of development
            </p>

            {/* Cards */}
            <div className="mt-16 py-9 w-full flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
          w-300
          p-6 sm:p-8
          rounded-2xl
          border border-gray-200 dark:border-gray-700
          bg-white/80 dark:bg-black/30
          backdrop-blur-md
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
              >
                <Carousel opts={{ align: "start" }} className="w-full relative">
                  <CarouselContent className="w-full">
                    {images.map((img, index) => (
                      <CarouselItem
                        key={index}
                        className="w-full flex-shrink-0"
                      >
                        <Card className="w-full border-none shadow-none bg-transparent">
                          <CardContent className="p-0 w-full">
                            {/* Image Wrapper */}
                            <div className="relative group w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-black/40">
                              {/* Image */}
                              <img
                                src={img.img}
                                alt={img.title}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                              />

                              {/* Overlay Buttons */}
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                                {img.live && (
                                  <a
                                    href={img.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                  >
                                    Live Demo
                                  </a>
                                )}

                                {img.github && (
                                  <a
                                    href={img.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-sm rounded-lg bg-white text-gray-900 hover:bg-gray-200"
                                  >
                                    GitHub
                                  </a>
                                )}
                              </div>
                            </div>
                          </CardContent>

                          {/* Title */}
                          <h1 className="mt-6 text-2xl font-bold text-[#d1701f] text-center">
                            {img.title}
                          </h1>

                          {/* Description */}
                          <p className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            {img.desc}
                          </p>

                          {/* Technologies */}
                          {img.technologies && (
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                              {img.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-semibold rounded-full bg-[#d1701f]/10 text-[#d1701f]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Skills */}
                          {img.skills && (
                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                              {img.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious
                    className="
    left-4
    h-15 w-15
    rounded-full
    bg-white/90 dark:bg-black/70
    backdrop-blur-as
    border border-gray-200 dark:border-gray-700
    shadow-lg
    hover:bg-[#d1701f] 
    transition-all duration-300
    hover:scale-110 cursor-pointer
  "
                  />

                  <CarouselNext
                    className="
    right-4
    h-15 w-15
    rounded-full
    bg-white/100 dark:bg-black/70
    backdrop-blur-md
    border border-gray-900 dark:border-gray-700
    shadow-lg
     cursor-pointer
    hover:bg-[#d1701f]
    transition-all duration-300
    hover:scale-110
  "
                  />
                </Carousel>
              </motion.div>
            </div>
          </div>
        </section>
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black pt-6 pb-16 text-gray-900 dark:text-gray-100 mt-10 overflow-x-hidden">
          {/* SEARCH BAR */}

          <section
            id="Skills"
            className="py-24 px-4  bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-200"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* LEFT SIDE – ABOUT + SKILLS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
                  <h1 className="text-5xl font-extrabold mb-6 text-indigo-900 dark:text-white">
                    Building Scalable & Modern Web Applications
                  </h1>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    I’m a Full Stack Developer focused on creating performant,
                    scalable, and user-friendly web applications. I enjoy
                    solving real-world problems using clean architecture and
                    modern technologies.
                  </p>

                  <a
                    href="#Projects"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                  >
                    View My Projects
                  </a>
                </div>

                {/* SKILLS */}
                <div className="mt-12 ">
                  <h2 className="text-3xl font-bold mb-6 text-indigo-900 dark:text-white text-center lg:text-left">
                    Core Skills & Technologies
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-2 ">
                    {[
                      "HTML, CSS & JavaScript",
                      "TypeScript",
                      "React & Next.js",
                      "Node.js & Express",
                      "MongoDB & MySQL",
                      "REST APIs & JWT Auth",
                      "Tailwind CSS & UI Design",
                      "Framer Motion & React Animations",
                      "GSAP & ScrollTrigger",
                      "React Awesome Reveal",
                      "Redux & Zustand",
                      "Git & GitHub",
                      "Docker & Deployment",
                      "AWS Basics",
                      "Postman & API Testing",
                      "Web Security & Authentication",
                      "Responsive Design & Cross-Browser Support",
                      "Debugging & Performance Optimization",
                    ].map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-xl p-4 flex items-center gap-3 transition-all"
                      >
                        <TbArrowMoveRightFilled className="text-indigo-500 text-xl" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE – WHAT I DO / SERVICES */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-indigo-900 dark:text-white mb-6 text-center lg:text-left">
                  What I Do
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Frontend Development",
                      desc: "Responsive, modern UIs using React, Next.js & Tailwind CSS.",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="48px"
                          viewBox="0 -960 960 960"
                          width="48px"
                          fill="#DA954B"
                        >
                          <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-85 32-158t87.5-127q55.5-54 130-84.5T489-880q79 0 150 26.5T763.5-780q53.5 47 85 111.5T880-527q0 108-63 170.5T650-294h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480-80Zm0-400Zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15ZM480-140q11 0 15.5-4.5T500-159q0-14-14.5-26T471-238q0-46 30-81t76-35h73q76 0 123-44.5T820-527q0-132-100-212.5T489-820q-146 0-247.5 98.5T140-480q0 141 99.5 240.5T480-140Z" />
                        </svg>
                      ),
                    },
                    {
                      title: "Backend Development",
                      desc: "Secure and scalable APIs using Node.js, Express & MongoDB.",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="48px"
                          viewBox="0 -960 960 960"
                          width="48px"
                          fill="#DA954B"
                        >
                          <path d="M480-80q-140-35-230-162.5T160-522v-238l320-120 320 120v238q0 152-90 279.5T480-80Zm0-62q106-35 175.5-128.5T737-480H480v-335l-260 97v196q0 12 .5 20.5T223-480h257v338Z" />
                        </svg>
                      ),
                    },
                    {
                      title: "Authentication Systems",
                      desc: "JWT, role-based access, and secure login systems.",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#DA954B"
                        >
                          <path d="M742-246q26.95 0 45.81-18.87 18.86-18.88 18.86-45.84 0-26.96-18.86-45.46T742-374.67q-26.67 0-45.33 18.74Q678-337.2 678-310.43q0 26.76 18.67 45.6Q715.33-246 742-246Zm-.14 128.67q32.14 0 60.14-15t45.67-41.34q-25-14-51.34-21.83-26.33-7.83-54.33-7.83t-54.33 7.83q-26.34 7.83-51.34 21.83 17.67 26.34 45.53 41.34 27.85 15 60 15ZM353.33-636h253.34v-88.67q0-54.66-36.67-91.66t-90-37q-53.33 0-90 37t-36.67 91.66V-636ZM534.67-80h-308q-26.34 0-46.5-20.17Q160-120.33 160-146.67v-422.66q0-26.34 20.17-46.5Q200.33-636 226.67-636h60v-88.67q0-81.66 56.16-138.5Q399-920 480-920q81 0 137.17 56.83 56.16 56.84 56.16 138.5V-636h60q26.34 0 46.5 20.17Q800-595.67 800-569.33V-494q-14.67-4-30.5-5.67-15.83-1.66-36.17-1.66v-68H226.67v422.66H498q7.33 19.34 15.33 34.17 8 14.83 21.34 32.5ZM742-44q-80.33 0-137.83-57.5-57.5-57.5-57.5-137.83 0-80.34 57.5-137.84T742-434.67q80.33 0 137.83 57.5 57.5 57.5 57.5 137.84 0 80.33-57.5 137.83Q822.33-44 742-44ZM226.67-569.33V-146.67v-422.66Z" />
                        </svg>
                      ),
                    },
                    {
                      title: "Performance & SEO",
                      desc: "Optimized apps with fast load times and SEO best practices.",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#DA954B"
                        >
                          <path d="M295-119q-36-1-68.5-18.5T165-189q-40-48-62.5-114.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q83 0 156 31.67 73 31.66 127 86.66t85.5 129q31.5 74 31.5 159Q880-358 855.67-291 831.33-224 786-178q-28.67 29.33-60 44.17Q694.67-119 662-119q-18 0-36-4.5T590-137l-56-28q-12.67-6.67-26.17-9.67-13.5-3-27.83-3-14.33 0-27.83 3-13.5 3-26.17 9.67l-56 28q-19 10-37.5 14.5T295-119Zm2.67-66.67q10.33 0 21.16-2.66Q329.67-191 340-196l56-28q19.67-9.67 40.5-14.67t42.5-5q21.67 0 42.67 4.67T563-224l57 28q10.33 5 20.67 7.67 10.33 2.66 20.66 2.66 21.67 0 41.67-10.66 20-10.67 39-32 34-38 52.67-92.67 18.66-54.67 18.66-114.67 0-142-96.66-239.83Q620-773.33 480-773.33t-236.67 98.66Q146.67-576 146.67-434q0 61 18.83 115.33 18.83 54.34 53.17 92 19 21.34 38.33 31.17 19.33 9.83 40.67 9.83ZM480-480Zm0 113.33q30.33 0 51.83-21.5t21.5-51.83q0-8-1.5-16t-5.16-15.33l59.33-77q11.33 13.66 19.83 28.83 8.5 15.17 13.5 32.83H708q-17-82-80.83-134.33-63.84-52.33-147.17-52.33-83.33 0-147.67 52.5Q268-568.33 252-486.67h68.67q16-54 60-87t99.33-33q19.67 0 38.33 4.34 18.67 4.33 35.34 13L494-511.67q-3.33-.66-7-1.16-3.67-.5-7-.5-30.33 0-51.83 21.5T406.67-440q0 30.33 21.5 51.83t51.83 21.5Z" />
                        </svg>
                      ),
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>

                      <h3 className="text-xl font-semibold text-indigo-900 dark:text-white mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300">
                        {service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <section
          id="certifications"
          className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-200"
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              <span className="text-primary">Certifications</span>
            </motion.h2>

            {/* Certifications Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group block p-4 rounded-2xl border shadow-sm hover:shadow-lg bg-card hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={400}
                      height={200}
                      className="rounded-xl w-full h-40  group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-semibold group-hover:text-primary transition">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    {cert.desc}
                  </p>

                  {/* Read More */}
                  <div className="mt-4 text-primary font-medium group-hover:underline">
                    View Certificate →
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}
