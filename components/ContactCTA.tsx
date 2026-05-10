"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactCTA() {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    lastName: "",
    message: "",
    notify: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    /* bg-peach = #DDA783 — lighter bg, so use dark text */
    <section id="contact" className="bg-peach py-20 lg:py-28">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-start">

          {/* Left: copy */}
          <FadeIn direction="right">
            <p className="font-serif italic text-[12px] tracking-[0.28em] text-black/40 uppercase mb-5">
              Get Started
            </p>
            <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3rem)] leading-[52.8px] tracking-[-1.2px] text-black mb-6">
              Start your
              <br />
              fertility plan
            </h2>
            <p className="font-sans text-[14.5px] text-black/65 leading-relaxed mb-9 max-w-[380px]">
              Book a consultation to review your history, labs, and goals — and
              leave with a personalized plan for next steps, whether that&rsquo;s
              IUI, IVF, or another approach.
            </p>

            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-4 h-4 text-black" />
                </div>
                <span className="font-sans text-[14px] text-black">917 336-8236</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                  <EmailIcon className="w-4 h-4 text-black" />
                </div>
                <span className="font-sans text-[14px] text-black">care@fleurafertility.com</span>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.15}>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full bg-white/60 border border-black/15 text-black placeholder-black/35 font-sans text-[14px] px-4 py-3.5 rounded-xl outline-none focus:border-black/40 focus:bg-white/80 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-white/60 border border-black/15 text-black placeholder-black/35 font-sans text-[14px] px-4 py-3.5 rounded-xl outline-none focus:border-black/40 focus:bg-white/80 transition-all"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What are you hoping to get help with?"
                rows={4}
                className="w-full bg-white/60 border border-black/15 text-black placeholder-black/35 font-sans text-[14px] px-4 py-3.5 rounded-xl outline-none focus:border-black/40 focus:bg-white/80 transition-all resize-none"
              />

              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name*"
                className="w-full bg-white/60 border border-black/15 text-black placeholder-black/35 font-sans text-[14px] px-4 py-3.5 rounded-xl outline-none focus:border-black/40 focus:bg-white/80 transition-all"
              />

              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  className="relative shrink-0 mt-0.5"
                  onClick={() => setForm((p) => ({ ...p, notify: !p.notify }))}
                >
                  <div className={`w-[18px] h-[18px] rounded border transition-all ${form.notify ? "bg-black border-black" : "border-black/30 bg-transparent"}`}>
                    {form.notify && (
                      <svg className="w-full h-full text-white p-px" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-sans text-[13px] text-black/70 leading-snug">
                  I&rsquo;d like to be notified when scheduling opens
                </span>
              </label>

              <motion.button
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="mt-1 w-full py-4 bg-black text-white font-sans font-semibold text-[13px] rounded-xl hover:bg-black/75 transition-all duration-200 tracking-wide"
              >
                Submit Request
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.8 19.79 19.79 0 01.01 1.18C.01.15.9-.18 1.98.16l3 .75a2 2 0 011.43 1.37l.75 3.5a2 2 0 01-.45 1.78l-1.5 1.5a16 16 0 006.09 6.08l1.5-1.5a2 2 0 011.78-.44l3.5.75a2 2 0 011.37 1.43z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
