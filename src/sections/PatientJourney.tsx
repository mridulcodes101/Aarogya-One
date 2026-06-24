"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    step: "01",
    title: "Schedule Consultation",
    description: "Book an appointment online or call our support team to select a time that fits your schedule.",
  },
  {
    step: "02",
    title: "Visit and Assess",
    description: "Meet with our specialists for a thorough checkup, diagnosis, and clinical evaluations.",
  },
  {
    step: "03",
    title: "Customized Treatment",
    description: "Receive a personalized healthcare treatment and recovery scheme tailored to your physiology.",
  },
  {
    step: "04",
    title: "Follow-Up & Care",
    description: "Stay in touch with our doctors through follow-up consultations to maintain your long-term health.",
  },
];

export default function PatientJourney() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section spacing="md" className="bg-background border-b border-primary/10">
      <Container className="flex flex-col gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
        >
          <motion.h2 variants={titleVariants} className="text-h1 font-bold text-primary">
            Your Health Journey
          </motion.h2>
          <motion.p variants={titleVariants} className="font-sans text-body-sm text-text/80">
            A simple, transparent process guiding you from the initial consultation through diagnosis to complete recovery.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col gap-4 relative"
            >
              <span className="font-display text-display-xl font-bold text-accent/25 select-none">
                {item.step}
              </span>
              <h3 className="font-sans text-h4 font-bold text-primary">
                {item.title}
              </h3>
              <p className="font-sans text-body-sm text-text/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
