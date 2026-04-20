import React from 'react';

const StructuredData = ({ type, data }) => {
    let schema = {};

    switch (type) {
        case 'Hospital':
            schema = {
                '@context': 'https://schema.org',
                '@type': 'MedicalOrganization', // Or 'Hospital'
                name: 'Divine Word Hospital',
                url: 'https://dwh.ph',
                logo: 'https://dwh.ph/assets/logo_w.png',
                description: 'Divine Word Hospital provides world-class medical care with a compassionate Christian touch in Tacloban City. Offering 24/7 emergency services and specialized centers.',
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+1-234-567-8900', // Replace with real one if available
                    contactType: 'customer service'
                },
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Avenida Veteranos',
                    addressLocality: 'Tacloban City',
                    addressRegion: 'Leyte',
                    postalCode: '6500',
                    addressCountry: 'PH'
                }
            };
            break;

        case 'Person': // For Doctors
            schema = {
                '@context': 'https://schema.org',
                '@type': 'Physician',
                name: data.name,
                image: data.image ? `https://dwh.ph${data.image}` : undefined,
                medicalSpecialty: data.specialties, // Can be array or string
                description: data.bio || `Specialist in ${Array.isArray(data.specialties) ? data.specialties.join(', ') : data.specialties}`,
                url: `https://dwh.ph/doctors/${data.slug}`,
                affiliation: {
                    '@type': 'Hospital',
                    name: data.hospital || 'Divine Word Hospital'
                }
            };
            break;

        case 'Service': // For Medical Services
            schema = {
                '@context': 'https://schema.org',
                '@type': 'MedicalSpecialty',
                name: data.title,
                description: data.description,
                url: `https://dwh.ph/expertise/services/${data.slug}`,
                provider: {
                    '@type': 'Hospital',
                    name: 'Divine Word Hospital',
                    url: 'https://dwh.ph'
                }
            };
            break;

        case 'FAQPage': // For FAQs
            schema = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: data.map(faq => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer
                    }
                }))
            };
            break;

        default:
            return null;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default StructuredData;
