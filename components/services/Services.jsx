'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';

const Services = ({
	title,
	description,
	label,
	servicesData,
}) => {
	// Default to the first service active
	const [activeIndex, setActiveIndex] = useState(0);

	const activeService = servicesData[activeIndex];

	return (
		<div className="bg-primary min-h-screen relative overflow-hidden font-sans">
			{/* Dynamic Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />

			{/* Background Atmosphere */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
				<div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] mix-blend-screen opacity-30" />
				<div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] mix-blend-screen opacity-20" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "circOut" }}
					className="mb-20 text-center lg:text-left"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold tracking-wide uppercase backdrop-blur-md mb-6">
						<Stethoscope className="w-4 h-4 text-secondary" />
						<span>{label || 'Departmental Units'}</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
						{title}
					</h1>
					{description && (
						<p className="text-blue-100/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
							{description}
						</p>
					)}
				</motion.div>


				{/* Main Content Layout */}
				<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

					{/* LEFT COLUMN: MENU (Desktop) / LIST (Mobile) */}
					<div className="lg:col-span-5 space-y-3">
						{servicesData.map((service, index) => (
							<div key={index} className="group">
								{/* Mobile Accordion Toggle / Desktop Menu Item */}
								<button
									onClick={() => setActiveIndex(activeIndex === index ? null : index)} // Toggle behavior for mobile naturally, set active for desktop
									className={cn(
										"w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between",
										activeIndex === index
											? "bg-white/10 border-white/20 shadow-lg shadow-black/10"
											: "bg-transparent border-transparent hover:bg-white/5"
									)}
								>
									<div className="flex items-center gap-4">
										<span className={cn(
											"text-sm font-bold tracking-widest uppercase transition-colors",
											activeIndex === index ? "text-secondary" : "text-blue-200/50 group-hover:text-blue-200"
										)}>
											{(index + 1).toString().padStart(2, '0')}
										</span>
										<span className={cn(
											"text-lg md:text-xl font-bold font-heading transition-colors",
											activeIndex === index ? "text-white" : "text-white/60 group-hover:text-white"
										)}>
											{service.title}
										</span>
									</div>
									{/* Mobile Only Indicator */}
									<ChevronDown className={cn(
										"w-5 h-5 text-white/50 transition-transform lg:hidden",
										activeIndex === index ? "rotate-180" : ""
									)} />
									{/* Desktop Active Indicator */}
									<div className={cn(
										"hidden lg:block w-2 h-2 rounded-full bg-secondary transition-all",
										activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-0"
									)} />
								</button>

								{/* Mobile Accordion Content (Visible only on small screens when active) */}
								<AnimatePresence>
									{activeIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="lg:hidden overflow-hidden"
										>
											<div className="px-6 pb-6 pt-2">
												<p className="text-blue-100/70 text-sm leading-relaxed mb-4">
													{service.description}
												</p>
												<Link
													href={`/expertise/services/${service.slug}`}
													className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:underline"
												>
													Explore Unit <ArrowUpRight className="w-4 h-4" />
												</Link>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>


					{/* RIGHT COLUMN: PREVIEW AREA (Desktop Only - Sticky) */}
					<div className="hidden lg:block lg:col-span-7 sticky top-32">
						<AnimatePresence mode="wait">
							{activeService && (
								<motion.div
									key={activeService.slug} // Key change triggers animation
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.5, ease: "circOut" }}
									className="relative"
								>
									{/* Glass Card Container */}
									<div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 border border-white/10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-between group">

										{/* Decor Blobs inside card */}
										<div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-secondary/30" />

										<div>
											{/* Icon */}
											<div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-secondary group-hover:scale-110 transition-transform duration-500">
												<DynamicIcons name={activeService.icon} className="w-10 h-10" />
											</div>

											{/* Content */}
											<h2 className="text-4xl font-bold font-heading text-white mb-6">
												{activeService.title}
											</h2>
											<p className="text-xl text-blue-100/80 leading-relaxed font-light mb-8 max-w-xl">
												{activeService.description}
											</p>

											{/* Mini Sub-list if available (mock/implied) */}
											<div className="flex flex-wrap gap-3">
												{['Top Rated', '24/7 Available', 'Specialized Staff'].map((tag, i) => (
													<span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-blue-200 text-xs font-semibold uppercase tracking-wider">
														{tag}
													</span>
												))}
											</div>
										</div>

										{/* Action Area */}
										<div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
											<div className="flex items-center gap-4 text-white/50 text-sm">
												<Stethoscope className="w-5 h-5" />
												<span>Excellence in Care</span>
											</div>
											<Link
												href={`/expertise/services/${activeService.slug}`}
												className="
													group/btn relative px-8 py-4 bg-secondary text-white font-bold rounded-2xl overflow-hidden
													transition-all hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-1
												"
											>
												<span className="relative z-10 flex items-center gap-2">
													View Full Details <ArrowUpRight className="w-5 h-5" />
												</span>
												<div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
											</Link>
										</div>

									</div>

									{/* Decorative Offset Border */}
									<div className="absolute top-4 left-4 right-[-1rem] bottom-[-1rem] rounded-[3.5rem] border border-white/5 -z-10" />

								</motion.div>
							)}
						</AnimatePresence>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Services;
