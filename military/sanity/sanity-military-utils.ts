import { createClient, groq, PortableTextBlock } from 'next-sanity';
import militaryConfig from './config/client-config';

export type SanityHotspot = {
  width?: number;
  height?: number;
  x: number;
  y: number;
  _type?: string;
};

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  _id,
  "militaryLogo": militaryLogo.asset->url,
  "footerLogo": footerLogo.asset->url,
}`;

export type SiteSettingsQuery = {
  _id: string;
  militaryLogo: string;
  footerLogo: string;
};

export async function getSiteSettings(): Promise<SiteSettingsQuery> {
  return createClient(militaryConfig).fetch(
    siteSettingsQuery,
    {},
    { next: { tags: ['siteSettings'] } }
  );
}

const heroBlocksProjection = `
    _type,
    _key,
    _type == "heroTitle" => {
      "image": image.asset->url,
      "hotspot": image.hotspot,
      title,
      titleColor
    },
    _type == "heroTitleSubtitle" => {
      "image": image.asset->url,
      "hotspot": image.hotspot,
      title,
      subTitle,
      titleColor
    },
    _type == "videoHero" => {
      "thumbnail": thumbnail.asset->url,
      "hotspot": thumbnail.hotspot,
      "muxPlaybackId": video.asset->playbackId,
      title,
      autoPlay
    },
    _type == "aboutSection" => {
      "image": image.asset->url,
      "hotspot": image.hotspot,
      title,
      subTitle
    },
    _type == "heroQuote" => {
      "image": image.asset->url,
      "hotspot": image.hotspot,
      title,
      subTitle,
      titleColor,
      quote,
      quoteAuthor,
      quoteColor
    },
    _type == "footerHero" => {
      "image": image.asset->url,
      "hotspot": image.hotspot,
      quote,
      quoteAuthor
    },
    _type == "courseGridBlock" => {
      light
    },
    _type == "courseListBlock" => {
      showDivider
    }
