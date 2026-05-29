"use client";

import { motion } from "framer-motion";
import { aiContent, siteConfig } from "@/data/site-data";

export function ServicesSection() {
  const layout = siteConfig.layout;
  const services = aiContent.services || [];

  if (services.length === 0) return null;

  // Map all 15 layout styles to 4 service variants
  if (["bento-grid", "asymmetrical-modern", "editorial-magazine", "dark-futuristic", "cyberpunk", "glassmorphism"].includes(layout)) return <ServicesCards services={services} />;
  if (["minimal-luxury", "scandinavian", "apple-minimal", "organic-fluid"].includes(layout)) return <ServicesList services={services} />;
  if (["neo-brutalism", "retro-vintage", "interactive-3d"].includes(layout)) return <ServicesNumbered services={services} />;
  return <ServicesGrid services={services} />;
}

function ServicesGrid({ services }: { services: any[] }) {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionHeader title="Our Services" subtitle="What We Offer" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover-lift group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCards({ services }: { services: any[] }) {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionHeader title="Our Services" subtitle="What We Offer" />
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border flex items-start gap-5 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">{s.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-foreground/50 text-sm">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesList({ services }: { services: any[] }) {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">What We Offer</h2>
        </div>
        <div className="divide-y divide-border">
          {services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="py-8 flex items-center gap-6 group hover:pl-4 transition-all">
              <span className="text-3xl">{s.icon}</span>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold">{s.title}</h3>
                <p className="text-foreground/40 text-sm mt-1">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesNumbered({ services }: { services: any[] }) {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span className="text-foreground/60 uppercase tracking-widest text-xs">Services</span>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-6 group">
              <div className="text-4xl font-heading font-bold text-primary/30 group-hover:text-primary transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-foreground/50 text-sm">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-card border border-border text-xs font-semibold uppercase tracking-widest text-primary mb-4">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-heading font-bold">{title}</h2>
    </div>
  );
}
