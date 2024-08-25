import { createClient, groq } from 'next-sanity';
import config from './config/client-config';

const landingPageQuery = groq`*[_type == "militaryLandingPage"][0]{
  _id,
  _createdAt,
  "image1": image1.asset->url,
  image1_title,
  "image2": image2.asset->url,
  image2_title,
  image2_subTitle,
  "image3": image3.asset->url,
}`;

export type LandingPageQuery = {
  _id: string;
  _createdAt: Date;
  image1: string;
  image1_title: string;
  image2: string;
  image2_title: string;
  image2_subTitle: string;
  image3: string;
};

export async function getLandingPage(): Promise<LandingPageQuery> {
  return createClient(config).fetch(landingPageQuery);
}

const aboutPageQuery = groq`*[_type == "militaryAboutPage"][0]{
  _id,
  _createdAt,
  "image1": image1.asset->url,
  image1_title,
  image1_subTitle,
  "image2": image2.asset->url,
  image2_title,
  image2_subTitle1,
  image2_subTitle2,
  "image3": image3.asset->url,
  image3_title,
  image3_subTitle,
}`;

export type AboutPageQuery = {
  _id: string;
  _createdAt: Date;
  image1: string;
  image1_title: string;
  image1_subTitle: string;
  image2: string;
  image2_title: string;
  image2_subTitle1: string;
  image2_subTitle2: string;
  image3: string;
  image3_title: string;
  image3_subTitle: string;
};

export async function getAboutPage(): Promise<AboutPageQuery> {
  return createClient(config).fetch(aboutPageQuery);
}

const militaryCoursesPageQuery = groq`*[_type == "militaryCoursesPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  title,
  subtitle,
  "footerImage": footerImage.asset->url,
}`;

export type MilitaryCoursesPageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  title: string;
  subtitle: string;
  footerImage: string;
};

export async function getMilitaryCoursesPage(): Promise<MilitaryCoursesPageQuery> {
  return createClient(config).fetch(militaryCoursesPageQuery);
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
  return createClient(config).fetch(getCoursesQuery);
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
  return createClient(config).fetch(getSupporingCoursesQuery);
}

const getCourseQuery = groq`*[_type == "course" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  courseNumber,
  courseTitle,
  "slug": slug.current,
  "courseSeriesImage": courseSeriesImage.asset->url,
  courseDescription,
  courseRequirements,
  "courseFooterImage": courseFooterImage.asset->url,
  courseFooterText,
  "courseCarousel": courseCarousel[]{
    "image": image.asset->url,
  },
}`;

export type GetCourseQuery = {
  _id: string;
  heroImage: string;
  courseNumber: string;
  courseTitle: string;
  slug: string;
  courseSeriesImage: string;
  courseDescription: string;
  courseRequirements: string;
  courseFooterImage: string;
  courseFooterText: string;
  courseCarousel: CourseCarousel[];
};

export type CourseCarousel = {
  image: string;
};

export async function getCourse(slug: string): Promise<GetCourseQuery> {
  return createClient(config).fetch(getCourseQuery, { slug });
}

const getSupportingCourseQuery = groq`*[_type == "supportingCourse" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  courseTitle,
  "slug": slug.current,
  courseDescription,
  courseRequirements,
  "courseSeriesImage": courseSeriesImage.asset->url,
  "courseFooterImage": courseFooterImage.asset->url,
  courseFooterText,
  "courseCarousel": courseCarousel[]{
    "image": image.asset->url,
  },
}`;

export type GetSupportingCourseQuery = {
  _id: string;
  heroImage: string;
  courseTitle: string;
  slug: string;
  courseDescription: string;
  courseRequirements: string;
  courseSeriesImage: string;
  courseFooterImage: string;
  courseFooterText: string;
  courseCarousel: CourseCarousel[];
};

export async function getSupportingCourse(
  slug: string
): Promise<GetSupportingCourseQuery> {
  return createClient(config).fetch(getSupportingCourseQuery, {
    slug,
  });
}

const getParnersPageQuery = groq`*[_type == "militaryPartnerPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  heroTitle,
  heroSubtitle,
  "footerImage": footerImage.asset->url,
  footerText,
}`;

export type PartnerPageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  footerImage: string;
  footerText: string;
};

export async function getPartnersPage(): Promise<PartnerPageQuery> {
  return createClient(config).fetch(getParnersPageQuery);
}

const getPartnersQuery = groq`*[_type == "partner"]{
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
  return createClient(config).fetch(getPartnersQuery);
}

const getContactPageQuery = groq`*[_type == "militaryContactPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
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
  footerText,
}`;

export type ContactPageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
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
  footerText: string;
};

export async function getContactPage(): Promise<ContactPageQuery> {
  return createClient(config).fetch(getContactPageQuery);
}
