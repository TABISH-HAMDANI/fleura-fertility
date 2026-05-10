import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote: "Dr. Jenn gave me the first honest, clear explanation of my lab results that I'd ever received. After two years of feeling dismissed, I finally felt heard.",
    name: "Sarah M.",
    type: "IVF Patient, NYC",
  },
  {
    quote: "I came in for a second opinion before starting IVF and left with a completely different — and better — plan. She saved me months of unnecessary treatment.",
    name: "Rachel K.",
    type: "Egg Freezing Patient",
  },
  {
    quote: "The written summary alone was worth the consultation. I finally had something concrete to bring to my next appointment and advocate for myself.",
    name: "Priya D.",
    type: "Fertility Consultation",
  },
  {
    quote: "I was so overwhelmed by conflicting advice from different clinics. Dr. Jenn broke everything down clearly and helped me feel confident in my decision for the first time.",
    name: "Melissa T.",
    type: "Second Opinion Patient",
  },
  {
    quote: "She spent more time with me in one virtual session than my previous RE did over six months of appointments. I wish I had found her sooner.",
    name: "Lauren C.",
    type: "IVF Patient, NJ",
  },
  {
    quote: "As someone with low AMH who was told to 'hurry up,' Dr. Jenn was the first doctor who actually explained my options without making me panic. Life-changing consult.",
    name: "Amy W.",
    type: "Egg Freezing Patient",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#E2E5DE] py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8 flex flex-col items-center gap-16">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-center gap-4">
            <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[2.8px] uppercase text-[#8B8B5F] text-center">
              Patient Stories
            </p>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[48px] leading-[53px] tracking-[-1.2px] text-black text-center">
              What patients are saying
            </h2>
          </div>
        </FadeIn>

        {/* Quote grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={(i % 3) * 0.1}>
              <div className="bg-white border border-black/[0.08] rounded-2xl pt-10 pb-10 pl-10 pr-0 flex flex-col gap-6 h-full">

                {/* Stars */}
                <div className="flex flex-row gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-['Manrope'] font-normal text-[16px] leading-[26px] text-black flex-1 pr-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="border-t border-black/[0.08] pt-6 flex flex-col gap-1 pr-10">
                  <cite className="not-italic font-['Hedvig_Letters_Serif'] font-normal text-[18px] leading-[28px] text-black">
                    {t.name}
                  </cite>
                  <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] text-[#6E6E6E]">
                    {t.type}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1.33L9.71 5.83L14.5 6.18L10.97 9.22L12.09 13.87L8 11.42L3.91 13.87L5.03 9.22L1.5 6.18L6.29 5.83L8 1.33Z"
        fill="#DDA783"
      />
    </svg>
  );
}
