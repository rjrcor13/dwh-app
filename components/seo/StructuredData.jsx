/**
 * StructuredData.jsx
 * Production-ready JSON-LD Schema.org injection for Divine Word Hospital.
 *
 * Supported schema types:
 *   - Hospital         → MedicalOrganization + Hospital (homepage)
 *   - Person           → Physician (doctor profile pages)
 *   - Service          → MedicalWebPage (service detail pages)
 *   - Department       → MedicalSpecialty (department detail pages)
 *   - FAQPage          → FAQPage (home FAQ section)
 *   - Breadcrumb       → BreadcrumbList (all detail pages)
 *   - Article          → NewsArticle (event/article pages)
 *   - WebSite          → WebSite + SearchAction (sitelinks searchbox)
 */

// ─── Shared constants ──────────────────────────────────────────────────────────
const SITE_URL = 'https://dwh.ph';
const HOSPITAL_NAME = 'Divine Word Hospital';
const HOSPITAL_PHONE = '+63-53-832-0218'; // Main hospital line
const HOSPITAL_EMAIL = 'dwh.marketing@dwh.com';
const HOSPITAL_ADDRESS = {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Veteranos Street',
    addressLocality: 'Tacloban City',
    addressRegion: 'Leyte',
    postalCode: '6500',
    addressCountry: 'PH',
};
const HOSPITAL_GEO = {
    '@type': 'GeoCoordinates',
    latitude: 11.2385,
    longitude: 124.9988,
};
const HOSPITAL_LOGO = `${SITE_URL}/assets/logo_w.png`;
const HOSPITAL_IMAGE = `${SITE_URL}/assets/dwh.jpg`;

// Build the canonical Hospital node – reused across multiple schemas
const hospitalNode = {
    '@type': ['MedicalOrganization', 'Hospital'],
    '@id': `${SITE_URL}/#hospital`,
    name: HOSPITAL_NAME,
    alternateName: 'DWH Tacloban',
    url: SITE_URL,
    logo: {
        '@type': 'ImageObject',
        url: HOSPITAL_LOGO,
        width: 400,
        height: 200,
    },
    image: HOSPITAL_IMAGE,
    description:
        'Divine Word Hospital provides world-class medical care with a compassionate Christian touch in Tacloban City, Philippines. Offering 24/7 emergency services, specialized centers, and holistic healing since 1965.',
    telephone: HOSPITAL_PHONE,
    email: HOSPITAL_EMAIL,
    address: HOSPITAL_ADDRESS,
    geo: HOSPITAL_GEO,
    hasMap: 'https://goo.gl/maps/DivineWordHospitalTacloban',
    openingHoursSpecification: [
        // Emergency is 24/7
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday', 'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
        },
    ],
    sameAs: [
        'https://www.facebook.com/DivineWordHospitalTacloban',
        'https://www.philhealth.gov.ph',
    ],
    priceRange: '₱₱',
    currenciesAccepted: 'PHP',
    paymentAccepted: 'Cash, PhilHealth, HMO',
    areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Region VIII - Eastern Visayas',
    },
    foundingDate: '1965',
    medicalSpecialty: [
        'Cardiology', 'Oncology', 'Neurology', 'Orthopedic Surgery',
        'Obstetrics and Gynecology', 'Pediatrics', 'Internal Medicine',
        'General Surgery', 'Radiology', 'Anesthesiology',
    ],
    availableService: {
        '@type': 'MedicalTherapy',
        name: '24/7 Emergency Services',
    },
};

// ─── Schema builders ──────────────────────────────────────────────────────────

function buildHospitalSchema() {
    return [
        // Main hospital entity
        {
            '@context': 'https://schema.org',
            ...hospitalNode,
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    telephone: HOSPITAL_PHONE,
                    contactType: 'emergency',
                    availableLanguage: ['English', 'Filipino'],
                    hoursAvailable: {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: [
                            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                            'Friday', 'Saturday', 'Sunday',
                        ],
                        opens: '00:00',
                        closes: '23:59',
                    },
                },
                {
                    '@type': 'ContactPoint',
                    email: HOSPITAL_EMAIL,
                    contactType: 'customer service',
                    availableLanguage: ['English', 'Filipino'],
                },
            ],
        },
        // WebSite entity with SearchAction (enables Google Sitelinks Searchbox)
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            name: HOSPITAL_NAME,
            url: SITE_URL,
            description:
                'Official website of Divine Word Hospital, Tacloban City, Philippines.',
            publisher: { '@id': `${SITE_URL}/#hospital` },
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${SITE_URL}/doctors?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
            },
        },
    ];
}

