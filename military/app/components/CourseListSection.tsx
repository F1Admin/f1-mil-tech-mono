import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { Course, SupportingCourse } from '@/sanity/sanity-military-utils';

interface CourseListSectionProps {
  courses: Course[];
  supportingCourses: SupportingCourse[];
  showDivider?: boolean;
}

export default function CourseListSection({
  courses,
  supportingCourses,
  showDivider = true,
}: CourseListSectionProps) {
  return (
    <>
      <div className="grid-col-1 grid gap-10 px-4 py-16 text-zinc-400 md:grid-cols-2 md:px-10 lg:pl-64 xl:pl-96">
        <div className="flex flex-col gap-7 md:gap-3">
          <h3 className="text-2xl">FLIGHT-1 TRAINING SYSTEM</h3>
          <ul className="flex flex-col">
            {courses.map((course) => (
              <Link
                key={course._id}
                href={`/courses/${course.slug}`}
                className="flex items-center text-xl transition hover:font-normal hover:text-white"
              >
                <RiArrowDropRightLine className="text-4xl" />
                {course.courseNumber
                  ? `${course.courseNumber}M ${course.courseTitle}`
                  : course.courseTitle}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7 md:gap-3">
          <h3 className="whitespace-nowrap text-2xl">
            FLIGHT-1 SUPPORTING COURSES
          </h3>
          <ul className="flex flex-col">
            {supportingCourses.map((course) => (
              <Link
                key={course._id}
                href={`/courses/supporting-courses/${course.slug}`}
                className="flex items-center text-xl transition hover:font-normal hover:text-white"
              >
                <RiArrowDropRightLine className="text-4xl" />
                {course.courseTitle}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {showDivider && <hr className="border-t-1 border-zinc-700" />}
    </>
  );
}
