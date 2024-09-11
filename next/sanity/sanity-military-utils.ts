import { createClient, groq, PortableTextBlock } from 'next-sanity';
import { militaryConfig } from './config/client-config';

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
  return createClient(militaryConfig).fetch(siteSettingsQuery);
}

const landingPageQuery = groq`*[_type == "militaryLandingPage"][0]{
  _id,
  _createdAt,
  "image1": image1.asset->url,
  "image1_hotspot": image1.hotspot,
  image1_title,
  "image2": image2.asset->url,
  "image2_hotspot": image2.hotspot,
  image2_title,
  image2_subTitle,
  "image3": image3.asset->url,
  "image3_hotspot": image3.hotspot,
}`;

export type LandingPageQuery = {
  _id: string;
  _createdAt: Date;
  image1: string;
  image1_hotspot: SanityHotspot;
  image1_title: string;
  image2: string;
  image2_hotspot: SanityHotspot;
  image2_title: string;
  image2_subTitle: string;
  image3: string;
  image3_hotspot: SanityHotspot;
};

export async function getLandingPage(): Promise<LandingPageQuery> {
  return createClient(militaryConfig).fetch(landingPageQuery);
}

const aboutPageQuery = groq`*[_type == "militaryAboutPage"][0]{
  _id,
  _createdAt,
  "image1": image1.asset->url,
  "image1_hotspot": image1.hotspot,
  image1_title,
  image1_subTitle,
  "image2": image2.asset->url,
  "image2_hotspot": image2.hotspot,
  image2_title,
  image2_subTitle,
  "image3": image3.asset->url,
  "image3_hotspot": image3.hotspot,
  image3_title,
  image3_subTitle,
  facilities_title,
  facilities_text,
  selection_title,
  selection_text,
}`;

export type AboutPageQuery = {
  _id: string;
  _createdAt: Date;
  image1: string;
  image1_hotspot: SanityHotspot;
  image1_title: string;
  image1_subTitle: string;
  image2: string;
  image2_hotspot: SanityHotspot;
  image2_title: string;
  image2_subTitle: PortableTextBlock[];
  image3: string;
  image3_hotspot: SanityHotspot;
  image3_title: string;
  image3_subTitle: PortableTextBlock[];
  facilities_title: string;
  facilities_text: PortableTextBlock[];
  selection_title: string;
  selection_text: PortableTextBlock[];
};

export async function getAboutPage(): Promise<AboutPageQuery> {
  return createClient(militaryConfig).fetch(aboutPageQuery);
}

const militaryCoursesPageQuery = groq`*[_type == "militaryCoursesPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  title,
  subtitle,
  titleColor,
  heroImageQuote,
  heroImageQuoteAuthor,
  quoteColor,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
}`;

export type MilitaryCoursesPageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  title: string;
  subtitle: string;
  titleColor: string;
  heroImageQuote: string;
  heroImageQuoteAuthor: string;
  quoteColor: string;
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
};

export async function getMilitaryCoursesPage(): Promise<MilitaryCoursesPageQuery> {
  return createClient(militaryConfig).fetch(militaryCoursesPageQuery);
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
  return createClient(militaryConfig).fetch(getCoursesQuery);
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
  return createClient(militaryConfig).fetch(getSupporingCoursesQuery);
}

const getCourseQuery = groq`*[_type == "course" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  courseNumber,
  courseTitle,
  "slug": slug.current,
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
  courseSeriesImage: string;
  courseDescription: string;
  courseRequirements: string;
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
  return createClient(militaryConfig).fetch(getCourseQuery, { slug });
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
  courseDescription: string;
  courseRequirements: string;
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
  return createClient(militaryConfig).fetch(getSupportingCourseQuery, {
    slug,
  });
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
  return createClient(militaryConfig).fetch(getParnersPageQuery);
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
  return createClient(militaryConfig).fetch(getPartnersQuery);
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
  return createClient(militaryConfig).fetch(getContactPageQuery);
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
  return createClient(militaryConfig).fetch(getCadrePageQuery);
}

const getStorePageQuery = groq`*[_type == "militaryStorePage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  heroTitle,
  heroSubtitle,
  link,
  "storeCarousel": storeCarousel[]{
    "image": image.asset->url,
    "image_hotspot": image.hotspot,
  },
}`;

export type StorePageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  heroTitle: string;
  heroSubtitle: string;
  link: string;
  storeCarousel: CourseCarousel[];
};

export async function getStorePage(): Promise<StorePageQuery> {
  return createClient(militaryConfig).fetch(getStorePageQuery);
}
