"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, Terminal, Code2, CheckCircle2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Rejwana<span className="text-cyan-400">.</span>T
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                SQA & Full-Stack
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-white/5 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume CTA & Status */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Rejwana_Tabassum_CV.pdf"
              download="Rejwana_Tabassum_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c121e]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href="/Rejwana_Tabassum_CV.pdf"
              download="Rejwana_Tabassum_CV.pdf"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
