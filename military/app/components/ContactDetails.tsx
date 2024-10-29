import { MdCorporateFare, MdLocalPhone, MdOutlineEmail } from 'react-icons/md';
import { type ContactPageQuery } from '@/sanity/sanity-military-utils';

interface ContactDetailsProps
  extends Pick<
    ContactPageQuery,
    | 'contactName'
    | 'contactTitle'
    | 'phone'
    | 'email'
    | 'mailingAddress'
    | 'physicalAddress'
    | 'dunsNumber'
    | 'cageCode'
  > {}

export default function ContactDetails({
  contactName,
  contactTitle,
  phone,
  email,
  mailingAddress,
  physicalAddress,
  dunsNumber,
  cageCode,
}: ContactDetailsProps) {
  return (
    <div className="flex flex-col gap-5 border border-zinc-400 p-10 text-zinc-400">
      <div>
        <h2 className="mb-1 text-sm font-thin uppercase">{contactTitle}</h2>
        <h2>{contactName}</h2>
      </div>
      <div>
        <h2 className="mb-1 text-sm font-thin uppercase">Phone Number</h2>
        <p className="flex items-center gap-1">
          <MdLocalPhone />
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
      <div>
        <h2 className="mb-1 text-sm font-thin uppercase">Email Address</h2>
        <p className="flex items-center gap-1">
          <a href={`mailto: ${email}`}>{email}</a>
        </p>
      </div>
      <div>
        <h2 className="mb-1 text-sm font-thin uppercase"> Mailing Address</h2>
        <p className="flex items-center gap-1">
          <MdOutlineEmail />
          {mailingAddress}
        </p>
      </div>
      <div>
        <h2 className="mb-1 text-sm font-thin uppercase">Physical Address</h2>
        <p className="flex items-center gap-1">
          <MdCorporateFare />
          {physicalAddress}
        </p>
      </div>
      <div>
        <h2 className="mb-1 text-sm font-thin uppercase">DUNS Number</h2>
        <p>{dunsNumber}</p>
      </div>
      <div>
        <h2 className="mb-1 text-sm font-thin uppercase">CAGE Code</h2>
        <p>{cageCode}</p>
      </div>
    </div>
  );
}
