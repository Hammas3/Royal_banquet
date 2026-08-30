import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTA } from '@/components/cta';
import { PackageCard } from '@/components/package-card';
import { UtensilsCrossed, Check } from 'lucide-react';
import { packages } from '@/lib/data';

const includedInAll = [
  'Catering by master chefs',
  'Stage decoration',
  'Welcome drinks',
  'Dessert selection',
  'Professional lighting & sound',
  'Dedicated service staff',
];

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/29486068/pexels-photo-29486068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Lavish buffet table at Royal Crescent Banquet"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Catering Packages
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              Packages for <span className="gold-gradient-text">Every Celebration</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              All-inclusive packages featuring authentic Pakistani wedding cuisine, elegant decor, and
              dedicated service — priced per person.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Choose Your Package"
              title="Silver, Gold, or Royal — Your Choice"
              description="Each package includes catering, decoration, seating, lighting, stage, welcome drinks, and dessert. Upgrade for premium add-ons."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 md:grid-cols-3 items-start">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={(i % 3) + 1 as 1 | 2 | 3}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-24 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Included in Every Package"
              title="The Royal Standard"
              description="No matter which package you choose, these essentials come standard with every booking."
            />
          </Reveal>
          <div className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {includedInAll.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1 as 1 | 2 | 3}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-gold/40 transition-colors">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-light/20 to-gold/10 text-gold-dark">
                    <UtensilsCrossed className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-charcoal">{item}</span>
                  <Check className="h-4 w-4 text-gold-dark ml-auto" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Not Sure Which Package to Choose?"
        description="Our team will help you select the perfect package based on your event type, guest count, and budget."
      />
    </>
  );
}
