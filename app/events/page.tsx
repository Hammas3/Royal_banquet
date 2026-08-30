import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTA } from '@/components/cta';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { events } from '@/lib/data';

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13834493/pexels-photo-13834493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Royal Crescent Banquet events"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Upcoming Events
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              Celebrations & <span className="gold-gradient-text">Showcases</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              Join us at our upcoming open houses, expos, and cultural nights — or host your own signature
              event at Royal Crescent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Events list */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What's Happening"
              title="Mark Your Calendar"
              description="From wedding expos to festive cultural nights, there's always something special happening at Royal Crescent."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 md:grid-cols-2">
            {events.map((ev, i) => (
              <Reveal key={ev.id} delay={(i % 2) + 1 as 1 | 2}>
                <Card className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-2xl hover:shadow-charcoal/10 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 text-charcoal text-xs font-semibold px-3 py-1">
                        <Tag className="h-3 w-3" /> {ev.type}
                      </span>
                      <h3 className="font-display text-xl font-bold text-cream mt-2">{ev.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col gap-3">
                    <span className="flex items-center gap-2 text-sm font-medium text-gold-dark">
                      <CalendarDays className="h-4 w-4" /> {ev.date}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ev.description}</p>
                    <Button asChild variant="outline" className="mt-2 border-gold/40 text-gold-dark hover:bg-gold/10 self-start">
                      <Link href="/booking">Reserve a Spot <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event types we host */}
      <section className="py-16 sm:py-24 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Events We Host"
              title="Every Occasion, Beautifully Celebrated"
              description="From weddings to corporate galas, we host a wide range of events with tailored packages and dedicated service."
            />
          </Reveal>
          <div className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              'Weddings',
              'Walima',
              'Mehndi',
              'Engagement',
              'Birthday Parties',
              'Corporate Events',
              'Anniversaries',
              'Cultural Nights',
            ].map((type, i) => (
              <Reveal key={type} delay={(i % 4) + 1 as 1 | 2 | 3 | 4}>
                <div className="rounded-xl border border-border bg-card p-5 text-center hover:border-gold/40 hover:shadow-md transition-all">
                  <span className="font-display text-base font-semibold text-charcoal">{type}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
