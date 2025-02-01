import { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getProduct, getProducts } from '@/sanity/sanity-tech-utils';
import Slider from '@/app/components/Slider/Slider';
import Hero from '@/app/components/Hero';
import Loading from '@/app/loading';
import { PortableText } from '@portabletext/react';
import ProductHero from '@/app/components/ProductHero';
import ProductDescription from '@/app/components/ProductDescription';

export const revalidate = 0;

type Params = Promise<{
  slug: string;
}>;

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }
  return {
    title: product.productTitle,
    description: product.productDescription[0].children[0].text,
  };
};

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <ProductHero
          image={product.heroImage}
          productLogo={product.productLogo}
          productTitle={product.productTitle}
        />
        {product.productQuoteToggle && (
          <div className="px-10 pt-10 text-lg text-zinc-400 md:px-20">
            {`"${product.productQuote}"`}
          </div>
        )}
        {product.productDescription && (
          <ProductDescription productDescription={product.productDescription} />
        )}
        {product.featuresToggle && (
          <div className="mb-10 flex flex-col gap-5 text-zinc-400">
            <hr className="mx-4 my-10 border-zinc-700 px-4 md:mx-10" />
            <div className="flex flex-col gap-5 px-10 md:px-20">
              <PortableText
                value={product.features}
                components={{
                  block: {
                    normal: ({ children }) => <div>{children}</div>,
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="space-y-2">{children}</ul>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="flex items-center">
                        <span className="mr-2 text-zinc-100">•</span>
                        <span>{children}</span>
                      </li>
                    ),
                  },
                }}
              />
            </div>
          </div>
        )}
        {product.productCarousel && <Slider images={product.productCarousel} />}
        <Hero
          image={product.footerImage}
          hotspot={product.footerImage_hotspot}
          title={product.footerText}
        />
      </main>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
