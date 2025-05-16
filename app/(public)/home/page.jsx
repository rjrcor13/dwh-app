import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import AboutUs from '@/components/home/AboutUs';
import ConnectWithUsSection from '@/components/home/ConnectWithUs';
import EventsSection from '@/components/home/Events';
import FAQSection from '@/components/home/FAQ';
import OurServicesSection from '@/components/home/Services';
import Stats from '@/components/stats/Stats';
import React from 'react';
const className = '';
const HomePage = () => {
	return (
		<div>
			<div>
				<Banner />
			</div>

			<main>
				<Stats />
				<AboutUs className="max-w-7xl mx-auto my-12 lg:mt-10 mt-0" />
				<OurServicesSection className={className} />

				<EventsSection className={className} />

				<EventsSection className={className} />
				<ConnectWithUsSection className={className} />
				<FAQSection className={className} />
			</main>
		</div>
	);
};

export default HomePage;
