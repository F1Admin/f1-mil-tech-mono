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
      <Hero image={heroImage} title={heroTitle} subTitle={heroSubtitle} />
      <div className="grid min-h-[400px] grid-cols-3 gap-5 gap-y-20 p-20">
        {partners.map((partner) => (
          <Link
            href={partner.partnerUrl}
            key={partner._id}
            className="flex flex-col items-center justify-center gap-5 text-zinc-400"
          >
            <div className="flex h-40 items-center">
              <Image
                src={partner.partnerLogo}
                alt={partner.partnerName}
                width="0"
                height="0"
                sizes="100vw"
                style={{ filter: 'grayscale(100%)' }}
                className="h-auto w-40"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-lg">{partner.partnerName}</div>
              <div>{partner.partnerUrl.replace('https://', '')}</div>
            </div>
          </Link>
        ))}
      </div>
      <Hero image={footerImage} title={footerText} />
    </section>
  );
}
