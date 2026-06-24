"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Anuj Nigam",
    role: "Orthopedic Surgeon",
    education: "MS - Orthopedic Surgery",
    bio: "Specializes in bone and joint treatments, complex surgeries, and athletic recovery.",
    image: "/dr_anuj_nigam.png",
  },
  {
    name: "Dr. Netrakamla Gupta",
    role: "Obstetrics & Gynaecology Specialist",
    education: "MS - OBGYN",
    bio: "Providing comprehensive women's healthcare, maternity support, and wellness services.",
    image: "/dr_netrakamla_gupta.png",
  },
  {
    name: "Dr. Sudhir Thakur",
    role: "General Physician",
    education: "MD - General Medicine",
    bio: "Dedicated to general physical consultations, critical care diagnostics, and preventive medicine.",
    image: "/dr_sudhir_thakur.png",
  },
  {
    name: "Dr. Anubhav Agrawal",
    role: "Gastroenterologist",
    education: "DM - Gastroenterology",
    bio: "Expert care for digestive health, clinical liver profiles, and therapeutic treatments.",
    image: "/dr_anubhav_agrawal.png",
  },
];

export default function DoctorIntroduction() {
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
    <Section spacing="md" id="doctors" className="bg-background border-b border-primary/10">
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
            Meet Our Specialist Doctors
          </motion.h2>
          <motion.p variants={titleVariants} className="font-sans text-body-sm text-text/80">
            Our medical staff consists of world-class, board-certified clinical professionals dedicated to providing you with premium care.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {doctors.map((doc, index) => (
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
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-primary/5 mb-6 bg-secondary/5">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
              </div>
              <h3 className="font-sans text-h4 font-bold text-primary">
                {doc.name}
              </h3>
              <p className="font-sans text-body-sm font-medium text-accent mb-2">
                {doc.role}
              </p>
              <p className="font-sans text-caption text-text/60 mb-4">
                {doc.education}
              </p>
              <p className="font-sans text-body-sm text-text/80 leading-relaxed">
                {doc.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-4"
        >
          <Link
            href="/doctors"
            className="inline-flex h-11 items-center justify-center rounded-button border border-primary/20 bg-transparent px-6 font-sans text-body-sm font-medium text-primary hover:bg-primary/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View All Doctors
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
