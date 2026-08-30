import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Crown, Sparkles } from 'lucide-react';
import { Package } from '@/lib/data';
import { cn } from '@/lib/utils';

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Card
      id={pkg.id}
      className={cn(
        'relative scroll-mt-24 overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1',
        pkg.popular
          ? 'border-gold shadow-xl shadow-gold/10 hover:shadow-2xl hover:shadow-gold/20'
          : 'border-border hover:shadow-xl hover:shadow-charcoal/10'
      )}
    >
      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold-light to-gold-dark text-charcoal text-center text-xs font-semibold py-2 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Crown className="h-3.5 w-3.5" /> Most Popular
        </div>
      )}
      <CardContent className={cn('p-7 flex flex-col gap-5', pkg.popular && 'pt-12')}>
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-1.5 text-gold-dark text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5" /> {pkg.tagline}
          </span>
          <h3 className="font-display text-2xl font-bold text-charcoal">{pkg.name}</h3>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-4xl font-bold text-charcoal">{pkg.pricePerPerson}</span>
          <span className="text-sm text-muted-foreground">/person</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {pkg.highlights.map((h) => (
            <span key={h} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
              {h}
            </span>
          ))}
        </div>
        <ul className="flex flex-col gap-2.5 pt-1">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <Check className="h-4 w-4 text-gold-dark mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className={cn(
            'mt-2 font-semibold',
            pkg.popular
              ? 'bg-gradient-to-r from-gold-light to-gold-dark text-charcoal hover:shadow-lg hover:shadow-gold/30'
              : 'bg-charcoal text-cream hover:bg-charcoal/90'
          )}
        >
          <Link href="/booking">Book This Package</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
