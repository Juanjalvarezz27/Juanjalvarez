import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/src/data/projects';
import { SITE_CONFIG } from '@/src/config/site';

// Mapa de sitio XML para indexación en motores de búsqueda
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl;

  const projectUrls = Object.keys(PROJECTS_DATA).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
