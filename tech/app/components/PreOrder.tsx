import { GetProductQuery } from '@/sanity/sanity-tech-utils';
import Link from 'next/link';

export default function PreOrder({ product }: { product: GetProductQuery }) {
  const {
    preOrderTitle,
    preOrderLink,
    preOrderButtonText,
    preOrderSubtitle,
    preOrderSubtitleLink,
  } = product;
  return (
    <div className="flex flex-col items-center gap-5 px-10 py-10 text-lg text-zinc-400 md:flex-row md:px-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold md:text-2xl">{preOrderTitle}</h2>
        {preOrderSubtitleLink && (
          <Link
            href={preOrderSubtitleLink}
            className="hidden text-base md:block md:text-lg"
          >
            {preOrderSubtitle}
          </Link>
        )}
      </div>
      {preOrderLink && (
        <Link
          href={preOrderLink}
          className="rounded-full bg-red-600 px-4 py-2 font-bold uppercase tracking-wide text-white hover:bg-red-500"
        >
          {preOrderButtonText}
        </Link>
      )}
      {preOrderSubtitleLink && (
        <Link
          href={preOrderSubtitleLink}
          className="block text-base md:hidden md:text-lg"
        >
          {preOrderSubtitle}
        </Link>
      )}
    </div>
  );
}
