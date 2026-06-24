"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section spacing="none" className="relative bg-background overflow-hidden min-h-[90vh] flex items-center pt-8 pb-16 lg:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Side: Copywriting */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:col-span-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/10 bg-secondary/5 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
              Aarogya One Wellness
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-display-sm md:text-display-md lg:text-display-lg font-bold text-primary tracking-tight leading-[1.1]"
          >
            Redefining the <span className="italic font-normal text-secondary">standard</span> of healthcare.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-body-md lg:text-body-lg text-text/80 leading-relaxed max-w-xl"
          >
            Experience a new echelon of personalized medical care. We integrate state-of-the-art wellness technology with board-certified clinical excellence to cultivate your lifelong vitality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Link
              href="/appointments"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-button bg-primary px-8 font-sans text-body-md font-semibold text-background shadow-sm hover:bg-primary/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
            >
              Book Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-button border border-primary/20 bg-transparent px-8 font-sans text-body-md font-semibold text-primary hover:bg-primary/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Our Philosophy
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Image & Floating Card */}
        <div className="relative lg:col-span-6 w-full flex justify-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-w-lg rounded-card overflow-hidden shadow-xl border border-primary/5"
          >
            <Image
              src="/luxury_clinic_lobby.png"
              alt="Luxury Aarogya One Wellness Lounge"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 600px"
            />
            
            {/* Soft gradient overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Trust Card */}
          <motion.div
            variants={floatingVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:bottom-12 max-w-sm p-5 bg-background/90 backdrop-blur-md border border-primary/10 rounded-card shadow-lg flex flex-col gap-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
              ))}
              <span className="font-sans text-caption font-bold text-primary ml-2">4.9/5 Rating</span>
            </div>
            <p className="font-sans text-body-sm text-text/80 leading-relaxed">
              &ldquo;Great clinical care and very polite staff. The rooms are clean and comfortable, making the experience very relaxing.&rdquo;
            </p>
            <div className="flex flex-col border-t border-primary/5 pt-2">
              <span className="font-sans text-caption font-bold text-primary">Rohan Singhania</span>
              <span className="font-sans text-[10px] text-text/60 uppercase tracking-wider">Executive Patient</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
