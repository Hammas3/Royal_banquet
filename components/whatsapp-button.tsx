'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND, buildWhatsAppUrl, defaultWhatsAppMessage } from '@/lib/data';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShowTooltip(true), 2500);
    const t2 = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <div
        className={cn(
          'transition-all duration-300 origin-bottom-right',
          showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        )}
      >
        <div className="relative bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[220px] mb-1">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss"
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-charcoal text-cream hover:bg-charcoal/80"
          >
            <X className="h-3 w-3" />
          </button>
          <p className="text-xs text-charcoal font-medium leading-snug">
            Need help planning your event? Chat with us on WhatsApp!
          </p>
          <span className="absolute -bottom-1.5 right-6 h-3 w-3 bg-white rotate-45" />
        </div>
      </div>
      <a
        href={buildWhatsAppUrl(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="h-7 w-7 text-white relative z-10" />
      </a>
    </div>
  );
}
