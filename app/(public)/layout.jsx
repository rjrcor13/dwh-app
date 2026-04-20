import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import TopWidget from '@/components/topwidget/TopWidget';
import MobileActionBar from '@/components/ui/MobileActionBar';
import CookieConsent from '@/components/ui/CookieConsent';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FloatingContactForm from '@/components/ui/FloatingContactForm';
import EmergencyBanner from '@/components/ui/EmergencyBanner';
import React from 'react';

const PublicLayout = ({ children }) => {
	return (
		<div className="relative">
			<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md font-bold shadow-lg">
				Skip to Main Content
			</a>
			<TopWidget />

			{/* Live operational alert ticker */}
			{/* <EmergencyBanner /> */}

			<header className="sticky top-0 z-40 bg-white shadow-md">
				<Header />
			</header>
			<main id="main-content" className="scroll-mt-24">{children}</main>
			<footer className="relative bottom-0">
				<Footer />
			</footer>

			{/* Sticky Mobile Action Bar */}
			<MobileActionBar />

			{/* Global UX Overlays */}
			<CookieConsent />
			<ScrollToTop />
			<FloatingContactForm />
		</div>
	);
};

export default PublicLayout;
