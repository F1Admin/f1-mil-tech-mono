import { client } from '@/app/utils/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

export default async function MilitaryCoursesPage() {
  const query = `*[_type == "militaryCoursesPage"]`;
  const data = await client.fetch(query);
  const {
    heroImage,
    title,
    subtitle,
    courses,
    supportingCourses,
    footerImage,
  } = data[0];

  const builder = imageUrlBuilder(client);

  return (
    <section>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${builder.image(heroImage).url()})`,
        }}
      >
        <div className="absolute bottom-14 left-14">
          <div className="text-neutral-900 text-6xl font-bold">{title}</div>
          <div className="text-neutral-900 text-2xl">{subtitle}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 pl-80 py-5 pr-10 text-zinc-400">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">SELECT A COURSE</h1>
          <ul>
            {courses.map((course: any) => (
              <Link
                key={course.courseNumber}
                href={`/military/courses/${course.courseNumber}`}
                className="text-xl"
              >
                {`${course.courseNumber} ${course.courseTitle}`}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">FLIGHT-1 SUPPORTING COURSES</h1>
          <ul>
            {supportingCourses && supportingCourses.length > 0 ? (
              supportingCourses.map((course: any) => (
                <li key={course._id}>
                  `${course.courseNumber} ${course.courseTitle}`
                </li>
              ))
            ) : (
              <li>No supporting courses available</li>
            )}
          </ul>
        </div>
      </div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${builder.image(footerImage).url()})`,
        }}
      ></div>
    </section>
  );
}
