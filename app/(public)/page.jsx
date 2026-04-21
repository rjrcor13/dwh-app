import { getDocuments } from 'outstatic/server';
import Banner from '@/components/banner/Banner';
import AbousUs from '@/components/home/AboutUs';
import ConnectWithUsSection from '@/components/home/ConnectWithUs';
import EventsSection from '@/components/home/Events';
import FAQSection from '@/components/home/FAQ';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import OurServicesSection from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import HMOLogos from '@/components/hmologos/HMOLogos';
import WhyChooseUs from '@/components/whychooseus/WhyChooseUs';
import StructuredData from '@/components/seo/StructuredData';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import DoctorGridSkeleton from '@/components/doctors/DoctorSkeleton';
import React, { Suspense } from 'react';
import AboutUs from '@/components/home/AboutUs';

// Generates highly optimized SEO Metadata
export const metadata = {
	title: 'Divine Word Hospital | Expert Healthcare in Tacloban City',
	description: 'Welcome to Divine Word Hospital, the premier tertiary hospital in Region VIII. Delivering cutting-edge medical facilities, 24/7 ER, and faith-driven compassion.',
	openGraph: {
		title: 'Divine Word Hospital | Expert Healthcare in Tacloban',
		description: 'Welcome to Divine Word Hospital. Delivering cutting-edge medical facilities, 24/7 ER, and faith-driven compassion since 1965.',
	}
};

const HomePage = async () => {
	const faqsData = await getDocuments('faqs', ['title', 'content', 'slug', 'keywords']);
	// map back to old property names if necessary: question = title, answer = content
	const faqs = faqsData.map(f => ({ question: f.title, answer: f.content, keywords: f.keywords }));
	
	const doctorsData = await getDocuments('doctors', ['title', 'slug', 'specialties', 'hospital', 'clinicDays', 'clinicHours', 'image']);
	const doctors = doctorsData.map(d => ({ ...d, name: d.title }));

	const servicesData = await getDocuments('services', ['title', 'slug', 'description', 'icon', 'content']);
	const services = servicesData.map(s => ({ ...s, description: s.content || s.description }));
	return (
		<div className="overflow-x-hidden">
			<div>
				<Banner />
				<StructuredData type="FAQPage" data={faqs} />
				<StructuredData type="Hospital" />
			</div>

			<main>
				<WhyChooseUs />

				<OurServicesSection />

				<ErrorBoundary>
					<Suspense fallback={<div className="w-full max-w-[1440px] mx-auto px-4 py-12"><DoctorGridSkeleton count={4} /></div>}>
						<FeaturedDoctors doctors={doctors} />
					</Suspense>
				</ErrorBoundary>

				<div className="bg-white m-0 p-0">
					<AboutUs className="relative z-10 max-w-[1440px] mx-auto mt-0 min-h-[500px] " />
				</div>

				<ErrorBoundary>
					<Suspense fallback={
						<div className="w-full flex justify-center py-24"><div className="w-full max-w-[1440px] h-[400px] bg-slate-100 animate-pulse rounded-[2rem]" /></div>
					}>
						<Testimonials />
					</Suspense>
				</ErrorBoundary>

				<HMOLogos />

				<FAQSection faqs={faqs} doctors={doctors} services={services} />

				<EventsSection />

				<ConnectWithUsSection />
			</main>
		</div>
	);
};

export default HomePage;