function buildPhysicianSchema(data) {
    const specialties = Array.isArray(data.specialties)
        ? data.specialties
        : [data.specialties].filter(Boolean);

    return {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        '@id': `${SITE_URL}/doctors/${data.slug}#physician`,
        name: data.name,
        image: data.image
            ? { '@type': 'ImageObject', url: `${SITE_URL}${data.image}` }
            : undefined,
        description:
            data.bio ||
            `${data.name} is a specialist in ${specialties.join(', ')} at ${HOSPITAL_NAME}, Tacloban City.`,
        url: `${SITE_URL}/doctors/${data.slug}`,
        telephone: HOSPITAL_PHONE,
        medicalSpecialty: specialties,
        gender: data.gender,
        affiliation: { '@id': `${SITE_URL}/#hospital` },
        worksFor: { '@id': `${SITE_URL}/#hospital` },
        alumniOf: data.education
            ? data.education.map((edu) => ({ '@type': 'CollegeOrUniversity', name: edu }))
            : undefined,
    };
}

function buildServiceSchema(data) {
    return {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        '@id': `${SITE_URL}/expertise/services/${data.slug}#webpage`,
        name: data.title,
        description: data.description,
        url: `${SITE_URL}/expertise/services/${data.slug}`,
        image: data.image ? `${SITE_URL}${data.image}` : HOSPITAL_IMAGE,
        about: {
            '@type': 'MedicalTherapy',
            name: data.title,
            description: data.description,
        },
        provider: { '@id': `${SITE_URL}/#hospital` },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/expertise/services` },
                { '@type': 'ListItem', position: 3, name: data.title, item: `${SITE_URL}/expertise/services/${data.slug}` },
            ],
        },
    };
}

function buildDepartmentSchema(data) {
    return {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        '@id': `${SITE_URL}/expertise/departments/${data.slug}#webpage`,
        name: data.name || data.title,
        description: data.description,
        url: `${SITE_URL}/expertise/departments/${data.slug}`,
        about: {
            '@type': 'MedicalSpecialty',
            name: data.name || data.title,
        },
        provider: { '@id': `${SITE_URL}/#hospital` },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Departments', item: `${SITE_URL}/expertise/departments` },
                { '@type': 'ListItem', position: 3, name: data.name || data.title, item: `${SITE_URL}/expertise/departments/${data.slug}` },
            ],
        },
    };
}

function buildFAQSchema(data) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

function buildBreadcrumbSchema(items) {
    // items: [{ name, href }]
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`,
        })),
    };
}

function buildArticleSchema(data) {
    return {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        '@id': `${SITE_URL}${data.url}#article`,
        headline: data.title,
        description: data.description,
        image: data.image ? `${SITE_URL}${data.image}` : HOSPITAL_IMAGE,
        url: `${SITE_URL}${data.url}`,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
            '@type': 'Organization',
            name: HOSPITAL_NAME,
            url: SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: HOSPITAL_NAME,
            logo: { '@type': 'ImageObject', url: HOSPITAL_LOGO },
        },
        isPartOf: { '@id': `${SITE_URL}/#website` },
    };
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Renders a <script type="application/ld+json"> tag for structured data.
 *
 * @param {string} type  - One of: Hospital | Person | Service | Department | FAQPage | Breadcrumb | Article | WebSite
 * @param {*}      data  - Schema-specific data object or array
 */
const StructuredData = ({ type, data }) => {
    let schema;

    switch (type) {
        case 'Hospital':
            schema = buildHospitalSchema();
            break;
        case 'Person':
            if (!data) return null;
            schema = buildPhysicianSchema(data);
            break;
        case 'Service':
            if (!data) return null;
            schema = buildServiceSchema(data);
            break;
        case 'Department':
            if (!data) return null;
            schema = buildDepartmentSchema(data);
            break;
        case 'FAQPage':
            if (!data?.length) return null;
            schema = buildFAQSchema(data);
            break;
        case 'Breadcrumb':
            if (!data?.length) return null;
            schema = buildBreadcrumbSchema(data);
            break;
        case 'Article':
            if (!data) return null;
            schema = buildArticleSchema(data);
            break;
        default:
            return null;
    }

    // Strip undefined values so the JSON-LD is clean
    const clean = JSON.parse(JSON.stringify(schema));

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(clean) }}
        />
    );
};

export default StructuredData;
