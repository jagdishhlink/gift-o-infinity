"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { aiContent } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pricing = (aiContent as any).pricing;
  if (!pricing || !pricing.packages) return null;

  return (
    <section id="pricing" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Our Packages
          </h2>
          {pricing.description && (
            <p className="text-foreground/55 max-w-md mx-auto mt-4">{pricing.description}</p>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {pricing.packages.map((pkg: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className={cn(
                "relative p-6 md:p-7 rounded-2xl border transition-all duration-300",
                pkg.popular
                  ? "bg-primary/[0.03] border-primary/30 shadow-lg shadow-primary/5 ring-1 ring-primary/10"
                  : "bg-card border-border hover:border-primary/20"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-primary text-white text-[11px] font-semibold rounded-full tracking-wide uppercase">
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-heading font-bold mb-1.5">{pkg.name}</h3>
                {pkg.description && (
                  <p className="text-sm text-foreground/50">{pkg.description}</p>
                )}
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl md:text-4xl font-bold">{pkg.price}</span>
                {pkg.period && (
                  <span className="text-sm text-foreground/45">/{pkg.period}</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7">
                {(pkg.features || []).map((feature: string, j: number) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <div className="w-4.5 h-4.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-primary" />
                    </div>
                    <span className="text-foreground/65">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={cn(
                  "block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200",
                  pkg.popular
                    ? "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/15 hover:shadow-lg"
                    : "bg-background border border-border hover:border-primary/30 hover:text-primary"
                )}
              >
                {pkg.cta || "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
