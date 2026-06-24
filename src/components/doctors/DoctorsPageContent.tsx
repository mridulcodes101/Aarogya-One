"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Clock, ShieldCheck, Award, Calendar } from "lucide-react";
import Link from "next/link";

const specialists = [
  {
    name: "Dr. Anuj Nigam",
    role: "Orthopedic Surgeon",
    education: "MS - Orthopedic Surgery, FICS",
    bio: "Specializes in joint replacements, advanced arthroscopic procedures, fracture management, and sports medicine therapies.",
    image: "/dr_anuj_nigam.png",
  },
  {
    name: "Dr. Netrakamla Gupta",
    role: "Obstetrics & Gynaecology (OBGYN) Specialist",
    education: "MS - OBGYN, DGO",
    bio: "Dedicated to comprehensive women's healthcare, prenatal and postnatal maternity care, and advanced gynecological treatments.",
    image: "/dr_netrakamla_gupta.png",
  },
  {
    name: "Dr. Sudhir Thakur",
    role: "General Physician",
    education: "MD - General Medicine",
    bio: "Expert in chronic disease coaching, general health checkups, critical clinical diagnostics, and preventive wellness strategies.",
    image: "/dr_sudhir_thakur.png",
  },
  {
    name: "Dr. Anubhav Agrawal",
    role: "Gastroenterologist",
    education: "MD - Medicine, DM - Gastroenterology",
    bio: "Provides highly specialized diagnostics and clinical care for complex stomach, liver, gallbladder, and digestive tract disorders.",
    image: "/dr_anubhav_agrawal.png",
  },
];

export default function DoctorsPageContent() {
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="flex-1 bg-[#F8F4EC]/30">
      
      {/* 1. Header Section */}
      <Section spacing="sm" className="pt-32 pb-12 bg-[#F8F4EC]/50 border-b border-primary/10">
        <Container className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary"
          >
            Specialists
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-display-sm md:text-display-md font-bold text-primary"
          >
            Our Medical Specialists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-body-sm text-text/80 leading-relaxed"
          >
            Meet our board-certified physicians, surgeons, and healthcare leaders dedicated to providing world-class clinical excellence.
          </motion.p>
        </Container>
      </Section>

      {/* 2. Director Spotlight Section */}
      <Section spacing="md" className="border-b border-primary/10 bg-background">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full aspect-[4/5] max-w-md rounded-card overflow-hidden shadow-lg border border-primary/5">
              <Image
                src="/dr_narendra_pal.png"
                alt="Dr. Narendra Pal - Hospital Director"
                fill
                className="object-cover object-center"
                sizes="(max-w-768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            <div className="flex flex-col gap-2">
              <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
                Hospital Director
              </span>
              <h2 className="font-serif text-h1 font-bold text-primary">
                Dr. Narendra Pal
              </h2>
              <p className="font-sans text-body-sm font-semibold text-accent flex items-center gap-1.5">
                <ShieldCheck className="h-4.5 w-4.5" />
                General Physician & Critical Care Expert
              </p>
            </div>

            <div className="flex flex-col gap-4 font-sans text-body-md text-text/80 leading-relaxed">
              <p className="text-body-lg font-medium text-primary">
                DR. NARENDRA PAL is the Director of our Hospital. He is a General Physician and critical care expert with more than 15 years of rich clinical and leadership experience.
              </p>
              <p>
                After working in senior consulting roles and leading critical care wards for over a decade and a half, he decided to establish this state-of-the-art facility. He is handling the charge of coordinating hospital activities and managing medical professionals, ensuring smooth workflows and efficient services for our patients.
              </p>
              <p>
                His administrative responsibilities revolve around setting institutional goals, managing clinical budgets, coordinating medical and non-medical personnel, and developing long-term strategies to optimize hospital operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-primary/5 pt-6 my-2">
              <div className="flex items-center gap-2.5">
                <Award className="h-5 w-5 text-accent shrink-0" />
                <span className="font-sans text-caption font-semibold text-primary">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <span className="font-sans text-caption font-semibold text-primary">Coordinating Workflows</span>
              </div>
            </div>

            <Link
              href="/appointments?doctor=dr-narendra-pal"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-button bg-primary px-8 font-sans text-body-md font-semibold text-background shadow-md hover:bg-primary/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] w-fit"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book Consultation
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* 3. Specialists Grid Section */}
      <Section spacing="md">
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
            <motion.h2 variants={titleVariants} className="font-serif text-h1 font-bold text-primary">
              Meet Our Doctors
            </motion.h2>
            <motion.p variants={titleVariants} className="font-sans text-body-sm text-text/80">
              Our clinical specialists bring decades of diagnostic experience and surgical skills to their respective care suites.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {specialists.map((doc, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="flex flex-col p-6 rounded-card border border-primary/5 bg-background shadow-sm hover:border-secondary/15 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Profile Image */}
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-primary/5 mb-6 bg-secondary/5">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-w-768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Info */}
                <h3 className="font-sans text-body-lg font-bold text-primary mb-1">
                  {doc.name}
                </h3>
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent mb-2">
                  {doc.role}
                </p>
                <p className="font-sans text-[10px] text-text/60 mb-4 leading-normal">
                  {doc.education}
                </p>
                <p className="font-sans text-body-sm text-text/80 leading-relaxed flex-1">
                  {doc.bio}
                </p>
                
                {/* CTA */}
                <Link
                  href={`/appointments?doctor=${doc.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}`}
                  className="mt-6 inline-flex h-10 items-center justify-center rounded-button border border-primary/10 hover:border-secondary hover:bg-secondary/5 font-sans text-body-sm font-semibold text-primary transition-all active:scale-[0.98] w-full"
                >
                  Schedule Appointment
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
