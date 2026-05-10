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
    <section id="about" className="bg-[#E2E5DE] py-14 lg:py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start">

          {/* Left */}
          <FadeIn direction="right" className="lg:sticky lg:top-32 shrink-0 lg:w-[426.66px] flex flex-col gap-4">
            <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[2.8px] uppercase text-[#8B8B5F]">
              Is This You?
            </p>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[53px] tracking-[-1.2px] text-black">
              Who this
              <br />
              is for
            </h2>
          </FadeIn>

          {/* Right: numbered list */}
          <div className="flex flex-col flex-1">
            {items.map((item, i) => (
              <FadeIn key={item.n} delay={i * 0.08}>
                <div className={`flex gap-6 items-start lg:items-center py-[26px] ${i < items.length - 1 ? "border-b border-black/10" : ""}`}>
                  <div className="bg-[#8B8B5F] rounded-full w-9 h-9 flex items-center justify-center shrink-0 mt-0.5 lg:mt-0">
                    <span className="font-['Hedvig_Letters_Serif'] font-normal text-[16px] leading-[24px] text-white">
                      {item.n}
                    </span>
                  </div>
                  <p className="font-['Manrope'] font-normal text-[16px] leading-[26px] lg:text-[18px] lg:leading-[29px] text-black">
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
