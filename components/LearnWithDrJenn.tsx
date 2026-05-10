import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const videos = [
  {
    thumb: "",
    title: "AMH Levels Explained: When Should You Actually Worry?",
    duration: "14:32",
    views: "128K views",
    timeAgo: "2 weeks ago",
  },
  {
    thumb: "",
    title: "IVF vs. Egg Freezing: Which Is Right for You?",
    duration: "22:05",
    views: "95K views",
    timeAgo: "1 month ago",
  },
  {
    thumb: "",
    title: "Understanding Your Fertility Labs: FSH, LH & More",
    duration: "18:47",
    views: "74K views",
    timeAgo: "1 month ago",
  },
  {
    thumb: "",
    title: "What to Do Before Trying to Get Pregnant",
    duration: "11:20",
    views: "210K views",
    timeAgo: "3 weeks ago",
  },
];

export default function LearnWithDrJenn() {
  return (
    <section className="bg-[#F2EAD5] py-20 lg:py-28">
      <div className="w-full max-w-[1440px] mx-auto px-8">

        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <p className="font-serif italic text-[12px] tracking-[0.28em] text-black/40 uppercase mb-4">
              Watch &amp; Learn
            </p>
            <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.7rem)] leading-[52.8px] tracking-[-1.2px] text-black mb-3">
              Learn with Dr. Jenn
            </h2>
            <p className="font-sans text-[14px] text-[#6E6E6E] max-w-md mx-auto leading-relaxed">
              Educational videos to help you understand your options before starting and during treatment
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-10 lg:mb-12">
          {videos.map((video, i) => (
            <FadeIn key={video.title} delay={i * 0.09}>
              <div className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden aspect-video mb-3 bg-[#E2E5DE]">
                  {video.thumb && (
                    <Image
                      src={video.thumb}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                    />
                  )}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-sans font-medium px-1.5 py-0.5 rounded z-10">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/35 transition-all duration-200 border border-white/30">
                      <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-[13.5px] text-black leading-snug mb-1 group-hover:text-[#B9794E] transition-colors duration-200">
                  {video.title}
                </h3>
                <p className="font-sans text-[12px] text-[#6E6E6E]">Dr. Jenn · Fleura Fertility</p>
                <p className="font-sans text-[12px] text-black/40 mt-0.5">{video.views} · {video.timeAgo}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-black text-white text-[13px] font-sans font-semibold rounded-full tracking-wide hover:bg-black/75 transition-all duration-200"
            >
              BOOK A CONSULTATION
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-black/20 text-black text-[13px] font-sans font-semibold rounded-full hover:border-black hover:bg-black/5 transition-all duration-200"
            >
              <YouTubeIcon className="w-5 h-5 text-[#FF0000]" />
              VIEW MORE ON YOUTUBE
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
