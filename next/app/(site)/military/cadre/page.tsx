import Hero from '@/app/components/Hero';
import { getCadrePage, getInstructors } from '@/sanity/sanity-utils';
import InstructorCard from '@/app/components/InstructorCard';
import Image from 'next/image';

export default async function Cadre() {
  const { heroImage, heroTitle, heroSubtitle, footerImage, footerText } =
    await getCadrePage();
  const instructors = await getInstructors();
  const foundingMember = instructors
    .filter((instructor) => instructor.yearsWithFlight1 === 'Founding Member')
    .sort((a, b) => b.numberOfJumps - a.numberOfJumps);
  const instructor = instructors
    .filter((instructor) => instructor.yearsWithFlight1 !== 'Founding Member')
    .sort((a, b) => Number(b.yearsWithFlight1) - Number(a.yearsWithFlight1));

  return (
    <section>
      <Hero image={heroImage} title={heroTitle} subTitle={heroSubtitle} />
      <div className="flex flex-wrap justify-center gap-7 px-4 py-10 text-zinc-400 md:gap-10 md:p-11 lg:p-20">
        {foundingMember.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
        {instructor.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
      <Hero image={footerImage} title={footerText} />
    </section>
  );
}
