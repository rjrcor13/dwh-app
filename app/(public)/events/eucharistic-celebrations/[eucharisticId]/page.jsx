import { eucharisticEvents } from '@/app/data/eucharisticEvents';
import EventDetailsLayout from '@/components/events/EventDetailsLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	return eucharisticEvents.map((event) => ({
		eucharisticId: event.id.toString(),
	}));
}

export async function generateMetadata({ params }) {
	const { eucharisticId } = await params;
	const event = eucharisticEvents.find((e) => e.id.toString() === eucharisticId);

	if (!event) {
		return {
			title: 'Event Not Found | Divine Word Hospital',
		};
	}

	return {
		title: `${event.title} | Eucharistic Celebrations`,
		description: event.description || event.fullDescription,
		openGraph: {
			title: event.title,
			description: event.description,
			images: event.media && event.media[0] ? [event.media[0].src] : [],
		},
	};
}

export default async function EucharisticEventDetailsPage({ params }) {
	const { eucharisticId } = await params;
	const event = eucharisticEvents.find((e) => e.id.toString() === eucharisticId);

	if (!event) {
		notFound();
	}

	return (
		<EventDetailsLayout
			event={event}
			themeColor="purple"
			parentHref="/events/eucharistic-celebrations"
			parentLabel="Eucharistic Celebrations"
		/>
	);
}
