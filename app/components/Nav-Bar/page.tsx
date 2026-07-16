"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
   { label: "Prototype", href: "#prototype" },
  { label: "Challenges", href: "#challenges" },
  { label: "The Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive("#team");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-blue-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        
        <a
          href="#home"
          onClick={() => setActive("#home")}
          className="flex items-center gap-2 text-2xl font-bold tracking-wide"
        >
          <Image
            src="/home/novapact.png"
            alt="NovaPact Logo"
            width={35}
            height={35}
            className="rounded-full object-cover"
          />

          <span className="text-blue-500">
            NovaPact
          </span>
        </a>

        
        <ul className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                  active === link.href
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "text-blue-500 hover:text-blue-700"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

       
        <button
          className="text-blue-500 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      
      {open && (
        <ul className="space-y-1 bg-white px-6 py-4 border-t border-blue-100 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  active === link.href
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "text-blue-500"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}