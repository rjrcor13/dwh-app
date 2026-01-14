import { jobListings } from '@/app/data/jobListings';
import CareerDetailsClient from '@/components/careers/CareerDetailsClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return jobListings.map((job) => ({
        id: job.id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const job = jobListings.find((j) => j.id === id);

    if (!job) {
        return {
            title: 'Job Not Found | Divine Word Hospital',
        };
    }

    return {
        title: `${job.title} - Careers | Divine Word Hospital`,
        description: `Join our team as a ${job.title}. ${job.description.substring(0, 150)}...`,
        openGraph: {
            title: `${job.title} - Join Divine Word Hospital`,
            description: job.description,
            images: job.image ? [job.image] : [],
        },
    };
}

export default async function CareerDetailsPage({ params }) {
    const { id } = await params;
    const job = jobListings.find((j) => j.id === id);

    if (!job) {
        notFound();
    }

    return <CareerDetailsClient job={job} />;
}
