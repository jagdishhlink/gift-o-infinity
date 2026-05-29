"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { businessData, aiContent } from "@/data/site-data";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-heading font-semibold">
              We&apos;d love to hear from you
            </h3>
            <p className="text-foreground/60">
              Drop us a message or visit us at our location. We respond within 24 hours.
            </p>

            <div className="space-y-4">
              {businessData.address && (
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Address</h4>
                    <p className="text-sm text-foreground/60 mt-0.5">{businessData.address}</p>
                  </div>
                </div>
              )}

              {businessData.phone && (
                <a href={`tel:${businessData.phone}`} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Phone</h4>
                    <p className="text-sm text-foreground/60 mt-0.5">{businessData.phone}</p>
                  </div>
                </a>
              )}

              {businessData.email && (
                <a href={`mailto:${businessData.email}`} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-sm text-foreground/60 mt-0.5">{businessData.email}</p>
                  </div>
                </a>
              )}

              {businessData.openingHours && (
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Hours</h4>
                    <p className="text-sm text-foreground/60 mt-0.5">{businessData.openingHours}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Map embed */}
            {businessData.latitude && businessData.longitude && (
              <div className="rounded-xl overflow-hidden border border-border h-48">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d${businessData.longitude}!3d${businessData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form className="p-6 md:p-8 rounded-2xl bg-card border border-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
                  <option value="">Select a service</option>
                  {(aiContent as any).services?.map((s: any, i: number) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


