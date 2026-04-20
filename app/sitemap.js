import { departmentsData } from './data/departments';
import { doctorsData } from './data/doctors';
import { eucharisticEvents } from './data/eucharisticEvents';
import { hospitalCelebrations } from './data/hospitalCelebrations';
import { makapawaEvents } from './data/makapawaEvents';
import { servicesData } from './data/services';

const BASE_URL = 'https://dwh.ph';
const NOW = new Date();

export default function sitemap() {
    // ── Static core pages ────────────────────────────────────────────────────
    const staticRoutes = [
        { url: BASE_URL,                                              priority: 1.0, changeFrequency: 'weekly'  },
        { url: `${BASE_URL}/about-us`,                               priority: 0.9, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/doctors`,                                priority: 0.9, changeFrequency: 'weekly'  },
        { url: `${BASE_URL}/emergency`,                              priority: 0.9, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/contact-us`,                             priority: 0.8, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/careers`,                                priority: 0.8, changeFrequency: 'weekly'  },
        { url: `${BASE_URL}/events`,                                 priority: 0.8, changeFrequency: 'weekly'  },
        { url: `${BASE_URL}/expertise`,                              priority: 0.7, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/expertise/services`,                     priority: 0.7, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/expertise/departments`,                  priority: 0.7, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/patients-visitors-guide`,                priority: 0.6, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/patients-visitors-guide/patients`,       priority: 0.6, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/patients-visitors-guide/visitors-watchers`, priority: 0.6, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/patients-visitors-guide/billing-insurance`, priority: 0.6, changeFrequency: 'monthly' },
        { url: `${BASE_URL}/privacy-policy`,                         priority: 0.3, changeFrequency: 'yearly'  },
        { url: `${BASE_URL}/terms-of-service`,                       priority: 0.3, changeFrequency: 'yearly'  },
    ].map(({ url, priority, changeFrequency }) => ({
        url,
        lastModified: NOW,
        changeFrequency,
        priority,
    }));

    // ── Dynamic: Doctors ─────────────────────────────────────────────────────
    const doctorRoutes = doctorsData.map((doctor) => ({
        url: `${BASE_URL}/doctors/${doctor.slug}`,
        lastModified: NOW,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // ── Dynamic: Services ────────────────────────────────────────────────────
    const serviceRoutes = servicesData.map((service) => ({
        url: `${BASE_URL}/expertise/services/${service.slug}`,
        lastModified: NOW,
        changeFrequency: 'monthly',
        priority: 0.65,
    }));

    // ── Dynamic: Departments ─────────────────────────────────────────────────
    const departmentRoutes = departmentsData.map((dept) => ({
        url: `${BASE_URL}/expertise/departments/${dept.id}`,
        lastModified: NOW,
        changeFrequency: 'monthly',
        priority: 0.65,
    }));

    // ── Dynamic: Events ──────────────────────────────────────────────────────
    const hospitalEventRoutes = hospitalCelebrations.map((event) => ({
        url: `${BASE_URL}/events/hospital-celebrations/${event.id}`,
        lastModified: NOW,
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    const eucharisticEventRoutes = eucharisticEvents.map((event) => ({
        url: `${BASE_URL}/events/eucharistic-celebrations/${event.id}`,
        lastModified: NOW,
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    const makapawaEventRoutes = makapawaEvents.map((event) => ({
        url: `${BASE_URL}/events/makapawa/${event.id}`,
        lastModified: NOW,
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        ...doctorRoutes,
        ...serviceRoutes,
        ...departmentRoutes,
        ...hospitalEventRoutes,
        ...eucharisticEventRoutes,
        ...makapawaEventRoutes,
    ];
}
