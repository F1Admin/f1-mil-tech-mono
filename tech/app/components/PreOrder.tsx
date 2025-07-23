import { GetProductQuery } from '@/sanity/sanity-tech-utils';
import Link from 'next/link';

export default function PreOrder({ product }: { product: GetProductQuery }) {
  const {
    preOrderTitle,
    preOrderLink,
    preOrderButtonText,
    preOrderSubtitle,
    preOrderSubtitleLink,
    preOrderSubtitleButtonText,
  } = product;
  return (
    <div className="flex flex-col gap-5 px-10 py-10 text-lg text-zinc-400">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <h2 className="text-lg font-bold md:text-2xl">{preOrderTitle}</h2>
        {preOrderLink && (
          <Link
            href={preOrderLink}
            className="rounded-full bg-red-600 px-4 py-2 font-bold uppercase tracking-wide text-white hover:bg-red-500"
          >
            {preOrderButtonText}
          </Link>
        )}
      </div>
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <h3 className="text-base font-bold md:text-lg">{preOrderSubtitle}</h3>
        {preOrderSubtitleLink && (
          <Link
            href={preOrderSubtitleLink}
            className="rounded-full bg-red-700 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-red-600"
          >
            {preOrderSubtitleButtonText}
          </Link>
        )}
      </div>
    </div>
  );
}
