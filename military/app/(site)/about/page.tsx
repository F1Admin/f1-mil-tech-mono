import {
  getAboutPage,
  getCourses,
  getSupportingCourses,
} from '@/sanity/sanity-military-utils';
import BlockRenderer from '@/app/components/BlockRenderer';
import { Suspense } from 'react';
import Loading from '@/app/loading';

export async function generateMetadata() {
  return {
    title: 'Military About Page',
  };
}

export default async function MilitaryAboutPage() {
  const { sections } = await getAboutPage();
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
