interface HeroProps {
  image: string;
  title?: string;
  subTitle?: string;
  courseNumber?: string;
  courseTitle?: string;
}

export default function Hero({
  image,
  title,
  subTitle,
  courseNumber,
  courseTitle,
}: HeroProps) {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute bottom-10 left-14">
        {courseNumber && courseTitle && (
          <div className="flex items-center">
            <span className="text-6xl tracking-tighter font-bold">
              {courseNumber}
            </span>
            <span className="text-6xl font-thin">M</span>
            <div className="relative mx-5">
              <div
                className="w-px h-full bg-zinc-400 absolute bottom-[-3em]"
                style={{ height: '6em' }}
              ></div>
            </div>
            <span className="font-semibold uppercase text-2xl">
              {courseTitle}
            </span>
          </div>
        )}
        {(title || courseTitle) && (
          <div className="text-white text-6xl tracking-tighter font-bold">
            {title || courseTitle}
          </div>
        )}
        {subTitle && (
          <div className="text-white tracking-tight text-2xl">{subTitle}</div>
        )}
      </div>
    </div>
  );
}
