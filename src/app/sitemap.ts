import {entries} from '@/db'

export default function sitemap() {
  const baseUrl = 'https://jaroslavmatas.com'

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]

  const shotRoutes = entries
    .filter(entry => entry.variant === 'shot' && entry.slug)
    .map(entry => ({
      url: `${baseUrl}/${entry.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [...routes, ...shotRoutes]
}