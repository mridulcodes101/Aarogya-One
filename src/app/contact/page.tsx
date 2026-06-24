import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Connect with Aarogya One. Locate our physical address, view our opening hours, query map directions, or send a secure enquiry message.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#F8F4EC]/30 pt-32 pb-24">
      <Section spacing="none">
        <Container className="flex flex-col gap-16">
          {/* Header Title */}
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
            <span className="font-sans text-caption font-semibold tracking-wider uppercase text-secondary">
              Connect
            </span>
            <h1 className="font-serif text-display-sm md:text-display-md font-bold text-primary">
              Contact Our Team
            </h1>
            <p className="font-sans text-body-sm text-text/80 leading-relaxed">
              Have questions about treatments, fees, or scheduling? Reach out to our client coordinators or visit our private wellness suites.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Contact Details, Map & Hours */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              
              {/* Contact Info & WhatsApp */}
              <div className="flex flex-col gap-6 p-8 rounded-card border border-primary/5 bg-background shadow-sm">
                <h2 className="font-serif text-h3 font-bold text-primary">Our Address</h2>
                <address className="not-italic flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-sans text-body-sm text-primary">
                      23, Sir M. Visvesvaraya Marg, Indore, Madhya Pradesh 452003
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                    <a
                      href="tel:+917470655352"
                      className="font-sans text-body-sm text-primary hover:text-accent transition-colors"
                      aria-label="Call Aarogya One at +91 74706 55352"
                    >
                      +91 74706 55352
                    </a>
                  </div>
                  <div className="flex items-center gap-3 border-b border-primary/5 pb-6">
                    <Mail className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                    <a
                      href="mailto:mustu.malak53@gmail.com"
                      className="font-sans text-body-sm text-primary hover:text-accent transition-colors"
                      aria-label="Email Aarogya One at mustu.malak53@gmail.com"
                    >
                      mustu.malak53@gmail.com
                    </a>
                  </div>
                </address>

                {/* WhatsApp CTA */}
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[10px] text-text/50 uppercase font-semibold">Immediate Assistance</span>
                  <a
                    href="https://wa.me/917470655352?text=Hi%20there,%20I'd%20like%20to%20inquire%20about%20a%20clinical%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-button bg-[#25D366] hover:bg-[#20ba5a] text-[#F8F4EC] font-sans text-body-sm font-semibold transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-[0.98] w-full"
                  >
                    <MessageCircle className="h-5 w-5 fill-current" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex flex-col gap-6 p-8 rounded-card border border-primary/5 bg-background shadow-sm font-sans">
                <h2 className="font-serif text-h3 font-bold text-primary">Hours of Care</h2>
                <ul className="flex flex-col gap-3 text-body-sm text-primary">
                  <li className="flex justify-between items-center border-b border-primary/5 pb-2">
                    <span className="text-text/60 font-medium">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-primary/5 pb-2">
                    <span className="text-text/60 font-medium">Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-text/60 font-medium">Sunday</span>
                    <span className="text-accent font-semibold">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Google Map Embed */}
              <div className="w-full aspect-video rounded-card overflow-hidden shadow-sm border border-primary/5 relative">
                <iframe
                  title="Google Maps Location of Aarogya One"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1203588265006!2d75.87186177589578!3d22.723793727402636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd12c1404c0d%3A0x6bda19a9307d8636!2sShri%20Govindram%20Seksaria%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
