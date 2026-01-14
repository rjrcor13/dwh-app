import { makapawaEvents } from '@/app/data/makapawaEvents';
import EventDetailsLayout from '@/components/events/EventDetailsLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	return makapawaEvents.map((event) => ({
		makapawaId: event.id.toString(),
	}));
}

export async function generateMetadata({ params }) {
	const { makapawaId } = await params;
	const event = makapawaEvents.find((e) => e.id.toString() === makapawaId);

	if (!event) {
		return {
			title: 'Event Not Found | Divine Word Hospital',
		};
	}

	return {
		title: `${event.title} | Makapawa Events`,
		description: event.description || event.fullDescription,
		openGraph: {
			title: event.title,
			description: event.description,
			images: event.media && event.media[0] ? [event.media[0].src] : [],
		},
	};
}

export default async function MakapawaEventDetailsPage({ params }) {
	const { makapawaId } = await params;
	const event = makapawaEvents.find((e) => e.id.toString() === makapawaId);

	if (!event) {
		notFound();
	}

	return (
		<EventDetailsLayout
			event={event}
			themeColor="green"
			parentHref="/events/makapawa"
			parentLabel="Makapawa Events"
		/>
	);
}
