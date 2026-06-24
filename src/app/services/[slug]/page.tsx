import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, IndianRupee, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { servicesData } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.overview,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex-1 bg-background">
      {/* Editorial Header Section */}
      <Section spacing="sm" className="pt-32 pb-12 bg-[#F8F4EC]/40 border-b border-primary/10">
        <Container className="flex flex-col gap-6">
          {/* Back button */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-sans text-body-sm font-semibold text-secondary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary w-fit"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to All Services
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4">
            <div className="flex flex-col gap-3 max-w-3xl">
              <span className="font-sans text-caption font-bold tracking-wider uppercase text-secondary">
                {service.category} Care Plan
              </span>
              <h1 className="font-serif text-display-sm md:text-display-md font-bold text-primary tracking-tight leading-[1.1]">
                {service.title}
              </h1>
              <p className="font-sans text-body-lg text-text/80 leading-relaxed mt-2">
                {service.description}
              </p>
            </div>

            {/* Quick Pricing/Duration Card */}
            <div className="flex items-center gap-6 p-6 rounded-card border border-primary/10 bg-background shadow-sm shrink-0 w-full lg:w-auto justify-around lg:justify-start lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-button bg-secondary/5 text-secondary flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-[10px] text-text/50 uppercase font-semibold">Duration</span>
                  <span className="text-body-sm font-bold text-primary">{service.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-button bg-secondary/5 text-secondary flex items-center justify-center">
                  <IndianRupee className="h-5 w-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-[10px] text-text/50 uppercase font-semibold">Price</span>
                  <span className="text-body-sm font-bold text-primary">{service.price}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content Layout */}
      <Section spacing="md" className="border-b border-primary/10">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side: Overview & Symptoms */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            {/* Overview */}
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-body-md font-bold text-primary uppercase tracking-wider">
                Overview
              </h2>
              <p className="font-sans text-body-md text-text/80 leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Symptoms Treated */}
            <div className="flex flex-col gap-4 border-t border-primary/5 pt-8">
              <h2 className="font-sans text-body-md font-bold text-primary uppercase tracking-wider">
                Common Symptoms We Treat
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-sans text-body-sm text-text/80 leading-relaxed">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Benefits Panel */}
          <div className="flex flex-col gap-6 lg:col-span-5 p-8 rounded-card border border-primary/5 bg-[#F8F4EC]/20 shadow-sm h-fit">
            <h2 className="font-sans text-body-md font-bold text-primary uppercase tracking-wider border-b border-primary/5 pb-4">
              Expected Benefits
            </h2>
            <ul className="flex flex-col gap-5">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-body-sm text-text/80 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Treatment Process Timeline */}
      <Section spacing="md" className="bg-[#F8F4EC]/20 border-b border-primary/10">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-caption font-bold tracking-wider uppercase text-secondary">
              Step-by-step
            </span>
            <h2 className="font-serif text-h1 font-bold text-primary">
              Your Treatment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((stepStr, idx) => {
              const [title, desc] = stepStr.split(": ");
              return (
                <div key={idx} className="flex flex-col gap-3 relative p-6 bg-background rounded-card border border-primary/5 shadow-sm">
                  <span className="font-display text-display-sm font-bold text-accent">
                    0{idx + 1}
                  </span>
                  <h3 className="font-sans text-body-md font-bold text-primary">
                    {title}
                  </h3>
                  <p className="font-sans text-body-sm text-text/80 leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section spacing="md" className="border-b border-primary/10">
        <Container className="flex flex-col gap-12 max-w-4xl">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="font-sans text-caption font-bold tracking-wider uppercase text-secondary">
              FAQ
            </span>
            <h2 className="font-serif text-h1 font-bold text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {service.faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-primary/5 rounded-card bg-[#F8F4EC]/10 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex justify-between items-center font-sans text-body-md font-bold text-primary cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                  <span>{faq.q}</span>
                  <span className="transition-transform group-open:rotate-180 text-accent font-display text-h3 leading-none select-none">
                    &darr;
                  </span>
                </summary>
                <p className="mt-4 font-sans text-body-sm text-text/80 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Booking CTA Section */}
      <Section spacing="lg" className="bg-primary text-background">
        <Container className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <h2 className="font-serif text-display-sm font-bold text-background leading-tight">
            Begin Your Personalized {service.title} Plan
          </h2>
          <p className="font-sans text-body-md text-background/80 max-w-xl">
            Book a clinical slot today. Our doctors will guide you from diagnostics through tailored treatments to optimal wellness.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href={`/appointments?service=${service.id}`}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-button bg-accent px-8 font-sans text-body-md font-semibold text-primary hover:bg-accent/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
            >
              Schedule Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-button border border-background/25 bg-transparent px-8 font-sans text-body-md font-semibold text-background hover:bg-background/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
              Browse Other Services
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
