"use client";

import { businessData, aiContent, siteConfig } from "@/data/site-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

const SECTION_MAP: Record<string, React.ComponentType> = {
  about: AboutSection,
  services: ServicesSection,
  gallery: GallerySection,
  pricing: PricingSection,
  testimonials: TestimonialsSection,
  faq: FAQSection,
  booking: BookingSection,
  contact: ContactSection,
};

export default function HomePage() {
  const sections = siteConfig.sections;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <HeroSection />

        {sections.map((sectionName: string) => {
          const Component = SECTION_MAP[sectionName];
          if (!Component) return null;
          if (sectionName === "pricing" && !(aiContent as any).pricing) return null;
          if (sectionName === "faq" && !(aiContent as any).faq) return null;
          if (sectionName === "booking" && !(aiContent as any).booking) return null;
          return <Component key={sectionName} />;
        })}

        <CTASection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <StickyMobileCTA />
    </>
  );
}
