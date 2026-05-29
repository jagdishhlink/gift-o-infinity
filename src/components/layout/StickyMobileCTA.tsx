"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone } from "lucide-react";
import { useState } from "react";
import { businessData, aiContent } from "@/data/site-data";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  if (!businessData.phone) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      <div className="bg-background/95 backdrop-blur-xl border-t border-border px-4 py-3 flex items-center gap-3">
        <a
          href={`tel:${businessData.phone.replace(/[^+\d]/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-semibold text-sm active:scale-[0.97] transition-transform"
        >
          <Phone size={15} />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-xl font-semibold text-sm active:scale-[0.97] transition-transform"
        >
          {aiContent.ctaButtonText || "Get Quote"}
        </a>
      </div>
    </motion.div>
  );
}
