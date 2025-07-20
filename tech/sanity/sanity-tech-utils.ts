import { createClient, groq, PortableTextBlock } from 'next-sanity';
import techConfig from './config/client-config';

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
  "footerLogo": footerLogo.asset->url
}`;

export type SiteSettingsQuery = {
  _id: string;
  techLogo: string;
  footerLogo: string;
};

export async function getSiteSettings(): Promise<SiteSettingsQuery> {
  return createClient(techConfig).fetch(
    siteSettingsQuery,
    {},
    { next: { tags: ['siteSettings'] } }
  );
}

const landingPageQuery = groq`*[_type == "techLandingPage"][0]{
  _id,
  _createdAt,
  "image1": image1.asset->url,
  "image1_hotspot": image1.hotspot,
  title,
  subTitle,
  "image2": image2.asset->url,
  "image2_hotspot": image2.hotspot,
}`;

export type LandingPageQuery = {
  _id: string;
  _createdAt: Date;
  image1: string;
  image1_hotspot: SanityHotspot;
  title: string;
  subTitle: string;
  image2: string;
  image2_hotspot: SanityHotspot;
};

export async function getLandingPage(): Promise<LandingPageQuery> {
  return createClient(techConfig).fetch(
    landingPageQuery,
    {},
    { next: { tags: ['techLandingPage'] } }
  );
}

const aboutPageQuery = groq`*[_type == "techAboutPage"][0]{
  _id,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  title,
  "about_text": about_text[]
}`;

export type AboutPageQuery = {
  _id: string;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  title: string;
  about_text: PortableTextBlock[];
};

export async function getAboutPage(): Promise<AboutPageQuery> {
  return createClient(techConfig).fetch(
    aboutPageQuery,
    {},
    { next: { tags: ['techAboutPage'] } }
  );
}

const getProductQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  order,
  productTitle,
  "productLogo": productLogo.asset->url,
  "heroImage": heroImage.asset->url,
  "heroImage_hotspot": heroImage.hotspot,
  productQuote,
  productQuoteToggle,
  productDescription,
  videoToggle,
  video,
  preOrderToggle,
  preOrderTitle,
  preOrderButtonText,
  preOrderLink,
  preOrderSubtitle,
  preOrderSubtitleLink,
  features,
  featuresToggle,
  "productCarousel": productCarousel[] {
    "image": image.asset->url,
    "image_hotspot": image.hotspot,
  },
  comparisonChartToggle,
  comparisonChartTitle,
  "comparisonChart": comparisonChart.asset->url,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
  footerText,
}`;

export type Video = {
  title: string;
  description: string;
  youtubeVideoId: string;
};

export type GetProductQuery = {
  _id: string;
  order: number;
  productTitle: string;
  productLogo: string;
  heroImage: string;
  heroImage_hotspot: SanityHotspot;
  productQuote: string;
  productQuoteToggle: boolean;
  preOrderToggle: boolean;
  preOrderTitle: string;
  preOrderButtonText: string;
  preOrderLink: string;
  preOrderSubtitle: string;
  preOrderSubtitleLink: string;
  productDescription: PortableTextBlock[];
  videoToggle: boolean;
  video: Video;
  features: PortableTextBlock[];
  featuresToggle: boolean;
  comparisonChartToggle: boolean;
  comparisonChartTitle: string;
  comparisonChart: string;
  productCarousel: ProductCarousel[];
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
  footerText: string;
};

export type ProductCarousel = {
  image: string;
  image_hotspot: SanityHotspot;
};

export type ProductList = {
  _key: string;
  order: number;
  title: string;
  items: string[];
};

export async function getProduct(slug: string): Promise<GetProductQuery> {
  return createClient(techConfig).fetch(
    getProductQuery,
    { slug },
    { next: { tags: ['product'] } }
  );
}

export const getProductsQuery = groq`*[_type == "product"] | order(order asc){
  _id,
  "order": order,
  "slug": slug.current,
  productTitle,
  "productLogo": productLogo.asset->url
}`;

export type Product = {
  _id: string;
  order: number;
  slug: string;
  productTitle: string;
  productLogo: string;
};

export async function getProducts(): Promise<Product[]> {
  return createClient(techConfig).fetch(
    getProductsQuery,
    {},
    { next: { tags: ['product'] } }
  );
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
  return createClient(techConfig).fetch(
    getParnersPageQuery,
    {},
    { next: { tags: ['techPartnerPage'] } }
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
  return createClient(techConfig).fetch(
    getPartnersQuery,
    {},
    { next: { tags: ['partner'] } }
  );
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
  salesName,
  salesTitle,
  salesEmail,
  salesPhone,
  mailingAddress,
  physicalAddress,
  dunsNumber,
  cageCode,
  "footerImage": footerImage.asset->url,
  "footerImage_hotspot": footerImage.hotspot,
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
  salesName: string;
  salesTitle: string;
  salesEmail: string;
  salesPhone: string;
  mailingAddress: string;
  physicalAddress: string;
  dunsNumber: string;
  cageCode: string;
  footerImage: string;
  footerImage_hotspot: SanityHotspot;
};

export async function getContactPage(): Promise<ContactPageQuery> {
  return createClient(techConfig).fetch(
    getContactPageQuery,
    {},
    { next: { tags: ['techContactPage'] } }
  );
}
