"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment online using our booking portal, or call us directly at +91 74706 55352. Our support staff will help you secure a time slot with the appropriate specialist.",
  },
  {
    q: "What insurance providers do you accept?",
    a: "We accept most major private health insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and Medicare. Please call us to confirm your specific coverage details.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Please bring a valid photo ID, your insurance card, any medical reports or diagnostic results from previous Aarogya One visits, and a list of all current medications you are taking.",
  },
  {
    q: "Do you offer emergency or after-hours consultations?",
    a: "While we specialize in general and scheduled specialist consultations, our doctors offer urgent care services during operational hours. For medical emergencies outside these hours, please visit the nearest hospital emergency room.",
  },
];

export default function FAQ() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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

  const faqVariants = {
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
    <Section spacing="md" id="faq" className="bg-background border-b border-primary/10">
      <Container className="flex flex-col gap-12 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col items-center text-center gap-4"
        >
          <motion.h2 variants={titleVariants} className="text-h1 font-bold text-primary">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={titleVariants} className="font-sans text-body-sm text-text/80">
            Find immediate answers to common questions about appointments, insurance coverage, and Aarogya One procedures.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={faqVariants}>
              <details
                className="group border border-primary/5 rounded-card bg-background p-6 [&_summary::-webkit-details-marker]:hidden"
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
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
