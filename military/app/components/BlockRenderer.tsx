import {
  HeroBlock,
  Course,
  SupportingCourse,
} from '@/sanity/sanity-military-utils';
import {
  HeroTitle,
  HeroTitleSubtitle,
  VideoHero,
} from '@/app/components/heroes';
import AboutSection from '@/app/components/AboutSection';
import Hero from '@/app/components/Hero';
import FooterHero from '@/app/components/FooterHero';
import CourseGrid from '@/app/components/CourseGrid/CourseGrid';
import CourseListSection from '@/app/components/CourseListSection';

type BlockRendererContext = {
  courses?: Course[];
  supportingCourses?: SupportingCourse[];
};

function renderBlock(block: HeroBlock, context: BlockRendererContext) {
  switch (block._type) {
    case 'heroTitle':
      return (
        <HeroTitle
          key={block._key}
          image={block.image}
          hotspot={block.hotspot}
          title={block.title}
          titleColor={block.titleColor}
        />
      );
    case 'heroTitleSubtitle':
      return (
        <HeroTitleSubtitle
          key={block._key}
          image={block.image}
          hotspot={block.hotspot}
          title={block.title}
          subTitle={block.subTitle}
          titleColor={block.titleColor}
        />
      );
    case 'videoHero':
      return (
        <div key={block._key} className="py-5 lg:py-10">
          <VideoHero
            thumbnail={block.thumbnail}
            thumbnailHotspot={block.hotspot}
            muxPlaybackId={block.muxPlaybackId}
            title={block.title}
            autoPlay={block.autoPlay}
          />
        </div>
      );
    case 'aboutSection':
      return (
        <AboutSection
          key={block._key}
          image={block.image}
          hotspot={block.hotspot ?? undefined}
          title={block.title ?? ''}
          subTitle={block.subTitle ?? []}
        />
      );
    case 'heroQuote':
      return (
        <Hero
          key={block._key}
          image={block.image}
          hotspot={block.hotspot}
          title={block.title}
          subTitle={block.subTitle}
          titleColor={block.titleColor}
          quote={block.quote}
          author={block.quoteAuthor}
          quoteColor={block.quoteColor}
        />
      );
    case 'footerHero':
      return (
        <FooterHero
          key={block._key}
          image={block.image}
          hotspot={block.hotspot ?? undefined}
          quote={block.quote}
          author={block.quoteAuthor}
        />
      );
    case 'courseGridBlock':
      return (
        <CourseGrid key={block._key} completed={[]} light={block.light} />
      );
    case 'courseListBlock':
      return (
        <CourseListSection
          key={block._key}
          courses={context.courses ?? []}
          supportingCourses={context.supportingCourses ?? []}
          showDivider={block.showDivider}
        />
      );
    default:
      return null;
  }
}

export default function BlockRenderer({
  blocks,
  courses,
  supportingCourses,
}: {
  blocks?: HeroBlock[] | null;
  courses?: Course[];
  supportingCourses?: SupportingCourse[];
}) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block) =>
        renderBlock(block, { courses, supportingCourses })
      )}
    </>
  );
}
