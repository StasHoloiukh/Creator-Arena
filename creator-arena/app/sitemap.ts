import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://creator-arena.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add other routes here as the project grows
  ]
}
