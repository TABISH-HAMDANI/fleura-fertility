"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = ["About", "Services", "Pricing", "Contact"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    /* bg-sage = #8B8B5F */
    <footer className="bg-sage py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Fleura Fertility" className="w-8 h-7 brightness-0 invert" />
              <span className="font-['Besley'] text-[24px] font-normal text-white tracking-[-0.6px]">
                Fleura Fertility
              </span>
            </div>
            <p className="font-sans text-[13px] text-white/75 leading-relaxed max-w-[220px]">
              Boutique, patient-centered fertility care. Thoughtful guidance for
              your unique journey.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] text-white/50 uppercase tracking-[0.15em] mb-5">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-sans text-[13.5px] text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Guide */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] text-white/50 uppercase tracking-[0.15em] mb-5">
              Free Guide
            </h4>
            <p className="font-sans text-[13px] text-white/75 leading-relaxed mb-3">
              Join my mailing list and I&rsquo;ll send you:
            </p>
            <p className="font-serif italic text-[15px] text-white leading-snug mb-5">
              The 7 Fertility Tests That Actually Matter
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 min-w-0 bg-white/15 border border-white/20 text-white placeholder-white/40 font-sans text-[13px] px-3.5 py-2.5 rounded-lg outline-none focus:border-white/45 transition-all"
              />
              <button className="px-4 py-2.5 bg-rust text-white text-[12px] font-sans font-semibold rounded-lg hover:bg-rust-dark transition-colors duration-200 shrink-0">
                Join
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] text-white/50 uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:care@fleurafertility.com" className="font-sans text-[13.5px] text-white/80 hover:text-white transition-colors duration-200">
                  care@fleurafertility.com
                </a>
              </li>
              <li>
                <span className="font-sans text-[13.5px] text-white/80">New York, NY</span>
              </li>
              <li>
                <a href="tel:9173368236" className="font-sans text-[13.5px] text-white/80 hover:text-white transition-colors duration-200">
                  917 336-8236
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] text-white/50">
            © 2026 Fleura Fertility. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-sans text-[12px] text-white/50 hover:text-white/80 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="font-sans text-[12px] text-white/50 hover:text-white/80 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

