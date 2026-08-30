'use client';

import { useState, useEffect, useCallback } from 'react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTA } from '@/components/cta';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((p) => (p === null ? null : (p + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, next, prev]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33914525/pexels-photo-33914525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Royal Crescent Banquet gallery"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Our Gallery
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              Moments of <span className="gold-gradient-text">Beauty & Joy</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              A glimpse into the celebrations, decor, and dining experiences we have crafted for our guests.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Browse by Category"
              title="Explore Our Celebrations"
            />
          </Reveal>

          {/* Filters */}
          <Reveal delay={1} className="mt-8 flex flex-wrap justify-center gap-2.5">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-all',
                  active === cat
                    ? 'bg-gradient-to-r from-gold-light to-gold-dark text-charcoal shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
                )}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) + 1 as 1 | 2 | 3}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block overflow-hidden rounded-2xl aspect-[4/3] w-full"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase tracking-wider text-gold-light font-semibold">
                      {item.category}
                    </span>
                    <p className="text-sm text-cream/90 mt-0.5 line-clamp-1">{item.alt}</p>
                  </div>
                  <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/60 text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm animate-fade-in p-4"
          onClick={closeLightbox}
        >
          <button
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 sm:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 sm:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[78vh] w-auto rounded-xl shadow-2xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="text-xs uppercase tracking-wider text-gold-light font-semibold">
                {filtered[lightbox].category}
              </span>
              <p className="text-cream/80 text-sm mt-1">{filtered[lightbox].alt}</p>
            </figcaption>
          </figure>
        </div>
      )}

      <CTA />
    </>
  );
}
