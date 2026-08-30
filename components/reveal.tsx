'use client';

import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/use-reveal';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: React.ElementType;
};

export function Reveal({ children, className, delay, as: Tag = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={cn(
        'reveal',
        visible && 'is-visible',
        delay === 1 && 'reveal-delay-1',
        delay === 2 && 'reveal-delay-2',
        delay === 3 && 'reveal-delay-3',
        delay === 4 && 'reveal-delay-4',
        className
      )}
    >
      {children}
    </Tag>
  );
}
