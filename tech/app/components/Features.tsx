import { ProductList } from '@/sanity/sanity-tech-utils';

export default function Features({ features }: { features: ProductList[] }) {
  const sortedFeatures = features.sort((a, b) => a.order - b.order);
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-10">
      <div className="grid grid-cols-1 gap-5 text-lg text-zinc-100 lg:max-h-[500px] lg:grid-cols-3">
        {sortedFeatures.map((feature) => (
          <div
            key={feature._key}
            className="flex w-[350px] flex-col gap-2 sm:w-[400px] lg:w-full"
          >
            <h3 className="text-2xl font-bold uppercase">{feature.title}</h3>
            <ul>
              {feature.items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-2 xl:flex-row xl:items-center"
                >
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
