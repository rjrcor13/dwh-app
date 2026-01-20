'use client';

import { eucharisticEvents } from '@/app/data/eucharisticEvents';
import EventCategoryLayout from '@/components/events/EventCategoryLayout';
import { CalendarIcon, UsersIcon } from 'lucide-react';
import React from 'react';

const Eucharistics = () => {

	// Icon for Eucharistic
	const EucharistIcon = (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
		</svg>
	);

	// Links to other related pages
	const relatedLinks = [
		{
			title: 'Hospital Celebrations',
			description: 'Commemorating milestones and institutional achievements.',
			href: '/events/hospital-celebrations',
			icon: CalendarIcon,
			color: 'text-blue-600',
			bgColor: 'bg-blue-50'
		},
		{
			title: 'Makapawa Events',
			description: 'Community-focused healthcare programs and outreach services.',
			href: '/events/makapawa',
			icon: UsersIcon,
			color: 'text-green-600',
			bgColor: 'bg-green-50'
		}
	];

	return (
		<EventCategoryLayout
			title="Eucharistic"
			titleHighlight="Celebrations"
			badgeText="Spiritual Life"
			description="Join us in spiritual communion. Discover our scheduled Masses, adoration sessions, and other sacred gatherings designed to nourish your faith."
			icon={EucharistIcon}
			themeColor="purple"
			events={eucharisticEvents}
			breadcrumbLabel="Eucharistic Celebrations"
			relatedLinks={relatedLinks}
		/>
	);
};

export default Eucharistics;
