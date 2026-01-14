import { hospitalCelebrations } from '@/app/data/hospitalCelebrations';
import EventDetailsLayout from '@/components/events/EventDetailsLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	return hospitalCelebrations.map((event) => ({
		celebrationId: event.id.toString(),
	}));
}

export async function generateMetadata({ params }) {
	const { celebrationId } = await params;
	const event = hospitalCelebrations.find((e) => e.id.toString() === celebrationId);

	if (!event) {
		return {
			title: 'Event Not Found | Divine Word Hospital',
		};
	}

	return {
		title: `${event.title} | Hospital Celebrations`,
		description: event.description || event.fullDescription,
		openGraph: {
			title: event.title,
			description: event.description,
			images: event.media && event.media[0] ? [event.media[0].src] : [],
		},
	};
}

export default async function HospitalCelebrationDetailsPage({ params }) {
	const { celebrationId } = await params;
	const event = hospitalCelebrations.find((e) => e.id.toString() === celebrationId);

	if (!event) {
		notFound();
	}

	return (
		<EventDetailsLayout
			event={event}
			themeColor="blue"
			parentHref="/events/hospital-celebrations"
			parentLabel="Hospital Celebrations"
		/>
	);
}
