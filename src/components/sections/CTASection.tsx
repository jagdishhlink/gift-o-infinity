"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { aiContent, businessData } from "@/data/site-data";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative p-8 md:p-16 rounded-3xl overflow-hidden text-center"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-white/5 rounded-full" />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
            >
              {aiContent.ctaTitle || "Ready to Get Started?"}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-lg max-w-xl mx-auto mb-8"
            >
              {aiContent.ctaDescription || "Contact us today and let's make it happen."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                {aiContent.ctaButtonText || "Contact Us"}
                <ArrowRight size={18} />
              </a>
              {businessData.phone && (
                <a
                  href={`tel:${businessData.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
                >
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
