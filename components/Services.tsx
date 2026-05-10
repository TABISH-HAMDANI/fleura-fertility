import FadeIn from "@/components/ui/FadeIn";
import MotionCard from "@/components/ui/MotionCard";

const services = [
  {
    icon: "/icon-assessment.svg",
    title: "Fertility Assessment & Plan",
    description: "New patient consults, complex cases, second opinions",
  },
  {
    icon: "/icon-ivf.svg",
    title: "IVF",
    description: 'Gentle, Traditional and Natural IVF. The "just right for you" approach',
  },
  {
    icon: "/icon-egg.svg",
    title: "Egg Freezing",
    description: "Who benefits, what to expect, tailored protocols",
  },
  {
    icon: "/icon-iui.svg",
    title: "Ovulation Support & IUI",
    description: "Monitoring and strategy discussed; letrozole and clomid considered",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#E2E5DE] py-20 lg:py-28">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[52.8px] tracking-[-1.2px] text-black max-w-xl mx-auto">
              Boutique Fertility Care provided with thoughtful, individualized care
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <MotionCard className="bg-white border border-black/[0.08] rounded-2xl pt-[33px] pb-[58px] px-px flex flex-col items-center text-center gap-5">

                {/* Icon circle with cream bg */}
                <div className="bg-[#f2ead5] rounded-full size-14 flex items-center justify-center shrink-0">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="size-7 object-contain"
                  />
                </div>

                {/* Peach divider */}
                <div className="w-8 h-px bg-[rgba(221,167,131,0.5)]" />

                <h3 className="font-serif font-normal text-[18px] text-black leading-snug">
                  {service.title}
                </h3>

                <p className="font-sans text-[14px] text-[#6e6e6e] leading-[22.75px] w-[161px]">
                  {service.description}
                </p>
              </MotionCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
