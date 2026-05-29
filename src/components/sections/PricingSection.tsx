"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { aiContent } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricing = (aiContent as any).pricing;
  if (!pricing || !pricing.packages) return null;

  return (
    <section id="pricing" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our Packages
          </h2>
          {pricing.description && (
            <p className="text-foreground/60 max-w-xl mx-auto">{pricing.description}</p>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pricing.packages.map((pkg: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className={cn(
                "relative p-6 md:p-8 rounded-2xl border transition-all hover-lift",
                pkg.popular
                  ? "bg-primary/5 border-primary shadow-xl shadow-primary/10"
                  : "bg-background border-border hover:border-primary/30"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-bold mb-2">{pkg.name}</h3>
                {pkg.description && (
                  <p className="text-sm text-foreground/60 mb-4">{pkg.description}</p>
                )}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  {pkg.period && (
                    <span className="text-sm text-foreground/50">/{pkg.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {(pkg.features || []).map((feature: string, j: number) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={cn(
                  "block w-full text-center py-3 rounded-xl font-semibold transition-all",
                  pkg.popular
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25"
                    : "bg-card border border-border hover:border-primary hover:text-primary"
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
