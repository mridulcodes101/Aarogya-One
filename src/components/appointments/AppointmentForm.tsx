"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, Stethoscope, MessageSquare, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { cn } from "@/lib/utils";

interface AppointmentFormInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  doctor: string;
  date: string;
  timeSlot: string;
  message?: string;
}

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const doctorParam = searchParams.get("doctor");
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<AppointmentFormInput | null>(null);
  const [bookingId, setBookingId] = React.useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AppointmentFormInput>({
    defaultValues: {
      service: serviceParam || "",
      doctor: doctorParam || "",
      timeSlot: "",
      date: "",
    },
  });

  const selectedService = watch("service");

  // Pre-select service from query params if available
  React.useEffect(() => {
    if (serviceParam) {
      setValue("service", serviceParam);
    }
  }, [serviceParam, setValue]);

  // Pre-select doctor from query params if available
  React.useEffect(() => {
    if (doctorParam) {
      setValue("doctor", doctorParam);
    }
  }, [doctorParam, setValue]);

  // Dynamically filter doctors based on selected service specialty
  const availableDoctors = React.useMemo(() => {
    if (!selectedService) return doctorsData;
    // Return doctors that specify the service OR are general surgeons/unassigned
    const filtered = doctorsData.filter(
      (doc) => doc.services.includes(selectedService) || doc.id === "dr-narendra-pal"
    );
    return filtered.length > 0 ? filtered : doctorsData;
  }, [selectedService]);

  // Set min date to today's date
  const minDate = React.useMemo(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const onSubmit = async (data: AppointmentFormInput) => {
    setIsSubmitting(true);
    
    // Simulate luxury API response delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Store in localStorage
    const bookingCode = `CL-${Math.floor(100000 + Math.random() * 900000)}`;
    const localBookings = JSON.parse(localStorage.getItem("aarogyaone_bookings") || "[]");
    localBookings.push({ ...data, bookingId: bookingCode, createdAt: new Date().toISOString() });
    localStorage.setItem("aarogyaone_bookings", JSON.stringify(localBookings));
    
    setBookingId(bookingCode);
    setSubmittedData(data);
    setIsSubmitting(false);
  };

  const selectedDoctorName = React.useMemo(() => {
    if (!submittedData) return "";
    return doctorsData.find((d) => d.id === submittedData.doctor)?.name || submittedData.doctor;
  }, [submittedData]);

  const selectedServiceName = React.useMemo(() => {
    if (!submittedData) return "";
    return servicesData.find((s) => s.id === submittedData.service)?.title || submittedData.service;
  }, [submittedData]);

  if (submittedData) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col p-8 rounded-card border border-primary/10 bg-background shadow-xl max-w-2xl mx-auto gap-6 text-center items-center"
      >
        <div className="h-16 w-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
          <CheckCircle className="h-8 w-8" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-h2 font-bold text-primary">Booking Confirmed</h2>
          <p className="font-sans text-body-sm text-text/80">
            Thank you for scheduling with us. Your booking has been locked into our local database.
          </p>
        </div>

        {/* Booking Card details */}
        <div className="w-full bg-[#F8F4EC]/40 border border-primary/5 rounded-card p-6 flex flex-col gap-4 text-left font-sans">
          <div className="flex justify-between items-center border-b border-primary/5 pb-3">
            <span className="text-[10px] text-text/50 uppercase font-semibold">Appointment ID</span>
            <span className="text-body-sm font-bold text-accent">{bookingId}</span>
          </div>
          <div className="flex flex-col gap-3 text-body-sm text-primary">
            <div>
              <span className="text-[10px] text-text/50 uppercase block font-semibold">Patient Name</span>
              <span className="font-medium">{submittedData.name}</span>
            </div>
            <div>
              <span className="text-[10px] text-text/50 uppercase block font-semibold">Care Plan / Service</span>
              <span className="font-medium">{selectedServiceName}</span>
            </div>
            <div>
              <span className="text-[10px] text-text/50 uppercase block font-semibold">Attending Doctor</span>
              <span className="font-medium">{selectedDoctorName}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] text-text/50 uppercase block font-semibold">Date</span>
                <span className="font-medium">{submittedData.date}</span>
              </div>
              <div>
                <span className="text-[10px] text-text/50 uppercase block font-semibold">Time Slot</span>
                <span className="font-medium">{submittedData.timeSlot}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="font-sans text-caption text-text/60 leading-relaxed max-w-md">
          Please arrive 10 minutes prior to your slot. Bring a valid medical identification card and any previous clinical screening reports you may have.
        </p>

        <button
          onClick={() => setSubmittedData(null)}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-button bg-primary px-8 font-sans text-body-sm font-semibold text-background shadow-sm hover:bg-primary/95 transition-all mt-4"
        >
          Book Another Appointment
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-card border border-primary/10 bg-background shadow-xl p-6 sm:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
        {/* Personal Details Row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-name" className="font-sans text-caption font-bold text-primary">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
                <User className="h-4 w-4" />
              </span>
              <input
                id="form-name"
                type="text"
                placeholder="John Doe"
                className={cn(
                  "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all",
                  errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                {...register("name", {
                  required: "Full name is required",
                  minLength: { value: 3, message: "Name must be at least 3 characters" },
                })}
              />
            </div>
            {errors.name && (
              <span className="font-sans text-[11px] text-red-500 font-medium">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-email" className="font-sans text-caption font-bold text-primary">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
                <Mail className="h-4 w-4" />
              </span>
              <input
                id="form-email"
                type="email"
                placeholder="john@example.com"
                className={cn(
                  "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all",
                  errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address formatting",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="font-sans text-[11px] text-red-500 font-medium">{errors.email.message}</span>
            )}
          </div>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-2">
          <label htmlFor="form-phone" className="font-sans text-caption font-bold text-primary">
            Phone Number
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
              <Phone className="h-4 w-4" />
            </span>
            <input
              id="form-phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className={cn(
                "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all",
                errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[0-9\s-()]{7,18}$/,
                  message: "Invalid phone number formatting",
                },
              })}
            />
          </div>
          {errors.phone && (
            <span className="font-sans text-[11px] text-red-500 font-medium">{errors.phone.message}</span>
          )}
        </div>

        {/* Services & Doctors dropdown */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Service Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-service" className="font-sans text-caption font-bold text-primary">
              Select Care Plan / Service
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
                <Stethoscope className="h-4 w-4" />
              </span>
              <select
                id="form-service"
                className={cn(
                  "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer",
                  errors.service && "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                {...register("service", { required: "Please select a service" })}
              >
                <option value="" disabled>Select a service...</option>
                {servicesData.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            {errors.service && (
              <span className="font-sans text-[11px] text-red-500 font-medium">{errors.service.message}</span>
            )}
          </div>

          {/* Doctor Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-doctor" className="font-sans text-caption font-bold text-primary">
              Select Doctor / Specialist
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
                <User className="h-4 w-4" />
              </span>
              <select
                id="form-doctor"
                className={cn(
                  "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer",
                  errors.doctor && "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                {...register("doctor", { required: "Please select a doctor" })}
              >
                <option value="" disabled>Select a doctor...</option>
                {availableDoctors.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} ({doc.specialty})
                  </option>
                ))}
              </select>
            </div>
            {errors.doctor && (
              <span className="font-sans text-[11px] text-red-500 font-medium">{errors.doctor.message}</span>
            )}
          </div>
        </div>

        {/* Date & Time slots Row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Date Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-date" className="font-sans text-caption font-bold text-primary">
              Preferred Date
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
                <Calendar className="h-4 w-4" />
              </span>
              <input
                id="form-date"
                type="date"
                min={minDate}
                className={cn(
                  "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all cursor-pointer",
                  errors.date && "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                {...register("date", { required: "Please select a date" })}
              />
            </div>
            {errors.date && (
              <span className="font-sans text-[11px] text-red-500 font-medium">{errors.date.message}</span>
            )}
          </div>

          {/* Time Slot Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-timeslot" className="font-sans text-caption font-bold text-primary">
              Preferred Time Slot
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-text/40 pointer-events-none">
                <Clock className="h-4 w-4" />
              </span>
              <select
                id="form-timeslot"
                className={cn(
                  "w-full h-11 pl-11 pr-4 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer",
                  errors.timeSlot && "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                {...register("timeSlot", { required: "Please select a time slot" })}
              >
                <option value="" disabled>Select a time slot...</option>
                {timeSlots.map((slot, idx) => (
                  <option key={idx} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            {errors.timeSlot && (
              <span className="font-sans text-[11px] text-red-500 font-medium">{errors.timeSlot.message}</span>
            )}
          </div>
        </div>

        {/* Message / Symptoms text area */}
        <div className="flex flex-col gap-2">
          <label htmlFor="form-message" className="font-sans text-caption font-bold text-primary">
            Message or Symptoms Description (Optional)
          </label>
          <div className="relative">
            <span className="absolute top-3.5 left-4 text-text/40 pointer-events-none">
              <MessageSquare className="h-4 w-4" />
            </span>
            <textarea
              id="form-message"
              rows={4}
              placeholder="Provide details of any symptoms or specific consultation requests..."
              className="w-full pl-11 pr-4 py-3 rounded-button border border-primary/10 bg-background font-sans text-body-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
              {...register("message")}
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-button bg-primary px-8 font-sans text-body-sm font-semibold text-background shadow-md hover:bg-primary/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.99] disabled:opacity-85 disabled:cursor-not-allowed mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Locking Appointment...
            </>
          ) : (
            <>
              Confirm Appointment
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
