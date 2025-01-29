import Link from 'next/link';
import Image from 'next/image';
import techLinks from '../data/techLinks';
import { getProducts, getSiteSettings } from '@/sanity/sanity-tech-utils';

export default async function Footer() {
  const products = await getProducts();
  const { footerLogo } = await getSiteSettings();
  return (
    <footer>
      <div className="mx-auto px-4 py-10 text-zinc-400 md:px-10">
        <hr className="border-t-1 mb-5 border-zinc-700" />
        <div className="flex justify-between gap-10 lg:block">
          <div className="mb-5 flex w-full flex-col gap-10 px-5 md:mb-16 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="flex justify-between">
              <FooterSection title="FLIGHT-1 TECH">
                {techLinks.map((link) => (
                  <FooterLink key={link.path} href={link.path}>
                    {link.label}
                  </FooterLink>
                ))}
              </FooterSection>
              <div className="relative h-[45px] w-[200px] md:hidden">
                <Image
                  src={footerLogo}
                  alt="Flight 1 Tech Logo"
                  fill
                  sizes="200px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <FooterSection title="PRODUCTS">
              {products.map((product) => (
                <FooterLink
                  key={product._id}
                  href={`/products/${product.slug}`}
                >
                  {`${product.slug.toUpperCase()} / ${product.productTitle}`}
                </FooterLink>
              ))}
            </FooterSection>
            <div className="hidden md:col-end-4 md:block lg:col-end-5 xl:col-end-6">
              <div className="relative h-[45px] w-[200px]">
                <Image
                  src={footerLogo}
                  alt="Flight 1 Tech Logo"
                  fill
                  sizes="200px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-1 mb-5 border-zinc-700" />
      </div>
    </footer>
  );
}

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm font-thin capitalize hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
