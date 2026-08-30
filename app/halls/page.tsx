import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTA } from '@/components/cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Tag, Check, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { halls } from '@/lib/data';

export default function HallsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/30311728/pexels-photo-30311728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Luxurious ballroom at Royal Crescent Banquet"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Our Venues
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              Halls Crafted for <span className="gold-gradient-text">Grand Celebrations</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              Three signature venues, each with its own character — from the magnificent Grand Ballroom to
              our enchanting open-air Garden Venue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Halls detail */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {halls.map((hall, i) => (
            <div
              key={hall.id}
              id={hall.id}
              className={`scroll-mt-24 grid gap-10 lg:grid-cols-2 items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={hall.image}
                      alt={hall.name}
                      className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -top-5 -left-5 hidden sm:flex flex-col items-center bg-gradient-to-br from-gold-light to-gold-dark text-charcoal rounded-2xl px-5 py-4 shadow-xl">
                    <span className="font-display text-2xl font-bold leading-none">{hall.capacityNum}</span>
                    <span className="text-[10px] uppercase tracking-wider mt-1">Guests</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={1} className="flex flex-col gap-5">
                <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-dark">
                  {hall.tagline}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">{hall.name}</h2>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-charcoal">
                    <Users className="h-4 w-4 text-gold-dark" /> {hall.capacity}
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-charcoal">
                    <Tag className="h-4 w-4 text-gold-dark" /> Starting from {hall.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{hall.description}</p>
                <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
                  {hall.facilities.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-gold-dark mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <Button asChild className="bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold hover:shadow-lg hover:shadow-gold/30">
                    <Link href="/booking">Book This Hall</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold/40 text-gold-dark hover:bg-gold/10">
                    <Link href="/packages">View Packages <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-24 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Compare Halls"
              title="Find the Perfect Venue for Your Event"
              description="A quick comparison to help you choose the hall that best fits your celebration."
            />
          </Reveal>
          <Reveal delay={1} className="mt-12 overflow-x-auto">
            <Card className="rounded-2xl overflow-hidden min-w-[640px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-cream">
                    <th className="text-left p-4 font-display font-semibold">Feature</th>
                    {halls.map((h) => (
                      <th key={h.id} className="text-center p-4 font-display font-semibold text-gold-light">
                        {h.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-card">
                    <td className="p-4 font-medium text-charcoal flex items-center gap-2">
                      <Users className="h-4 w-4 text-gold-dark" /> Capacity
                    </td>
                    {halls.map((h) => (
                      <td key={h.id} className="text-center p-4">{h.capacity}</td>
                    ))}
                  </tr>
                  <tr className="bg-secondary/30">
                    <td className="p-4 font-medium text-charcoal flex items-center gap-2">
                      <Tag className="h-4 w-4 text-gold-dark" /> Starting Price
                    </td>
                    {halls.map((h) => (
                      <td key={h.id} className="text-center p-4 font-semibold">{h.price}</td>
                    ))}
                  </tr>
                  <tr className="bg-card">
                    <td className="p-4 font-medium text-charcoal flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gold-dark" /> Setting
                    </td>
                    <td className="text-center p-4">Indoor Grand</td>
                    <td className="text-center p-4">Indoor Elegant</td>
                    <td className="text-center p-4">Open-Air Garden</td>
                  </tr>
                  <tr className="bg-secondary/30">
                    <td className="p-4 font-medium text-charcoal">Best For</td>
                    <td className="text-center p-4">Large Weddings, Galas</td>
                    <td className="text-center p-4">Mehndi, Engagement</td>
                    <td className="text-center p-4">Daytime, Intimate</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
