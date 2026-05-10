import type { Metadata } from "next";
import { Manrope, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const hedvig = Hedvig_Letters_Serif({
  variable: "--font-hedvig",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fleura Fertility | Boutique Fertility Consultations",
  description:
    "Personalized, boutique fertility care from diagnosis through treatment — IUI, IVF, egg freezing, and complex case care with Dr. Jennifer Kulp Makarov.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${hedvig.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
