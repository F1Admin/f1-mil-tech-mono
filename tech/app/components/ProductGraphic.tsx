import Image from 'next/image';

export default function ProductGraphic({
  productGraphic,
  productGraphicAlt,
}: {
  productGraphic: string;
  productGraphicAlt: string;
}) {
  return (
    <div className="relative h-[600px] w-full">
      {productGraphic && (
        <Image
          src={productGraphic}
          alt={productGraphicAlt}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      )}
    </div>
  );
}