`;

const landingPageQuery = groq`*[_type == "militaryLandingPage"][0]{
  _id,
  _createdAt,
  heroes[] {${heroBlocksProjection}}
}`;

export type HeroTitleBlock = {
  _type: 'heroTitle';
  _key: string;
  image: string;
  hotspot: SanityHotspot | null;
  title: string;
  titleColor?: 'white' | 'black';
};

export type HeroTitleSubtitleBlock = {
  _type: 'heroTitleSubtitle';
  _key: string;
  image: string;
  hotspot: SanityHotspot | null;
  title: string;
  subTitle: string;
  titleColor?: 'white' | 'black';
};

export type VideoHeroBlock = {
  _type: 'videoHero';
  _key: string;
  thumbnail: string;
  hotspot: SanityHotspot | null;
  muxPlaybackId?: string;
  title?: string;
  autoPlay?: boolean;
};

export type AboutSectionBlock = {
  _type: 'aboutSection';
  _key: string;
  image?: string;
  hotspot?: SanityHotspot | null;
  title?: string;
  subTitle?: PortableTextBlock[];
};

export type HeroQuoteBlock = {
  _type: 'heroQuote';
  _key: string;
  image: string;
  hotspot: SanityHotspot | null;
  title?: string;
  subTitle?: string;
  titleColor?: 'white' | 'black';
  quote?: string;
  quoteAuthor?: string;
  quoteColor?: 'white' | 'black';
};

export type FooterHeroBlock = {
  _type: 'footerHero';
  _key: string;
  image: string;
  hotspot: SanityHotspot | null;
  quote?: string;
  quoteAuthor?: string;
};

export type CourseGridBlock = {
  _type: 'courseGridBlock';
  _key: string;
  light?: boolean;
};

export type CourseListBlock = {
  _type: 'courseListBlock';
  _key: string;
  showDivider?: boolean;
};

export type HeroBlock =
  | HeroTitleBlock
  | HeroTitleSubtitleBlock
  | VideoHeroBlock
  | AboutSectionBlock
  | HeroQuoteBlock
  | FooterHeroBlock
  | CourseGridBlock
  | CourseListBlock;

export type LandingPageQuery = {
  _id: string;
  _createdAt: Date;
  heroes: HeroBlock[];
};

export async function getLandingPage(): Promise<LandingPageQuery> {
  return createClient(militaryConfig).fetch(
    landingPageQuery,
    {},
    { next: { tags: ['militaryLandingPage'] } }
  );
}

const aboutPageQuery = groq`*[_type == "militaryAboutPage"][0]{
  _id,
  _createdAt,
  sections[] {${heroBlocksProjection}},
}`;

export type AboutPageQuery = {
  _id: string;
  _createdAt: Date;
  sections?: HeroBlock[];
};

export async function getAboutPage(): Promise<AboutPageQuery> {
  return createClient(militaryConfig).fetch(
    aboutPageQuery,
    {},
    { next: { tags: ['militaryAboutPage'] } }
  );
}

const militaryCoursesPageQuery = groq`*[_type == "militaryCoursesPage"][0]{
  _id,
  _createdAt,
  sections[] {${heroBlocksProjection}},
}`;

export type MilitaryCoursesPageQuery = {
  _id: string;
  _createdAt: Date;
  sections?: HeroBlock[];
};

export async function getMilitaryCoursesPage(): Promise<MilitaryCoursesPageQuery> {
  return createClient(militaryConfig).fetch(
    militaryCoursesPageQuery,
    {},
    { next: { tags: ['militaryCoursesPage'] } }
  );
}

export const getCoursesQuery = groq`*[_type == "course"] | order(order asc){
  _id,
  courseNumber,
  courseTitle,
  "slug": slug.current,
}`;

export type Course = {
  _id: string;
  courseNumber: string;
  courseTitle: string;
  slug: string;
};

export async function getCourses(): Promise<Course[]> {
  return createClient(militaryConfig).fetch(
    getCoursesQuery,
    {},
    { next: { tags: ['course'] } }
  );
}

const getSupporingCoursesQuery = groq`*[_type == "supportingCourse"] | order(order asc){
  _id,
  courseNumber,
  courseTitle,
  "slug": slug.current,
}`;

export type SupportingCourse = {
  _id: string;
  courseNumber: string;
  courseTitle: string;
  slug: string;
};

export async function getSupportingCourses(): Promise<SupportingCourse[]> {
  return createClient(militaryConfig).fetch(
    getSupporingCoursesQuery,
    {},
    { next: { tags: ['supportingCourse'] } }
  );
}

const getCourseQuery = groq`*[_type == "course" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  courseNumber,
  courseTitle,
  "slug": slug.current,
  "videoThumbnail": videoThumbnail.asset->url,
  "videoThumbnail_hotspot": videoThumbnail.hotspot,
  "muxPlaybackId": video.asset->playbackId,
  showCourseImage,
  "courseSeriesImage": courseSeriesImage.asset->url,
  courseDescription,
  courseRequirements,
  "courseFooterImage": courseFooterImage.asset->url,
  "courseFooterImage_hotspot": courseFooterImage.hotspot,
  courseFooterText,
  courseFooterAuthor,
  "courseCarousel": courseCarousel[]{
    "image": image.asset->url,
    "image_hotspot": image.hotspot,
  },
}`;

export type GetCourseQuery = {
  _id: string;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  courseNumber: string;
  courseTitle: string;
  slug: string;
  videoThumbnail?: string;
  videoThumbnail_hotspot?: SanityHotspot;
  muxPlaybackId?: string;
  showCourseImage?: boolean;
  courseSeriesImage?: string;
  courseDescription: PortableTextBlock[];
  courseRequirements: string[];
  courseFooterImage: string;
  courseFooterImage_hotspot: SanityHotspot;
  courseFooterText: string;
  courseFooterAuthor: string;
  courseCarousel: CourseCarousel[];
};

export type CourseCarousel = {
  image: string;
  image_hotspot: SanityHotspot;
};

export async function getCourse(slug: string): Promise<GetCourseQuery> {
  return createClient(militaryConfig).fetch(
    getCourseQuery,
    { slug },
    { next: { tags: ['course'] } }
  );
}

const getSupportingCourseQuery = groq`*[_type == "supportingCourse" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  courseTitle,
  "slug": slug.current,
  courseDescription,
  courseRequirements,
  "courseSeriesImage": courseSeriesImage.asset->url,
  "courseFooterImage": courseFooterImage.asset->url,
  "courseFooterImage_hotspot": courseFooterImage.hotspot,
  courseFooterText,
  courseFooterAuthor,
  "courseCarousel": courseCarousel[]{
    "image": image.asset->url,
    "image_hotspot": image.hotspot,
  },
}`;

export type GetSupportingCourseQuery = {
  _id: string;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  courseTitle: string;
  slug: string;
  courseDescription: PortableTextBlock[];
  courseRequirements: string[];
  courseSeriesImage: string;
  courseFooterImage: string;
  courseFooterImage_hotspot: SanityHotspot;
  courseFooterText: string;
  courseFooterAuthor: string;
  courseCarousel: CourseCarousel[];
};

export async function getSupportingCourse(
  slug: string
): Promise<GetSupportingCourseQuery> {
  return createClient(militaryConfig).fetch(
    getSupportingCourseQuery,
    { slug },
    { next: { tags: ['supportingCourse'] } }
  );
}

const getParnersPageQuery = groq`*[_type == "militaryPartnerPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  heroTitle,
  heroSubtitle,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
  footerText,
  footerAuthor,
}`;

export type PartnerPageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  heroTitle: string;
  heroSubtitle: string;
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
  footerText: string;
  footerAuthor: string;
};

export async function getPartnersPage(): Promise<PartnerPageQuery> {
  return createClient(militaryConfig).fetch(
    getParnersPageQuery,
    {},
    { next: { tags: ['militaryPartnerPage'] } }
  );
}

const getPartnersQuery = groq`*[_type == "partner"] | order(order asc){
  _id,
  partnerName,
  "partnerLogo": partnerLogo.asset->url,
  partnerUrl,
}`;

export type Partner = {
  _id: string;
  partnerName: string;
  partnerLogo: string;
  partnerUrl: string;
};

export async function getPartners(): Promise<Partner[]> {
  return createClient(militaryConfig).fetch(
    getPartnersQuery,
    {},
    { next: { tags: ['partner'] } }
  );
}

const getContactPageQuery = groq`*[_type == "militaryContactPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  heroTitle,
  heroSubtitle,
  contactName,
  "contactImage": contactImage.asset->url,
  contactTitle,
  phone,
  email,
  mailingAddress,
  physicalAddress,
  dunsNumber,
  cageCode,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
  footerText,
  footerAuthor,
}`;

export type ContactPageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  heroTitle: string;
  heroSubtitle: string;
  contactName: string;
  contactImage: string;
  contactTitle: string;
  phone: string;
  email: string;
  mailingAddress: string;
  physicalAddress: string;
  dunsNumber: string;
  cageCode: string;
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
  footerText: string;
  footerAuthor: string;
};

export async function getContactPage(): Promise<ContactPageQuery> {
  return createClient(militaryConfig).fetch(
    getContactPageQuery,
    {},
    { next: { tags: ['militaryContactPage'] } }
  );
}

const getInstructorsQuery = groq`*[_type == "instructor"] | order(order asc){
  _id,
  email,
  firstName,
  lastName,
  title,
  "profileImage": profileImage.asset->url,
  "alt": profileImage.alt,
  numberOfJumps,
  dateJoinedFlight1,
}`;

export type Instructor = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  title: string;
  profileImage: string;
  alt: string;
  numberOfJumps: number;
  dateJoinedFlight1: number;
  yearsWithFlight1: number;
};

export async function getInstructors(): Promise<Instructor[]> {
  const instructors: Instructor[] =
    await createClient(militaryConfig).fetch(getInstructorsQuery);
  return instructors.map((instructor) => {
    return {
      ...instructor,
      yearsWithFlight1: calculateYearsWithFlight1(instructor.dateJoinedFlight1),
    };
  });
}

function calculateYearsWithFlight1(dateJoined: number): number {
  if (!dateJoined) return 0;
  const joinDate = dateJoined;
  const now = new Date();
  const diffTime = now.getFullYear() - joinDate;
  return diffTime;
}

const getCadrePageQuery = groq`*[_type == "militaryCadrePage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  heroTitle,
  heroSubtitle,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
  footerQuote,
  footerAuthor,
}`;

export type CadrePageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  heroTitle: string;
  heroSubtitle: string;
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
  footerQuote: string;
  footerAuthor: string;
};

export async function getCadrePage(): Promise<CadrePageQuery> {
  return createClient(militaryConfig).fetch(
    getCadrePageQuery,
    {},
    { next: { tags: ['militaryCadrePage'] } }
  );
}
