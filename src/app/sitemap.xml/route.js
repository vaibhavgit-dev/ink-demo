// /app/sitemap.xml.js
import { AuthorsList } from "@/app/API/allAuthorList";
import { BooksDetails } from "../API/getbookDetails";

export async function GET() {
  const baseUrl = "https://bluone.ink";

  // Static URLs
  const staticUrls = [
    { loc: `${baseUrl}/`, lastmod: "2024-09-08T10:12:27+00:00", priority: "1.00" },
    { loc: `${baseUrl}/authors`, lastmod: "2024-09-08T10:12:27+00:00", priority: "0.80" },
    { loc: `${baseUrl}/books`, lastmod: "2024-09-08T10:12:27+00:00", priority: "0.80" },
    { loc: `${baseUrl}/contact`, lastmod: "2024-09-08T10:12:27+00:00", priority: "0.80" },
    { loc: `${baseUrl}/comingsoon`, lastmod: "2024-09-08T10:12:27+00:00", priority: "1.00" },
    { loc: `${baseUrl}/terms`, lastmod: "2024-09-08T10:12:27+00:00", priority: "0.80" },
    { loc: `${baseUrl}/privacypolicy`, lastmod: "2024-09-08T10:12:27+00:00", priority: "0.80" },
    { loc: `${baseUrl}/disclaimer`, lastmod: "2024-09-08T10:12:27+00:00", priority: "0.80" },
  ];

  // Generate XML for static URLs
  const staticUrlsXml = staticUrls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <priority>${url.priority}</priority>
    </url>
  `).join("");

  // Generate XML for dynamic author URLs
  const authorsUrls = AuthorsList.map(author => `
    <url>
      <loc>${baseUrl}/authors/${author.authslug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join("");

  // Generate XML for dynamic author URLs
  const booksUrls = BooksDetails.map(book => `
    <url>
      <loc>${baseUrl}/books/${book.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join("");

  // Combine both static and dynamic parts
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${staticUrlsXml}
      ${authorsUrls}
      ${booksUrls}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
