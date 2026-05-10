import FadeIn from "@/components/ui/FadeIn";

const items = [
  { n: 1, text: "You're considering IVF or egg freezing and want expert guidance before committing" },
  { n: 2, text: "You have low AMH, complex histories, or have been told your options are limited" },
  { n: 3, text: "You want truly personalized, nuanced care — not a one-size-fits-all protocol" },
  { n: 4, text: "You're looking for a second opinion before your next step" },
  { n: 5, text: "You've felt rushed, dismissed, or overwhelmed by large fertility clinics" },
];

export default function WhoIsFor() {
  return (
    <section id="about" className="bg-[#f2ead5] py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start">

          {/* Left */}
          <FadeIn direction="right" className="lg:sticky lg:top-32 shrink-0">
            <p className="font-sans font-normal text-[14px] text-[#8b8b5f] tracking-[2.8px] uppercase leading-5 mb-4">
              Is This You?
            </p>
            <h2 className="font-serif font-normal text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] tracking-[-1.2px] text-black">
              Who this
              <br />
              is for
            </h2>
          </FadeIn>

          {/* Right: numbered list */}
          <div className="flex flex-col flex-1">
            {items.map((item, i) => (
              <FadeIn key={item.n} delay={i * 0.08}>
                <div className="group flex gap-6 items-center border-b border-[rgba(0,0,0,0.1)] py-[26px] rounded-xl hover:bg-black/[0.03] transition-colors duration-300 cursor-default">
                  <div className="bg-[#8b8b5f] rounded-full size-9 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-serif font-normal text-[16px] text-white leading-6">
                      {item.n}
                    </span>
                  </div>
                  <p className="font-sans font-normal text-[18px] text-black leading-[29.25px]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
