"use client";

import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Layers, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Receive comprehensive diagnostic examinations, personal wellness plans, and expert guidance from our primary care team.",
    href: "/services/general-consultation",
  },
  {
    icon: Sparkles,
    title: "Acne Treatment",
    description: "Targeted clinical acne care combining state-of-the-art dermatological procedures with customized topical regimens.",
    href: "/services/acne-treatment",
  },
  {
    icon: Layers,
    title: "Hair Fall Consultation",
    description: "Scientific scalp analysis and clinical hair restoration treatments to address thinning and stimulate natural regrowth.",
    href: "/services/hair-fall-consultation",
  },
  {
    icon: ShieldAlert,
    title: "Skin Allergy Treatment",
    description: "Allergen screening, diagnostic patch testing, and advanced immunological treatments to restore skin health.",
    href: "/services/skin-allergy-treatment",
  },
];

export default function FeaturedServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section spacing="md" id="services" className="bg-[#F8F4EC] border-b border-primary/10">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/10 bg-secondary/5 w-fit"
          >
            <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
              Clinical Excellence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-h1 font-bold text-primary"
          >
            Our Featured Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-body-sm text-text/80"
          >
            We provide specialized, high-end medical care to revitalize your skin, body, and overall wellbeing.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="flex flex-col p-8 rounded-card border border-primary/5 bg-background shadow-sm hover:border-secondary/20 hover:shadow-md transition-all duration-300"
              >
                {/* Icon Container with motion morphing on hover */}
                <motion.div
                  className="h-14 w-14 rounded-button bg-secondary/5 text-secondary flex items-center justify-center mb-6"
                  whileHover={{
                    backgroundColor: "rgba(18, 124, 114, 0.1)",
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </motion.div>
                
                <h3 className="font-sans text-h4 font-bold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="font-sans text-body-sm text-text/80 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                <Link
                  href={service.href}
                  className="group inline-flex items-center gap-1.5 font-sans text-body-sm font-semibold text-secondary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-4"
        >
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-button border border-primary/20 bg-transparent px-6 font-sans text-body-sm font-medium text-primary hover:bg-primary/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Explore All Services
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
