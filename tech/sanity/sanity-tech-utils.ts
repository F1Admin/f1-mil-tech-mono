import { createClient, groq, PortableTextBlock } from 'next-sanity';
import { techConfig } from './config/client-config';

export type SanityHotspot = {
  width?: number;
  height?: number;
  x: number;
  y: number;
  _type?: string;
};

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  _id,
  "techLogo": techLogo.asset->url,
  "footerLogo": footerLogo.asset->url,
}`;

export type SiteSettingsQuery = {
  _id: string;
  techLogo: string;
  footerLogo: string;
};

export async function getSiteSettings(): Promise<SiteSettingsQuery> {
  return createClient(techConfig).fetch(siteSettingsQuery);
}

const landingPageQuery = groq`*[_type == "techLandingPage"][0]{
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
  return createClient(techConfig).fetch(landingPageQuery);
}

const aboutPageQuery = groq`*[_type == "techAboutPage"][0]{
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
  philosophy_title,
  philosophy_text,
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
  philosophy_title: string;
  philosophy_text: PortableTextBlock[];
};

export async function getAboutPage(): Promise<AboutPageQuery> {
  return createClient(techConfig).fetch(aboutPageQuery);
}

const productsPageQuery = groq`*[_type == "techProductsPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  title,
  subtitle,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
}`;

export type ProductsPageQuery = {
  _id: string;
  _createdAt: Date;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  title: string;
  subtitle: string;
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
};

export async function getProductsPage(): Promise<ProductsPageQuery> {
  return createClient(techConfig).fetch(productsPageQuery);
}

const getProductQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  "order": order,
  "slug": slug.current,
  productTitle,
  "productImage": productImage.asset->url,
  productDescription,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
  footerText,
  courseFooterAuthor,
  "courseCarousel": courseCarousel[]{
    "image": image.asset->url,
    "image_hotspot": image.hotspot,
  },
}`;

export type GetProductQuery = {
  _id: string;
  order: number;
  slug: string;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  productTitle: string;
  productImage: string;
  productDescription: PortableTextBlock[];
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
  footerText: string;
  footerAuthor: string;
};

export type CourseCarousel = {
  image: string;
  image_hotspot: SanityHotspot;
};

export async function getProduct(slug: string): Promise<GetProductQuery> {
  return createClient(techConfig).fetch(getProductQuery, { slug });
}

export const getProductsQuery = groq`*[_type == "product"] | order(order asc){
  _id,
  "order": order,
  "slug": slug.current,
  productTitle,
  "productLogo": productLogo.asset->url,
}`;

export type Product = {
  _id: string;
  order: number;
  slug: string;
  productTitle: string;
  productLogo: string;
};

export async function getProducts(): Promise<Product[]> {
  return createClient(techConfig).fetch(getProductsQuery);
}

const getParnersPageQuery = groq`*[_type == "techPartnerPage"][0]{
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
  return createClient(techConfig).fetch(getParnersPageQuery);
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
  return createClient(techConfig).fetch(getPartnersQuery);
}

const getContactPageQuery = groq`*[_type == "techContactPage"][0]{
  _id,
  _createdAt,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  heroTitle,
  heroSubtitle,
  contactName,
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
  return createClient(techConfig).fetch(getContactPageQuery);
}
