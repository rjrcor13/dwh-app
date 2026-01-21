export default function sitemap() {
    const baseUrl = 'https://dwh.ph';

    // Static routes
    const routes = [
        '',
        '/about-us',
        '/doctors',
        '/expertise',
        '/expertise/services',
        '/expertise/departments',
        '/contact-us',
        '/careers',
        '/emergency',
        '/patients-visitors-guide/patients',
        '/patients-visitors-guide/visitors-watchers',
        '/patients-visitors-guide/billing-insurance',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes];
}
