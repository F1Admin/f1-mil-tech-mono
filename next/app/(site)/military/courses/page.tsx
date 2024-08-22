import {
  getCourses,
  getMilitaryCoursesPage,
  getSupportingCourses,
} from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function MilitaryCoursesPage() {
  const { heroImage, title, subtitle, footerImage } =
    await getMilitaryCoursesPage();

  const courses = await getCourses();
  const supportingCourses = await getSupportingCourses();

  return (
    <section>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute bottom-10 left-14">
          <div className="text-neutral-900 text-6xl font-bold tracking-tighter">
            {title}
          </div>
          <div className="text-neutral-900 text-2xl">{subtitle}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[400px] pl-80 py-10 pr-10 text-zinc-400">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">SELECT A COURSE</h1>
          <ul className="flex flex-col gap-2">
            {courses.map((course) => (
              <Link
                key={course._id}
                href={`/military/courses/${course.slug?.current}`}
                className="text-xl font-thin hover:text-white hover:font-normal transition"
              >
                {course.courseNumber
                  ? `${course.courseNumber}M ${course.courseTitle}`
                  : course.courseTitle}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">FLIGHT-1 SUPPORTING COURSES</h1>
          <ul className="flex flex-col gap-2">
            {supportingCourses.map((course) => (
              <Link
                key={course._id}
                href={`/military/courses/${course.slug?.current}`}
                className="text-xl font-thin hover:text-white hover:font-normal transition"
              >
                {course.courseTitle}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${footerImage})`,
        }}
      ></div>
    </section>
  );
}
