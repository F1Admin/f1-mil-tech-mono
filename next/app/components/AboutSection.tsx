import { SanityHotspot } from '@/sanity/sanity-utils';
import { PortableText, PortableTextBlock } from '@portabletext/react';

interface AboutSectionProps {
  image?: string;
  hotspot?: SanityHotspot;
  title: string;
  subTitle: PortableTextBlock[];
}

export default function AboutSection({
  image,
  hotspot = { x: 0.5, y: 0.5 },
  title,
  subTitle,
}: AboutSectionProps) {
  const fallbackHotspot = { x: 0.5, y: 0.5 };
  const effectiveHotspot = hotspot ?? fallbackHotspot;
  const backgroundPosition = `${effectiveHotspot.x * 100}% ${effectiveHotspot.y * 100}%`;

  return (
    <div>
      {image ? (
        <div
          className="relative min-h-[400px] bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: backgroundPosition,
          }}
        >
          <div className="absolute bottom-10 left-10 mr-10 flex flex-col gap-4 md:left-28 md:w-2/5">
            <h3 className="text-xl font-bold uppercase">{title}</h3>
            <div className="whitespace-pre-line text-lg font-thin">
              <PortableText
                value={subTitle}
                components={{
                  types: {},
                  marks: {},
                  block: {
                    normal: ({ children }: any) => {
                      if (children.length === 1 && children[0] === '') {
                        return <br />;
                      }
                      return <p>{children}</p>;
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 md:min-h-[400px]">
          <h3 className="text-xl font-bold uppercase">{title}</h3>
          <div className="text-lg font-thin">
            <PortableText
              value={subTitle}
              components={{
                types: {},
                marks: {},
                block: {
                  normal: ({ children }: any) => {
                    if (children.length === 1 && children[0] === '') {
                      return <br />;
                    }
                    return <p>{children}</p>;
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
