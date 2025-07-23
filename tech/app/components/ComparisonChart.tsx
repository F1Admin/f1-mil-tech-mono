import { GetProductQuery } from '@/sanity/sanity-tech-utils';
import Image from 'next/image';

export default function ComparisonChart({
  product,
}: {
  product: GetProductQuery;
}) {
  const { comparisonChartTitle, comparisonChart } = product;

  return (
    <div className="flex flex-col items-center gap-5 px-10 py-10 text-lg text-zinc-400">
      <h1 className="text-center text-2xl font-bold">{comparisonChartTitle}</h1>
      {comparisonChart && (
        <Image
          src={comparisonChart}
          alt={comparisonChartTitle}
          width={800}
          height={800}
        />
      )}
    </div>
  );
}
