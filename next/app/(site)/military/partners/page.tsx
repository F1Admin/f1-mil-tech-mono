import Hero from '@/app/components/Hero';
import { getPartners, getPartnersPage } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function PartnersPage() {
  const { heroImage, heroTitle, heroSubtitle, footerImage, footerText } =
    await getPartnersPage();
  const partners = await getPartners();
  return (
    <section>
      <Hero
        image1={heroImage}
        image1_title={heroTitle}
        image1_subTitle={heroSubtitle}
      />
      <div className="grid grid-cols-3 gap-5 gap-y-20 p-20 min-h-[400px]">
        {partners.map((partner) => (
          <Link
            href={partner.partnerUrl}
            key={partner._id}
            className="flex flex-col gap-5 justify-center items-center text-zinc-400"
          >
            <div className="flex items-center h-40">
              <Image
                src={partner.partnerLogo}
                alt={partner.partnerName}
                width="0"
                height="0"
                sizes="100vw"
                style={{ filter: 'grayscale(100%)' }}
                className="w-40 h-auto"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg">{partner.partnerName}</div>
              <div>{partner.partnerUrl.replace('https://', '')}</div>
            </div>
          </Link>
        ))}
      </div>
      <Hero image1={footerImage} image1_title={footerText} />
    </section>
  );
}
