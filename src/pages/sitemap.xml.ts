const siteUrl = import.meta.env.PUBLIC_SITE_URL;

const formatDate = (date: Date) => date.toISOString().split('T')[0];

export function GET() {
  if (!siteUrl) {
    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    });
  }

  const homeUrl = new URL('/', siteUrl).toString();
  const lastmod = formatDate(new Date());

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${homeUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
