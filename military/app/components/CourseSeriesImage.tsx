import Image from 'next/image';

interface CourseSeriesImageProps {
  courseNumber?: string;
  courseTitle: string;
  image: string;
}

export default function CourseSeriesImage({
  courseNumber,
  courseTitle,
  image,
}: CourseSeriesImageProps) {
  return (
    <div className="relative h-[200px] w-full sm:h-[250px] sm:max-w-[450px]">
      <Image
        src={image}
        alt={courseTitle}
        fill
        sizes="(max-width: 450px) 100vw, 450px"
      />
      {courseNumber && (
        <div className="absolute left-4 top-9 w-28 sm:left-9 sm:top-12 sm:w-36">
          <h5 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {courseNumber}
            <span className="font-thin">M</span>
          </h5>
          <hr className="border-t-1 border-white" />
          <h6 className="text-sm font-thin uppercase sm:max-w-40 sm:text-base">
            {courseTitle}
          </h6>
        </div>
      )}
      {!courseNumber && (
        <div className="absolute left-7 top-12 md:left-9 md:top-16">
          <h6 className="max-w-40 text-3xl font-bold tracking-tighter sm:text-4xl">
            {courseTitle}
          </h6>
        </div>
      )}
    </div>
  );
}
