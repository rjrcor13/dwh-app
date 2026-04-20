export default function robots() {
    return {
        rules: [
            {
                // Allow all crawlers full access to public content
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',       // Block direct API access
                    '/admin/',     // Block admin panel if added later
                    '/_next/',     // Block Next.js internals
                    '/private/',   // Block any private routes
                ],
            },
            {
                // Specifically optimise Googlebot for rich snippets
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/'],
                crawlDelay: 1,
            },
        ],
        sitemap: 'https://dwh.ph/sitemap.xml',
        host: 'https://dwh.ph',
    };
}
