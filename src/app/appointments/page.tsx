import type { Metadata } from "next";
import { Suspense } from "react";
import AppointmentForm from "@/components/appointments/AppointmentForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Schedule a personalized clinical consultation or longevity assessment with our specialists.",
};

export default function AppointmentsPage() {
  return (
    <main className="flex-1 bg-[#F8F4EC]/30 pt-32 pb-24">
      <Section spacing="none">
        <Container className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
            <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
              Scheduler
            </span>
            <h1 className="font-serif text-display-sm md:text-display-md font-bold text-primary">
              Book An Appointment
            </h1>
            <p className="font-sans text-body-sm text-text/80 leading-relaxed">
              Select your clinical service and preferred physician. Choose an available slot on the calendar and lock in your consultation details.
            </p>
          </div>

          {/* Form with Suspense Wrapper for SearchParams */}
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-secondary" />
              </div>
            }
          >
            <AppointmentForm />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
}
