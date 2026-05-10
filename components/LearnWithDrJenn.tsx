import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const videos = [
  {
    title: "AMH Levels Explained: When Should You Actually Worry?",
    duration: "14:32",
    views: "128K views",
    timeAgo: "2 weeks ago",
  },
  {
    title: "IVF vs. Egg Freezing: Which Is Right for You?",
    duration: "22:05",
    views: "95K views",
    timeAgo: "1 month ago",
  },
  {
    title: "Understanding Your Fertility Labs: FSH, LH & More",
    duration: "18:47",
    views: "74K views",
    timeAgo: "1 month ago",
  },
  {
    title: "What to Do Before Trying to Get Pregnant",
    duration: "11:20",
    views: "210K views",
    timeAgo: "3 weeks ago",
  },
];

export default function LearnWithDrJenn() {
  return (
    <section className="bg-[#F2EAD5] py-14 lg:py-[112px]">
      <div className="w-full max-w-[1024px] mx-auto px-8 flex flex-col items-center gap-10 lg:gap-16">

        {/* Header */}
        <FadeIn className="w-full">
          <div className="flex flex-col items-center gap-4 w-full text-center">
            <p className="font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[2.8px] uppercase text-[#DDA783]">
              Watch &amp; Learn
            </p>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[53px] tracking-[-1.2px] text-black text-center">
              Learn with Dr. Jenn
            </h2>
            <p className="font-['Manrope'] font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#6E6E6E] text-center w-full max-w-[470px] mx-auto">
              Educational videos to help you understand your options before starting and during treatment
            </p>
          </div>
        </FadeIn>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {videos.map((video, i) => (
            <FadeIn key={video.title} delay={i * 0.09}>
              <div className="cursor-pointer">

                {/* Thumbnail */}
                <div className="relative rounded-[14px] overflow-hidden bg-black/5 mb-3 h-[200px] sm:h-[155px] lg:h-[135.56px]">
                  <div className="absolute bottom-[7.56px] right-2 bg-black/80 text-white font-['Manrope'] font-normal text-[12px] leading-[16px] px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Info row */}
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[#E2E5DE] shrink-0" />

                  {/* Text */}
                  <div className="flex flex-col gap-1">
                    <p className="font-['Manrope'] font-normal text-[14px] leading-[19px] text-black">
                      {video.title}
                    </p>
                    <p className="font-['Manrope'] font-normal text-[12px] leading-[20px] text-[#6E6E6E]">
                      Dr. Jenn — Fleura Fertility
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="font-['Manrope'] font-normal text-[12px] leading-[16px] text-[#6E6E6E]">{video.views}</span>
                      <span className="font-['Manrope'] font-normal text-[12px] leading-[16px] text-[#6E6E6E]">·</span>
                      <span className="font-['Manrope'] font-normal text-[12px] leading-[16px] text-[#6E6E6E]">{video.timeAgo}</span>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn>
          <div className="flex flex-col items-center gap-4 w-full sm:w-[512px] max-w-full">
            <p className="font-['Manrope'] font-normal text-[18px] leading-[28px] text-[#6E6E6E] text-center">
              Ready to apply this to your own fertility plan?
            </p>
            <Link
              href="#contact"
              className="flex items-center justify-center w-full sm:w-[302px] h-[52px] bg-black text-white font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[1.4px] uppercase rounded-full hover:bg-black/80 transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="https://youtube.com/@fleurafertility"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-[302px] h-[52px] border border-black text-black font-['Manrope'] font-normal text-[14px] leading-[20px] tracking-[1.4px] uppercase rounded-full hover:bg-black/5 transition-colors"
            >
              <YouTubeIcon />
              View More on YouTube
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" rx="3" fill="#EF0000" />
      <path d="M8 4L14 7L8 10V4Z" fill="white" />
    </svg>
  );
}
