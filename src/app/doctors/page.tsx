import type { Metadata } from "next";
import DoctorsPageContent from "@/components/doctors/DoctorsPageContent";

export const metadata: Metadata = {
  title: "Meet Our Doctors",
  description: "Connect with our medical staff at Aarogya One. Meet Dr. Narendra Pal and our certified specialists dedicated to premium health management.",
};

export default function DoctorsPage() {
  return (
    <main className="flex-1">
      <DoctorsPageContent />
    </main>
  );
}
