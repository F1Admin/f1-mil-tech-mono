import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import {
  getSupportingCourse,
  getSupportingCourses,
} from '@/sanity/sanity-utils';
import Hero from '@/app/components/Hero';
import Slider from '@/app/components/Slider/Slider';
import FooterHero from '@/app/components/FooterHero';
import Loading from '@/app/(site)/loading';

export const revalidate = 0;

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const course = await getSupportingCourse(params.slug);
  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }
  return {
    title: course.courseTitle,
    description: course.courseDescription,
  };
};

export default async function MilitaryCourse({
  params,
}: {
  params: { slug: string };
}) {
  const course = await getSupportingCourse(params.slug);

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
        <div className="grid grid-cols-2 items-center gap-5 p-20">
          {course.courseSeriesImage && course.courseTitle && (
            <Image
              src={course.courseSeriesImage}
              alt={course.courseTitle}
              width={500}
              height={200}
            />
          )}
          <div className="flex flex-col gap-20 text-lg text-zinc-100">
            <div>{course.courseDescription}</div>
            <div className="flex items-center gap-5">
              <div className="font-bold text-zinc-400">Requirements:</div>
              <div>{course.courseRequirements}</div>
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
