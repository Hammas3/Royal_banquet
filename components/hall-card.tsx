import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Tag, ArrowRight } from 'lucide-react';
import { Hall } from '@/lib/data';

export function HallCard({ hall }: { hall: Hall }) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-2xl hover:shadow-charcoal/10 transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={hall.image}
          alt={hall.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-cream">{hall.name}</h3>
            <p className="text-sm text-gold-light font-body">{hall.tagline}</p>
          </div>
        </div>
        <span className="absolute top-4 right-4 rounded-full bg-gold/95 text-charcoal text-xs font-semibold px-3 py-1.5 shadow-md">
          {hall.price}
        </span>
      </div>
      <CardContent className="p-6 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{hall.description}</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1.5 text-charcoal font-medium">
            <Users className="h-4 w-4 text-gold-dark" /> {hall.capacity}
          </span>
          <span className="flex items-center gap-1.5 text-charcoal font-medium">
            <Tag className="h-4 w-4 text-gold-dark" /> From {hall.price}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {hall.facilities.slice(0, 3).map((f) => (
            <span key={f} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
              {f}
            </span>
          ))}
          <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            +{hall.facilities.length - 3} more
          </span>
        </div>
        <div className="flex gap-2 pt-1">
          <Button asChild className="flex-1 bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold hover:shadow-lg hover:shadow-gold/30">
            <Link href="/booking">Book Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-gold/40 text-gold-dark hover:bg-gold/10">
            <Link href={`/halls#${hall.id}`}>
              Details <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
