import Link from 'next/link';
import militaryLinks from '../data/militaryLinks';
import Image from 'next/image';
import {
  getCourses,
  getSiteSettings,
  getSupportingCourses,
} from '@/sanity/sanity-military-utils';

export default async function Footer() {
  const [courses, supportingCourses, { footerLogo }] = await Promise.all([
    getCourses(),
    getSupportingCourses(),
    getSiteSettings(),
  ]);

  return (
    <footer>
      <div className="mx-auto px-4 py-10 text-zinc-400 md:px-10">
        <hr className="border-t-1 mb-5 border-zinc-700" />
        <div className="flex justify-between gap-10 lg:block">
          <div className="mb-5 grid gap-10 px-5 md:mb-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <FooterSection title="FLIGHT-1 MILITARY">
              {militaryLinks
                .filter((item) => item.label !== 'Courses')
                .map((link) => (
                  <FooterLink key={link.path} href={link.path}>
                    {link.label}
                  </FooterLink>
                ))}
            </FooterSection>
            <FooterSection title="COURSES">
              {courses.map((course) => (
                <FooterLink key={course._id} href={`/courses/${course.slug}`}>
                  {course.courseNumber
                    ? `${course.courseNumber}M ${course.courseTitle}`
                    : course.courseTitle}
                </FooterLink>
              ))}
            </FooterSection>
            <FooterSection title="FLIGHT-1 SUPPORTING COURSES">
              {supportingCourses.map((course) => (
                <FooterLink
                  key={course._id}
                  href={`/courses/supporting-courses/${course.slug}`}
                >
                  {course.courseTitle}
                </FooterLink>
              ))}
            </FooterSection>
            <div className="relative hidden lg:col-end-5 lg:flex xl:col-end-6">
              <div className="absolute right-[-20px] top-0 h-48 w-48">
                <Image
                  src={footerLogo}
                  alt="Flight 1 Skull"
                  fill
                  sizes="(max-width: 1024px) 20rem, (max-width: 1280px) 25rem, 30rem"
                  className="object-contain opacity-30"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="relative h-48 w-48 lg:hidden">
            <Image
              src={footerLogo}
              alt="Flight 1 Skull"
              fill
              sizes="(max-width: 640px) 18rem, (max-width: 768px) 20rem, (max-width: 1024px) 24rem, 30rem"
              className="absolute right-0 top-0 object-contain opacity-30"
              priority
            />
          </div>
        </div>
        <hr className="border-t-1 mb-5 border-zinc-700" />
      </div>
    </footer>
  );
}

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm font-thin capitalize hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
