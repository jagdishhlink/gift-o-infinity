"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aiContent, businessData } from "@/data/site-data";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const hasImages = businessData.images.length > 1;
  const whyChooseUs = aiContent.whyChooseUs || [];

  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 lg:sticky lg:top-28"
          >
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">About Us</p>

            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight mb-5">
              {aiContent.aboutTitle || "Our Story"}
            </h2>

            <p className="text-base text-foreground/60 leading-[1.8] mb-8">
              {aiContent.aboutText}
            </p>

            {whyChooseUs.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.slice(0, 4).map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-card/60 border border-border/50"
                  >
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm leading-tight">{item.title}</h4>
                      <p className="text-[12px] text-foreground/50 mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            {hasImages ? (
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-7">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl overflow-hidden aspect-[3/4]"
                  >
                    <img src={businessData.images[1]} alt={businessData.name} className="w-full h-full object-cover" />
                  </motion.div>
                </div>
                <div className="col-span-5 flex flex-col gap-3 pt-8">
                  {businessData.images[2] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 }}
                      className="rounded-2xl overflow-hidden aspect-square"
                    >
                      <img src={businessData.images[2]} alt={businessData.name} className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                  {businessData.images[3] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 }}
                      className="rounded-2xl overflow-hidden aspect-[4/3]"
                    >
                      <img src={businessData.images[3]} alt={businessData.name} className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </div>

                {businessData.rating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="col-span-12 flex items-center gap-5 p-4 rounded-xl bg-card border border-border mt-1"
                  >
                    <div className="text-3xl font-heading font-bold text-primary">{businessData.rating}</div>
                    <div>
                      <div className="text-yellow-500 text-sm">{"★".repeat(Math.min(5, Math.round(parseFloat(businessData.rating))))}</div>
                      <p className="text-xs text-foreground/50 mt-0.5">{businessData.reviewsCount} Google reviews</p>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {whyChooseUs.slice(0, 4).map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="p-5 rounded-xl bg-card border border-border text-center"
                  >
                    <span className="text-3xl block mb-2">{item.icon}</span>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
