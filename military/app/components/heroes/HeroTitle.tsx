import { SanityHotspot } from '@/sanity/sanity-military-utils';
import HeroBase from './HeroBase';

interface HeroTitleProps {
  image: string;
  hotspot?: SanityHotspot | null;
  title: string;
  titleColor?: 'white' | 'black';
  className?: string;
}

export default function HeroTitle({
  image,
  hotspot,
  title,
  titleColor = 'white',
  className,
}: HeroTitleProps) {
  const textColorClass = titleColor === 'black' ? 'text-zinc-900' : 'text-white';

  return (
    <HeroBase image={image} hotspot={hotspot} alt={title} className={className}>
      <h1
        className={`text-4xl font-bold tracking-tighter md:text-6xl ${textColorClass}`}
      >
        {title}
      </h1>
    </HeroBase>
  );
}
