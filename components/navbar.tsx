'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/halls', label: 'Halls' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/menu', label: 'Menu' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors',
              scrolled ? 'border-gold text-gold' : 'border-gold/80 text-gold'
            )}
          >
            <Crown className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-display text-lg sm:text-xl font-bold tracking-wide transition-colors',
                scrolled ? 'text-cream' : 'text-cream'
              )}
            >
              Royal Crescent
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold font-body">
              Banquet
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md',
                    active
                      ? 'text-gold'
                      : 'text-cream/80 hover:text-gold'
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gold" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold hover:shadow-lg hover:shadow-gold/30 transition-shadow"
          >
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="text-cream p-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-charcoal text-cream border-gold/20 w-[80vw] sm:w-80 p-0">
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-display text-lg font-bold text-gold">Menu</span>
                <SheetClose asChild>
                  <button aria-label="Close menu" className="text-cream/70 hover:text-gold p-1">
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            'block px-6 py-3.5 text-base font-medium transition-colors border-l-2',
                            active
                              ? 'border-gold text-gold bg-white/5'
                              : 'border-transparent text-cream/80 hover:text-gold hover:bg-white/5'
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 pt-4 pb-8">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-gold-light to-gold-dark text-charcoal font-semibold"
                  >
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
