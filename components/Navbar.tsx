"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F2EAD5]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-16 flex flex-row items-center justify-between h-16 lg:h-[84px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
          <img src="/logo.svg" alt="Fleura Fertility" className="w-7 h-6 lg:w-8 lg:h-7" />
          <span className="font-['Besley'] font-normal text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-[-0.6px] text-black">
            Fleura Fertility
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[0.35px] text-[#6E6E6E] hover:text-black transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Book CTA */}
        <Link
          href="#contact"
          className="hidden lg:flex items-center px-5 py-2 h-[36px] bg-black text-white font-['Manrope'] font-normal text-[14px] leading-[20px] rounded-full hover:bg-black/80 transition-colors duration-200"
        >
          Book a Consult
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-black"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-[#F2EAD5] border-t border-black/10"
          >
            <div className="px-4 sm:px-6 pb-5 pt-3 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="py-2.5 font-['Manrope'] font-normal text-[14px] tracking-[0.35px] text-[#6E6E6E] hover:text-black border-b border-black/[0.08] last:border-0 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-3 flex justify-center px-5 py-2.5 bg-black text-white font-['Manrope'] font-normal text-[14px] rounded-full hover:bg-black/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book a Consult
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
