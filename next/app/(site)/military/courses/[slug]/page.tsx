'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getCourse, GetCourseQuery } from '@/sanity/sanity-utils';
import Slider from '@/app/components/Slider/Slider';
import Hero from '@/app/components/Hero';
import FooterHero from '@/app/components/FooterHero';

export default function MilitaryCourse() {
  const [course, setCourse] = useState<GetCourseQuery>();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';

  useEffect(() => {
    async function fetchData() {
      const data = await getCourse(slug);
      setCourse(data);
      setLoading(false);
    }
    fetchData();
  }, [slug]); // Add pathname as a dependency

  if (loading) {
    return <div>Loading...</div>;
  }

  // Ensure data exists before destructuring
  if (!course) {
    return <div>No data available</div>;
  }

  console.log('courseFooterImage_hotspot:', course.courseFooterImage_hotspot);
  return (
    <section>
      <Hero
        image={course.heroImage}
        hotspot={course.heroImage_hotspot}
        courseNumber={course.courseNumber}
        courseTitle={course.courseTitle}
      />
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
      <FooterHero
        image={course.courseFooterImage}
        hotspot={course.courseFooterImage_hotspot}
        quote={course.courseFooterText}
        author={course.courseFooterAuthor}
      />
    </section>
  );
}
