import { SanityHotspot } from '@/sanity/sanity-utils';

interface HeroProps {
  image: string;
  hotspot?: SanityHotspot | null;
  title?: string;
  subTitle?: string;
  courseNumber?: string;
  courseTitle?: string;
}

export default function Hero({
  image,
  hotspot = { x: 0.5, y: 0.5 },
  title,
  subTitle,
  courseNumber,
  courseTitle,
}: HeroProps) {
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
        {courseNumber && courseTitle && (
          <div className="flex items-center">
            <span className="text-6xl font-bold tracking-tighter">
              {courseNumber}
            </span>
            <span className="text-6xl font-thin">M</span>
            <div className="relative mx-5">
              <div
                className="absolute bottom-[-3em] h-full w-px bg-zinc-400"
                style={{ height: '6em' }}
              ></div>
            </div>
            <span className="text-2xl font-semibold uppercase">
              {courseTitle}
            </span>
          </div>
        )}
        {!courseNumber && (
          <div className="text-6xl font-bold tracking-tighter text-white">
            {title || courseTitle}
          </div>
        )}
        {subTitle && (
          <div className="text-2xl tracking-tight text-white">{subTitle}</div>
        )}
      </div>
    </div>
  );
}
