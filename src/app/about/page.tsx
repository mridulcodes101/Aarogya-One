import type { Metadata } from "next";
import AarogyaOneStory from "@/sections/about/AarogyaOneStory";
import DoctorProfile from "@/sections/about/DoctorProfile";
import Experience from "@/sections/about/Experience";
import Qualifications from "@/sections/about/Qualifications";
import Values from "@/sections/about/Values";
import WhyPatientsTrustUs from "@/sections/about/WhyPatientsTrustUs";

export const metadata: Metadata = {
  title: "About Our Philosophy",
  description: "Learn about the Aarogya One story, our team of world-class specialists, clinical qualifications, values, and why patients trust us for premium healthcare.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AarogyaOneStory />
      <DoctorProfile />
      <Experience />
      <Qualifications />
      <Values />
      <WhyPatientsTrustUs />
    </main>
  );
}
