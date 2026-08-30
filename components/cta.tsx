'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, defaultWhatsAppMessage } from '@/lib/data';
import { cn } from '@/lib/utils';

type CTAProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function CTA({
  title = 'Ready to Plan Your Perfect Event?',
  description = 'Let our team bring your vision to life. Book a consultation today and secure your date at Royal Crescent Banquet.',
  className,
}: CTAProps) {
  return (
    <section className={cn('py-16 sm:py-20', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-14 sm:px-12 sm:py-16 text-center">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/14646749/pexels-photo-14646749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/85 to-charcoal/95" />
          <div className="relative z-10 flex flex-col items-center gap-5">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream max-w-2xl text-balance">
              {title}
            </h2>
            <p className="text-cream/70 max-w-xl text-base sm:text-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold hover:shadow-lg hover:shadow-gold/30"
              >
                <Link href="/booking">Book Your Event</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-charcoal"
              >
                <a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
