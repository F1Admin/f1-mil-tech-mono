import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import {
  getLandingPage,
  getCourses,
  getSupportingCourses,
} from '@/sanity/sanity-military-utils';
import BlockRenderer from '@/app/components/BlockRenderer';

export async function generateMetadata() {
  return {
    title: 'Military Landing Page',
  };
}

export default async function MilitaryLandingPage() {
  try {
    const { heroes } = await getLandingPage();
    const courses = await getCourses();
    const supportingCourses = await getSupportingCourses();

    return (
      <Suspense fallback={<Loading />}>
        <section>
          <BlockRenderer
            blocks={heroes}
            courses={courses}
            supportingCourses={supportingCourses}
          />
        </section>
      </Suspense>
    );
  } catch (error) {
    console.error('Failed to load landing page:', error);
    notFound();
  }
}
