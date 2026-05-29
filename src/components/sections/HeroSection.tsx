"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ArrowRight, Phone, MapPin, ChevronDown } from "lucide-react";
import { businessData, aiContent, siteConfig } from "@/data/site-data";
import { useRef } from "react";

export function HeroSection() {
  const layout = siteConfig.layout;
  const variant = (siteConfig as any).heroVariant || "centered-typography";

  if (["split-screen", "left-aligned-content", "floating-cards"].includes(variant)) return <HeroAsymmetric />;
  if (["large-typography-only", "centered-typography", "animated-statistics"].includes(variant)) return <HeroEditorial />;
  return <HeroImmersive />;
}

function HeroAsymmetric() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center pt-20 pb-12 md:pt-0 md:pb-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-accent/[0.03] to-transparent" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {businessData.rating && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span>{businessData.rating}</span>
                  <span className="text-foreground/40">({businessData.reviewsCount})</span>
                </div>
              )}
              <span className="px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-xs font-medium text-primary">
                {businessData.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.25rem] leading-[1.1] md:text-5xl lg:text-6xl font-heading font-bold tracking-tight"
            >
              {aiContent.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-foreground/60 max-w-lg leading-relaxed"
            >
              {aiContent.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all active:scale-[0.97]">
                {aiContent.ctaButtonText || "Get Started"}
                <ArrowRight size={15} />
              </a>
              {businessData.phone && (
                <a href={`tel:${businessData.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border rounded-xl font-semibold text-sm hover:bg-card transition-all active:scale-[0.97]">
                  <Phone size={14} />
                  {businessData.phone}
                </a>
              )}
            </motion.div>
          </div>

          <motion.div style={{ y }} className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {businessData.images[0] ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/10"
                >
                  <img src={businessData.images[0]} alt={businessData.name} className="w-full h-full object-cover" />
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <InfoCard icon={<MapPin size={18} />} label="Location" value={businessData.address || ""} delay={0.3} />
                  {businessData.phone && <InfoCard icon={<Phone size={18} />} label="Call us" value={businessData.phone} delay={0.4} />}
                  {businessData.rating && <InfoCard icon={<Star size={18} />} label="Rating" value={`${businessData.rating} stars`} delay={0.5} />}
                </div>
              )}

              {businessData.rating && businessData.images[0] && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -left-6 bottom-8 bg-background border border-border rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className={i < Math.round(parseFloat(businessData.rating)) ? "text-yellow-500 fill-yellow-500" : "text-foreground/15"} />
                      ))}
                    </div>
                    <span className="text-xs font-bold">{businessData.rating}</span>
                  </div>
                  <p className="text-[10px] text-foreground/50 mt-0.5">{businessData.reviewsCount} reviews</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroEditorial() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-16 md:pb-20 pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full opacity-[0.07] blur-[80px] bg-primary"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full opacity-[0.05] blur-[80px] bg-accent"
          animate={{ scale: [1, 0.9, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 md:px-8 relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 text-sm text-foreground/50">
            <span className="w-8 h-px bg-primary" />
            <span className="uppercase tracking-widest text-xs font-medium text-primary">{businessData.category}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[2.5rem] leading-[1.05] md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold tracking-tight max-w-5xl"
        >
          {aiContent.tagline}
        </motion.h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-foreground/55 max-w-md leading-relaxed"
          >
            {aiContent.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all active:scale-[0.97]">
              {aiContent.ctaButtonText || "Get Started"}
              <ArrowRight size={15} />
            </a>
            {businessData.phone && (
              <a href={`tel:${businessData.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border rounded-xl font-semibold text-sm hover:bg-card transition-all active:scale-[0.97]">
                <Phone size={14} />
                Call Now
              </a>
            )}
          </motion.div>
        </div>

        {businessData.rating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 md:mt-14 flex items-center gap-4 pt-6 border-t border-border/50"
          >
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < Math.round(parseFloat(businessData.rating)) ? "text-yellow-500 fill-yellow-500" : "text-foreground/15"} />
              ))}
            </div>
            <span className="text-sm font-semibold">{businessData.rating}</span>
            <span className="text-xs text-foreground/40">{businessData.reviewsCount} reviews on Google</span>
          </motion.div>
        )}
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <ChevronDown size={18} className="text-foreground/25" />
      </motion.div>
    </section>
  );
}

function HeroImmersive() {
  const hasImage = businessData.images.length > 0;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-12 md:pt-0 md:pb-0">
      {hasImage && (
        <div className="absolute inset-0">
          <img src={businessData.images[0]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
      )}

      {!hasImage && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, var(--color-text) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
      )}

      <div className="relative w-full max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {businessData.category}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[2.25rem] leading-[1.1] md:text-5xl lg:text-6xl font-heading font-bold tracking-tight"
        >
          {aiContent.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 md:mt-6 text-base md:text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed"
        >
          {aiContent.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all active:scale-[0.97]">
            {aiContent.ctaButtonText || "Get Started"}
            <ArrowRight size={15} />
          </a>
          <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-background/80 backdrop-blur-sm border border-border rounded-xl font-semibold text-sm hover:bg-card transition-all active:scale-[0.97]">
            View Services
          </a>
        </motion.div>

        {businessData.rating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border"
          >
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className={i < Math.round(parseFloat(businessData.rating)) ? "text-yellow-500 fill-yellow-500" : "text-foreground/15"} />
              ))}
            </div>
            <span className="text-xs font-bold">{businessData.rating}</span>
            <span className="text-[11px] text-foreground/40">({businessData.reviewsCount})</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, delay }: { icon: React.ReactNode; label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="p-5 rounded-xl bg-card border border-border"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{icon}</div>
        <div className="min-w-0">
          <p className="text-[11px] text-foreground/45 uppercase tracking-wider font-medium">{label}</p>
          <p className="text-sm font-medium mt-0.5 truncate">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
