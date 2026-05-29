"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { aiContent, businessData } from "@/data/site-data";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-14 lg:p-16 rounded-2xl md:rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />

          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 }}
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight"
              >
                {aiContent.ctaTitle || "Ready to Get Started?"}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 }}
                className="text-white/70 text-base md:text-lg mt-3 max-w-lg"
              >
                {aiContent.ctaDescription || "Contact us today and let's make it happen."}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-3 shrink-0"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary rounded-xl font-semibold text-sm hover:bg-white/95 transition-all hover:shadow-xl hover:-translate-y-px"
              >
                {aiContent.ctaButtonText || "Contact Us"}
                <ArrowRight size={16} />
              </a>
              {businessData.phone && (
                <a
                  href={`tel:${businessData.phone}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
