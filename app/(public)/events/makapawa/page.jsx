'use client';

import { makapawaEvents } from '@/app/data/makapawaEvents';
import EventCategoryLayout from '@/components/events/EventCategoryLayout';
import { CalendarIcon, UsersIcon } from 'lucide-react';
import React from 'react';

export default function MakapawaEventsPage() {

	const usersIcon = (props) => <UsersIcon {...props} />;

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
			title: 'Eucharistic Celebrations',
			description: 'Spiritual events and religious celebrations for our hospital community.',
			href: '/events/eucharistic-celebrations',
			icon: (props) => (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
				</svg>
			),
			color: 'text-purple-600',
			bgColor: 'bg-purple-50'
		}
	];

	return (
		<EventCategoryLayout
			title="Makapawa"
			titleHighlight="Events"
			badgeText="Community Outreach"
			description="Community-focused healthcare programs designed to serve and support our local Makapawa community with accessible health services and education."
			icon={usersIcon}
			themeColor="green"
			events={makapawaEvents}
			breadcrumbLabel="Makapawa Events"
			basePath="/events/makapawa"
			relatedLinks={relatedLinks}
		/>
	);
}
