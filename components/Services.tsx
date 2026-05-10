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
      <div className="w-full max-w-[1024px] mx-auto px-8 flex flex-col items-center gap-16">
        <FadeIn>
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[53px] tracking-[-1.2px] text-black text-center w-[689px] max-w-full">
            Boutique Fertility Care provided with thoughtful, individualized care          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <MotionCard className="bg-white border border-black/[0.08] rounded-2xl py-8 flex flex-col items-center text-center gap-5 min-h-[300.75px]">

                <div className="bg-[#F2EAD5] rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <div className="w-8 border-t border-[rgba(221,167,131,0.5)]" />

                <h3 className="font-['Hedvig_Letters_Serif'] font-normal text-[18px] leading-[25px] text-black text-center w-[172px]">
                  {service.title}
                </h3>

                <p className="font-['Manrope'] font-normal text-[14px] leading-[23px] text-[#6E6E6E] text-center w-[172px]">
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
