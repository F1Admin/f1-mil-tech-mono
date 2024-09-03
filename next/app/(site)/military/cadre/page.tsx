import Hero from '@/app/components/Hero';
import { getCadrePage, getInstructors } from '@/sanity/sanity-utils';
import Image from 'next/image';

export default async function Cadre() {
  const { heroImage, heroTitle, heroSubtitle, footerImage, footerText } =
    await getCadrePage();
  const instructors = await getInstructors();

  return (
    <section>
      <Hero image={heroImage} title={heroTitle} subTitle={heroSubtitle} />
      <div className="flex flex-wrap justify-center gap-7 px-4 py-10 text-zinc-400 md:gap-10 md:p-11 lg:p-20">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="flex flex-col gap-3">
            <div className="relative h-48 w-48 overflow-hidden rounded transition lg:h-52 lg:w-52">
              <Image
                src={instructor.profileImage}
                alt={instructor.alt}
                className="rounded"
                fill
                sizes="(min-width: 1024px) 208px, 192px"
                style={{
                  filter: 'grayscale(100%)',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="flex gap-2 text-xl">
                {instructor.firstName} {instructor.lastName}
              </h2>
            </div>
            <div>
              <div>
                <p className="text-sm font-thin uppercase">Jumps:</p>
                <span>{instructor.numberOfJumps}</span>
              </div>
              <div>
                <p className="text-sm font-thin uppercase">Years in Sport:</p>
                <span>{instructor.yearsInSport}</span>
              </div>
              <div>
                <p className="text-sm font-thin uppercase">
                  Years with Flight-1:
                </p>
                <span>{instructor.yearsWithFlight1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Hero image={footerImage} title={footerText} />
    </section>
  );
}
