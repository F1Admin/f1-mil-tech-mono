import Link from 'next/link';
import techLinks from '../data/techLinks';
import { getProducts } from '@/sanity/sanity-tech-utils';

export default async function Footer() {
  const products = await getProducts();

  return (
    <footer>
      <div className="mx-auto px-4 py-10 text-zinc-400 md:px-10">
        <hr className="border-t-1 mb-5 border-zinc-700" />
        <div className="flex justify-between gap-10 lg:block">
          <div className="mb-5 grid gap-10 px-5 md:mb-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <FooterSection title="FLIGHT-1 TECH">
              {techLinks.map((link) => (
                <FooterLink key={link.path} href={link.path}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>
            <FooterSection title="PRODUCTS">
              {products.map((product) => (
                <FooterLink
                  key={product._id}
                  href={`/products/${product.slug}`}
                >
                  {product.productTitle}
                </FooterLink>
              ))}
            </FooterSection>
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
