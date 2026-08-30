import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Royal Crescent Banquet | Premier Wedding & Event Hall in Pakistan',
  description:
    'Royal Crescent Banquet — Where Your Special Moments Become Unforgettable. Luxury wedding halls, premium catering, and elegant decor for weddings, walima, mehndi, and corporate events.',
  keywords: [
    'wedding hall Pakistan',
    'banquet hall',
    'Royal Crescent Banquet',
    'wedding venue',
    'walima hall',
    'mehndi event',
    'corporate event Pakistan',
  ],
  openGraph: {
    title: 'Royal Crescent Banquet | Premier Wedding & Event Hall',
    description:
      'Where Your Special Moments Become Unforgettable. Luxury halls, premium catering, elegant decor.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
