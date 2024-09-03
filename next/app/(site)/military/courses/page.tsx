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
    titleColor,
    heroImageQuote,
    heroImageQuoteAuthor,
    quoteColor,
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
        titleColor={titleColor}
        quote={heroImageQuote}
        author={heroImageQuoteAuthor}
        quoteColor={quoteColor}
      />
      <div className="grid-col-1 grid min-h-[400px] gap-3 px-4 py-10 text-zinc-400 md:grid-cols-2 md:px-10 lg:pl-64 xl:pl-96">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl">SELECT A COURSE</h1>
          <ul className="flex flex-col">
            {courses.map((course) => (
              <Link
                key={course._id}
                href={`/military/courses/${course.slug}`}
                className="text-xl transition hover:font-normal hover:text-white"
              >
                {course.courseNumber
                  ? `${course.courseNumber}M ${course.courseTitle}`
                  : course.courseTitle}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="whitespace-nowrap text-2xl">
            FLIGHT-1 SUPPORTING COURSES
          </h1>
          <ul className="flex flex-col">
            {supportingCourses.map((course) => (
              <Link
                key={course._id}
                href={`/military/courses/supporting-courses/${course.slug}`}
                className="text-xl transition hover:font-normal hover:text-white"
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
