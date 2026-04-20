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
import React, { Suspense } from 'react';

const HomePage = () => {
	return (
		<div className="overflow-x-hidden">
			<div>
				<Banner />
				<StructuredData type="FAQPage" data={faqsData} />
				<StructuredData type="Hospital" />
			</div>

			<main>
				<WhyChooseUs />

				<OurServicesSection />

				<Suspense fallback={
					<div className="w-full flex justify-center py-24"><div className="w-full max-w-[1440px] h-[400px] bg-slate-100 animate-pulse rounded-[2rem]" /></div>
				}>
					<FeaturedDoctors />
				</Suspense>

				<div className="bg-white m-0 p-0">
					<AboutUs className="relative z-10 max-w-[1440px] mx-auto mt-0 min-h-[500px] " />
				</div>

				<Suspense fallback={
					<div className="w-full flex justify-center py-24"><div className="w-full max-w-[1440px] h-[400px] bg-slate-100 animate-pulse rounded-[2rem]" /></div>
				}>
					<Testimonials />
				</Suspense>

				<HMOLogos />

				<FAQSection />

				<EventsSection />

				<ConnectWithUsSection />
			</main>
		</div>
	);
};

export default HomePage;
