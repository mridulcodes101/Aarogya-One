import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "1-on-1 Dedicated Time",
    desc: "We schedule longer consultations to ensure you never feel rushed and our specialists can address every detail.",
  },
  {
    title: "Luxurious Private Suites",
    desc: "Enjoy complete confidentiality and serene, comfortable environments that feel more like a premium lounge than a standard clinic.",
  },
  {
    title: "Advanced On-Site Diagnostics",
    desc: "Equipped with state-of-the-art lab and cardiac scanning tech for immediate results and accurate assessments.",
  },
  {
    title: "Seamless Digital Portal",
    desc: "Book appointments, access records, and securely consult with your clinical team directly through our encrypted app.",
  },
];

export default function WhyPatientsTrustUs() {
  return (
    <Section spacing="lg" id="trust-us" className="bg-background">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Heading and Brief */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
            Patient Experience
          </span>
          <h2 className="font-serif text-display-sm font-bold text-primary leading-tight">
            Why Discerning Patients Choose Aarogya One
          </h2>
          <p className="font-sans text-body-sm text-text/80 leading-relaxed">
            We reject the assembly-line medical model. By designing a premium, intimate, and technologically advanced practice, we provide a healthcare journey that is safe, effective, and deeply respectful of your time.
          </p>
        </div>

        {/* Right Column: Key Details */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-card border border-primary/5 bg-[#F8F4EC]/20">
              <div className="h-6 w-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-body-md font-bold text-primary">
                  {benefit.title}
                </h3>
                <p className="font-sans text-body-sm text-text/80 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
