import { Card, CardContent } from '@/components/ui/card';
import { StarRating } from '@/components/star-rating';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/lib/data';

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="h-full rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:shadow-charcoal/5 transition-shadow duration-300">
      <CardContent className="p-7 flex flex-col gap-4 h-full">
        <div className="flex items-center justify-between">
          <Quote className="h-9 w-9 text-gold/30" />
          <StarRating rating={t.rating} size="sm" />
        </div>
        <p className="text-foreground/80 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
        <div className="flex items-center gap-3 pt-3 border-t border-border">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-charcoal font-display font-bold text-lg">
            {t.initial}
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-charcoal text-sm">{t.name}</span>
            <span className="text-xs text-muted-foreground">{t.event}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
