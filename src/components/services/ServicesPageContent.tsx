"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Sparkles, Layers, ShieldAlert, Heart, Activity, Search, X, Check, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { cn } from "@/lib/utils";

const iconMap = {
  Stethoscope,
  Sparkles,
  Layers,
  ShieldAlert,
  Heart,
  Activity,
};

const categories = [
  { id: "all", label: "All Services" },
  { id: "consultation", label: "Consultation" },
  { id: "dermatology", label: "Dermatology" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "wellness", label: "Wellness" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 15,
    transition: { duration: 0.2 },
  },
};

function CardBody({ service, Icon }: { service: typeof servicesData[0]; Icon: LucideIcon }) {
  return (
    <>
      {/* Top Meta info */}
      <div className="flex justify-between items-start mb-6">
        <div className="h-12 w-12 rounded-button bg-secondary/5 text-secondary flex items-center justify-center">
          {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
        </div>
        <div className="flex flex-col items-end font-sans text-caption font-semibold">
          <span className="text-accent">{service.price}</span>
          <span className="text-text/60">{service.duration}</span>
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="font-sans text-h4 font-bold text-primary mb-3">
        {service.title}
      </h3>
      <p className="font-sans text-body-sm text-text/80 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Details Bullet points */}
      <ul className="flex flex-col gap-2.5 mb-8 flex-1 border-t border-primary/5 pt-5">
        {service.details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-2 font-sans text-caption text-text/80 leading-relaxed">
            <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Card CTA */}
      <Link
        href={`/appointments?service=${service.id}`}
        className="group inline-flex items-center justify-center gap-2 h-11 w-full rounded-button bg-primary font-sans text-body-sm font-semibold text-background shadow-sm hover:bg-primary/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
      >
        Book This Care Plan
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </>
  );
}

function ServiceCard({ service, animated }: { service: typeof servicesData[0]; animated: boolean }) {
  const Icon = iconMap[service.iconName];

  if (animated) {
    return (
      <motion.div
        layout
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover={{
          y: -8,
          scale: 1.01,
          transition: { duration: 0.3, ease: "easeOut" as const }
        }}
        className="flex flex-col p-8 rounded-card border border-primary/5 bg-background shadow-sm hover:border-secondary/20 hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        <CardBody service={service} Icon={Icon} />
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col p-8 rounded-card border border-primary/5 bg-background shadow-sm hover:border-secondary/20 hover:shadow-md transition-all duration-300 overflow-hidden">
      <CardBody service={service} Icon={Icon} />
    </div>
  );
}

export default function ServicesPageContent() {
  const [mounted, setMounted] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Section spacing="lg" className="bg-[#F8F4EC]/30 pt-32 pb-24 border-b border-primary/10">
      <Container className="flex flex-col gap-12">
        {/* Header Title */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
            Our Offerings
          </span>
          <h1 className="font-serif text-display-sm md:text-display-md font-bold text-primary">
            Medical & Wellness Services
          </h1>
          <p className="font-sans text-body-sm text-text/80 leading-relaxed">
            Explore our premium clinical departments. Filter by category or use the search bar to locate specific care plans.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between border-b border-primary/5 pb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 order-2 md:order-1" role="tablist" aria-label="Service Categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    "h-11 px-5 rounded-full font-sans text-caption font-semibold border flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer select-none",
                    isActive
                      ? "bg-primary border-primary text-background"
                      : "bg-background border-primary/5 text-primary hover:border-primary/20"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-sm order-1 md:order-2">
            <label htmlFor="services-search" className="sr-only">
              Search services
            </label>
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text/40">
              <Search className="h-4 w-4" aria-hidden="true" />
            </div>
            <input
              id="services-search"
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-11 pr-10 rounded-full border border-primary/10 bg-background font-sans text-body-sm text-primary placeholder-text/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-text/40 hover:text-primary transition-colors"
                aria-label="Clear search query"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid with layout animation */}
        {mounted ? (
          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} animated={true} />
              ))}
            </AnimatePresence>

            {/* Empty State */}
            {filteredServices.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center text-center p-12 bg-background border border-dashed border-primary/10 rounded-card gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary/5 text-secondary flex items-center justify-center">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-body-lg font-bold text-primary">No Services Found</h3>
                  <p className="font-sans text-body-sm text-text/60">
                    Try refining your search query or switching categories.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 min-h-[400px]">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} animated={false} />
            ))}

            {/* Empty State */}
            {filteredServices.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center text-center p-12 bg-background border border-dashed border-primary/10 rounded-card gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary/5 text-secondary flex items-center justify-center">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-body-lg font-bold text-primary">No Services Found</h3>
                  <p className="font-sans text-body-sm text-text/60">
                    Try refining your search query or switching categories.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}
