"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, User, Mail, Phone, MessageSquare, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>();

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Store message locally for mock database
    const localMessages = JSON.parse(localStorage.getItem("aarogyaone_messages") || "[]");
    localMessages.push({ ...data, createdAt: new Date().toISOString() });
    localStorage.setItem("aarogyaone_messages", JSON.stringify(localMessages));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col p-8 rounded-card border border-primary/10 bg-background shadow-xl text-center items-center gap-4"
      >
        <div className="h-12 w-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-h3 font-bold text-primary">Message Sent</h3>
        <p className="font-sans text-body-sm text-text/80 max-w-sm">
          Thank you for reaching out. A client coordinator from our medical team will contact you within the next 2 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="inline-flex h-10 items-center justify-center rounded-button bg-primary px-6 font-sans text-body-sm font-semibold text-background shadow-sm hover:bg-primary/95 transition-all mt-2"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-card border border-primary/10 bg-background shadow-xl p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
        <h3 className="font-serif text-h3 font-bold text-primary mb-2">Send us a Message</h3>
        
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-sans text-caption font-bold text-primary">Name</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
              <User className="h-4 w-4" />
            </span>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              className={cn(
                "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all",
                errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && <span className="font-sans text-[11px] text-red-500 font-medium">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="font-sans text-caption font-bold text-primary">Email Address</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              className={cn(
                "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all",
                errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
              })}
            />
          </div>
          {errors.email && <span className="font-sans text-[11px] text-red-500 font-medium">{errors.email.message}</span>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="font-sans text-caption font-bold text-primary">Phone Number</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
              <Phone className="h-4 w-4" />
            </span>
            <input
              id="contact-phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className={cn(
                "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all",
                errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
              {...register("phone", { required: "Phone number is required" })}
            />
          </div>
          {errors.phone && <span className="font-sans text-[11px] text-red-500 font-medium">{errors.phone.message}</span>}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject" className="font-sans text-caption font-bold text-primary">Subject</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
              <Tag className="h-4 w-4" />
            </span>
            <input
              id="contact-subject"
              type="text"
              placeholder="Inquiry subject"
              className={cn(
                "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all",
                errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
              {...register("subject", { required: "Subject is required" })}
            />
          </div>
          {errors.subject && <span className="font-sans text-[11px] text-red-500 font-medium">{errors.subject.message}</span>}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-sans text-caption font-bold text-primary">Message</label>
          <div className="relative">
            <span className="absolute top-3.5 left-4 text-text/40 pointer-events-none">
              <MessageSquare className="h-4 w-4" />
            </span>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="How can our clinical team assist you today?"
              className={cn(
                "w-full pl-11 pr-4 py-3 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none",
                errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
              {...register("message", { required: "Message is required" })}
            />
          </div>
          {errors.message && <span className="font-sans text-[11px] text-red-500 font-medium">{errors.message.message}</span>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-button bg-primary px-6 font-sans text-body-sm font-semibold text-background shadow-md hover:bg-primary/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.99] disabled:opacity-85 disabled:cursor-not-allowed mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
