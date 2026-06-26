"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background border-t border-primary/20 pt-20 pb-12 overflow-hidden" aria-label="Site Footer">
      <Container className="flex flex-col gap-16">

        {/* Middle Section: Giant Statement Typography */}
        <div className="w-full flex items-center justify-center py-6 select-none border-b border-background/10">
          <h2 className="font-serif text-[11vw] font-bold tracking-[0.12em] leading-none uppercase text-transparent bg-gradient-to-b from-accent to-accent/60 bg-clip-text text-center w-full">
            Aarogya One
          </h2>
        </div>

        {/* Bottom Info Grid: Non-traditional Horizontal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {/* Item 1: Address */}
          <div className="flex gap-4 p-6 rounded-xl bg-background/5 border border-background/5 hover:bg-background/[0.08] hover:border-background/10 transition-all duration-300 group">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] uppercase tracking-wider text-accent font-semibold">Location</span>
              <address className="not-italic font-sans text-body-sm text-background/80 leading-relaxed">
                23, Sir M. Visvesvaraya Marg, Indore, MP 452003
              </address>
            </div>
          </div>

          {/* Item 2: Phone */}
          <a 
            href="tel:+918109573183" 
            className="flex gap-4 p-6 rounded-xl bg-background/5 border border-background/5 hover:bg-background/[0.08] hover:border-background/10 transition-all duration-300 group"
          >
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] uppercase tracking-wider text-accent font-semibold">Call Hotline</span>
              <span className="font-sans text-body-sm text-background/80 hover:text-accent transition-colors">+91 81095 73183</span>
            </div>
          </a>

          {/* Item 3: Email */}
          <a 
            href="mailto:oneaarogya@gmail.com" 
            className="flex gap-4 p-6 rounded-xl bg-background/5 border border-background/5 hover:bg-background/[0.08] hover:border-background/10 transition-all duration-300 group animate-none"
          >
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] uppercase tracking-wider text-accent font-semibold">Write Email</span>
              <span className="font-sans text-body-sm text-background/80 hover:text-accent transition-colors break-all">oneaarogya@gmail.com</span>
            </div>
          </a>

          {/* Item 4: Opening Hours */}
          <div className="flex gap-4 p-6 rounded-xl bg-background/5 border border-background/5 hover:bg-background/[0.08] hover:border-background/10 transition-all duration-300 group">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] uppercase tracking-wider text-accent font-semibold">Hours of Care</span>
              <div className="font-sans text-body-sm text-background/80 flex flex-col">
                <span>Mon - Fri: 8 AM - 6 PM</span>
                <span>Sat: 9 AM - 2 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-caption text-background/50 text-center sm:text-left">
            &copy; {currentYear} Aarogya One. All rights reserved. Designed for premium healthcare management.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-sans text-caption text-background/50 hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-sans text-caption text-background/50 hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}
