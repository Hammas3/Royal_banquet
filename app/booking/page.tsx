'use client';

import { useState } from 'react';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  CheckCircle2,
  CalendarDays,
  Users,
  Tag,
  Mail,
  Phone,
  User,
  MessageCircle,
  Sparkles,
  PartyPopper,
} from 'lucide-react';
import { BRAND, halls, packages, eventTypes, buildWhatsAppUrl } from '@/lib/data';
import { cn } from '@/lib/utils';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  hall: string;
  package: string;
  specialRequirements: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type BookingResult = {
  id: string;
  data: FormData;
};

const initialForm: FormData = {
  fullName: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  guests: '',
  hall: '',
  package: '',
  specialRequirements: '',
};

export default function BookingPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingResult | null>(null);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name';
    if (!form.phone.trim()) {
      next.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
      next.phone = 'Please enter a valid phone number';
    }
    if (!form.email.trim()) {
      next.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address';
    }
    if (!form.eventType) next.eventType = 'Please select an event type';
    if (!form.eventDate) {
      next.eventDate = 'Please select an event date';
    } else {
      const selected = new Date(form.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) next.eventDate = 'Event date cannot be in the past';
    }
    if (!form.guests) {
      next.guests = 'Please enter number of guests';
    } else {
      const n = Number(form.guests);
      if (isNaN(n) || n < 1) next.guests = 'Please enter a valid number';
      else if (n > 1600) next.guests = 'Maximum capacity is 1,600 guests';
    }
    if (!form.hall) next.hall = 'Please select a hall';
    if (!form.package) next.package = 'Please select a package';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setSubmitting(true);
    const id = `RCB-${Date.now().toString(36).toUpperCase().slice(-6)}-${Math.floor(
      Math.random() * 1000
    )
      .toString()
      .padStart(3, '0')}`;
    setTimeout(() => {
      setSubmitting(false);
      setConfirmation({ id, data: form });
      setForm(initialForm);
    }, 700);
  };

  const buildConfirmationMessage = (id: string, data: FormData) => {
    const hallName = halls.find((h) => h.id === data.hall)?.name || data.hall;
    const pkgName = packages.find((p) => p.id === data.package)?.name || data.package;
    return [
      `*Booking Confirmation — Royal Crescent Banquet*`,
      ``,
      `Booking ID: ${id}`,
      `Customer Name: ${data.fullName}`,
      `Event Type: ${data.eventType}`,
      `Event Date: ${data.eventDate}`,
      `Number of Guests: ${data.guests}`,
      `Hall: ${hallName}`,
      `Package: ${pkgName}`,
      ``,
      `Please confirm my booking. Thank you!`,
    ].join('\n');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12688995/pexels-photo-12688995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Book your event at Royal Crescent Banquet"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">
              Reserve Your Date
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 text-balance">
              Book Your <span className="gold-gradient-text">Special Event</span>
            </h1>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mt-5">
              Fill out the form below and our team will confirm your booking. A confirmation with your booking
              ID will be generated instantly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card shadow-xl p-6 sm:p-10 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  <Sparkles className="h-3.5 w-3.5" /> Booking Form
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                  Tell Us About Your Event
                </h2>
                <p className="text-sm text-muted-foreground">
                  All fields are required. We will get back to you within 24 hours.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fullName" className="flex items-center gap-1.5 text-sm font-medium">
                    <User className="h-3.5 w-3.5 text-gold-dark" /> Full Name
                  </Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    placeholder="e.g. Ahmed Khan"
                    aria-invalid={!!errors.fullName}
                    data-error={!!errors.fullName}
                    className={cn(errors.fullName && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="flex items-center gap-1.5 text-sm font-medium">
                    <Phone className="h-3.5 w-3.5 text-gold-dark" /> Phone
                  </Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="e.g. 0317 3813148"
                    aria-invalid={!!errors.phone}
                    data-error={!!errors.phone}
                    className={cn(errors.phone && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="email" className="flex items-center gap-1.5 text-sm font-medium">
                    <Mail className="h-3.5 w-3.5 text-gold-dark" /> Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="e.g. yourname@email.com"
                    aria-invalid={!!errors.email}
                    data-error={!!errors.email}
                    className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                {/* Event Type */}
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium">Event Type</Label>
                  <Select value={form.eventType} onValueChange={(v) => update('eventType', v)}>
                    <SelectTrigger
                      aria-invalid={!!errors.eventType}
                      data-error={!!errors.eventType}
                      className={cn(errors.eventType && 'border-destructive')}
                    >
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.eventType && <p className="text-xs text-destructive">{errors.eventType}</p>}
                </div>

                {/* Event Date */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="eventDate" className="flex items-center gap-1.5 text-sm font-medium">
                    <CalendarDays className="h-3.5 w-3.5 text-gold-dark" /> Event Date
                  </Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={(e) => update('eventDate', e.target.value)}
                    aria-invalid={!!errors.eventDate}
                    data-error={!!errors.eventDate}
                    className={cn(errors.eventDate && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.eventDate && <p className="text-xs text-destructive">{errors.eventDate}</p>}
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="guests" className="flex items-center gap-1.5 text-sm font-medium">
                    <Users className="h-3.5 w-3.5 text-gold-dark" /> Number of Guests
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min={1}
                    max={1600}
                    value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}
                    placeholder="e.g. 300"
                    aria-invalid={!!errors.guests}
                    data-error={!!errors.guests}
                    className={cn(errors.guests && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.guests && <p className="text-xs text-destructive">{errors.guests}</p>}
                </div>

                {/* Hall */}
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium">Hall</Label>
                  <Select value={form.hall} onValueChange={(v) => update('hall', v)}>
                    <SelectTrigger
                      aria-invalid={!!errors.hall}
                      data-error={!!errors.hall}
                      className={cn(errors.hall && 'border-destructive')}
                    >
                      <SelectValue placeholder="Select a hall" />
                    </SelectTrigger>
                    <SelectContent>
                      {halls.map((h) => (
                        <SelectItem key={h.id} value={h.id}>
                          {h.name} ({h.capacity})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.hall && <p className="text-xs text-destructive">{errors.hall}</p>}
                </div>

                {/* Package */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label className="text-sm font-medium">Package</Label>
                  <Select value={form.package} onValueChange={(v) => update('package', v)}>
                    <SelectTrigger
                      aria-invalid={!!errors.package}
                      data-error={!!errors.package}
                      className={cn(errors.package && 'border-destructive')}
                    >
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.name} — {p.pricePerPerson}/person
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.package && <p className="text-xs text-destructive">{errors.package}</p>}
                </div>

                {/* Special Requirements */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="specialRequirements" className="text-sm font-medium">
                    Special Requirements (optional)
                  </Label>
                  <Textarea
                    id="specialRequirements"
                    value={form.specialRequirements}
                    onChange={(e) => update('specialRequirements', e.target.value)}
                    placeholder="Tell us about any specific needs — decor theme, dietary requests, live cooking stations, etc."
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by our team.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  size="lg"
                  className="bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold hover:shadow-lg hover:shadow-gold/30 disabled:opacity-70"
                >
                  {submitting ? 'Confirming...' : 'Confirm Booking'}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Confirmation Dialog */}
      <Dialog open={!!confirmation} onOpenChange={(open) => !open && setConfirmation(null)}>
        <DialogContent className="max-w-md sm:max-w-lg rounded-2xl overflow-hidden p-0">
          <div className="bg-gradient-to-br from-gold-light to-gold-dark px-6 py-8 text-center text-charcoal">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-charcoal text-gold animate-float">
              <PartyPopper className="h-8 w-8" />
            </span>
            <h2 className="font-display text-2xl font-bold mt-4">Booking Confirmed!</h2>
            <p className="text-sm text-charcoal/80 mt-1">
              Thank you, {confirmation?.data.fullName.split(' ')[0]}. We look forward to hosting your event.
            </p>
          </div>
          {confirmation && (
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-gold-dark" />
                <span className="text-sm text-muted-foreground">Booking ID</span>
                <span className="font-display text-lg font-bold text-charcoal">{confirmation.id}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Detail icon={User} label="Name" value={confirmation.data.fullName} />
                <Detail icon={Tag} label="Event Type" value={confirmation.data.eventType} />
                <Detail icon={CalendarDays} label="Date" value={confirmation.data.eventDate} />
                <Detail icon={Users} label="Guests" value={confirmation.data.guests} />
                <Detail
                  icon={Tag}
                  label="Hall"
                  value={halls.find((h) => h.id === confirmation.data.hall)?.name || '-'}
                />
                <Detail
                  icon={Tag}
                  label="Package"
                  value={packages.find((p) => p.id === confirmation.data.package)?.name || '-'}
                />
              </div>
              {confirmation.data.specialRequirements && (
                <div className="rounded-xl border border-border p-3 text-sm">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Special Requirements
                  </span>
                  <p className="text-foreground/80 mt-1">{confirmation.data.specialRequirements}</p>
                </div>
              )}
              <a
                href={buildWhatsAppUrl(buildConfirmationMessage(confirmation.id, confirmation.data))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Confirmation
                </Button>
              </a>
              <Button
                variant="outline"
                className="w-full border-gold/40 text-gold-dark hover:bg-gold/10"
                onClick={() => setConfirmation(null)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-secondary/40 px-3 py-2.5">
      <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </span>
      <span className="font-medium text-charcoal">{value}</span>
    </div>
  );
}
