'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';
import PageHeader from '@/components/ui/PageHeader';
import SectionCTA from '@/components/ui/SectionCTA';

const Services = ({
	title,
	description,
	label,
	servicesData,
}) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');

	// Filter services based on search
	const filteredServices = servicesData.filter(service =>
		service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
		service.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	});

	return (
		<div ref={containerRef} className="bg-slate-50/50 min-h-screen relative overflow-hidden font-sans pb-32 pt-24">

			{/* --- Ambient Background Mesh --- */}
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-[120px]" />
				<div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-amber-50/50 to-orange-50/20 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">

				{/* Header Section */}
				<PageHeader
					badgeText={label || 'Medical Excellence'}
					title="Our"
					highlightText={title || 'Services'}
					description={description}
				>
					{/* Search Bar */}
					<div className="relative max-w-md mx-auto group">
						<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors z-10">
							<Search className="w-5 h-5" />
						</div>
						<input
							type="text"
							placeholder="Search services..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-md hover:shadow-lg"
						/>
					</div>
				</PageHeader>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{filteredServices.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className="group relative h-full"
						>
							<Link href={`/expertise/services/${service.slug}`} className="block h-full">
								<div className={cn(
									"h-full p-8 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden flex flex-col justify-between",
									"bg-white/70 backdrop-blur-2xl border-white/50",
									"hover:bg-white/90 hover:border-blue-200/50 hover:shadow-[0_20px_40px_-15px_rgba(31,27,153,0.15)] hover:-translate-y-2"
								)}>

									{/* --- Decorative Glows --- */}
									<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/40 via-purple-100/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
									<div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

									{/* Hover Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

									<div className="relative z-10">
										{/* Floating Icon Container */}
										<div className="relative w-20 h-20 mb-8">
											<div className="absolute inset-0 bg-blue-100/50 rounded-2xl rotate-6 scale-90 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
											<div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-lg shadow-blue-900/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-500">
												<DynamicIcons name={service.icon} className="w-9 h-9" />
											</div>
										</div>

										<h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
											{service.title}
										</h3>

										<p className="text-slate-500 leading-relaxed text-base mb-8 line-clamp-3 group-hover:text-slate-600 transition-colors">
											{service.description}
										</p>
									</div>

									{/* Bottom Action */}
									<div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-slate-100/60 group-hover:border-blue-100 transition-colors">
										<span className="text-sm font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">
											View Details
										</span>
										<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 group-hover:translate-x-1">
											<ArrowUpRight className="w-5 h-5" />
										</div>
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Empty State */}
				{filteredServices.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center py-20"
					>
						<p className="text-slate-400 text-xl font-light">No services found for "{searchTerm}"</p>
					</motion.div>
				)}

				{/* CTA Section */}
				<SectionCTA />

			</div>
		</div>
	);
};

export default Services;
