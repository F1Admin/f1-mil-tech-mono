'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  getSupportingCourse,
  GetSupportingCourseQuery,
} from '@/sanity/sanity-utils';
import Hero from '@/app/components/Hero';

export default function MilitaryCourse() {
  const [course, setCourse] = useState<GetSupportingCourseQuery>();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';

  useEffect(() => {
    async function fetchData() {
      console.log('slug', slug);
      const data = await getSupportingCourse(slug);
      console.log(data);
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
  //slice the front course number from any letters and save as seperate variables
  return (
    <section>
      <Hero image1={course.heroImage} image1_title={course.courseTitle} />
      <div className="grid grid-cols-2 p-20 items-center gap-5">
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
          <div className="flex gap-5 items-center">
            <div className="font-bold text-zinc-400">Requirements:</div>
            <div>{course.courseRequirements}</div>
          </div>
        </div>
      </div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${course.courseFooterImage})`,
        }}
      >
        <div className="absolute bottom-14 left-14">
          <div className="text-6xl tracking-tighter font-medium">
            {course.courseFooterText}
          </div>
        </div>
      </div>
    </section>
  );
}
