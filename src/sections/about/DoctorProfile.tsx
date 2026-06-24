import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function DoctorProfile() {
  return (
    <Section spacing="md" id="doctor-profile" className="bg-background border-b border-primary/10">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Premium Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full aspect-[4/5] max-w-md rounded-card overflow-hidden shadow-lg border border-primary/5">
            <Image
              src="/dr_narendra_pal.png"
              alt="Dr. Narendra Pal - Director"
              fill
              className="object-cover object-center"
              sizes="(max-w-768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Bio Details */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
              Our Director
            </span>
            <h2 className="font-serif text-h1 font-bold text-primary">
              Dr. Narendra Pal
            </h2>
            <p className="font-sans text-body-sm font-semibold text-accent">
              General Physician & Critical Care Expert
            </p>
          </div>

          <div className="flex flex-col gap-4 font-sans text-body-md text-text/80 leading-relaxed">
            <p className="text-body-lg font-medium text-primary">
              Dr. Narendra Pal is the Director of our hospital. He is a General Physician and critical care expert with more than 15 years of experience in clinical practice.
            </p>
            <p>
              After a distinguished career of over 15 years in medical consulting and critical care management, he decided to establish this premium hospital to offer world-class healthcare. He handles the charge of coordinating hospital activities and managing medical professionals, ensuring smooth workflow and efficient services to patients.
            </p>
            <p>
              His responsibilities revolve around setting clinical goals and objectives, managing hospital budgets, coordinating medical and non-medical personnel, and developing strategies to optimize hospital operations.
            </p>
          </div>

          <blockquote className="border-l-4 border-accent pl-4 font-serif text-body-lg text-primary italic leading-relaxed my-2">
            &ldquo;As Director, it is my duty to make significant decisions in adherence to the facility&apos;s policies, regulations, vision, and mission, ensuring we deliver the smoothest, most efficient, and most compassionate care.&rdquo;
          </blockquote>
        </div>
      </Container>
    </Section>
  );
}
