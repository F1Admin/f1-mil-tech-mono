import { SanityHotspot } from '@/sanity/sanity-tech-utils';
import Image from 'next/image';

interface HeroProps {
  image: string;
  hotspot?: SanityHotspot | null;
  title?: string;
  title2?: string;
  subTitle?: string;
  quote?: string;
  author?: string;
  quoteColor?: string;
}

export default function Hero({
  image,
  hotspot = { x: 0.5, y: 0.5 },
  title,
  title2,
  subTitle,
  quote,
  author,
  quoteColor,
}: HeroProps) {
  const effectiveHotspot = hotspot ?? { x: 0.5, y: 0.5 };
  const backgroundPosition = `${effectiveHotspot.x * 100}% ${effectiveHotspot.y * 100}%`;

  return (
    <div className="relative grid min-h-[400px] grid-rows-[1fr_auto] p-4 md:p-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title || 'Hero Image'}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
        />
      </div>
      <div className="z-10 row-start-2">
        <div className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          {title}
        </div>
        {title2 && (
          <div className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {title2}
          </div>
        )}
        {subTitle && <div className="text-2xl tracking-tight">{subTitle}</div>}
      </div>
      <QuoteSection quote={quote} author={author} quoteColor={quoteColor} />
    </div>
  );
}

function QuoteSection({
  quote,
  author,
  quoteColor,
}: {
  quote?: string;
  author?: string;
  quoteColor?: string;
}) {
  const textColor = quoteColor === 'black' ? 'text-zinc-900' : '';
  return (
    <div className="absolute right-4 top-40 mr-20 w-2/5 md:left-auto">
      <div className="hidden flex-col items-end gap-3 lg:flex">
        {quote && (
          <h3 className={`${textColor} text-xl font-thin tracking-tight`}>
            &quot;{quote}&quot;
          </h3>
        )}
        {author && (
          <h4 className={`${textColor} text-lg font-thin`}>&mdash; {author}</h4>
        )}
      </div>
    </div>
  );
}
