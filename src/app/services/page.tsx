import type { Metadata } from "next";
import ServicesPageContent from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Browse our comprehensive, luxury healthcare services, including general medicine, specialized dermatology, non-invasive cardiac testing, and longevity scans.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ServicesPageContent />
    </main>
  );
}
