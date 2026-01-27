import React from 'react';

const StructuredData = ({ type, data }) => {
    let schema = {};

    switch (type) {
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
