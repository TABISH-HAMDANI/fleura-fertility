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
    quote: "As someone with low AMH who was told to hurry up, Dr. Jenn was the first doctor who actually explained my options without making me panic. Life-changing consult.",
    name: "Amy W.",
    type: "Egg Freezing Patient",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <p className="font-serif italic text-[12px] tracking-[0.28em] text-black/40 uppercase mb-4">
              Patient Stories
            </p>
            <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.7rem)] leading-[52.8px] tracking-[-1.2px] text-black">
              What patients are saying
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={(i % 3) * 0.1}>
              <div className="bg-white border border-black/10 rounded-2xl p-6 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-sans text-[14px] text-black leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-black/8">
                  <p className="font-sans font-semibold text-[13px] text-black">{t.name}</p>
                  <p className="font-sans text-[12px] text-gray mt-0.5">{t.type}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
