"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-transparent backdrop-blur-md border-b border-black/10 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.svg" alt="Fleura Fertility" className="w-8 h-7" />
            <span className="font-['Besley'] text-[24px] font-normal text-black tracking-[-0.6px]">
              Fleura Fertility
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-[14px] font-sans font-medium text-[#6E6E6E] hover:text-stone transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Book CTA */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-stone text-cream text-[13px] font-sans font-medium rounded-full hover:bg-stone/80 transition-colors duration-200"
          >
            Book a Consult
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1.5 text-stone"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 px-6 pb-5 pt-3">
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="py-2.5 text-sm font-sans text-gray hover:text-black border-b border-black/8 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-3 flex justify-center px-5 py-2.5 bg-stone text-cream text-sm font-sans font-medium rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Book a Consult
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

