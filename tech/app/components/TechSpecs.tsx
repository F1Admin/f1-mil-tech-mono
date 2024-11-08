import { ProductList } from '@/sanity/sanity-tech-utils';
import { RiArrowDropRightLine } from 'react-icons/ri';

export default function TechSpecs({ specs }: { specs: ProductList[] }) {
  const sortedSpecs = specs.sort((a, b) => a.order - b.order);
  return (
    <section className="flex flex-col items-center gap-10 p-10 lg:p-20">
      <h2 className="text-center text-4xl font-thin">
        Technical Specifications
      </h2>
      <div className="flex flex-col flex-wrap gap-5 text-lg text-zinc-100 md:max-h-[500px]">
        {sortedSpecs.map((spec) => (
          <div key={spec._key}>
            <h3 className="text-2xl font-bold uppercase">{spec.title}</h3>
            <ul>
              {spec.items.map((item, index) => (
                <li key={index} className="flex w-96 items-center">
                  <RiArrowDropRightLine className="text-4xl" />
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
