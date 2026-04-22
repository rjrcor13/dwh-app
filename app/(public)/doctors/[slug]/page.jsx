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

    const primarySpecialty = Array.isArray(doctor.specialties) ? doctor.specialties[0] : doctor.specialties;

    return {
        title: `${doctor.name} - ${primarySpecialty || 'Specialist'} | Divine Word Hospital`,
        description: doctor.bio ? doctor.description : `Schedule an appointment with ${doctor.name}, ${primarySpecialty || 'Specialist'} at Divine Word Hospital.`,
        openGraph: {
            title: `${doctor.name} - ${primarySpecialty || 'Specialist'}`,
            description: doctor.description || `Specialist in ${primarySpecialty || 'Healthcare'}`,
            images: (doctor.image && doctor.image !== '/assets/avatar.jpg' ? [doctor.image] : [(doctor.gender === 'Female' ? '/assets/doctor-female.png' : '/assets/doctor-male.png')]),
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
