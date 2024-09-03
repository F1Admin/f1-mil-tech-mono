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
      <div className="mx-auto px-10 py-10 text-zinc-400">
        <hr className="border-t-1 mb-10 border-zinc-700" />
        <div className="flex justify-between lg:block">
          <div className="mb-16 md:grid lg:grid-cols-4 lg:px-5 xl:grid-cols-5 xl:px-10">
            <div className="mb-10 flex flex-col gap-3 lg:gap-10">
              <div className="text-sm">FLIGHT-1 MILITARY</div>
              <div className="flex flex-col gap-2">
                {militaryLinks
                  .filter((item) => item.label != 'Courses')
                  .map((link, index) => (
                    <Link
                      key={index}
                      href={link.path}
                      className="text-sm font-thin capitalize hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>
            <div className="mb-10 flex flex-col gap-3 lg:gap-10">
              <div className="text-sm">COURSES</div>
              <ul className="flex flex-col gap-2">
                {courses.map((course) => (
                  <Link
                    key={course._id}
                    href={`/military/courses/${course.slug}`}
                    className="whitespace-nowrap text-sm font-thin capitalize hover:text-white"
                  >
                    {course.courseNumber
                      ? `${course.courseNumber}M ${course.courseTitle}`
                      : course.courseTitle}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="mb-10 flex flex-col gap-3 lg:gap-10">
              <div className="flex whitespace-nowrap text-sm">
                FLIGHT-1 SUPPORTING COURSES
              </div>
              <ul className="flex flex-col gap-2">
                {supportingCourses.map((course) => (
                  <Link
                    key={course._id}
                    href={`/military/courses/supporting-courses/${course.slug}`}
                    className="text-sm font-thin capitalize hover:text-white"
                  >
                    {course.courseTitle}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="relative hidden lg:col-end-5 lg:flex xl:col-end-6">
              <div className="absolute right-[-20px] top-0 h-48 w-48">
                <Image
                  src={logo.footerLogo}
                  alt="Flight 1 Skull"
                  fill
                  sizes="(max-width: 1024px) 20rem, (max-width: 1280px) 25rem, 30rem"
                  className="object-contain opacity-30"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="relative h-48 w-48 lg:hidden">
            <Image
              src={logo.footerLogo}
              alt="Flight 1 Skull"
              fill
              sizes="(max-width: 640px) 18rem, (max-width: 768px) 20rem, (max-width: 1024px) 24rem, 30rem"
              className="absolute right-0 top-0 object-contain opacity-30"
              priority
            />
          </div>
        </div>
        <hr className="border-t-1 mb-5 border-zinc-700" />
      </div>
    </footer>
  );
}
