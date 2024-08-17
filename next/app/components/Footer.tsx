'use client';
import Link from 'next/link';
import militaryLinks from '../data/militaryLinks';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="mx-auto py-10 px-10 text-gray-500">
        <hr className="border-t-2 border-gray-500 mb-10" />
        <div className="grid grid-cols-5 px-10 mb-20">
          <div className="flex flex-col gap-10">
            <div className="">FLIGHT-1 MILITARY</div>
            <div className="flex flex-col gap-2">
              {militaryLinks
                .filter((item) => item.label != 'Courses')
                .map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="text-gray-500 hover:text-gray-900 font-thin text-s capitalize"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
          <div>COURSES</div>
          <div>FLIGHT-1 SUPPORTING COURSES</div>
          <div className="flex col-end-6 justify-end">
            <Image
              src="/assets/images/skull.png"
              alt="Flight 1 Skull"
              width={200}
              height={1000}
              className="object-contain opacity-30"
              priority
            />
          </div>
        </div>
        <hr className="border-t-2 border-gray-500 mb-5" />
      </div>
    </footer>
  );
};

export default Footer;
