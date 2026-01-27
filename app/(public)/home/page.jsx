'use client';
import { servicesData } from '@/app/data/services';
import StructuredData from '@/components/seo/StructuredData';
import { faqsData } from '@/app/data/faqs';
import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import HMOLogos from '@/components/hmologos/HMOLogos';
import AboutUs from '@/components/home/AboutUs';
import ConnectWithUsSection from '@/components/home/ConnectWithUs';
import EventsSection from '@/components/home/Events';
import FAQSection from '@/components/home/FAQ';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import OurServicesSection from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Services from '@/components/services/Services';
import Stats from '@/components/stats/Stats';
import WhyChooseUs from '@/components/whychooseus/WhyChooseUs';
import Image from 'next/image';
import React from 'react';
const classNames = 'my-24';
export const Blob = () => {
	return (
		<svg
			className="absolute -top-20 right-0 w-[600px] h-[600px] -z-10 opacity-20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 327.53 303.49"
		>
			<defs>
				<style>{`.cls-1{fill:#4553a4;}`}</style>
			</defs>
			<path
				className="cls-1"
				d="M285.35,0c0,1.74-15.84,75,87.07,106.4s113.48,57,118.64,102.81c7.85,69.58,72.64,94.28,72.64,94.28H612V0H285.35Z"
				transform="translate(-284.47)"
			/>
		</svg>
	);
};

const HomePage = () => {
	return (
		<div className="overflow-x-hidden">
			<div>
				<Banner />
				<StructuredData type="FAQPage" data={faqsData} />
			</div>

			<main>
				<WhyChooseUs />

				<OurServicesSection />

				<FeaturedDoctors />
				<div className="bg-white m-0 p-0">
					<AboutUs className="relative z-10 max-w-[1440px] mx-auto mt-0 min-h-[500px] " />

				</div>

				<Testimonials />

				<HMOLogos />

				<FAQSection />

				<EventsSection />

				<ConnectWithUsSection />
			</main>
		</div>
	);
};

export default HomePage;
