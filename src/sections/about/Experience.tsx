import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const experiences = [
  {
    years: "2012 - Present",
    role: "Founder & Chief Physician",
    org: "Aarogya One",
    description: "Established the clinical practice from the ground up, directing medical protocols and pioneering patient-centric diagnostic integrations.",
  },
  {
    years: "2007 - 2012",
    role: "Associate Professor of Cardiology",
    org: "Johns Hopkins University School of Medicine",
    description: "Led clinical cardiology fellowships, managed academic research projects, and published 15+ peer-reviewed papers on vascular health.",
  },
  {
    years: "2004 - 2007",
    role: "Chief Cardiology Fellow",
    org: "Massachusetts General Hospital (Harvard)",
    description: "Managed clinical care teams across intensive cardiology wards, specializing in non-invasive diagnostic imaging research.",
  },
  {
    years: "2001 - 2004",
    role: "Internal Medicine Resident",
    org: "Stanford University Medical Center",
    description: "Completed comprehensive clinical rotations across neurology, emergency medicine, primary care, and pediatric wards.",
  },
];

export default function Experience() {
  return (
    <Section spacing="md" id="experience" className="bg-[#F8F4EC] border-b border-primary/10">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Heading */}
        <div className="flex flex-col gap-4 lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
            Professional Track
          </span>
          <h2 className="font-serif text-h1 font-bold text-primary">
            Clinical Experience
          </h2>
          <p className="font-sans text-body-sm text-text/80 leading-relaxed max-w-sm">
            Over two decades of dedication to medical education, primary practice, academic research, and healthcare leadership.
          </p>
        </div>

        {/* Right Column: Timeline */}
        <div className="flex flex-col gap-10 lg:col-span-8">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-primary/5 pb-8 last:border-b-0 last:pb-0">
              <span className="font-sans text-body-sm font-bold text-accent md:col-span-3">
                {exp.years}
              </span>
              <div className="flex flex-col gap-2 md:col-span-9">
                <h3 className="font-sans text-body-lg font-bold text-primary">
                  {exp.role}
                </h3>
                <span className="font-sans text-body-sm font-semibold text-text/60">
                  {exp.org}
                </span>
                <p className="font-sans text-body-sm text-text/80 leading-relaxed mt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
