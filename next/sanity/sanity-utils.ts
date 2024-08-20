import { createClient, groq } from 'next-sanity';
import config from './config/client-config';
import {
  Course,
  GetCourseQueryResult,
  MilitaryLandingPage,
  SupportingCourse,
} from './types';
import { defineQuery } from 'groq';

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

export async function getLandingPage(): Promise<MilitaryLandingPage> {
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

export async function getAboutPage(): Promise<any> {
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

export async function getMilitaryCoursesPage(): Promise<any> {
  return createClient(config).fetch(militaryCoursesPageQuery);
}

export const getCoursesQuery =
  defineQuery(`*[_type == "course"] | order(order asc){
  _id,
  courseNumber,
  courseTitle,
  slug,
}`);

export async function getCourses(): Promise<Course[]> {
  return createClient(config).fetch(getCoursesQuery);
}

const getSupporingCoursesQuery = groq`*[_type == "supportingCourse"] | order(order asc){
  _id,
  courseNumber,
  courseTitle,
  slug,
}`;

export async function getSupportingCourses(): Promise<SupportingCourse[]> {
  return createClient(config).fetch(getSupporingCoursesQuery);
}

const getCourseQuery =
  defineQuery(`*[_type == "course" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  courseNumber,
  courseTitle,
  slug,
  "courseSeriesImage": courseSeriesImage.asset->url,
  courseDescription,
  courseRequirements,
  "courseFooterImage": courseFooterImage.asset->url,
  courseFooterText,
}`);

export async function getCourse(slug: string): Promise<any> {
  return createClient(config).fetch(getCourseQuery, { slug });
}

const getSupportingCourseQuery = groq`*[_type == "supportingCourses" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  courseNumber,
  courseTitle,
  slug,
  courseDescription,
  courseRequirements,
  "courseSeriesImage": courseSeriesImage.asset->url,
  "courseFooterImage": courseFooterImage.asset->url,
  courseFooterText,
}`;

export async function getSupportingCourse(slug: string): Promise<any> {
  return createClient(config).fetch(getSupportingCourseQuery, {
    slug,
  });
}
