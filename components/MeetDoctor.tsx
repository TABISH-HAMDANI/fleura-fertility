import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";


const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "NYC", label: "Based Practice" },
  { value: "REI", label: "Board Certified" },
];

export default function MeetDoctor() {
  return (
    <section id="about" className="bg-[#F2EAD5] py-20 lg:py-28">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">

          {/* Doctor photo */}
          <FadeIn direction="right">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-[420px] bg-[#E2E5DE]" />
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.15} className="flex flex-col">
            <p className="font-serif italic text-[12px] tracking-[0.28em] text-black/40 uppercase mb-5">
              Your Doctor
            </p>
            <h2 className="font-serif font-normal text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[52.8px] tracking-[-1.2px] text-black mb-6">
              Meet Your Fertility
              <br />
              <em className="italic text-[#B9794E]">Specialist</em>
            </h2>

            <div className="space-y-4 font-sans text-[14.5px] text-[#6E6E6E] leading-relaxed mb-8">
              <p>
                Dr. Jennifer Kulp Makarov is a board-certified reproductive
                endocrinologist specializing in complex fertility cases,
                including low AMH, IVF over 40, and patients with prior failed cycles.
              </p>
              <p>
                She takes a highly individualized approach to care, tailoring
                each treatment plan to a patient&rsquo;s biology, hormone
                profile, and reproductive history rather than relying on
                one-size-fits-all or high-dose protocols.
              </p>
              <p>
                At Fleura Fertility, Dr. Jenn provides comprehensive care from
                initial evaluation through treatment, including IUI, IVF, egg
                freezing, and personalized fertility planning. Her focus is on
                thoughtful decision making, efficient care, and helping patients
                move forward with clarity and confidence.
              </p>
              <p>
                With over a decade of experience caring for fertility patients in
                New York, she founded Fleura Fertility to offer a more
                intentional, patient-centered alternative to high-volume
                clinics — where each patient is heard, and every plan is truly
                individualized.
              </p>
            </div>

            <Link
              href="#contact"
              className="self-start inline-flex items-center px-7 py-3.5 bg-black text-white text-[13px] font-sans font-semibold rounded-full hover:bg-black/75 transition-all duration-200 mb-10"
            >
              Book a consultation with Dr. Jenn
            </Link>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif font-normal text-[1.7rem] leading-[52.8px] tracking-[-1.2px] text-black">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[12px] text-[#6E6E6E] leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
