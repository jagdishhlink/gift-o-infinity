"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aiContent, businessData } from "@/data/site-data";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Bg decoration */}
      <div className="absolute inset-0 gradient-bg opacity-30 pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              {aiContent.aboutTitle || "Our Story"}
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              {aiContent.aboutText}
            </p>

            {/* Why choose us */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {(aiContent.whyChooseUs || []).slice(0, 4).map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-foreground/60 mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {businessData.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {businessData.images.slice(1, 3).map((img: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.2 }}
                      className="rounded-2xl overflow-hidden shadow-xl"
                    >
                      <img src={img} alt={`${businessData.name} ${i + 1}`} className="w-full h-48 object-cover" />
                    </motion.div>
                  ))}
                </div>
                <div className="pt-8 space-y-4">
                  {businessData.images.slice(3, 5).map((img: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.2 }}
                      className="rounded-2xl overflow-hidden shadow-xl"
                    >
                      <img src={img} alt={`${businessData.name} ${i + 3}`} className="w-full h-48 object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : businessData.images.length === 1 ? (
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={businessData.images[0]} alt={businessData.name} className="w-full h-96 object-cover" />
              </div>
            ) : (
              <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">{(aiContent.services?.[0] as any)?.icon || "🏢"}</span>
              </div>
            )}

            {/* Floating stats card */}
            {businessData.rating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{businessData.rating}</span>
                  </div>
                  <div>
                    <div className="text-yellow-500 text-xs">{"★".repeat(5)}</div>
                    <span className="text-xs text-foreground/60">{businessData.reviewsCount} reviews</span>
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
