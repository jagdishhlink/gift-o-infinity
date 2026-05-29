"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aiContent, businessData } from "@/data/site-data";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-bg pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              {aiContent.aboutTitle || "Our Story"}
            </h2>

            <p className="text-base md:text-lg text-foreground/65 leading-relaxed">
              {aiContent.aboutText}
            </p>

            {/* Why choose us */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {(aiContent.whyChooseUs || []).slice(0, 4).map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/60 border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm leading-tight">{item.title}</h4>
                    <p className="text-xs text-foreground/55 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {businessData.images.length > 2 ? (
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="col-span-7 rounded-2xl overflow-hidden"
                >
                  <img src={businessData.images[1]} alt={`${businessData.name}`} className="w-full h-64 md:h-72 object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="col-span-5 rounded-2xl overflow-hidden mt-8"
                >
                  <img src={businessData.images[2]} alt={`${businessData.name}`} className="w-full h-56 md:h-64 object-cover" />
                </motion.div>
                {businessData.images[3] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="col-span-5 rounded-2xl overflow-hidden -mt-4"
                  >
                    <img src={businessData.images[3]} alt={`${businessData.name}`} className="w-full h-44 md:h-52 object-cover" />
                  </motion.div>
                )}
                {businessData.images[4] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="col-span-7 rounded-2xl overflow-hidden -mt-4"
                  >
                    <img src={businessData.images[4]} alt={`${businessData.name}`} className="w-full h-44 md:h-52 object-cover" />
                  </motion.div>
                )}
              </div>
            ) : businessData.images.length >= 1 ? (
              <div className="rounded-2xl overflow-hidden">
                <img src={businessData.images[0]} alt={businessData.name} className="w-full h-80 md:h-96 object-cover" />
              </div>
            ) : (
              <div className="h-72 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 flex items-center justify-center">
                <span className="text-6xl opacity-60">{(aiContent.services?.[0] as any)?.icon || "🏢"}</span>
              </div>
            )}

            {/* Rating badge */}
            {businessData.rating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-background border border-border rounded-xl p-3.5 shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{businessData.rating}</span>
                  </div>
                  <div>
                    <div className="text-yellow-500 text-xs">{"★".repeat(Math.min(5, Math.round(parseFloat(businessData.rating))))}</div>
                    <span className="text-[11px] text-foreground/55">{businessData.reviewsCount} reviews</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
