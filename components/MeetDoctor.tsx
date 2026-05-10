import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "NYC", label: "Based Practice" },
  { value: "REI", label: "Board Certified" },
];

export default function MeetDoctor() {
  return (
    <section id="about" className="bg-[#F2EAD5] py-14 lg:py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">

          {/* Doctor photo */}
          <FadeIn direction="right" className="shrink-0 lg:w-[427px]">
            <div className="border border-[rgba(221,167,131,0.2)] rounded-2xl p-px overflow-hidden w-full lg:w-[427px] h-[300px] sm:h-[380px] lg:h-[510px] bg-[#E8DFD2]">
              <img
                src="/Dr.-Jennifer-Kulp-Makarov.png.png"
                alt="Dr. Jennifer Kulp-Makarov, board-certified Reproductive Endocrinologist"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.15} className="flex flex-col gap-8 lg:w-[533px]">

            {/* Header */}
            <div className="flex flex-col gap-4">
              <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[2.8px] uppercase text-[#DDA783]">
                Your Doctor
              </p>
              <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[53px] tracking-[-1.2px] text-black">
                Meet Your Fertility Specialist
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5">
              <p className="font-['Manrope'] font-normal text-[16px] leading-[26px] lg:text-[18px] lg:leading-[29px] text-[#6E6E6E]">
                Dr. Jennifer Kulp-Makarov is a board-certified Reproductive
                Endocrinologist specializing in complex fertility cases, including
                low AMH, IVF over 40, and patients with prior failed cycles.
              </p>

              <div className="flex flex-col gap-5 font-['Manrope'] font-normal text-[16px] leading-[26px] lg:text-[18px] lg:leading-[29px] text-[#6E6E6E]">
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

              {/* CTA button */}
              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full lg:w-[365px] py-4 lg:py-0 lg:h-[52px] bg-black text-white font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[1.4px] uppercase rounded-full hover:bg-black/80 transition-colors text-center"
                >
                  Book a consultation with Dr. Jenn
                </Link>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-black/10" />

              {/* Stats */}
              <div className="flex flex-row flex-wrap gap-4 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] leading-[42px] text-[#DDA783]">
                      {stat.value}
                    </span>
                    <span className="font-['Manrope'] font-normal text-[14px] leading-[20px] text-[#6E6E6E]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
