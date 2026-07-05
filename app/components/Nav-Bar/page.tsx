"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "The Team", href: "#team" },
  { label: "Challenges", href: "#challenges" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-blue-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">NovaPact</span>
        </a>

       
        <ul className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-3 py-1 rounded-md text-sm font-medium transition
                  ${
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
                className={`block px-3 py-2 rounded-md text-sm font-medium
                  ${
                    active === link.href
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "text-blue-500"
                  }`}
                onClick={() => setOpen(false)}
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