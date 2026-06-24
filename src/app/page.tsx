import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import TrustMetrics from "@/sections/TrustMetrics";
import FeaturedServices from "@/sections/FeaturedServices";
import DoctorIntroduction from "@/sections/DoctorIntroduction";
import PatientJourney from "@/sections/PatientJourney";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import FinalCTA from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Premium Wellness & Clinical Excellence",
  description: "Experience a new echelon of personalized medical care. We integrate state-of-the-art wellness technology with board-certified clinical excellence to cultivate your lifelong vitality.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <FeaturedServices />
      <DoctorIntroduction />
      <PatientJourney />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
