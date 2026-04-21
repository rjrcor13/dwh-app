import { getDocuments, getDocumentBySlug } from 'outstatic/server';
import ServicesDetailClient from '@/components/services/ServicesDetailsClient';
import StructuredData from '@/components/seo/StructuredData';

export async function generateStaticParams() {
	const services = await getDocuments('services', ['slug']);
	return services.map((service) => ({
		slug: service.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const service = await getDocumentBySlug('services', slug, ['title', 'description', 'fullContentData']);

	if (!service) {
		return {
			title: 'Service Not Found | Divine Word Hospital',
		};
	}

	const fullContent = service.fullContentData ? JSON.parse(service.fullContentData) : null;

	return {
		title: `${service.title} | Divine Word Hospital`,
		description: service.description,
		openGraph: {
			title: `${service.title} - Divine Word Hospital Expertise`,
			description: fullContent?.overview || service.description,
		},
	};
}

export default async function ServiceDetail({ params }) {
	const { slug } = await params;
	const service = await getDocumentBySlug('services', slug, ['title', 'description', 'icon', 'fullContentData', 'content']);

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

							<Link href="/" className="block w-full">
								<Button variant="ghost" className="text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-xl h-12 w-full">
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

	const fullContent = service.fullContentData ? JSON.parse(service.fullContentData) : {};
	const safeService = { 
		...service, 
		fullContent 
	};

	return (
		<div className="container_ mx-auto_ py-16_ px-4_ sm:px-6_ lg:px-8_">
			<StructuredData type="Service" data={safeService} />
			<ServicesDetailClient service={safeService} />
		</div>
	);
}
