import { doctorsData } from '@/app/data/doctors';
import DoctorProfileWrapper from '../../../../components/doctors/DoctorWrapper';

export const generateStaticParams = async () => {
    return doctorsData.map((doctor) => ({
        slug: doctor.slug,
    }));
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const doctor = doctorsData.find((doc) => doc.slug === slug);

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
    return <DoctorProfileWrapper slug={slug} />;
}
