"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { aiContent } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faq = (aiContent as any).faq;
  if (!faq || !faq.items) return null;

  return (
    <section id="faq" className="section-padding bg-card/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index }}
      className="rounded-xl border border-border bg-background overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-card/50 transition-colors"
      >
        <span className="font-semibold text-sm md:text-base pr-4">{item.question}</span>
        <ChevronDown
          size={20}
          className={cn(
            "flex-shrink-0 text-primary transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <p className="text-sm text-foreground/70 leading-relaxed">{item.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
