"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Fondo del header */}
      <motion.div
        className="fixed top-0 left-1/2 h-12 w-full rounded-none border border-white border-opacity-30 bg-white bg-opacity-80 shadow-md shadow-black/10 backdrop-blur-sm sm:top-4 sm:h-10 sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/30 dark:bg-opacity-70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* Botón hamburguesa compacto */}
      <div className="fixed top-3 left-3 z-50 sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex flex-col justify-center items-center bg-white dark:bg-gray-900 rounded-full shadow-sm focus:outline-none transition-all duration-300"
        >
          <span
            className={clsx(
              "block absolute w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full transition-transform duration-300",
              isOpen ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={clsx(
              "block absolute w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full transition-opacity duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={clsx(
              "block absolute w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full transition-transform duration-300",
              isOpen ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </div>

      {/* Navegación escritorio */}
<nav className="hidden sm:flex fixed top-4 left-1/2 -translate-x-1/2 z-50">
  <ul className="flex items-center justify-center gap-4 rounded-full bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-lg px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300">
    {links.map((link) => (
      <motion.li
        key={link.hash}
        className="relative flex items-center justify-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          href={link.hash}
          className={clsx(
            "flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap",
            "hover:bg-gray-100/80 hover:text-gray-900 dark:hover:bg-gray-800/70 dark:hover:text-white",
            {
              "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white font-semibold shadow-sm":
                activeSection === link.name,
            }
          )}
          onClick={() => {
            setActiveSection(link.name);
            setTimeOfLastClick(Date.now());
          }}
        >
          {link.name}
        </Link>
      </motion.li>
    ))}
  </ul>
</nav>


      {/* Sidebar móvil compacto */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-56 bg-white dark:bg-gray-950 shadow-lg z-40 flex flex-col pt-16 px-3 sm:hidden"
      >
        {links.map((link) => (
          <Link
            key={link.hash}
            href={link.hash}
            className={clsx(
              "py-2 px-2 rounded-md text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition",
              {
                "bg-gray-100 dark:bg-gray-800":
                  activeSection === link.name,
              }
            )}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
              setIsOpen(false);
            }}
          >
            {link.name}
          </Link>
        ))}
      </motion.aside>
    </header>
  );
}
