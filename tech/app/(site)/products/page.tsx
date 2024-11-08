import { getProducts, getProductsPage } from '@/sanity/sanity-tech-utils';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import FooterHero from '@/app/components/FooterHero';
import Hero from '@/app/components/Hero';
import Loading from '@/app/loading';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="flex flex-col justify-center gap-10 px-4 py-10 md:flex-row md:px-20 lg:py-20">
          {products.map((product) => (
            <div key={product._id}>
              <Link
                href={`/products/${product.slug}`}
                className="flex flex-col items-center gap-2"
              >
                <div className="relative h-[150px] w-[200px] lg:h-[200px] lg:w-[300px] xl:h-[300px] xl:w-[400px]">
                  <Image
                    src={product.productLogo}
                    alt={product.productTitle}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-center text-xl font-thin uppercase tracking-tighter lg:text-2xl">
                  {product.productTitle}
                </h3>
              </Link>
            </div>
          ))}
        </div>
        <FooterHero {...footerProps} />
      </main>
    </Suspense>
  );
}
