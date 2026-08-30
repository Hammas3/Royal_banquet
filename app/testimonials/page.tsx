import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTA } from '@/components/cta';
import { TestimonialCard } from '@/components/testimonial-card';
import { StarRating } from '@/components/star-rating';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7777910/pexels-photo-7777910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Happy couple at Royal Crescent Banquet"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Testimonials
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              Stories from Our <span className="gold-gradient-text">Cherished Guests</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              The words of our couples and families mean the world to us. Here are some of their stories.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="py-16 sm:py-20 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/17023018/pexels-photo-17023018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Reveal>
            <Quote className="h-12 w-12 text-gold/50 mx-auto" />
            <p className="font-display text-2xl sm:text-3xl text-cream leading-relaxed mt-6 text-balance">
              &ldquo;Royal Crescent Banquet turned our dream wedding into reality. Every detail was handled
              with such care and professionalism — we could not have asked for a more perfect day.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-2 mt-6">
              <StarRating rating={5} size="lg" />
              <p className="text-gold-light font-semibold mt-1">Ayesha &amp; Hamza Khan</p>
              <p className="text-cream/60 text-sm">Wedding — Grand Ballroom</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* All testimonials */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Reviews"
              title="What Our Guests Say"
              description="Real experiences from couples, families, and organizations who celebrated with us."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) + 1 as 1 | 2 | 3}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Write Your Own Story?"
        description="Join the countless families who have celebrated their most precious moments at Royal Crescent Banquet."
      />
    </>
  );
}
