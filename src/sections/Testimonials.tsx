"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "The doctors here are very good and helpful. They listened to my heart concerns patiently and explained the treatment step-by-step. The clinic is very clean and quiet.",
    author: "Rahul Sharma",
    location: "Heart Checkup Patient",
  },
  {
    rating: 5,
    quote: "Very nice clinic for children. My kids were not scared at all during their checkup and vaccine. The staff is very friendly and they made us feel comfortable.",
    author: "Anjali Sharma",
    location: "Parent",
  },
  {
    rating: 5,
    quote: "I got my dental treatment done here. The procedure was very smooth and there was almost no pain. Highly recommend this clinic for any dental issues.",
    author: "Amit Verma",
    location: "Dental Patient",
  },
];

export default function Testimonials() {
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

  const cardVariants = {
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
    <Section spacing="md" id="testimonials" className="bg-background border-b border-primary/10">
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
            What Our Patients Say
          </motion.h2>
          <motion.p variants={titleVariants} className="font-sans text-body-sm text-text/80">
            Real experiences from individuals who have trusted us with their health and medical requirements.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -15px rgba(14, 59, 46, 0.05)",
                borderColor: "rgba(18, 124, 114, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="flex flex-col p-6 rounded-card border border-primary/5 bg-background shadow-sm transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`Rating: ${test.rating} out of 5 stars`}>
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent shrink-0" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-sans text-body-sm text-text/80 leading-relaxed mb-6 italic flex-1">
                &ldquo;{test.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col">
                <cite className="font-sans text-body-sm font-bold text-primary not-italic">
                  {test.author}
                </cite>
                <span className="font-sans text-caption text-text/60">
                  {test.location}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
