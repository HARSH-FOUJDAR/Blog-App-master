"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { Footer } from "@/components/ui/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";
const images = [
  {
    img: "https://funny-gecko-f7f265.netlify.app/assets/Screenshot%202026-01-23%20085933-DZE80hEC.png",
    title: "AI Tool",
    desc: "A professional and fully responsive developer portfolio built to showcase projects, technical skills, and experience. Features smooth animations, modern UI design, and performance optimization for all devices.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    skills: [
      "UI Development",
      "Responsive Design",
      "Animation",
      "Performance Optimization",
    ],
    live: "https://stately-madeleine-029b6f.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/AI-TOOL",
  },
  {
    img: "https://mygstbillbook.in/wp-content/uploads/2023/01/scr-6-1-1024x484.png",
    title: "GST Billing Application",
    desc: "A complete GST billing and invoicing application that allows users to generate invoices, perform automatic GST calculations, manage customers, and maintain transaction records efficiently.",
    technologies: ["React.js", "JavaScript", "CSS", "Local Storage"],
    skills: [
      "Invoice Management",
      "Business Logic",
      "Form Handling",
      "Data Validation",
    ],
    live: "https://profound-cascaron-5d0b7c.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/Tax-invoice-Generator-React",
  },
  {
    img: "https://databunker.org/use-case/simplify-user-login-backend/featured.png",
    title: "Authentication & Authorization System",
    desc: "A secure full-stack MERN authentication system implementing user registration, login, role-based authorization, and token-based security using industry-standard practices.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    skills: [
      "Authentication",
      "Authorization",
      "REST APIs",
      "Security Best Practices",
    ],
    live: "https://frontend-auth-nhku.vercel.app/",
    github:
      "https://github.com/HARSH-FOUJDAR/User-Authentication-and-Authorization-with-Bearer-Token-main",
  },
  {
    img: "https://funny-gecko-f7f265.netlify.app/assets/Screenshot%202026-01-23%20103718-B-9dEY_n.png",
    title: "E comerse Website",
    desc: "A modern and responsive admin dashboard interface with reusable components, clean layouts, and mobile-friendly design, focused on usability and scalability.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    skills: ["Dashboard Design", "Component Reusability", "Responsive UI"],
    live: "https://sage-meerkat-548848.netlify.app/",
    github:
      "https://github.com/HARSH-FOUJDAR/Add-Cart-React-Task/tree/main/src",
  },
  {
    img: "https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2025/02/monday-dev-kanban-board.jpg",
    title: "Kanban Board Task Manager",
    desc: "A task management Kanban board application designed to organize tasks efficiently using drag-and-drop style workflow and clean UI patterns.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    skills: ["Task Management", "State Management", "UI/UX Design"],
    live: "https://playful-croissant-4d9c1b.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/Task-Meneger-task",
  },
  {
    img: "https://ms.hsoubcdn.com/uploads/portfolios/833004/63cea3a2f0f71/1.jpg",
    title: "Movie Search Application",
    desc: "A movie search web application that allows users to search movies in real-time, view details, and explore movie data through a clean and responsive interface.",
    technologies: ["React.js", "API Integration", "JavaScript", "CSS"],
    skills: ["API Integration", "Search Functionality", "Data Rendering"],
    live: "https://thriving-babka-1f288c.netlify.app/",
    github: "https://github.com/HARSH-FOUJDAR/Movie-SearchApp-React",
  },
];

