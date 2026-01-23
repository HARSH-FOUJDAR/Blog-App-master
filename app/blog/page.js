"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbArrowMoveRightFilled } from "react-icons/tb";

const images = [
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

const topics = [
  "Programming Fundamentals",
  "Understanding Variables",
  "Conditional Statements",
  "Looping & Iteration",
  "Data Types",
  "Functions",
  "Linked List",
  "Heaps",
  "Inheritance In Java",

  "Bubble Sort",
  "Quick Sort",
  "Insertion Sort",
  "Merge Sort",
  "Android Architecture",
  "Activities and Intents",
  "User Interface Design",
  "API Integration",
  "Data Storage Options",
  "MVC and MVVM Patterns",
  "Debugging and Testing",
];

const mainCourses = [
  {
    id: 1,
    title: "Programming Essentials",
    rating: "4.46",
    duration: "1 hour",
    learners: "2.3L+",
    level: "Beginner",
    image: "https://img.icons8.com/color/512/source-code.png",
  },
  {
    id: 2,
    title: "C for Beginners",
    rating: "4.49",
    duration: "2 hours",
    learners: "2.3L+",
    level: "Beginner",
    image: "https://img.icons8.com/color/512/c-programming.png",
  },
  {
    id: 3,
    title: "Data Structures in C",
    rating: "4.39",
    duration: "2 hours",
    learners: "2L+",
    level: "Beginner",
    image: "https://img.icons8.com/color/512/data-configuration.png",
  },
  {
    id: 4,
    title: "Visual Graphics in C",
    rating: "4.49",
    duration: "2 hours",
    learners: "18.2K+",
    level: "Intermediate",
    image: "https://img.icons8.com/color/512/computer.png",
  },
  {
    id: 5,
    title: "C++ Tutorial",
    rating: "4.42",
    duration: "2 hours",
    learners: "51.9K+",
    level: "Beginner",
    image: "https://img.icons8.com/color/512/c-plus-plus-logo.png",
  },

  {
    id: 7,
    title: "Java Programming",
    rating: "4.48",
    duration: "2 hours",
    learners: "7.2L+",
    level: "Beginner",
    image: "https://img.icons8.com/color/512/java-coffee-cup-logo.png",
  },
];

export default function Blog() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black pt-6 pb-16 text-gray-900 dark:text-gray-100 mt-10">
        {/* SEARCH BAR */}

        <section className="py-24 px-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
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
                  scalable, and user-friendly web applications. I enjoy solving
                  real-world problems using clean architecture and modern
                  technologies.
                </p>

                <a
                  href="/"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  View My Projects
                </a>
              </div>

              {/* SKILLS */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 dark:text-white text-center lg:text-left">
                  Core Skills & Technologies
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-2">
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
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
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
        <footer className="py-10 text-center opacity-60 text-sm">
          © 2026 Your Software Company. All rights reserved.
        </footer>
      </main>
    </>
  );
}
