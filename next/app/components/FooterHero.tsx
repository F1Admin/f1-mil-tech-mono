import { SanityHotspot } from '@/sanity/sanity-utils';

interface FooterHeroProps {
  image: string;
  hotspot?: SanityHotspot;
  quote?: string;
  author?: string;
}

export default function FooterHero({
  image,
  hotspot = { x: 0.5, y: 0.5 }, // Default to center if no hotspot provided
  quote,
  author,
}: FooterHeroProps) {
  const fallbackHotspot = { x: 0.5, y: 0.5 };
  const effectiveHotspot = hotspot ?? fallbackHotspot;
  const backgroundPosition = `${effectiveHotspot.x * 100}% ${effectiveHotspot.y * 100}%`;

  return (
    <div
      className="relative h-[400px] bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: backgroundPosition,
      }}
    >
      <div className="absolute bottom-10 left-10 mr-10 md:left-14">
        <div className="flex flex-col items-end gap-3">
          {quote && (
            <h3 className="text-2xl font-thin tracking-tight">{`"${quote}"`}</h3>
          )}
          {author && <h4 className="text-xl font-thin">{`- ${author}`}</h4>}
        </div>
      </div>
    </div>
  );
}
