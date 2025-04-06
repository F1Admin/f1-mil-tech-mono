import Hero from '@/app/components/Hero';
import { getLandingPage, getProducts } from '@/sanity/sanity-tech-utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import Image from 'next/image';
import Link from 'next/link';

export default async function TechLandingPage() {
  try {
    const { image1, image1_hotspot, title, subTitle, image2, image2_hotspot } =
      await getLandingPage();

    const products = await getProducts();

    return (
      <Suspense fallback={<Loading />}>
        <section>
          <Hero
            image={image1}
            hotspot={image1_hotspot}
            title={title}
            title2={subTitle}
          />
          <div className="mb-10 flex flex-col items-center justify-center py-10 md:flex-row md:gap-8">
            {products.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product._id}
                className="mb-8 flex h-full w-64 flex-col p-2 md:mb-0"
              >
                <div className="relative aspect-square w-full flex-grow">
                  <Image
                    src={product.productLogo}
                    alt={product.productTitle}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-center">
                  <h2 className="uppercase text-zinc-500">
                    {product.productTitle}
                  </h2>
                  <div className="text-sm uppercase text-zinc-400 underline">
                    Learn More
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Hero image={image2} hotspot={image2_hotspot} />
        </section>
      </Suspense>
    );
  } catch (error) {
    console.error('Failed to load landing page:', error);
    notFound();
  }
}
