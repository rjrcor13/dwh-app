import { getDocuments, getDocumentBySlug } from 'outstatic/server';
import DoctorProfileWrapper from '../../../../components/doctors/DoctorWrapper';
import StructuredData from '@/components/seo/StructuredData';

export const generateStaticParams = async () => {
    const doctors = await getDocuments('doctors', ['slug']);
    return doctors.map((doctor) => ({
        slug: doctor.slug,
    }));
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const document = await getDocumentBySlug('doctors', slug, ['title', 'specialties', 'content', 'image', 'clinicDays', 'clinicHours', 'hospital', 'hmo', 'contactNumber', 'clinicRoom', 'gender']);
    const doctor = document ? { ...document, name: document.title, bio: document.content } : null;

    if (!doctor) {
        return {
            title: 'Doctor Not Found | Divine Word Hospital',
        };
    }

    return {
        title: `${doctor.name} - ${doctor.specialty} | Divine Word Hospital`,
        description: doctor.bio ? doctor.bio.substring(0, 160) : `Schedule an appointment with ${doctor.name}, ${doctor.specialty} at Divine Word Hospital.`,
        openGraph: {
            title: `${doctor.name} - ${doctor.specialty}`,
            description: doctor.bio || `Specialist in ${doctor.specialty}`,
            images: doctor.image ? [doctor.image] : [],
        },
    };
}

export default async function DoctorProfilePage({ params }) {
    const { slug } = await params;
    const document = await getDocumentBySlug('doctors', slug, ['title', 'specialties', 'content', 'image', 'clinicDays', 'clinicHours', 'hospital', 'hmo', 'contactNumber', 'clinicRoom', 'gender']);
    const doctor = document ? { ...document, name: document.title, bio: document.content } : null;

    return (
        <>
            {doctor && <StructuredData type="Person" data={doctor} />}
            <DoctorProfileWrapper doctor={doctor} />
        </>
    );
}
