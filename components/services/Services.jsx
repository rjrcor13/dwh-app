'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Search, Stethoscope } from 'lucide-react';
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
		<div ref={containerRef} className="bg-primary min-h-screen relative overflow-hidden font-sans">
			{/* Dynamic Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />

			{/* Animated Background Elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<motion.div 
					style={{ y }}
					className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen opacity-20" 
				/>
				<motion.div 
					style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
					className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen opacity-10" 
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

				{/* Header Section */}
				<div className="text-center max-w-3xl mx-auto mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-sm font-semibold tracking-wide uppercase backdrop-blur-md mb-8"
					>
						<Stethoscope className="w-4 h-4 text-secondary" />
						<span>{label || 'Departmental Units'}</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 leading-tight tracking-tight"
					>
						{title}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-blue-100/70 text-lg md:text-xl leading-relaxed font-light mb-12"
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
						<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300/50 group-focus-within:text-secondary transition-colors z-10">
							<Search className="w-5 h-5" />
						</div>
						<input
							type="text"
							placeholder="Search services..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-blue-300/30 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all shadow-lg backdrop-blur-sm"
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
									"bg-white/5 backdrop-blur-sm border-white/5",
									"group-hover:bg-white/10 group-hover:border-white/10 group-hover:shadow-2xl group-hover:shadow-secondary/5",
									"flex flex-col justify-between"
								)}>
									{/* Hover Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									
									<div className="relative z-10">
										{/* Icon */}
										<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-black/20">
											<DynamicIcons name={service.icon} className="w-8 h-8" />
										</div>

										<h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-secondary transition-colors">
											{service.title}
										</h3>
										
										<p className="text-blue-100/60 leading-relaxed text-sm mb-8 line-clamp-3 group-hover:text-blue-100/80 transition-colors">
											{service.description}
										</p>
									</div>

									{/* Bottom Action */}
									<div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
										<span className="text-sm font-medium text-blue-200/50 group-hover:text-white transition-colors">
											Explore Unit
										</span>
										<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
											<ArrowUpRight className="w-5 h-5" />
										</div>
									</div>

									{/* Decorative Blob */}
									<div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-[60px] group-hover:bg-secondary/30 transition-all duration-500" />
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
						<p className="text-blue-200/50 text-xl font-light">No services found for "{searchTerm}"</p>
					</motion.div>
				)}

			</div>
		</div>
	);
};

export default Services;
