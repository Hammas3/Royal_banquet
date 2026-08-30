'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { HallCard } from '@/components/hall-card';
import { PackageCard } from '@/components/package-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { CTA } from '@/components/cta';
import {
  Users,
  Sparkles,
  UtensilsCrossed,
  Car,
  Heart,
  MapPin,
  MessageCircle,
  ArrowRight,
  Star,
  Crown,
} from 'lucide-react';
import {
  BRAND,
  halls,
  packages,
  testimonials,
  features,
  stats,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from '@/lib/data';

const iconMap = {
  Users,
  Sparkles,
  UtensilsCrossed,
  Car,
  Heart,
  MapPin,
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/14646749/pexels-photo-14646749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Royal Crescent Banquet grand ballroom"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal/85" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal/30 backdrop-blur-sm px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              <Crown className="h-3.5 w-3.5" /> {BRAND.name}
            </span>
          </Reveal>
          <Reveal delay={1} className="mt-6">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-cream leading-[1.1] text-balance max-w-4xl mx-auto">
              Celebrate Your Special Day{' '}
              <span className="gold-gradient-text">in Elegance</span>
            </h1>
          </Reveal>
          <Reveal delay={2} className="mt-5">
            <p className="font-body text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
              {BRAND.tagline}. A premier wedding and event venue in Lahore, Pakistan.
            </p>
          </Reveal>
          <Reveal delay={3} className="mt-9">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold hover:shadow-xl hover:shadow-gold/40 text-base h-12 px-8"
              >
                <Link href="/booking">Book Your Event</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold-light hover:bg-gold hover:text-charcoal text-base h-12 px-8 bg-charcoal/20 backdrop-blur-sm"
              >
                <a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={4} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-xl px-3 py-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gold-light">{s.value}</div>
                  <div className="text-xs text-cream/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A Venue Designed for Extraordinary Moments"
              description="From grand weddings to intimate gatherings, every detail is crafted to make your celebration truly unforgettable."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];
              return (
                <Reveal key={f.title} delay={(i % 3) + 1 as 1 | 2 | 3}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:shadow-xl hover:shadow-charcoal/5 hover:border-gold/40 transition-all duration-300">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-light/20 to-gold/10 text-gold-dark group-hover:from-gold-light group-hover:to-gold-dark group-hover:text-charcoal transition-all duration-300">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-charcoal mt-5">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Halls preview */}
      <section className="py-16 sm:py-24 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Venues"
              title="Three Signature Halls for Every Celebration"
              description="Whether you envision a grand ballroom affair or an open-air garden celebration, we have the perfect space for you."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {halls.map((hall, i) => (
              <Reveal key={hall.id} delay={(i % 3) + 1 as 1 | 2 | 3}>
                <HallCard hall={hall} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg" className="border-gold/40 text-gold-dark hover:bg-gold/10">
              <Link href="/halls">View All Halls <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Packages preview */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Catering Packages"
              title="Curated Packages for Every Budget"
              description="All-inclusive packages featuring authentic Pakistani wedding cuisine, elegant decor, and dedicated service."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={(i % 3) + 1 as 1 | 2 | 3}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="py-16 sm:py-24 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/17023018/pexels-photo-17023018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Testimonials"
              title="Cherished Moments, Shared Stories"
              description="Hear from couples and families who celebrated their most precious moments with us."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) + 1 as 1 | 2 | 3}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold-light hover:bg-gold hover:text-charcoal">
              <Link href="/testimonials">Read More Reviews <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
