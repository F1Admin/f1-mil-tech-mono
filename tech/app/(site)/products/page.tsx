import { getProducts, getProductsPage } from '@/sanity/sanity-tech-utils';
import { Metadata } from 'next';
import { Suspense } from 'react';
import FooterHero from '@/app/components/FooterHero';
import Hero from '@/app/components/Hero';
import Loading from '@/app/loading';
import product from '@/sanity/techSchemas/product';
import Link from 'next/link';
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
        <div className="grid-col-1 grid min-h-[400px] gap-10 px-4 py-16 text-zinc-400 md:grid-cols-2 md:px-10 lg:pl-64 xl:pl-96">
          <div className="flex flex-col gap-7 md:gap-3">
            <h3 className="text-2xl">SELECT A PRODUCT</h3>
            <ul className="flex flex-col">
              {products.map((product) => (
                <Link
                  key={product._id}
                  href={`/products/${product.slug}`}
                  className="flex items-center text-xl transition hover:font-normal hover:text-white"
                >
                  <RiArrowDropRightLine className="text-4xl" />
                  {product.productTitle}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <FooterHero {...footerProps} />
      </main>
    </Suspense>
  );
}
