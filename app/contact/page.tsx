'use client';

import { useState } from 'react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { BRAND, buildWhatsAppUrl, defaultWhatsAppMessage } from '@/lib/data';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: BRAND.whatsapp,
    href: buildWhatsAppUrl(defaultWhatsAppMessage),
  },
  {
    icon: Phone,
    label: 'Phone',
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: BRAND.address,
    href: '#map',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) {
      next.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) next.message = 'Please enter a message';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/19569865/pexels-photo-19569865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Royal Crescent Banquet contact"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              We&apos;d Love to <span className="gold-gradient-text">Hear From You</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              Have a question or want to schedule a tour? Reach out and our team will respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <Reveal key={info.label} delay={(i % 4) + 1 as 1 | 2 | 3 | 4}>
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:border-gold/40 transition-all duration-300 h-full"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-light/20 to-gold/10 text-gold-dark group-hover:from-gold-light group-hover:to-gold-dark group-hover:text-charcoal transition-all duration-300">
                    <info.icon className="h-7 w-7" />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {info.label}
                  </span>
                  <span className="text-sm font-medium text-charcoal break-all">{info.value}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + hours */}
      <section className="py-12 sm:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card shadow-xl p-6 sm:p-10">
              <SectionHeading
                align="left"
                eyebrow="Send a Message"
                title="Contact Form"
                description="Fill out the form below and we'll get back to you shortly."
              />
              <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="c-name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="c-name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      className={cn(errors.name && 'border-destructive focus-visible:ring-destructive')}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="c-phone" className="text-sm font-medium">
                      Phone (optional)
                    </Label>
                    <Input
                      id="c-phone"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="c-email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="yourname@email.com"
                    aria-invalid={!!errors.email}
                    className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="c-message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="c-message"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="How can we help you?"
                    rows={5}
                    aria-invalid={!!errors.message}
                    className={cn(errors.message && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold hover:shadow-lg hover:shadow-gold/30"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
                {sent && (
                  <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                    <CheckCircle2 className="h-4 w-4" /> Thank you! Your message has been sent. We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          <Reveal delay={1} className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-card shadow-sm p-6 sm:p-8">
              <span className="flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-[0.2em] text-gold-dark">
                <Clock className="h-4 w-4" /> Operating Hours
              </span>
              <h3 className="font-display text-xl font-bold text-charcoal mt-3">When to Reach Us</h3>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Monday – Friday</span>
                  <span className="font-medium text-charcoal">10:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Saturday – Sunday</span>
                  <span className="font-medium text-charcoal">9:00 AM – 12:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Public Holidays</span>
                  <span className="font-medium text-charcoal">By Appointment</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gold/30 bg-charcoal p-6 sm:p-8 text-center">
              <h3 className="font-display text-xl font-bold text-cream">Prefer to Chat Instantly?</h3>
              <p className="text-sm text-cream/70 mt-2">
                Message us directly on WhatsApp for quick inquiries and booking assistance.
              </p>
              <a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="mt-4 block">
                <Button className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-16 sm:py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Find Us"
              title="Visit Royal Crescent Banquet"
              description="We're centrally located in Gulberg III, Lahore — easily accessible from across the city."
            />
          </Reveal>
          <Reveal delay={1} className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <iframe
                title="Royal Crescent Banquet location map"
                src="https://www.google.com/maps?q=Gulberg+III+Lahore+Pakistan&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
