"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { aiContent, businessData } from "@/data/site-data";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-24 px-5 md:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto relative rounded-2xl md:rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative px-6 py-12 md:px-14 md:py-16 lg:px-20 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight"
              >
                {aiContent.ctaTitle || "Ready to Get Started?"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-white/65 mt-3 text-sm md:text-base"
              >
                {aiContent.ctaDescription || "Contact us today and let's make it happen."}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 shrink-0"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary rounded-xl font-semibold text-sm hover:bg-white/95 transition-all active:scale-[0.97]"
              >
                {aiContent.ctaButtonText || "Contact Us"}
                <ArrowRight size={14} />
              </a>
              {businessData.phone && (
                <a
                  href={`tel:${businessData.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-all active:scale-[0.97]"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
