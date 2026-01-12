import VisitorsAndWatchers from '@/components/visitorsandwatchers/VisitorsAndWatchers';
import React from 'react';

export const metadata = {
	title: 'Visitors & Watchers Policy | Divine Word Hospital',
	description: 'Guidelines for hospital visitors and watchers, including visiting hours and COVID-19 safety protocols.',
};

const VisitorsAndWatchersPage = () => {
	return (
		<div>
			<VisitorsAndWatchers />
		</div>
	);
};

export default VisitorsAndWatchersPage;
