import { getProducts, getProductsPage } from '@/sanity/sanity-tech-utils';
import { Metadata } from 'next';
import { Suspense } from 'react';
import FooterHero from '@/app/components/FooterHero';
import Hero from '@/app/components/Hero';
import Loading from '@/app/loading';
import product from '@/sanity/techSchemas/product';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropRightLine } from 'react-icons/ri';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Tech Products Page',
};

export default async function ProductsPage() {
  const {
    heroImage,
    heroImage_hotspot,
    title,
    subtitle,
    footerImage,
    footerImage_hotspot,
  } = await getProductsPage();

  const heroProps = {
    image: heroImage,
    hotspot: heroImage_hotspot,
    title: title,
    subTitle: subtitle,
  };
  const footerProps = {
    image: footerImage,
    hotspot: footerImage_hotspot,
  };

  const products = await getProducts();

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="flex justify-center gap-20 px-4 py-20 md:px-20">
          {products.map((product) => (
            <div key={product._id}>
              <Link
                href={`/products/${product.slug}`}
                className="flex flex-col items-center gap-4"
              >
                <Image
                  src={product.productLogo}
                  alt={product.productTitle}
                  width={200}
                  height={200}
                />
                <h3 className="text-center text-lg">{product.productTitle}</h3>
              </Link>
            </div>
          ))}
        </div>
        <FooterHero {...footerProps} />
      </main>
    </Suspense>
  );
}
