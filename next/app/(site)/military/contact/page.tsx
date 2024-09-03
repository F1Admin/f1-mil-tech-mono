import ContactDetails from '@/app/components/ContactDetails';
import ContactForm from '@/app/components/ContactForm';
import FooterHero from '@/app/components/FooterHero';
import Hero from '@/app/components/Hero';
import { getContactPage } from '@/sanity/sanity-utils';

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

  return (
    <section>
      <Hero
        image={heroImage}
        hotspot={heroImage_hotspot}
        title={heroTitle}
        subTitle={heroSubtitle}
      />
      <div className="m-10 grid grid-cols-2 gap-10">
        <ContactDetails
          contactName={contactName}
          contactTitle={contactTitle}
          contactImage={contactImage}
          phone={phone}
          email={email}
          mailingAddress={mailingAddress}
          physicalAddress={physicalAddress}
          dunsNumber={dunsNumber}
          cageCode={cageCode}
        />
        <ContactForm />
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
