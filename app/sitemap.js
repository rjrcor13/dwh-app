export default function sitemap() {
    const baseUrl = 'https://dwh.ph';
    const { hospitalCelebrations } = require('./data/hospitalCelebrations');
    const { doctorsData } = require('./data/doctors');

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

    // Dynamic routes for Events
    const eventRoutes = hospitalCelebrations.map((event) => ({
        url: `${baseUrl}/events/hospital-celebrations/${event.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    // Dynamic routes for Doctors
    const doctorRoutes = doctorsData.map((doctor) => ({
        url: `${baseUrl}/doctors/${doctor.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...routes, ...eventRoutes, ...doctorRoutes];
}
