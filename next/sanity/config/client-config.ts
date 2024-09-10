const militaryConfig = {
  projectId: process.env.NEXT_PUBLIC_MILITARY_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_MILITARY_SANITY_DATASET,
  apiVersion: '2024-08-18',
  useCdn: false,
};

const techConfig = {
  projectId: process.env.NEXT_PUBLIC_TECH_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_TECH_SANITY_DATASET,
  apiVersion: '2024-08-18',
  useCdn: false,
};

export { militaryConfig, techConfig };
