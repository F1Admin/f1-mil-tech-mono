import { SanityHotspot } from '@/sanity/sanity-tech-utils';

interface HeroProps {
  image: string;
  hotspot?: SanityHotspot | null;
  title?: string;
  subTitle?: string;
  titleColor?: string;
  quote?: string;
  author?: string;
  quoteColor?: string;
  courseNumber?: string;
  courseTitle?: string;
}

export default function Hero({
  image,
  hotspot = { x: 0.5, y: 0.5 },
  title,
  subTitle,
  titleColor,
  quote,
  author,
  quoteColor,
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
        backgroundPosition,
      }}
    >
      <div
        className={`absolute bottom-10 left-4 mr-10 ${
          titleColor === 'black' ? 'text-zinc-900' : ''
        } md:left-10`}
      >
        {courseNumber && courseTitle ? (
          <CourseInfo courseNumber={courseNumber} courseTitle={courseTitle} />
        ) : (
          <div className="text-6xl font-bold tracking-tighter">
            {title || courseTitle}
          </div>
        )}
        {subTitle && <div className="text-2xl tracking-tight">{subTitle}</div>}
      </div>
      <QuoteSection quote={quote} author={author} quoteColor={quoteColor} />
    </div>
  );
}

function CourseInfo({
  courseNumber,
  courseTitle,
}: {
  courseNumber: string;
  courseTitle: string;
}) {
  return (
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
      <span className="text-2xl font-semibold uppercase">{courseTitle}</span>
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
