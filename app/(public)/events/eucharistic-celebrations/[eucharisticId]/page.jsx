// This file will NOT have 'use client' at the top.
// It will be a Server Component responsible for fetching data and
// passing it to the client component.

import { eucharisticEvents } from '@/app/data/eucharisticEvents';
import { notFound } from 'next/navigation';
import EventClientPage from './EventClientPage'; // Import the new client component

// generateStaticParams must stay in a server component file (like this page.jsx)
// It runs at build time to pre-render paths.
export async function generateStaticParams() {
	return eucharisticEvents.map((event) => ({
		eucharisticId: event.id,
	}));
}

// This is a Server Component.
// FIX: Make the component async and await params
const EucharisticEventPage = async ({ params }) => {
	// Await params here, even if it's typically synchronous for route params
	const { eucharisticId } = await params; // <--- The fix is here

	const event = eucharisticEvents.find((e) => e.id === eucharisticId);

	if (!event) {
		notFound();
	}

	// Render the client component and pass the fetched `event` data as a prop
	return <EventClientPage event={event} />;
};

export default EucharisticEventPage;
