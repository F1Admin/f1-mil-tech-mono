import { SanityHotspot } from '@/sanity/sanity-tech-utils';
import Image from 'next/image';

interface HeroProps {
  image: string;
  hotspot?: SanityHotspot | null;
  productLogo: string;
  productTitle: string;
}

export default function Hero({
  image,
  hotspot = { x: 0.5, y: 0.5 },
  productLogo,
  productTitle,
}: HeroProps) {
  const effectiveHotspot = hotspot ?? { x: 0.5, y: 0.5 };
  const backgroundPosition = `${effectiveHotspot.x * 100}% ${effectiveHotspot.y * 100}%`;

  return (
    <div className="relative grid min-h-[400px] grid-rows-[1fr_auto] p-4 md:p-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={productTitle || 'Hero Image'}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
        />
      </div>
      <div className="z-10 row-start-2">
        <ProductInfo productLogo={productLogo} productTitle={productTitle} />
      </div>
    </div>
  );
}

function ProductInfo({
  productLogo,
  productTitle,
}: {
  productLogo: string;
  productTitle: string;
}) {
  return (
    <div className="flex items-center">
      <div className="relative h-32 w-48">
        <Image
          src={productLogo}
          alt={productTitle}
          fill
          sizes="288px"
          className="object-contain"
          priority
        />
      </div>
      <div className="relative mx-5">
        <div
          className="absolute bottom-[-3em] h-full w-px bg-zinc-400"
          style={{ height: '6em' }}
        ></div>
      </div>
      <span className="text-2xl font-semibold uppercase">{productTitle}</span>
    </div>
  );
}
