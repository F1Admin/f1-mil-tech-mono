import React from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'next-sanity';

const ProductDescription = ({
  productDescription,
}: {
  productDescription: PortableTextBlock[];
}) => {
  if (!productDescription) return null;

  // Split the content into two roughly equal parts
  const splitContent = (content: PortableTextBlock[]) => {
    const totalBlocks = content.length;
    const midPoint = Math.ceil(totalBlocks / 2);
    return [content.slice(0, midPoint), content.slice(midPoint)];
  };

  const [leftColumn, rightColumn] = splitContent(productDescription);

  return (
    <div className="grid grid-cols-1 gap-8 px-10 py-10 text-lg text-zinc-400 md:grid-cols-2 md:px-20">
      <div className="flex flex-col gap-5">
        <PortableText value={leftColumn} />
      </div>
      <div className="flex flex-col gap-5">
        <PortableText value={rightColumn} />
      </div>
    </div>
  );
};

export default ProductDescription;
