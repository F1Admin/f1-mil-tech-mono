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
