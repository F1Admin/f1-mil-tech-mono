import Image from 'next/image';
import { SanityHotspot } from '@/sanity/sanity-tech-utils';

interface FooterHeroProps {
  image: string;
  hotspot?: SanityHotspot;
  quote?: string;
  author?: string;
}

export default function FooterHero({
  image,
  hotspot,
  quote,
  author,
}: FooterHeroProps) {
  const effectiveHotspot = hotspot ?? { x: 0.5, y: 0.5 };

  return (
    <div className="relative h-[400px] overflow-hidden">
      {image ? (
        <Image
          src={image}
          alt="Footer hero image"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: `${effectiveHotspot.x * 100}% ${effectiveHotspot.y * 100}%`,
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-200">
          <p className="text-gray-500">No image provided</p>
        </div>
      )}
      {(quote || author) && (
        <div className="absolute inset-0 flex items-end justify-start p-4 md:p-10">
          <div className="max-w-2x p-4 text-white">
            {quote && (
              <p className="text-2xl font-thin italic tracking-tight">
                &ldquo;{quote}&rdquo;
              </p>
            )}
            {author && (
              <p className="mt-2 text-right text-xl font-thin">
                &mdash; {author}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
