import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function AarogyaOneStory() {
  return (
    <Section spacing="lg" className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-primary/10">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Title column */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
            Our Foundation
          </span>
          <h1 className="font-serif text-display-sm md:text-display-md lg:text-display-lg font-bold text-primary tracking-tight leading-[1.1]">
            A Sanctuary for <span className="italic font-normal text-secondary">Healing</span> & Care.
          </h1>
        </div>

        {/* Story details */}
        <div className="flex flex-col gap-6 font-sans text-body-md text-text/80 lg:col-span-7 lg:pt-8 leading-relaxed">
          <p className="text-body-lg font-medium text-primary">
            Founded in 2012, Aarogya One was established with a singular, profound vision: to restore humanity and personalized excellence to the modern healthcare experience.
          </p>
          <p>
            We recognized that true healing requires more than clinical expertise—it demands an environment of deep trust, tranquil comfort, and dedicated attention. Over the past decade, we have assembled a world-class team of specialists and state-of-the-art facilities to create a sanctuary where medical science and compassionate hospitality meet.
          </p>
          <p>
            Every protocol we design and every treatment we administer is tailored to the unique physiological and emotional needs of our patients. We believe that by treating the individual, rather than just the condition, we foster sustainable, long-term vitality.
          </p>
        </div>
      </Container>
    </Section>
  );
}
