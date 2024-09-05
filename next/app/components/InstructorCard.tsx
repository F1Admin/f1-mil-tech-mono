import Image from 'next/image';
import { type Instructor } from '@/sanity/sanity-utils';

interface InstructorCardProps {
  instructor: Instructor; // define the 'instructor' prop
}

export default function InstructorCard(props: InstructorCardProps) {
  const { instructor } = props;
  return (
    <div key={instructor._id} className="flex flex-col gap-3">
      <div className="relative h-48 w-48 overflow-hidden rounded transition lg:h-52 lg:w-52">
        <Image
          src={instructor.profileImage}
          alt={instructor.alt}
          className="rounded"
          fill
          sizes="(min-width: 1024px) 208px, 192px"
          style={{
            filter: 'grayscale(100%)',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="flex gap-2 text-xl">
          {instructor.firstName} {instructor.lastName}
        </h2>
      </div>
      <dl className="text-sm">
        <div className="flex justify-between">
          <dt className="font-thin uppercase">Jumps:</dt>
          <dd>{instructor.numberOfJumps}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-thin uppercase">Years in Sport:</dt>
          <dd>{instructor.yearsInSport}</dd>
        </div>
        {instructor.yearsWithFlight1 === 'Founding Member' ||
        instructor.yearsWithFlight1 === 'Military Operations Manager' ? (
          <div className="flex flex-col">
            <dd>{instructor.yearsWithFlight1}</dd>
          </div>
        ) : (
          <div className="flex justify-between">
            <dt className="font-thin uppercase">Years with Flight-1:</dt>
            <dd>{instructor.yearsWithFlight1}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
