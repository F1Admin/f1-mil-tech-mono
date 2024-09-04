import ContactDetails from '@/app/components/ContactDetails';
import ContactForm from '@/app/components/ContactForm';
import FooterHero from '@/app/components/FooterHero';
import Hero from '@/app/components/Hero';
import { getContactPage } from '@/sanity/sanity-utils';
import { Suspense } from 'react';
import Loading from '@/app/(site)/loading';
import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Military Contact Page',
};

export default async function ContactPage() {
  const {
    heroImage,
    heroImage_hotspot,
    heroTitle,
    heroSubtitle,
    contactName,
    contactTitle,
    contactImage,
    phone,
    email,
    mailingAddress,
    physicalAddress,
    dunsNumber,
    cageCode,
    footerImage,
    footerImage_hotspot,
    footerText,
    footerAuthor,
  } = await getContactPage();

  const heroProps = {
    image: heroImage,
    hotspot: heroImage_hotspot,
    title: heroTitle,
    subTitle: heroSubtitle,
  };

  const contactDetailsProps = {
    contactName,
    contactTitle,
    contactImage,
    phone,
    email,
    mailingAddress,
    physicalAddress,
    dunsNumber,
    cageCode,
  };

  const footerHeroProps = {
    image: footerImage,
    hotspot: footerImage_hotspot,
    quote: footerText,
    author: footerAuthor,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="m-10 grid grid-cols-2 gap-10">
          <ContactDetails {...contactDetailsProps} />
          <ContactForm />
        </div>
        <FooterHero {...footerHeroProps} />
      </main>
    </Suspense>
  );
}
