'use client';

import { useEffect, useState } from 'react';
import { client } from '@/app/utils/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface MilitaryCourseData {
  heroImage: any;
  courseNumber: string;
  courseTitle: string;
  courseDescription: string;
  courseSeriesImage: string;
  courseFooterImage: string;
  courseRequirements: string;
  courseFooterText: string;
}

export default function MilitaryCourse() {
  const [course, setCourse] = useState<MilitaryCourseData | null>();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "militaryCoursesPage"]{courses}`;
      const params = { courseNumber: pathname };
      const result = await client.fetch(query, params);
      console.log(result[0].courses[0]);
      setCourse(result[0].courses[0]);
      setLoading(false);
    }
    fetchData();
  }, [pathname]); // Add pathname as a dependency

  if (loading) {
    return <div>Loading...</div>;
  }

  // Ensure data exists before destructuring
  if (!course) {
    return <div>No data available</div>;
  }
  //slice the front course number from any letters and save as seperate variables
  const courseNumber = course.courseNumber.slice(0, 3);
  const courseLetter = course.courseNumber.slice(3);

  const seriesImage = builder.image(course.courseSeriesImage).url();
  return (
    <section>
      <div
        className="relative h-[400px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${builder.image(course.heroImage).url()})`,
        }}
      >
        <div className="absolute bottom-14 left-14 ">
          <div className="flex items-center">
            <span className="text-6xl font-bold">{courseNumber}</span>
            <span className="text-6xl font-thin">{courseLetter}</span>
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
        <Image
          src={seriesImage}
          alt={course.courseTitle}
          width={500}
          height={200}
        />
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
          backgroundImage: `url(${builder.image(course.courseFooterImage).url()})`,
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
