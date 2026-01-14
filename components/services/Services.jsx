'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Search, Stethoscope, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';

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

	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

	return (
		<div ref={containerRef} className="bg-slate-50/50 min-h-screen relative overflow-hidden font-sans pb-32 pt-24">

			{/* --- Ambient Background Mesh --- */}
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-[120px]" />
				<div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-amber-50/50 to-orange-50/20 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

				{/* Header Section */}
				<div className="text-center max-w-3xl mx-auto mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-100 text-primary text-sm font-bold tracking-wide uppercase backdrop-blur-md mb-8 shadow-sm"
					>
						<Stethoscope className="w-4 h-4 text-secondary" />
						<span>{label || 'Departmental Units'}</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 mb-8 leading-tight tracking-tight"
					>
						{title}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-slate-600 text-lg md:text-xl leading-relaxed font-light mb-12"
					>
						{description}
					</motion.p>

					{/* Search Bar */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="relative max-w-md mx-auto group"
					>
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
					</motion.div>
				</div>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{filteredServices.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className="group relative"
						>
							<Link href={`/expertise/services/${service.slug}`} className="block h-full">
								<div className={cn(
									"h-full p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden",
									"bg-white/60 backdrop-blur-xl border-white/60",
									"hover:bg-white/80 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1",
									"flex flex-col justify-between"
								)}>
									{/* Hover Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<div className="relative z-10">
										{/* Icon */}
										<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center mb-8 text-primary group-hover:from-primary group-hover:to-blue-700 group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-3">
											<DynamicIcons name={service.icon} className="w-8 h-8" />
										</div>

										<h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">
											{service.title}
										</h3>

										<p className="text-slate-500 leading-relaxed text-sm mb-8 line-clamp-3 group-hover:text-slate-600 transition-colors">
											{service.description}
										</p>
									</div>

									{/* Bottom Action */}
									<div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-slate-100 group-hover:border-blue-100 transition-colors">
										<span className="text-sm font-bold text-primary/60 group-hover:text-primary transition-colors">
											Explore Unit
										</span>
										<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 border border-slate-100 group-hover:border-primary">
											<ArrowUpRight className="w-5 h-5" />
										</div>
									</div>

									{/* Decorative Blob */}
									<div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

			</div>
		</div>
	);
};

export default Services;
