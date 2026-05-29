"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";
import { aiContent, businessData } from "@/data/site-data";

export function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const booking = (aiContent as any).booking;
  if (!booking) return null;

  return (
    <section id="booking" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative max-w-4xl mx-auto p-8 md:p-12 rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/20 rounded-3xl" />

          <div className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Calendar size={28} className="text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {booking.title || "Book an Appointment"}
            </h2>

            <p className="text-foreground/70 max-w-xl mx-auto mb-8">
              {booking.description || "Schedule your visit with us today."}
            </p>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <input
                type="date"
                className="w-full px-5 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <textarea
                placeholder="Any special requests?"
                rows={3}
                className="w-full px-5 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
