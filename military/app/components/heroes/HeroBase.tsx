import { SanityHotspot } from '@/sanity/sanity-military-utils';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroBaseProps {
  image: string;
  hotspot?: SanityHotspot | null;
  alt?: string;
  children?: ReactNode;
  className?: string;
}

export default function HeroBase({
  image,
  hotspot = { x: 0.5, y: 0.5 },
  alt = 'Hero Image',
  children,
  className = '',
}: HeroBaseProps) {
  const effectiveHotspot = hotspot ?? { x: 0.5, y: 0.5 };
  const backgroundPosition = `${effectiveHotspot.x * 100}% ${effectiveHotspot.y * 100}%`;

  return (
    <div
      className={`relative grid min-h-[400px] grid-rows-[1fr_auto] p-4 md:p-10 ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
        />
      </div>
      {children && <div className="z-10 row-start-2">{children}</div>}
    </div>
  );
}
