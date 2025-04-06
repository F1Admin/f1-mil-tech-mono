import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  getSupportingCourse,
  getSupportingCourses,
} from '@/sanity/sanity-military-utils';
import Hero from '@/app/components/Hero';
import Slider from '@/app/components/Slider/Slider';
import FooterHero from '@/app/components/FooterHero';
import Loading from '@/app/loading';
import { PortableText } from 'next-sanity';
import { RiArrowDropRightLine } from 'react-icons/ri';
import CourseSeriesImage from '@/app/components/CourseSeriesImage';

type Params = Promise<{
  slug: string;
}>;

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { slug } = await params;
  const course = await getSupportingCourse(slug);
  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }
  return {
    title: course.courseTitle,
    description: course.courseDescription.join(' '),
  };
};

export default async function MilitaryCourse({ params }: { params: Params }) {
  const { slug } = await params;
  const course = await getSupportingCourse(slug);

  const heroProps = {
    image: course.heroImage,
    hotspot: course.heroImage_hotspot,
    title: course.courseTitle,
  };

  const footerProps = {
    image: course.courseFooterImage,
    hotspot: course.courseFooterImage_hotspot,
    quote: course.courseFooterText,
    author: course.courseFooterAuthor,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="flex flex-col items-center gap-5 p-10 sm:p-20 lg:grid lg:grid-cols-2">
          <CourseSeriesImage
            courseTitle={course.courseTitle}
            image={course.courseSeriesImage}
          />
          <div className="flex flex-col gap-10 text-lg text-zinc-100">
            <div className="flex flex-col gap-5">
              <PortableText value={course.courseDescription} />
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-bold text-zinc-400">Requirements:</div>
              <ul>
                {course.courseRequirements &&
                  course.courseRequirements.map(
                    (requirement: string, index: number) => (
                      <li key={index} className="flex items-center gap-1">
                        <RiArrowDropRightLine />
                        {requirement}
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>
        <Slider images={course.courseCarousel} />
        <FooterHero {...footerProps} />
      </main>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const courses = await getSupportingCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
