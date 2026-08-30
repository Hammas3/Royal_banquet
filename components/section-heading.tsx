import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'text-xs font-body font-semibold uppercase tracking-[0.3em]',
            light ? 'text-gold-light' : 'text-gold-dark'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight',
          light ? 'text-cream' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      <span className="gold-divider" />
      {description && (
        <p
          className={cn(
            'font-body text-base sm:text-lg leading-relaxed max-w-2xl',
            light ? 'text-cream/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
