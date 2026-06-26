"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function FinalCTA() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <Section spacing="lg" className="bg-primary text-background overflow-hidden">
      <Container className="max-w-3xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-display-sm font-bold text-background leading-tight"
          >
            Ready to Take Charge of Your Health?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="font-sans text-body-md text-background/80 max-w-xl"
          >
            Schedule your consultation today. Our team of specialist doctors is here to provide you with the premium, personalized care you deserve.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <Link
              href="/appointments"
              className="inline-flex h-12 items-center justify-center rounded-button bg-accent px-8 font-sans text-body-md font-semibold text-primary hover:bg-accent/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+918109573183"
              className="inline-flex h-12 items-center justify-center rounded-button border border-background/25 bg-transparent px-8 font-sans text-body-md font-semibold text-background hover:bg-background/5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background active:scale-[0.98]"
            >
              Call +91 81095 73183
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
