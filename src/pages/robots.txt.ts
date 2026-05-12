const siteUrl = import.meta.env.PUBLIC_SITE_URL;

export function GET() {
  const lines = ['User-agent: *', 'Allow: /'];

  if (siteUrl) {
    lines.push('', `Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}`);
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
