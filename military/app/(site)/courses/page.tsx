import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  getCourses,
  getMilitaryCoursesPage,
  getSupportingCourses,
} from '@/sanity/sanity-military-utils';
import Loading from '@/app/loading';
import BlockRenderer from '@/app/components/BlockRenderer';

export const metadata: Metadata = {
  title: 'Military Courses Page',
};

export default async function MilitaryCoursesPage() {
  const { sections } = await getMilitaryCoursesPage();
  const courses = await getCourses();
  const supportingCourses = await getSupportingCourses();

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <BlockRenderer
          blocks={sections}
          courses={courses}
          supportingCourses={supportingCourses}
        />
      </main>
    </Suspense>
  );
}
