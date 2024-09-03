interface HeroWithQuoteProps {
  image: string;
  quote?: string;
  author?: string;
}

export default function FooterHero({
  image,
  quote,
  author,
}: HeroWithQuoteProps) {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute bottom-10 left-10 mr-10 md:left-14">
        <div className="flex flex-col items-end gap-3">
          <h3 className="text-2xl font-thin tracking-tight">{`"${quote}"`}</h3>
          {author && <h4 className="text-xl font-thin">{`- ${author}`}</h4>}
        </div>
      </div>
    </div>
  );
}
