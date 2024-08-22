'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getCourse, GetCourseQuery } from '@/sanity/sanity-utils';

export default function MilitaryCourse() {
  const [course, setCourse] = useState<GetCourseQuery>();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';

  useEffect(() => {
    async function fetchData() {
      console.log('slug', slug);
      const data = await getCourse(slug);
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
      <div
        className="relative h-[400px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${course.heroImage})`,
        }}
      >
        <div className="absolute bottom-14 left-14 ">
          <div className="flex items-center">
            <span className="text-6xl tracking-tighter font-bold">
              {course.courseNumber}
            </span>
            <span className="text-6xl font-thin">M</span>
            <div className="relative mx-5">
              <div
                className="w-px h-full bg-zinc-400 absolute bottom-[-3em]"
                style={{ height: '6em' }}
              ></div>
            </div>
            <span className="font-semibold uppercase text-2xl">
              {course.courseTitle}
            </span>
          </div>
        </div>
      </div>
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
