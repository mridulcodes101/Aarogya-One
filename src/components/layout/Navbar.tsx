"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/95 border-b border-primary/10 py-4 shadow-sm backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-display text-h3 font-bold text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Aarogya One Home"
        >
          Aarogya One<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-sans text-body-sm font-medium transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                      isActive ? "text-accent" : "text-primary/95"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA / Contacts */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+918109573183"
            className="flex items-center gap-2 font-sans text-body-sm font-semibold text-primary hover:text-accent transition-colors"
            aria-label="Call Aarogya One at +91 81095 73183"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">+91 81095 73183</span>
          </a>
          <Link
            href="/appointments"
            className="inline-flex h-10 items-center justify-center rounded-button bg-primary px-6 font-sans text-body-sm font-medium text-background shadow-sm hover:bg-primary/90 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="tel:+918109573183"
            className="p-3 text-primary hover:text-accent transition-colors"
            aria-label="Call Aarogya One"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 text-primary hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 z-40 w-full h-[calc(100vh-100%)] bg-background border-t border-primary/10 px-gutter py-8 shadow-lg flex flex-col justify-between"
          >
            <nav className="w-full" aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block font-sans text-h3 font-medium transition-colors hover:text-accent",
                          isActive ? "text-accent" : "text-primary"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex flex-col gap-4 mt-auto mb-12">
              <a
                href="tel:+918109573183"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 h-12 w-full rounded-button border border-primary/20 font-sans text-body-md font-medium text-primary hover:bg-primary/5 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call +91 81095 73183
              </a>
              <Link
                href="/appointments"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-button bg-primary font-sans text-body-md font-medium text-background shadow-md hover:bg-primary/90 transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
