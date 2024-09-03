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
      <div>
        <div className="flex flex-grow items-center gap-2">
          <p className="text-sm font-thin uppercase">Jumps:</p>
          <p>{instructor.numberOfJumps}</p>
        </div>
        <div className="flex flex-grow items-center gap-2">
          <p className="text-sm font-thin uppercase">Years in Sport:</p>
          <p className="text-base font-normal">{instructor.yearsInSport}</p>
        </div>
        {instructor.yearsWithFlight1 === 'Founding Member' ? (
          <div>
            <p className="text-sm font-thin uppercase">Years with Flight-1:</p>
            <span>{instructor.yearsWithFlight1}</span>
          </div>
        ) : (
          <div className="flex flex-grow items-center gap-2">
            <p className="text-sm font-thin uppercase">Years with Flight-1:</p>
            <p className="text-base font-normal">
              {instructor.yearsWithFlight1}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
