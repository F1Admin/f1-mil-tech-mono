import { SanityHotspot } from '@/sanity/sanity-military-utils';
import HeroBase from './HeroBase';

interface HeroTitleSubtitleProps {
  image: string;
  hotspot?: SanityHotspot | null;
  title: string;
  subTitle: string;
  titleColor?: 'white' | 'black';
  className?: string;
}

export default function HeroTitleSubtitle({
  image,
  hotspot,
  title,
  subTitle,
  titleColor = 'white',
  className,
}: HeroTitleSubtitleProps) {
  const textColorClass = titleColor === 'black' ? 'text-zinc-900' : 'text-white';

  return (
    <HeroBase image={image} hotspot={hotspot} alt={title} className={className}>
      <div className={textColorClass}>
        <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
          {title}
        </h1>
        <p className="mt-2 text-xl tracking-tight md:text-2xl">{subTitle}</p>
      </div>
    </HeroBase>
  );
}
