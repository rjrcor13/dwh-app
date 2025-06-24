import Eucharistics from '@/components/events/Eucharistics';
import React, { Suspense } from 'react';
const EucharisticEventsPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Eucharistics />
		</Suspense>
	);
};

export default EucharisticEventsPage;
