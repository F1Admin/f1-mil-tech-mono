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
      <div className="flex flex-wrap justify-center gap-7 md:gap-10 py-10 px-4 md:p-11 lg:p-20 text-zinc-400">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="flex flex-col gap-3">
            <div className="relative w-48 h-48 lg:w-52 lg:h-52 transition overflow-hidden rounded">
              <Image
                src={instructor.profileImage}
                alt={instructor.alt}
                layout="fill"
                objectFit="cover"
                className="rounded"
                objectPosition="top"
                style={{ filter: 'grayscale(100%)' }}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="flex text-xl gap-2">
                {instructor.firstName} {instructor.lastName}
              </h2>
            </div>
            <div>
              <div>
                <p className="uppercase font-thin text-sm">Jumps:</p>
                <span>{instructor.numberOfJumps}</span>
              </div>
              <div>
                <p className="uppercase font-thin text-sm">Years in Sport:</p>
                <span>{instructor.yearsInSport}</span>
              </div>
              <div>
                <p className="uppercase font-thin text-sm">
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
