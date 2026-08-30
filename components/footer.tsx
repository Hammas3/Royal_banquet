import Link from 'next/link';
import { Crown, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { BRAND } from '@/lib/data';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/booking', label: 'Booking' },
];

const hallLinks = [
  { href: '/halls#grand-ballroom', label: 'Grand Ballroom' },
  { href: '/halls#royal-hall', label: 'Royal Hall' },
  { href: '/halls#garden-venue', label: 'Garden Venue' },
];

const packageLinks = [
  { href: '/packages#silver', label: 'Silver Package' },
  { href: '/packages#gold', label: 'Gold Package' },
  { href: '/packages#royal', label: 'Royal Package' },
];

const serviceLinks = [
  { href: '/menu', label: 'Catering' },
  { href: '/gallery', label: 'Decoration' },
  { href: '/booking', label: 'Event Planning' },
  { href: '/contact', label: 'Consultation' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold text-gold">
                <Crown className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-cream">Royal Crescent</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-body">Banquet</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              {BRAND.tagline}. A premier wedding and event venue in Lahore, Pakistan, hosting unforgettable celebrations since 2010.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold/80 hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold mb-4">Halls & Packages</h4>
            <ul className="space-y-2.5">
              {hallLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              {packageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold mb-4">Get in Touch</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span className="text-cream/60">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="text-cream/60 hover:text-gold transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`https://wa.me/${BRAND.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  WhatsApp: {BRAND.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="text-cream/60 hover:text-gold transition-colors break-all">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            Crafted with elegance in Lahore, Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
