import Image from 'next/image';
import { type Instructor } from '@/sanity/sanity-military-utils';
import { RiArrowDropRightLine } from 'react-icons/ri';
interface InstructorCardProps {
  instructor: Instructor; // define the 'instructor' prop
}

export default function InstructorCard(props: InstructorCardProps) {
  const { instructor } = props;
  const alt =
    instructor.alt ||
    `${instructor.firstName} ${instructor.lastName} Profile Image`;
  return (
    <div key={instructor._id} className="flex flex-col gap-3">
      <div className="relative h-48 w-48 overflow-hidden rounded transition lg:h-52 lg:w-52">
        <Image
          src={instructor.profileImage}
          alt={alt}
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
        <div className="flex gap-2">
          <dt className="font-thin uppercase">Jumps:</dt>
          <dd>{instructor.numberOfJumps}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-thin uppercase">Years with Flight-1:</dt>
          <dd>{instructor.yearsWithFlight1}</dd>
        </div>
        <div className="flex items-center">
          <RiArrowDropRightLine className="-ml-2 text-xl" />
          <dd>{instructor.title}</dd>
        </div>
      </dl>
    </div>
  );
}
