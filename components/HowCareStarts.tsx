import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    icon: "https://www.figma.com/api/mcp/asset/47bfafda-592e-491c-bce2-a817315f5c12",
    title: "Full Review",
    description: "A thorough review of your history, labs, and prior treatment cycles.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/cebeac81-1ef7-47b0-9cc0-766b56a081d1",
    title: "Your Numbers",
    description: "Individualized interpretation of AMH, FSH, AFC, and protocols.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/ba764497-a926-4548-a41f-68313c06c856",
    title: "Treatment Pathways",
    description: "An honest discussion of all options, including non-IVF paths.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/16842a55-5130-40bd-b9f7-2be8c5249eb4",
    title: "Next Steps",
    description: "Clear, actionable next steps you can take immediately.",
  },
];

export default function HowCareStarts() {
  return (
    <section className="bg-[#8b8b5f] py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-[80px] items-center">

        <FadeIn>
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-sans font-normal text-[14px] text-[rgba(255,255,255,0.7)] tracking-[2.8px] uppercase leading-5">
              What You Get
            </p>
            <div>
              <h2 className="font-serif font-normal text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] tracking-[-1.2px] text-white">
                How your care starts
              </h2>
              <p className="font-sans font-normal text-[18px] text-white leading-normal">
                Your consultation is the starting point for a fully personalized treatment plan
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.15)] rounded-2xl overflow-hidden w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
              {steps.map((step, i) => (
                <FadeIn
                  key={step.title}
                  delay={i * 0.12}
                  className="bg-[#8b8b5f] flex flex-col gap-3 pl-6 py-8 pr-6 sm:pl-12 sm:py-12 sm:pr-8"
                >
                  <div className="size-7 shrink-0">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                  <h3 className="font-serif font-normal text-[24px] leading-[28.8px] text-white">
                    {step.title}
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[26px] text-[rgba(255,255,255,0.8)]">
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
