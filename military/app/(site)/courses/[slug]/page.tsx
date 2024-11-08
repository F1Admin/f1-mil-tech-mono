import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getCourse, getCourses } from '@/sanity/sanity-military-utils';
import Slider from '@/app/components/Slider/Slider';
import Hero from '@/app/components/Hero';
import FooterHero from '@/app/components/FooterHero';
import Loading from '@/app/loading';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { PortableText } from 'next-sanity';
import CourseSeriesImage from '@/app/components/CourseSeriesImage';

export const revalidate = 0;

type Params = Promise<{
  slug: string;
}>;

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { slug } = await params;
  const course = await getCourse(slug);
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
  const course = await getCourse(slug);

  const heroProps = {
    image: course.heroImage,
    hotspot: course.heroImage_hotspot,
    courseNumber: course.courseNumber,
    courseTitle: course.courseTitle,
  };

  const footerHeroProps = {
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
            courseNumber={course.courseNumber}
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
                      <li key={index} className="flex items-center gap-2">
                        <RiArrowDropRightLine className="min-w-5 text-xl text-zinc-400" />
                        {requirement}
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>
        <Slider images={course.courseCarousel} />
        <FooterHero {...footerHeroProps} />
      </main>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
