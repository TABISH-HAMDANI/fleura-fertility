import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <>
      <section className="bg-[#F2EAD5] pt-16 lg:pt-[84px]">
        <div className="w-full max-w-[1402px] mx-auto flex flex-col lg:flex-row items-center pl-4 sm:pl-8 lg:pl-16 pr-4 sm:pr-8 lg:pr-[122px] gap-10 lg:gap-16 py-10 lg:py-0 lg:min-h-[921px]">

          {/* Left — Text */}
          <div className="flex flex-col items-start py-8 gap-8 w-full lg:w-[576px] shrink-0">
            <FadeIn delay={0.05}>
              <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[2.8px] uppercase text-[#DDA783]">
                Boutique Fertility Consultations
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-['Hedvig_Letters_Serif'] font-normal text-[38px] leading-[42px] sm:text-[52px] sm:leading-[56px] lg:text-[72px] lg:leading-[76px] tracking-[-1.8px] text-black max-w-[544px]">
                Personalized<br />care for your <span className="text-[#B9794E]">fertility journey</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-['Manrope'] font-normal text-[20px] leading-[32px] text-[#6E6E6E] max-w-[576px]">
                Thoughtful, indivualized fertility care from diagnosis through treatment not assembly line medicine including IUI, IVF, egg freezing and complex case care.
              </p>
            </FadeIn>

            <FadeIn delay={0.35} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                <Link
                  href="#contact"
                  className="flex items-center justify-center w-full sm:w-[238px] h-[58px] bg-black text-white font-['Manrope'] font-normal text-[16px] leading-[24px] rounded-full hover:bg-black/80 transition-colors"
                >
                  Book your consultation
                </Link>
                <Link
                  href="#services"
                  className="flex items-center justify-center w-full sm:w-[148px] h-[58px] border border-black/20 text-black font-['Manrope'] font-normal text-[16px] leading-[24px] rounded-full hover:bg-black/5 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right — Image mosaic */}
          <div className="flex flex-col gap-4 w-full lg:w-[576px] shrink-0">

            {/* Top row: tall left + stacked right */}
            <div className="flex flex-row gap-4 h-[360px] lg:h-[538.66px]">

              {/* Tall left image */}
              <FadeIn delay={0.2} className="w-1/2 sm:w-[280px] shrink-0 rounded-2xl overflow-hidden bg-[#C8B8A2]">
                <img
                  src="/pexels-olly-720598.jpg"
                  alt="Peaceful expectant mother in natural light"
                  className="w-full h-full object-cover"
                />
              </FadeIn>

              {/* Right sub-column */}
              <div className="flex flex-col gap-4 flex-1">
                <FadeIn delay={0.3} className="rounded-2xl overflow-hidden bg-[#D9C8B4] h-[180px] lg:h-[298.66px]">
                  <img
                    src="/pexels-mart-production-7088525.jpg"
                    alt="Fertility consultation"
                    className="w-full h-full object-cover"
                  />
                </FadeIn>

                {/* Orange accent box */}
                <FadeIn delay={0.4} className="flex items-center justify-center bg-[#DDA783] rounded-2xl flex-1">
                  <svg width="80" height="73" viewBox="0 0 80 73" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M40 8C40 8 16 20 16 40C16 52 26 60 40 60C54 60 64 52 64 40C64 20 40 8 40 8Z" fill="rgba(255,255,255,0.3)" />
                    <circle cx="40" cy="40" r="10" fill="rgba(255,255,255,0.3)" />
                    <path d="M40 18V62M22 28L58 52M58 28L22 52" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                  </svg>
                </FadeIn>
              </div>
            </div>

            {/* Bottom wide image */}
            <FadeIn delay={0.5} className="w-full rounded-2xl overflow-hidden bg-[#C8B8A2] h-[160px] lg:h-[246.84px]">
              <img
                src="/pexels-vera-arsic-304265-984939.jpg"
                alt="Warm fertility consultation setting"
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Section divider */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)" }}
      />
    </>
  );
}
