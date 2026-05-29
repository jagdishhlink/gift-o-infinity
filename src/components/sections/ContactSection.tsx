"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { businessData, aiContent } from "@/data/site-data";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-20 md:py-28 px-5 md:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="mb-12 md:mb-14">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Get In Touch</h2>
          <p className="text-foreground/50 mt-3 max-w-md text-sm">
            Drop us a message or reach out directly. We typically respond within a few hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Quick contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 space-y-3"
          >
            {businessData.phone && (
              <a href={`tel:${businessData.phone}`} className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-card/60 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-foreground/40 uppercase tracking-wider font-medium">Phone</p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{businessData.phone}</p>
                </div>
              </a>
            )}

            {businessData.email && (
              <a href={`mailto:${businessData.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-card/60 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-foreground/40 uppercase tracking-wider font-medium">Email</p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{businessData.email}</p>
                </div>
              </a>
            )}

            {businessData.address && (
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-foreground/40 uppercase tracking-wider font-medium">Address</p>
                  <p className="text-sm font-medium">{businessData.address}</p>
                </div>
              </div>
            )}

            {businessData.openingHours && (
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-foreground/40 uppercase tracking-wider font-medium">Hours</p>
                  <p className="text-sm font-medium">{businessData.openingHours}</p>
                </div>
              </div>
            )}

            {businessData.latitude && businessData.longitude && (
              <div className="rounded-xl overflow-hidden border border-border h-36 mt-2">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d${businessData.longitude}!3d${businessData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin`}
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
                />
              </div>
            )}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="lg:col-span-8"
          >
            <form className="p-5 md:p-8 rounded-2xl bg-card/50 border border-border space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField id="name" label="Name" placeholder="Your name" type="text" />
                <InputField id="phone" label="Phone" placeholder="Your phone" type="tel" />
              </div>
              <InputField id="email" label="Email" placeholder="you@example.com" type="email" />
              <div>
                <label htmlFor="service" className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wider">Service</label>
                <select id="service" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm">
                  <option value="">Select a service</option>
                  {(aiContent as any).services?.map((s: any, i: number) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wider">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your needs..." className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm resize-none" />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all active:scale-[0.98]">
                <Send size={14} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({ id, label, placeholder, type }: { id: string; label: string; placeholder: string; type: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wider">{label}</label>
      <input id={id} type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm" />
    </div>
  );
}
