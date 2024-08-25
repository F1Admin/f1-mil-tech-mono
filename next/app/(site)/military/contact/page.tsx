import ContactDetails from '@/app/components/ContactDetails';
import ContactForm from '@/app/components/ContactForm';
import Hero from '@/app/components/Hero';
import { getContactPage } from '@/sanity/sanity-utils';
import { MdLocalPhone } from 'react-icons/md';

export default async function ContactPage() {
  const {
    heroImage,
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
    footerText,
  } = await getContactPage();

  return (
    <section>
      <Hero image={heroImage} title={heroTitle} subTitle={heroSubtitle} />
      <div className="grid grid-cols-2 gap-10 m-10">
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
      <Hero image={footerImage} title={footerText} />
    </section>
  );
}
