import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heart, Activity, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We listen actively, treat with warmth, and establish authentic clinical partnerships that value your comfort.",
  },
  {
    icon: Activity,
    title: "Absolute Precision",
    description: "Every diagnostic reading, prescription detail, and therapeutic process is executed with meticulous standards.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    description: "We prioritize honest medical guidance, complete confidentiality, and transparent diagnostic recommendations.",
  },
  {
    icon: Sparkles,
    title: "Clinical Innovation",
    description: "We adopt state-of-the-art medical technology and continuous education to provide the latest healing solutions.",
  },
];

export default function Values() {
  return (
    <Section spacing="md" id="values" className="bg-[#F8F4EC] border-b border-primary/10">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
            Our Tenets
          </span>
          <h2 className="font-serif text-h1 font-bold text-primary">
            Our Core Values
          </h2>
          <p className="font-sans text-body-sm text-text/80">
            The principles that guide our clinical behavior, treatment protocols, and daily care practices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <div key={index} className="flex flex-col p-6 rounded-card border border-primary/5 bg-background shadow-sm">
                <div className="h-12 w-12 rounded-button bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-body-lg font-bold text-primary mb-3">
                  {val.title}
                </h3>
                <p className="font-sans text-body-sm text-text/80 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
