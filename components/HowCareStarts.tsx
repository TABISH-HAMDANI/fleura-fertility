import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.67" y="2.33" width="18.67" height="23.33" rx="1" stroke="#F2EAD5" strokeWidth="1.75" />
        <rect x="16.33" y="2.33" width="7" height="7" stroke="#F2EAD5" strokeWidth="1.75" />
        <line x1="9.33" y1="10.5" x2="18.67" y2="10.5" stroke="#F2EAD5" strokeWidth="1.75" />
        <line x1="9.33" y1="15.17" x2="18.67" y2="15.17" stroke="#F2EAD5" strokeWidth="1.75" />
        <line x1="9.33" y1="19.83" x2="18.67" y2="19.83" stroke="#F2EAD5" strokeWidth="1.75" />
      </svg>
    ),
    title: "Full Review",
    description: "A thorough review of your history, labs, and prior treatment cycles.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="3.5" width="21" height="21" stroke="#F2EAD5" strokeWidth="1.75" />
        <rect x="21" y="10.5" width="3.5" height="8.17" stroke="#F2EAD5" strokeWidth="1.75" />
        <rect x="15.17" y="5.83" width="3.5" height="12.83" stroke="#F2EAD5" strokeWidth="1.75" />
        <rect x="9.33" y="16.33" width="3.5" height="8.17" stroke="#F2EAD5" strokeWidth="1.75" />
      </svg>
    ),
    title: "Your Numbers",
    description: "Individualized interpretation of AMH, FSH, AFC, and protocols.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.33" y="3.5" width="23.33" height="21" rx="1" stroke="#F2EAD5" strokeWidth="1.75" />
      </svg>
    ),
    title: "Treatment Pathways",
    description: "An honest discussion of all options, including non-IVF paths.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5.83" y1="14" x2="22.17" y2="14" stroke="#F2EAD5" strokeWidth="1.75" />
        <polyline points="14,5.83 22.17,14 14,22.17" stroke="#F2EAD5" strokeWidth="1.75" fill="none" />
      </svg>
    ),
    title: "Next Steps",
    description: "Clear, actionable next steps you can take immediately.",
  },
];

export default function HowCareStarts() {
  return (
    <section className="bg-[#8B8B5F] py-14 lg:py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-10 lg:gap-[80px] items-center">

        <FadeIn>
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[2.8px] uppercase text-white/70">
              What You Get
            </p>
            <div className="flex flex-col items-center gap-2">
              <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[53px] tracking-[-1.2px] text-white text-center">
                How your care starts              </h2>
              <p className="font-['Manrope'] font-normal text-[18px] leading-[25px] tracking-[-1.2px] text-white text-center">
                Your consultation is the starting point for a fully personalized treatment plan
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="bg-white/15 border border-white/15 rounded-2xl overflow-hidden w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
              {steps.map((step, i) => (
                <FadeIn
                  key={step.title}
                  delay={i * 0.12}
                  className="bg-[#8B8B5F] flex flex-col gap-3 p-6 sm:p-8 lg:py-12 lg:pl-12 lg:pr-6"
                >
                  <div className="w-7 h-7 shrink-0">
                    {step.icon}
                  </div>
                  <h3 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] leading-[29px] text-white">
                    {step.title}
                  </h3>
                  <p className="font-['Manrope'] font-normal text-[16px] leading-[26px] text-white/80">
                    {step.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
