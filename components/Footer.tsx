import Link from "next/link";

const navLinks = ["About", "Services", "Pricing", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#8B8B5F] pt-[80px] pb-[40px]">
      <div className="w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6">

        {/* Main content row */}
        <div className="flex flex-col lg:flex-row gap-8 pb-[40px] border-b border-white/20">

          {/* Brand */}
          <div className="flex flex-col gap-5 lg:w-[320px]">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Fleura Fertility logo" className="w-7 h-6 brightness-0 invert" />
              <span className="font-['Besley'] font-normal text-[24px] leading-[32px] tracking-[-0.6px] text-white">
                Fleura Fertility
              </span>
            </Link>
            <p className="font-['Manrope'] font-normal text-[14px] leading-[23px] text-white/80 max-w-[289px]">
              Boutique, patient-centered fertility care. Thoughtful guidance for your unique journey.
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-5 lg:w-[320px]">
            <h4 className="font-['Manrope'] font-medium text-[12px] leading-[16px] tracking-[1.8px] uppercase text-white/60">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-['Manrope'] font-normal text-[14px] leading-[20px] text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5 lg:w-[320px]">
            <h4 className="font-['Manrope'] font-medium text-[12px] leading-[16px] tracking-[1.8px] uppercase text-white/60">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:care@fleurafertility.com"
                className="font-['Manrope'] font-normal text-[14px] leading-[20px] text-white/80 underline hover:text-white transition-colors"
              >
                care@fleurafertility.com
              </a>
              <div className="flex flex-col gap-2">
                <span className="font-['Manrope'] font-normal text-[14px] leading-[20px] text-white/80">
                  New York, NY
                </span>
                <a
                  href="tel:9173368236"
                  className="font-['Manrope'] font-normal text-[14px] leading-[20px] text-white/80 hover:text-white transition-colors"
                >
                  917-336-8236
                </a>
              </div>
              {/* Social icons */}
              <div className="flex flex-row gap-4">
                <a href="#" aria-label="Instagram" className="w-[18px] h-[18px] hover:opacity-100 opacity-60 transition-opacity">
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="Facebook" className="w-[18px] h-[18px] hover:opacity-100 opacity-60 transition-opacity">
                  <FacebookIcon />
                </a>
                <a href="#" aria-label="YouTube" className="w-[18px] h-[18px] hover:opacity-100 opacity-60 transition-opacity">
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Manrope'] font-normal text-[12px] leading-[16px] text-white/60">
            © 2026 Fleura Fertility. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-['Manrope'] font-normal text-[12px] leading-[16px] text-white/60 hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-['Manrope'] font-normal text-[12px] leading-[16px] text-white/60 hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.125" />
      <circle cx="9" cy="9" r="3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.125" />
      <circle cx="13.5" cy="4.5" r="0.75" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 3H12.75V6H10.5C10.5 6 10.5 6 10.5 6.75V8.25H12.75L12 11.25H10.5V15H7.5V11.25H6V8.25H7.5V6C7.5 4.34 8.84 3 10.5 3Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.125" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 6L13.5 9L7.5 12V6Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.125" strokeLinejoin="round" />
      <path d="M1.5 6.75C1.5 6.75 1.5 5.25 3 5.25H15C16.5 5.25 16.5 6.75 16.5 6.75V11.25C16.5 11.25 16.5 12.75 15 12.75H3C1.5 12.75 1.5 11.25 1.5 11.25V6.75Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.125" />
    </svg>
  );
}
