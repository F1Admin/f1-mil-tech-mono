import FooterHero from '@/app/components/FooterHero';
import Hero from '@/app/components/Hero';
import { getPartners, getPartnersPage } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function PartnersPage() {
  const {
    heroImage,
    heroImage_hotspot,
    heroTitle,
    heroSubtitle,
    footerImage,
    footerImage_hotspot,
    footerText,
    footerAuthor,
  } = await getPartnersPage();
  const partners = await getPartners();

  console.log(footerAuthor);
  return (
    <section>
      <Hero
        image={heroImage}
        hotspot={heroImage_hotspot}
        title={heroTitle}
        subTitle={heroSubtitle}
      />
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
      <FooterHero
        image={footerImage}
        hotspot={footerImage_hotspot}
        quote={footerText}
        author={footerAuthor}
      />
    </section>
  );
}
