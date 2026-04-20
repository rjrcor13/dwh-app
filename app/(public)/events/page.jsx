import EventsLandingView from '@/components/events/EventsLandingView';
import StructuredData from '@/components/seo/StructuredData';
import React from 'react';

export const metadata = {
    title: 'News & Events | Divine Word Hospital',
    description: 'Stay updated with the latest news, hospital celebrations, Eucharistic events, and Makapawa activities at Divine Word Hospital, Tacloban City.',
    alternates: {
        canonical: 'https://dwh.ph/events',
    },
    openGraph: {
        title: 'News & Events — Divine Word Hospital',
        description: 'Latest news, hospital celebrations, and community events from Divine Word Hospital.',
        url: 'https://dwh.ph/events',
    },
};

const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
];

const EventsLandingPage = () => {
    return (
        <>
            <StructuredData type="Breadcrumb" data={breadcrumbs} />
            <EventsLandingView />
        </>
    );
};

export default EventsLandingPage;

