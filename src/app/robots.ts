import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/src/config/site';

// Configuración de robots.txt para rastreadores web
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
