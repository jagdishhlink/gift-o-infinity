"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { businessData } from "@/data/site-data";

const socialIcons: Record<string, any> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
};

export function Footer() {
  const year = new Date().getFullYear();
  const socials = businessData.socials || {};

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            {businessData.logo ? (
              <img src={businessData.logo} alt={businessData.name} className="h-10 w-auto" />
            ) : (
              <h3 className="text-2xl font-heading font-bold gradient-text">
                {businessData.name}
              </h3>
            )}
            <p className="text-foreground/60 text-sm leading-relaxed">
              {businessData.description || `${businessData.category} — Trusted by our community.`}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Services", "Gallery", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              {businessData.address && (
                <div className="flex items-start gap-3 text-sm text-foreground/60">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>{businessData.address}</span>
                </div>
              )}
              {businessData.phone && (
                <a href={`tel:${businessData.phone}`} className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                  <Phone size={16} className="flex-shrink-0 text-primary" />
                  <span>{businessData.phone}</span>
                </a>
              )}
              {businessData.email && (
                <a href={`mailto:${businessData.email}`} className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                  <Mail size={16} className="flex-shrink-0 text-primary" />
                  <span>{businessData.email}</span>
                </a>
              )}
              {businessData.openingHours && (
                <div className="flex items-start gap-3 text-sm text-foreground/60">
                  <Clock size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>{businessData.openingHours}</span>
                </div>
              )}
            </div>
          </div>

          {/* Social + Map */}
          <div className="space-y-4">
            {Object.entries(socials).some(([platform, url]) => socialIcons[platform] && url) && (
              <>
                <h4 className="font-heading font-semibold text-lg">Follow Us</h4>
                <div className="flex gap-3">
                  {Object.entries(socials).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!Icon || !url) return null;
                    return (
                      <a
                        key={platform}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        aria-label={platform}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </>
            )}
            {businessData.rating && (
              <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">{businessData.rating}</span>
                  <div>
                    <div className="text-yellow-500 text-sm">{"★".repeat(Math.round(parseFloat(businessData.rating)))}</div>
                    <span className="text-xs text-foreground/50">{businessData.reviewsCount} reviews</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © {year} {businessData.name}. All rights reserved.
          </p>
          <a
            href={businessData.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </footer>
  );
}
