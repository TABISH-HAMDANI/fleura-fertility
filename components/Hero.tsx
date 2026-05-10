import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F2EAD5] flex items-center pt-[72px]">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="flex flex-col">
            <FadeIn delay={0.05}>
              <div className="inline-flex items-center gap-2 mb-7">
                <span className="font-serif text-[14px] tracking-[2.8px] text-[#DDA783]">                  Boutique Fertility Consultations
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1
                className="font-serif font-normal text-[clamp(2rem,3.5vw,3.3rem)] leading-[52.8px] tracking-[-1.2px] text-black mb-6"
              >
                Personalized
                <br />
                care for your
                <br />
                <em className="italic text-[#B9794E]">fertility journey</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-sans text-[15px] lg:text-base text-[#6E6E6E] leading-relaxed mb-9 max-w-[460px]">
                Thoughtful, individualized fertility care from diagnosis through
                treatment — not assembly-line medicine. Including IUI, IVF, egg
                freezing and complex case care.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center px-7 py-3.5 bg-black text-white text-[13px] font-sans font-semibold rounded-full hover:bg-black/75 transition-all duration-200"
                >
                  Book your consultation
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center px-7 py-3.5 border border-black/25 text-black text-[13px] font-sans font-semibold rounded-full hover:border-black hover:bg-black/5 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right — Image mosaic */}
          <FadeIn delay={0.2} direction="left" className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="row-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#DDA783] via-[#C88A60] to-[#A86840] min-h-[320px] lg:min-h-[420px] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#EDD5C0] via-[#D9B898] to-[#C89A78] aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C12 22 2 14 2 7C2 4 6 2 10 4C11 4.5 11.5 5 12 5.5C12.5 5 13 4.5 14 4C18 2 22 4 22 7C22 14 12 22 12 22Z" />
                </svg>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#C4BAA0] via-[#A89A80] to-[#8A7C60] aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
