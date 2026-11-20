export const dynamic = 'force-static'

const routes = ['/beta', '/beta/about', '/beta/work', '/beta/services', '/beta/team'];

export default function sitemap() {
  const base = 'https://majesticsoftwares.com';
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/beta' || route === '/beta/work' ? 'weekly' : 'monthly',
    priority: route === '/beta' ? 1 : 0.8,
  }));
}
