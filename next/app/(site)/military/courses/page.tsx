import Hero from '@/app/components/Hero';
import FooterHero from '@/app/components/FooterHero';
import {
  getCourses,
  getMilitaryCoursesPage,
  getSupportingCourses,
} from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function MilitaryCoursesPage() {
  const {
    heroImage,
    heroImage_hotspot,
    title,
    subtitle,
    footerImage,
    footerImage_hotspot,
  } = await getMilitaryCoursesPage();

  const courses = await getCourses();
  const supportingCourses = await getSupportingCourses();
  console.log('footerImage_hotspot:', footerImage_hotspot);
  return (
    <section>
      <Hero
        image={heroImage}
        hotspot={heroImage_hotspot}
        title={title}
        subTitle={subtitle}
      />
      <div className="grid-col-1 grid min-h-[400px] gap-10 py-10 pl-10 pr-10 text-zinc-400 md:grid-cols-2 lg:pl-80">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">SELECT A COURSE</h1>
          <ul className="flex flex-col gap-2">
            {courses.map((course) => (
              <Link
                key={course._id}
                href={`/military/courses/${course.slug}`}
                className="text-xl font-thin transition hover:font-normal hover:text-white"
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
                href={`/military/courses/supporting-courses/${course.slug}`}
                className="text-xl font-thin transition hover:font-normal hover:text-white"
              >
                {course.courseTitle}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <FooterHero image={footerImage} hotspot={footerImage_hotspot} />
    </section>
  );
}
