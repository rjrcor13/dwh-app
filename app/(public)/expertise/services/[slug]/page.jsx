// 'use client';

// import { servicesData } from '@/app/data/services';
// import { useRouter } from 'next/navigation';

// export default function ServiceDetails({ params }) {
// 	const router = useRouter();
// 	const service = servicesData.find((s) => s.slug === params.slug);

// 	if (!service) {
// 		return <div className="p-10 text-center text-xl">Service not found</div>;
// 	}

// 	const ServiceIcon = service.icon;

// 	return (
// 		<div className="max-w-4xl mx-auto p-8">
// 			<button
// 				onClick={() => router.back()}
// 				className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
// 			>
// 				← Back
// 			</button>

// 			<div className="flex items-center gap-4 mb-6">
// 				<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500">
// 					<ServiceIcon className="w-8 h-8" />
// 				</div>
// 				<h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
// 			</div>

// 			<p className="text-lg text-gray-700">{service.description}</p>
// 			{/* Add more service details here */}
// 		</div>
// 	);
// }

// import ServiceDetail from '@/components/services/ServicesDetails';
// import React from 'react';

// const ServicesPage = () => {
// 	return (
// 		<div>
// 			<ServiceDetail />{' '}
// 		</div>
// 	);
// };

// export default ServicesPage;
// app/expertise/services/[slug]/page.jsx
//
// app/expertise/services/[slug]/page.jsx
import { servicesData } from '@/app/data/services';
import ServicesDetailClient from '@/components/services/ServicesDetailsClient';
import StructuredData from '@/components/seo/StructuredData';
// Import all lucide icons here if you plan to render them in the server component
import {
	BedIcon,
	FileTextIcon,
	Filter,
	Heart,
	HeartPulse,
	Microscope,
	Monitor,
	Radiation,
	ShieldCheck,
	ShoppingCart,
	Syringe,
	Tv,
	X,
} from 'lucide-react';

// Map icon names to actual components if you want to render them dynamically here
const iconMap = {
	Radiation: Radiation,
	Monitor: Monitor,
	Syringe: Syringe,
	Filter: Filter,
	ShoppingCart: ShoppingCart,
	Heart: Heart,
	X: X,
	Tv: Tv,
	Microscope: Microscope,
	ShieldCheck: ShieldCheck,
	HeartPulse: HeartPulse,
	FileTextIcon: FileTextIcon,
	BedIcon: BedIcon,
	// ... add all your Lucide icons here
};

export default async function ServiceDetail({ params }) {
	const resolvedParams = await params;
	const service = servicesData.find((s) => s.slug === resolvedParams.slug);

	if (!service) {
		if (!service) {
			const { SearchX, ArrowLeft, Stethoscope } = await import('lucide-react');
			const { Button } = await import('@/components/ui/button');
			const AmbientBackground = (await import('@/components/ui/AmbientBackground')).default;
			const Link = (await import('next/link')).default;

			return (
				<div className="relative min-h-[60vh] flex items-center justify-center p-6 overflow-hidden bg-slate-50/50">
					<AmbientBackground variant="light" />

					<div className="relative z-10 max-w-md w-full text-center">
						<div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50">
							<div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500 shadow-sm border border-rose-100">
								<SearchX className="w-10 h-10" />
							</div>

							<h1 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-3">
								Service Not Found
							</h1>

							<p className="text-slate-500 mb-8 leading-relaxed">
								The medical service you are looking for isn't available or may have been moved.
							</p>

							<div className="space-y-3">
								<Link href="/expertise/services" className="block w-full">
									<Button className="w-full bg-primary hover:bg-blue-800 text-white rounded-xl h-12 text-base font-bold shadow-lg shadow-blue-900/20">
										<Stethoscope className="w-4 h-4 mr-2" />
										View All Services
									</Button>
								</Link>

								<Link href="/home" className="block w-full">
									<Button variant="ghost" className="w-full text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-xl h-12">
										<ArrowLeft className="w-4 h-4 mr-2" />
										Back to Home
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

	// IMPORTANT: Render the icon directly here in the Server Component
	const IconComponent = service.icon; // service.icon is already the component itself
	// Or if you changed servicesData to store string names:
	// const IconComponent = iconMap[service.iconName]; // if servicesData.icon was a string like 'Radiation'

	// Pass only serializable data to the client component
	const { icon, ...safeService } = service; // Destructure the non-serializable icon

	return (
		// You can pass the IconComponent as a prop if ServicesDetailClient is client-side
		// but it's better to render it here directly in the server component if possible.
		// Or, pass a prop like 'iconSlug' and let the client component choose the icon from its own imports.

		// Option A: Render icon in Server Component, pass other data to Client Component
		<div className="container_ mx-auto_ py-16_ px-4_ sm:px-6_ lg:px-8_">
			<StructuredData type="Service" data={service} />
			{/* Render the icon here */}
			{/* {IconComponent && (
				<IconComponent size={48} className="mb-4 text-indigo-600" />
			)} */}
			<ServicesDetailClient service={safeService} />
		</div>
		// Option B: If ServicesDetailClient needs the icon for client-side interactions,
		// change your servicesData to store icon *names* (strings) instead of components.
		// Then ServicesDetailClient can import { iconMap } and render it.
	);
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params;
	const service = servicesData.find((s) => s.slug === resolvedParams.slug);

	if (!service) {
		return {
			title: 'Service Not Found',
			description: 'The requested service could not be found.',
		};
	}

	return {
		title: `${service.title} | Divine Word Hospital`,
		description: service.description,
		openGraph: {
			title: `${service.title} - Divine Word Hospital Expertise`,
			description: service.fullContent?.overview || service.description,
		},
	};
}

export async function generateStaticParams() {
	return servicesData.map((service) => ({
		slug: service.slug,
	}));
}
