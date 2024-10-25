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
    <div className="relative">
      <Image src={image} alt={courseTitle} width={500} height={200} />
      {courseNumber && (
        <div className="absolute left-9 top-12">
          <h5 className="text-4xl font-bold tracking-tighter">
            {courseNumber}
            <span className="font-thin">M</span>
          </h5>
          <hr className="border-t-1 border-white" />
          <h6 className="max-w-40 text-lg font-thin uppercase">
            {courseTitle}
          </h6>
        </div>
      )}
      {!courseNumber && (
        <div className="absolute left-9 top-16">
          <h6 className="max-w-40 text-4xl font-bold tracking-tighter">
            {courseTitle}
          </h6>
        </div>
      )}
    </div>
  );
}
