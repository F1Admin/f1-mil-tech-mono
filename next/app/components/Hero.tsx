interface HeroProps {
  image1: string;
  image1_title?: string;
  image1_subTitle?: string;
}

export default function Hero({
  image1,
  image1_title,
  image1_subTitle,
}: HeroProps) {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${image1})`,
      }}
    >
      <div className="absolute bottom-10 left-14">
        {image1_title && (
          <div className="text-white text-6xl tracking-tighter font-bold">
            {image1_title}
          </div>
        )}
        {image1_subTitle && (
          <div className="text-white tracking-tight text-2xl">
            {image1_subTitle}
          </div>
        )}
      </div>
    </div>
  );
}
