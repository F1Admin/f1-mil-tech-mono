import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-08-16',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
}
export const client = createClient(config)