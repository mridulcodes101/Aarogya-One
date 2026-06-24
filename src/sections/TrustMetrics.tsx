import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Counter } from "@/components/ui/Counter";

const metrics = [
  { value: 15, suffix: "k+", label: "Happy Patients" },
  { value: 50, suffix: "+", label: "Specialist Doctors" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 15, suffix: "+", label: "Years of Service" },
];

export default function TrustMetrics() {
  return (
    <Section spacing="sm" className="bg-primary text-background">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="font-display text-display-md font-bold text-accent">
                <Counter value={metric.value} suffix={metric.suffix} />
              </span>
              <span className="font-sans text-body-sm uppercase tracking-wider text-background/80">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
