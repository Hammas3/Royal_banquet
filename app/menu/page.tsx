import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTA } from '@/components/cta';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed } from 'lucide-react';
import { menuItems } from '@/lib/data';

const categories = ['Main Course', 'BBQ', 'Breads', 'Sides', 'Desserts', 'Beverages'];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7245469/pexels-photo-7245469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Pakistani wedding feast"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Our Menu
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              Authentic Pakistani <span className="gold-gradient-text">Wedding Cuisine</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              A feast of flavors prepared by our master chefs — from fragrant biryani to sizzling BBQ and
              traditional desserts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Menu by category */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {categories.map((cat) => {
            const items = menuItems.filter((m) => m.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-light/20 to-gold/10 text-gold-dark">
                      <UtensilsCrossed className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">{cat}</h2>
                    <span className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
                  </div>
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, i) => (
                    <Reveal key={item.id} delay={(i % 3) + 1 as 1 | 2 | 3}>
                      <Card className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:shadow-charcoal/5 hover:-translate-y-1 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                        </div>
                        <CardContent className="p-5 flex flex-col gap-2">
                          <h3 className="font-display text-lg font-bold text-charcoal">{item.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-gold/30 bg-card p-6 sm:p-8 text-center max-w-3xl mx-auto">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our menu is fully customizable. Special dietary requests, additional dishes, and live cooking
                stations are available on request. Menu items may vary based on the selected package and
                seasonal availability.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Hungry for More? Let's Plan Your Feast"
        description="Contact our catering team to customize a menu that delights your guests and fits your celebration."
      />
    </>
  );
}
