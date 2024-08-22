interface AboutPictureProps {
  image: string;
  title: string;
  subTitle1: string;
  subTitle2?: string;
}

export default function AboutPicture({
  image,
  title,
  subTitle1,
  subTitle2,
}: AboutPictureProps) {
  return (
    <div
      className="relative h-[400px] bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute flex flex-col bottom-10 left-28 w-2/5 gap-4">
        <div className="text-xl font-bold uppercase">{title}</div>
        <div className="font-thin">{subTitle1}</div>
        {subTitle2 && <div className="font-thin">{subTitle2}</div>}
      </div>
    </div>
  );
}
