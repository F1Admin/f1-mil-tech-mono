import {
  MdAlternateEmail,
  MdCorporateFare,
  MdLocalPhone,
  MdOutlineEmail,
} from 'react-icons/md';
import Image from 'next/image';

interface ContactDetailsProps {
  contactName: string;
  contactTitle: string;
  contactImage: string;
  phone: string;
  email: string;
  mailingAddress: string;
  physicalAddress: string;
  dunsNumber: string;
  cageCode: string;
}

export default function ContactDetails({
  contactName,
  contactTitle,
  contactImage,
  phone,
  email,
  mailingAddress,
  physicalAddress,
  dunsNumber,
  cageCode,
}: ContactDetailsProps) {
  return (
    <div className="flex flex-col gap-5 border border-zinc-400 p-10 text-zinc-400">
      <div className="flex gap-5">
        <Image
          src={contactImage}
          alt={contactName}
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>
      <div>
        <h2 className="mb-1 uppercase text-sm font-thin">{contactTitle}</h2>
        <h2>{contactName}</h2>
      </div>
      <div>
        <h2 className="mb-1 uppercase text-sm font-thin">Phone Number</h2>
        <p className="flex gap-1 items-center">
          <MdLocalPhone />
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
      <div>
        <h2 className="mb-1 uppercase text-sm font-thin">Email Address</h2>
        <p className="flex gap-1 items-center">
          <MdAlternateEmail />
          <a href={`mailto: ${email}`}>{email}</a>
        </p>
      </div>
      <div>
        <h2 className="mb-1 uppercase text-sm font-thin"> Mailing Address</h2>
        <p className="flex gap-1 items-center">
          <MdOutlineEmail />
          {mailingAddress}
        </p>
      </div>
      <div>
        <h2 className="mb-1 uppercase text-sm font-thin">Physical Address</h2>
        <p className="flex gap-1 items-center">
          <MdCorporateFare />
          {physicalAddress}
        </p>
      </div>
      <div>
        <h2 className="mb-1 uppercase text-sm font-thin">DUNS Number</h2>
        <p>{dunsNumber}</p>
      </div>
      <div>
        <h2 className="mb-1 uppercase text-sm font-thin">CAGE Code</h2>
        <p>{cageCode}</p>
      </div>
    </div>
  );
}
