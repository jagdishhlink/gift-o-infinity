"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { businessData } from "@/data/site-data";

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = businessData.images || [];
  if (images.length === 0) return null;

  const displayImages = images.slice(0, 6);
  const hasMore = images.length > 6;

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Our Work
          </h2>
        </motion.div>

        {/* Masonry Grid — max 6 images */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {displayImages.map((img: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * i }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setLightboxImage(img)}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`${businessData.name} gallery ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              View All Photos ({images.length})
              <ArrowRight size={18} />
            </a>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={20} className="text-white" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}
