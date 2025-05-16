import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import TopWidget from '@/components/topwidget/TopWidget';
import React from 'react';

const PublicLayout = ({ children }) => {
	return (
		<div className="relative">
			<TopWidget />

			<div className="  sticky top-0 z-40 bg-white  shadow-md">
				<Header />
			</div>
			<main className="">{children}</main>
			<footer className="relative bottom-0">
				<Footer />
			</footer>
		</div>
	);
};

export default PublicLayout;
