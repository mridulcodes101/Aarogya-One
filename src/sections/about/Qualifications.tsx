import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Award, BookOpen, ShieldCheck } from "lucide-react";

const qualifications = [
  {
    icon: BookOpen,
    category: "Education",
    items: [
      "MD - Harvard Medical School, 2001 (Magna Cum Laude)",
      "Residency in Internal Medicine - Stanford University Medical Center, 2004",
      "Fellowship in Cardiovascular Diseases - Harvard Medical School, 2007",
    ],
  },
  {
    icon: ShieldCheck,
    category: "Board Certifications",
    items: [
      "Diplomate, American Board of Internal Medicine (ABIM)",
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Advanced Heart Failure and Transplant Cardiology",
    ],
  },
  {
    icon: Award,
    category: "Professional Affiliations",
    items: [
      "Fellow of the American College of Cardiology (FACC)",
      "Member, American Heart Association (AHA)",
      "Active Clinical Physician License - State Registry #95810",
    ],
  },
];

export default function Qualifications() {
  return (
    <Section spacing="md" id="qualifications" className="bg-background border-b border-primary/10">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
            Credentials
          </span>
          <h2 className="font-serif text-h1 font-bold text-primary">
            Qualifications & Certifications
          </h2>
          <p className="font-sans text-body-sm text-text/80">
            A testament to board-certified medical excellence and active leadership in clinical cardiology circles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {qualifications.map((qual, index) => {
            const Icon = qual.icon;
            return (
              <div key={index} className="flex flex-col p-8 rounded-card border border-primary/5 bg-[#F8F4EC]/40 shadow-sm">
                <div className="h-12 w-12 rounded-button bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-body-lg font-bold text-primary mb-4">
                  {qual.category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {qual.items.map((item, idx) => (
                    <li key={idx} className="font-sans text-body-sm text-text/80 leading-relaxed list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
