"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aiContent, siteConfig } from "@/data/site-data";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const layout = siteConfig.layout;
  const services = aiContent.services || [];

  if (services.length === 0) return null;

  if (["bento-grid", "asymmetrical", "editorial", "futuristic", "glassmorphism", "dark-premium"].includes(layout)) return <ServicesCards services={services} isInView={isInView} sectionRef={ref} />;
  if (["minimal", "swiss-typography", "apple-inspired", "organic-shapes", "elegant"].includes(layout)) return <ServicesList services={services} isInView={isInView} sectionRef={ref} />;
  if (["brutalist", "retro", "high-contrast", "monochrome"].includes(layout)) return <ServicesNumbered services={services} isInView={isInView} sectionRef={ref} />;
  return <ServicesGrid services={services} isInView={isInView} sectionRef={ref} />;
}

interface ServiceProps {
  services: any[];
  isInView: boolean;
  sectionRef: React.RefObject<any>;
}

function ServicesGrid({ services, isInView, sectionRef }: ServiceProps) {
  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <SectionHeader isInView={isInView} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-7 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-2.5">{s.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCards({ services, isInView, sectionRef }: ServiceProps) {
  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <SectionHeader isInView={isInView} />
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-card border border-border flex items-start gap-5 hover:border-primary/20 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0 group-hover:bg-primary/15 transition-colors">
                {s.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-base mb-1.5">{s.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesList({ services, isInView, sectionRef }: ServiceProps) {
  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mb-14"
        >
          <p className="text-primary text-sm font-medium mb-3 tracking-wider uppercase">Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">What We Offer</h2>
        </motion.div>
        <div className="divide-y divide-border/60">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.06 }}
              className="group py-7 md:py-8 flex items-start gap-5 md:gap-6 hover:pl-2 transition-all duration-300"
            >
              <span className="text-2xl mt-1 shrink-0 group-hover:scale-110 transition-transform">{s.icon}</span>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold mb-1">{s.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesNumbered({ services, isInView, sectionRef }: ServiceProps) {
  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-2.5 h-2.5 bg-primary rounded-full" />
          <span className="text-foreground/60 uppercase tracking-widest text-xs font-medium">Our Services</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 md:gap-6 group"
            >
              <div className="text-3xl font-heading font-bold text-primary/20 group-hover:text-primary/60 transition-colors duration-300 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="border-l border-border/60 pl-5 md:pl-6 group-hover:border-primary/30 transition-colors">
                <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-14 md:mb-16"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-xs font-medium text-primary uppercase tracking-wider">Services</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">What We Offer</h2>
    </motion.div>
  );
}
