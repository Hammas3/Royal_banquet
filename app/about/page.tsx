import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTA } from '@/components/cta';
import { Crown, Heart, Award, Users, Sparkles, Clock } from 'lucide-react';
import { BRAND, stats } from '@/lib/data';

const values = [
  {
    icon: Crown,
    title: 'Royal Hospitality',
    description: 'We treat every guest like royalty. From arrival to departure, our dedicated staff ensures a seamless, luxurious experience.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every celebration is unique. Our event planners work closely with you to bring your specific vision to life, down to the smallest detail.',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'From premium ingredients to imported florals, we never compromise on the quality that makes your event extraordinary.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description: 'It is the little things that make a big difference. Our team obsesses over every element so you can enjoy your day worry-free.',
  },
];

const milestones = [
  { year: '2010', text: 'Royal Crescent Banquet opens its doors with the Grand Ballroom.' },
  { year: '2014', text: 'The Royal Hall is added to host intimate and mid-size celebrations.' },
  { year: '2018', text: 'Garden Venue launches, bringing open-air celebrations to our portfolio.' },
  { year: '2021', text: 'Awarded "Best Wedding Venue in Lahore" by Event Planners Guild.' },
  { year: '2026', text: 'Celebrating 2,500+ events and 1,800+ happy couples hosted.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12689014/pexels-photo-12689014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Royal Crescent Banquet elegant interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              A Legacy of <span className="gold-gradient-text">Elegant Celebrations</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              For over 15 years, {BRAND.name} has been the preferred destination for couples and families
              celebrating life&apos;s most precious moments in Lahore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/17023014/pexels-photo-17023014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Elegant wedding reception at Royal Crescent"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-charcoal text-cream rounded-2xl px-6 py-5 shadow-xl border border-gold/30">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-gold" />
                  <div>
                    <div className="font-display text-2xl font-bold text-gold-light">15+ Years</div>
                    <div className="text-xs text-cream/70">of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1} className="flex flex-col gap-5">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Welcome to Royal Crescent
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal text-balance leading-tight">
              Where Tradition Meets Modern Luxury
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2010, {BRAND.name} began with a simple vision: to create a venue where Pakistani
              families could celebrate their most cherished occasions in an atmosphere of refined elegance
              and warm hospitality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we are proud to be one of Lahore&apos;s most trusted wedding and event venues, having hosted
              over 2,500 events ranging from grand weddings and walimas to intimate mehndi nights and corporate
              galas. Our three signature halls, world-class catering, and dedicated event planning team ensure
              that every celebration is as unique as the people it honors.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-secondary/40 px-4 py-3">
                  <div className="font-display text-2xl font-bold text-gold-dark">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title="What Sets Us Apart"
              description="The principles that guide every event we host and every guest we welcome."
            />
          </Reveal>
          <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) + 1 as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 text-center hover:shadow-xl hover:border-gold/40 transition-all duration-300">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-light/20 to-gold/10 text-gold-dark">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-charcoal mt-4">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Milestones Through the Years"
              description="A look at the moments that shaped Royal Crescent Banquet into what it is today."
            />
          </Reveal>
          <div className="relative mt-14 max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent sm:-translate-x-1/2" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={1}>
                  <div
                    className={`relative flex items-center gap-6 ${
                      i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
                    }`}
                  >
                    <div className="hidden sm:block sm:w-1/2" />
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 z-10">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-charcoal text-xs font-bold ring-4 ring-background">
                        <Users className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="pl-14 sm:pl-0 sm:w-1/2">
                      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-gold/40 transition-all">
                        <span className="font-display text-2xl font-bold text-gold-dark">{m.year}</span>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{m.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Come Experience the Royal Difference"
        description="Visit our halls and discover why so many families choose Royal Crescent Banquet for their most important celebrations."
      />
    </>
  );
}
