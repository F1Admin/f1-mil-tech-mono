import { ProductList } from '@/sanity/sanity-tech-utils';
import { RiArrowDropRightLine } from 'react-icons/ri';

export default function Features({ features }: { features: ProductList[] }) {
  const sortedFeatures = features.sort((a, b) => a.order - b.order);
  return (
    <section className="flex flex-col items-center gap-10 p-10">
      <div className="flex flex-wrap gap-5 text-lg text-zinc-100 md:max-h-[500px]">
        {sortedFeatures.map((feature) => (
          <div key={feature._key} className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold uppercase">{feature.title}</h3>
            <ul>
              {feature.items.map((item, index) => (
                <li key={index} className="flex w-[450px] items-center gap-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
