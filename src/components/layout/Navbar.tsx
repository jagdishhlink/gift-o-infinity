"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Phone } from "lucide-react";
import { businessData, siteConfig } from "@/data/site-data";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5 md:px-8">
          <a href="#" className="relative z-10 shrink-0">
            {businessData.logo ? (
              <img src={businessData.logo} alt={businessData.name} className="h-7 md:h-8 w-auto" />
            ) : (
              <span className="text-base md:text-lg font-heading font-bold truncate max-w-[180px] block">{businessData.name}</span>
            )}
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-3.5 py-2 text-[13px] font-medium text-foreground/60 hover:text-foreground rounded-lg hover:bg-card/80 transition-all">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button onClick={toggleTheme} className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-card transition-all" aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-lg text-[13px] font-semibold hover:bg-primary/90 transition-all active:scale-[0.97]">
              Get In Touch
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-1">
            <button onClick={toggleTheme} className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/50 hover:text-foreground" aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/60 hover:text-foreground" aria-label="Menu">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/98 backdrop-blur-xl"
          >
            <nav className="flex flex-col justify-center h-full px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-bold py-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8 flex flex-col gap-3">
                <a href="#contact" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center py-3.5 bg-primary text-white rounded-xl font-semibold text-sm">
                  Get In Touch
                </a>
                {businessData.phone && (
                  <a href={`tel:${businessData.phone.replace(/[^+\d]/g, "")}`} onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center gap-2 py-3.5 border border-border rounded-xl font-semibold text-sm">
                    <Phone size={14} /> {businessData.phone}
                  </a>
                )}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
