import Link from 'next/link';
import militaryLinks from '../data/militaryLinks';
import Image from 'next/image';
import { getCourses, getSupportingCourses } from '@/sanity/sanity-utils';

export default async function Footer() {
  const courses = await getCourses();
  const supportingCourses = await getSupportingCourses();

  return (
    <footer>
      <div className="mx-auto py-10 px-10 text-zinc-400">
        <hr className="border-t-2 border-zinc-400 mb-10" />
        <div className="grid grid-cols-5 px-10 mb-20">
          <div className="flex flex-col gap-10">
            <div className="">FLIGHT-1 MILITARY</div>
            <div className="flex flex-col gap-2">
              {militaryLinks
                .filter((item) => item.label != 'Courses')
                .map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className=" hover:text-white font-thin text-s capitalize"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>COURSES</div>
            <ul className="flex flex-col gap-2">
              {courses.map((course) => (
                <Link
                  key={course._id}
                  href={`/military/courses/${course.slug?.current}`}
                  className=" hover:text-white font-thin text-s capitalize"
                >
                  {course.courseNumber
                    ? `${course.courseNumber}M ${course.courseTitle}`
                    : course.courseTitle}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <div>FLIGHT-1 SUPPORTING COURSES</div>
            <ul className="flex flex-col gap-2">
              {supportingCourses.map((course) => (
                <Link
                  key={course._id}
                  href={`/military/courses/${course.slug?.current}`}
                  className=" hover:text-white font-thin text-s capitalize"
                >
                  {course.courseTitle}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex col-end-6 justify-end">
            <Image
              src="/assets/images/skull.png"
              alt="Flight 1 Skull"
              width={200}
              height={1000}
              className="object-contain opacity-30"
              priority
            />
          </div>
        </div>
        <hr className="border-t-2 border-zinc-400 mb-5" />
      </div>
    </footer>
  );
}
