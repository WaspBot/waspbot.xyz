import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://waspbot.xyz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add other pages here as needed
  ];
}
