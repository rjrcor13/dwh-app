import { servicesData } from '@/app/data/services';
import ServicesDetailClient from './ServicesDetailsClient';
export default function ServiceDetail({ params }) {
	// ✅ Fallback to avoid crashing if `params` is undefined
	if (!params || !params.slug) {
		return (
			<div className="container mx-auto py-16 text-center">
				<h1 className="text-4xl font-bold text-red-600">Invalid Service</h1>
				<p className="text-gray-600 mt-4">
					No service identifier found in the URL.
				</p>
			</div>
		);
	}

	const { slug } = params;
	const service = servicesData.find((s) => s.slug === slug);

	if (!service) {
		return (
			<div className="container mx-auto py-16 text-center">
				<h1 className="text-4xl font-bold text-red-600">Service Not Found</h1>
				<p className="text-gray-600 mt-4">
					The service you are looking for does not exist.
				</p>
			</div>
		);
	}

	return <ServicesDetailClient service={service} />;
}

export async function generateStaticParams() {
	return servicesData.map((service) => ({
		slug: service.slug,
	}));
}
