import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProduct, getProducts } from '@/sanity/sanity-tech-utils';
import Slider from '@/app/components/Slider/Slider';
import Hero from '@/app/components/Hero';
import FooterHero from '@/app/components/FooterHero';
import Loading from '@/app/loading';
import { PortableText } from '@portabletext/react';
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
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
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

  const heroProps = {
    image: product.heroImage,
    hotspot: product.heroImage_hotspot,
    courseTitle: product.productTitle,
  };

  const footerHeroProps = {
    image: product.footerImage,
    hotspot: product.footerImage_hotspot,
    quote: product.footerText,
    author: product.footerAuthor,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="grid grid-cols-2 items-center gap-5 p-20">
          {product.productImage && product.productTitle && (
            <Image
              src={product.productImage}
              alt={product.productTitle}
              width={500}
              height={200}
            />
          )}
          <div className="flex flex-col gap-5 text-lg text-zinc-100">
            <PortableText value={product.productDescription} />
          </div>
        </div>
        {/* <Slider images={product.productCarousel} /> */}
        <FooterHero {...footerHeroProps} />
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
