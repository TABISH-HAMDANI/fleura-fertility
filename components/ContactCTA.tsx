"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactCTA() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
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
    <section id="contact" className="bg-[#DDA783] py-14 lg:py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">

          {/* Left: copy */}
          <FadeIn direction="right" className="flex flex-col gap-4 lg:w-[426.66px] shrink-0">
            <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[2.8px] uppercase text-[#FFECE3]">
              Get Started
            </p>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[53px] tracking-[-1.2px] text-white">
              Start your fertility plan
            </h2>
            <p className="font-['Manrope'] font-normal text-[18px] leading-[29px] text-white/90 max-w-[382px]">
              Book a consultation to review your history, labs, and goals—and leave with a personalized plan for next steps, whether that’s IUI, IVF, or another approach.

            </p>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.15} className="flex-1 w-full">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">

              {/* Row 1: First name + Last name */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-['Manrope'] font-medium text-[14px] leading-[20px] text-white">
                    First name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full h-[50px] bg-white border border-white/20 rounded-[10px] px-4 font-['Manrope'] text-[14px] text-black placeholder-black/30 outline-none focus:border-white/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-['Manrope'] font-medium text-[14px] leading-[20px] text-white">
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full h-[50px] bg-white border border-white/20 rounded-[10px] px-4 font-['Manrope'] text-[14px] text-black placeholder-black/30 outline-none focus:border-white/50 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Email */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-['Manrope'] font-medium text-[14px] leading-[20px] text-white">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full h-[50px] bg-white border border-white/20 rounded-[10px] px-4 font-['Manrope'] text-[14px] text-black placeholder-black/30 outline-none focus:border-white/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-['Manrope'] font-medium text-[14px] leading-[20px] text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full h-[50px] bg-white border border-white/20 rounded-[10px] px-4 font-['Manrope'] text-[14px] text-black placeholder-black/30 outline-none focus:border-white/50 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Manrope'] font-medium text-[14px] leading-[20px] text-white">
                  What are you hoping to get help with?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full h-[160px] sm:h-[220px] lg:h-[282px] bg-white border border-white/20 rounded-[10px] px-4 py-3 font-['Manrope'] text-[14px] text-black placeholder-black/30 outline-none focus:border-white/50 transition-all resize-none"
                />
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-[12px] cursor-pointer">
                <div className="relative shrink-0">
                  <input
                    type="checkbox"
                    name="notify"
                    checked={form.notify}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 border rounded-[6px] transition-all flex items-center justify-center ${form.notify ? "bg-white border-white" : "bg-transparent border-white"
                      }`}
                    onClick={() => setForm((p) => ({ ...p, notify: !p.notify }))}
                  >
                    {form.notify && (
                      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#DDA783" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-['Manrope'] font-medium text-[14px] leading-[20px] text-white/90">
                  I&rsquo;d like to be notified when scheduling opens
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-[56px] bg-black text-white font-['Manrope'] font-medium text-[16px] leading-[24px] rounded-full hover:bg-black/80 transition-colors text-center"
              >
                Submit Request
              </button>

            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
