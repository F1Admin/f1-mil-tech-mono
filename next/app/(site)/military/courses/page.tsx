import { Suspense } from 'react';
import { Metadata } from 'next';
import {
  getCourses,
  getMilitaryCoursesPage,
  getSupportingCourses,
} from '@/sanity/sanity-utils';
import Link from 'next/link';
import Loading from '@/app/(site)/loading';
import Hero from '@/app/components/Hero';
import FooterHero from '@/app/components/FooterHero';
import CourseGrid from '@/app/components/CourseGrid/CourseGrid';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Military Courses Page',
};

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

  const heroProps = {
    image: heroImage,
    hotspot: heroImage_hotspot,
    title: title,
    subTitle: subtitle,
    titleColor: titleColor,
    quote: heroImageQuote,
    author: heroImageQuoteAuthor,
    quoteColor: quoteColor,
  };

  const footerHeroProps = {
    image: footerImage,
    hotspot: footerImage_hotspot,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="grid-col-1 grid gap-3 px-4 py-10 text-zinc-400 md:grid-cols-2 md:px-10 lg:pl-64 xl:pl-96">
          <div className="flex flex-col gap-7">
            <h3 className="text-2xl">SELECT A COURSE</h3>
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
            <h3 className="whitespace-nowrap text-2xl">
              FLIGHT-1 SUPPORTING COURSES
            </h3>
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
        <CourseGrid completed={[]} />
        <FooterHero {...footerHeroProps} />
      </main>
    </Suspense>
  );
}