const certifications = [
  {
    title: "Python",
    desc: "Learned AWS basics, instance management, and cloud deployment fundamentals.",
    image: "/images/image.png",
    link: "https://www.guvi.in/verify-certificate?id=8r72000F4PO6pSl17i", // Link to certificate or description
  },
  {
    title: "AWS Account, Navigation & Instances",
    desc: "Completed comprehensive Java course covering OOP, data structures, and problem-solving.",
    image: "/images/image2.png",
    link: "https://www.guvi.in/verify-certificate?id=9b23l6q9E4C07d5191",
  },
  {
    title: "Git",
    desc: "Built modern web applications with React, Next.js, and best practices in frontend development.",
    image: "/images/image3.png",
    link: "https://www.guvi.in/verify-certificate?id=w3156T771LNP78a616",
  },
  {
    title: "TypeScript",
    desc: "Mastered backend development with Node.js, Express, and MongoDB database integration.",
    image: "/images/image4.png",
    link: "https://www.guvi.in/verify-certificate?id=6Z6W2kM2aOKs675631",
  },
  {
    title: "100 Days of JavaScript with CodeKata",
    desc: "Mastered backend development with Node.js, Express, and MongoDB database integration.",
    image: "/images/image4.png",
    link: "https://www.guvi.in/verify-certificate?id=w3156T771LNP78a616",
  },
  {
    title: "ChatGPT for Everyone Bengali",
    desc: "Mastered backend development with Node.js, Express, and MongoDB database integration.",
    image: "/images/image5.png",
    link: "https://www.guvi.in/verify-certificate?id=w3156T771LNP78a616",
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-gradient-to-b from-background to-background/40 mt-50 overflow-x-hidden ">
        <section className="container px-4 py-20  mx-auto lg:h-[650px] lg:flex lg:items-center lg:gap-16 overflow-hidden ">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center lg:text-left lg:w-1/2"
          >
            <h1 className="text-xl md:text-6xl font-extrabold tracking-tight leading-tight bg-transparent  font-itelic text-gray-900 dark:text-white">
              Harsh Foujdar
              <br />
              with
              <span className="bg-gradient-to-r from-primary to-purple-500 relative left-2 bg-clip-text text-transparent bg-background/70 ">
                Full Stack Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-lg md:text-xl font-bold text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm Harsh Foujdar. A passionate Full Stack Developer 
            </p>
            <p className="mt-5  md:text-xl text-gray-600">
              {" "}
              High knowledge on  
              <span> softwares</span>
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-3 justify-center lg:justify-start">
              <a className="icon-box">
                <img
                  src="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"
                  alt="HTML"
                />
              </a>

              <a className="icon-box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                  alt="CSS"
                />
              </a>

              <a className="icon-box">
                <img
                  src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                  alt="JavaScript"
                />
              </a>

              <a className="icon-box">
                <img
                  src="https://logo.svgcdn.com/logos/react.png"
                  alt="React"
                />
              </a>

              <a className="icon-box">
                <img
                  src="https://nodejs.org/static/logos/nodejsHex.svg"
                  alt="Node.js"
                />
              </a>

              <a className="icon-box bg-white">
                <img
                  src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
                  alt="Express"
                />
              </a>

              <a className="icon-box">
                <img
                  src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
                  alt="MongoDB"
                />
              </a>

              <a className="icon-box">
                <img
                  src="https://img.icons8.com/?size=80&id=GPfHz0SM85FX&format=png"
                  alt="Java"
                />
              </a>
              <a className="icon-box">
                <img
                  src="https://www.guvi.in/assets/D8ppmyio-postman.webp"
                  alt="Postmen"
                />
              </a>
              <a className="icon-box">
                <img
                  src="https://www.guvi.in/assets/D5awHPXx-aws.webp"
                  alt="Aws"
                />
              </a>
              <a className="icon-box">
                <img
                  src="https://www.guvi.in/assets/pWlFwCYi-vscode.webp"
                  alt="Vs Code"
                />
              </a>
              <a className="icon-box">
                <img
                  src="https://www.guvi.in/assets/DgRo5tQb-mongoose.webp"
                  alt="mongoose"
                />
              </a>
              <a className="icon-box">
                <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                  alt="GitHub"
                />
              </a>
              <a className="icon-box">
                <img
                  src="https://www.guvi.in/assets/BJvKArqQ-git.webp"
                  alt="mongoose"
                />
              </a>
              <a className="icon-box">
                <img
                  className=""
                  src="https://www.guvi.in/assets/BnPPt1jF-cursorai.webp"
                  alt="mongoose"
                />
              </a>
              <a className="icon-box">
                <img
                  className=""
                  src="https://www.guvi.in/assets/k9QyaKm9-mysql.webp"
                  alt="mysql"
                />
              </a>
              <a className="icon-box">
                <img
                  className=""
                  src="https://www.guvi.in/assets/DDI8tCRX-tailwindcss.webp"
                  alt="Tailwind css"
                />
              </a>
              <a className="icon-box">
                <img
                  className=""
                  src="https://www.guvi.in/assets/Dmmzib7r-redux.webp"
                  alt="Redux"
                />
              </a>
            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="w-full mt-12 lg:mt-0 lg:w-1/2 flex justify-center"
          >
            <Image
              src="/images/Untitled design (1).png"
              alt="tailwind components"
              width={400}
              height={400}
              className="max-w-xl   hover:scale-[1.05] rounded-full transition-transform duration-500"
            />
          </motion.div>
        </section>
        <hr className="my-12 border-gray-300 dark:border-gray-700" />
        {/* Project SECTION */}
        <section className="py-24 bg-gradient-to-b from-background/40 to-background/10">
          {/* ❗ agar full screen width chahiye to container hata do */}
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
    h-12 w-12
    rounded-full
    bg-white/90 dark:bg-black/70
    backdrop-blur-md
    border border-gray-200 dark:border-gray-700
    shadow-lg
    hover:bg-[#d1701f] hover:text-white
    transition-all duration-300
    hover:scale-110 cursor-pointer
  "
                  />

                  <CarouselNext
                    className="
    right-4
    h-12 w-12
    rounded-full
    bg-white/90 dark:bg-black/70
    backdrop-blur-md
    border border-gray-200 dark:border-gray-700
    shadow-lg
     cursor-pointer
    hover:bg-[#d1701f] hover:text-white
    transition-all duration-300
    hover:scale-110
  "
                  />
                </Carousel>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-background/40">
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
      <div></div>
    </>
  );
}
