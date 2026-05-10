import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoIsFor from "@/components/WhoIsFor";
import HowCareStarts from "@/components/HowCareStarts";
import LearnWithDrJenn from "@/components/LearnWithDrJenn";
import MeetDoctor from "@/components/MeetDoctor";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoIsFor />
        <HowCareStarts />
        <LearnWithDrJenn />
        <MeetDoctor />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
