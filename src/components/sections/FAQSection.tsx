"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { aiContent } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const faq = (aiContent as any).faq;
  if (!faq || !faq.items) return null;

  return (
    <section id="faq" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-card/30 pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/55 mt-4 max-w-md mx-auto">
            Everything you need to know. Can&apos;t find an answer? Reach out to us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.items.map((item: any, i: number) => (
            <FAQItem key={i} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, index, isInView }: { item: any; index: number; isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.05 * index }}
      className={cn(
        "rounded-xl border bg-background overflow-hidden transition-all duration-200",
        isOpen ? "border-primary/20 shadow-sm" : "border-border"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-sm md:text-base pr-4 group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <div className={cn(
          "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200",
          isOpen ? "bg-primary/10 text-primary" : "bg-card text-foreground/40"
        )}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-sm text-foreground/65 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
