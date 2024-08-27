import Link from 'next/link';
import militaryLinks from '../data/militaryLinks';
import Image from 'next/image';
import {
  getCourses,
  getSiteSettings,
  getSupportingCourses,
} from '@/sanity/sanity-utils';

export default async function Footer() {
  const courses = await getCourses();
  const supportingCourses = await getSupportingCourses();
  const logo = await getSiteSettings();

  return (
    <footer>
      <div className="mx-auto py-10 px-10 text-zinc-400">
        <hr className="border-t-2 border-zinc-400 mb-10" />
        <div className="flex items-start justify-between">
          <div className="md:grid lg:grid-cols-4 xl:grid-cols-5 lg:px-5 xl:px-10 mb-20">
            <div className="flex flex-col gap-3 lg:gap-10 mb-10">
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
            <div className="flex flex-col gap-3 lg:gap-10 mb-10">
              <div>COURSES</div>
              <ul className="flex flex-col gap-2">
                {courses.map((course) => (
                  <Link
                    key={course._id}
                    href={`/military/courses/${course.slug}`}
                    className=" hover:text-white font-thin text-s capitalize whitespace-nowrap"
                  >
                    {course.courseNumber
                      ? `${course.courseNumber}M ${course.courseTitle}`
                      : course.courseTitle}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 lg:gap-10 mb-10">
              <div className="flex whitespace-nowrap">
                FLIGHT-1 SUPPORTING COURSES
              </div>
              <ul className="flex flex-col gap-2">
                {supportingCourses.map((course) => (
                  <Link
                    key={course._id}
                    href={`/military/courses/supporting-courses/${course.slug}`}
                    className=" hover:text-white font-thin text-s capitalize"
                  >
                    {course.courseTitle}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex relative w-80 h-80 lg:col-end-5 xl:col-end-6">
              <Image
                src={logo.footerLogo}
                alt="Flight 1 Skull"
                fill
                className="object-contain opacity-30"
                priority
              />
            </div>
          </div>
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:hidden">
            <Image
              src={logo.footerLogo}
              alt="Flight 1 Skull"
              fill
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
