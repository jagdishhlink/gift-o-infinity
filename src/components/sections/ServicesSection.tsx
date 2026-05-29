"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { aiContent, siteConfig } from "@/data/site-data";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const services = aiContent.services || [];
  if (services.length === 0) return null;

  const layout = siteConfig.layout;

  if (["minimal", "swiss-typography", "apple-inspired", "elegant", "luxury"].includes(layout)) return <ServicesMinimal services={services} isInView={isInView} sectionRef={ref} />;
  if (["brutalist", "high-contrast", "monochrome", "retro", "editorial"].includes(layout)) return <ServicesEditorial services={services} isInView={isInView} sectionRef={ref} />;
  return <ServicesBento services={services} isInView={isInView} sectionRef={ref} />;
}

interface Props { services: any[]; isInView: boolean; sectionRef: React.RefObject<any>; }

function ServicesBento({ services, isInView, sectionRef }: Props) {
  return (
    <section id="services" className="py-20 md:py-28 px-5 md:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Our Services</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4">
            Get a quote <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`group relative p-6 md:p-7 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/15 transition-all duration-300 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{s.icon}</span>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-base mb-1.5 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesMinimal({ services, isInView, sectionRef }: Props) {
  return (
    <section id="services" className="py-20 md:py-28 px-5 md:px-8" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="mb-12 md:mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">What We Offer</h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-border/60">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className="group py-6 md:py-7 flex items-start gap-4 md:gap-5"
            >
              <span className="text-xl mt-0.5 shrink-0 group-hover:scale-110 transition-transform">{s.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading font-bold text-base">{s.title}</h3>
                  <ArrowRight size={14} className="text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 hidden sm:block" />
                </div>
                <p className="text-sm text-foreground/50 mt-1 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesEditorial({ services, isInView, sectionRef }: Props) {
  return (
    <section id="services" className="py-20 md:py-28 px-5 md:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Our Services</span>
          <div className="flex-1 h-px bg-border/60" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className="group flex gap-5"
            >
              <div className="text-2xl font-heading font-bold text-primary/15 group-hover:text-primary/40 transition-colors tabular-nums shrink-0 pt-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="border-l border-border/50 pl-5 group-hover:border-primary/25 transition-colors">
                <h3 className="font-heading font-bold text-base mb-1.5">{s.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
