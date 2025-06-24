// app/(public)/events/eucharistic-celebrations/[eucharisticId]/generateStaticParams.js
import { eucharisticEvents } from '@/app/data/eucharistivEvents';

export function generateStaticParams() {
	return eucharisticEvents.map((event) => ({
		eucharisticId: event.id,
	}));
}
