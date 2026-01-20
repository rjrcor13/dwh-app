'use client';

import { servicesData } from '@/app/data/services';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';

const OurServicesSection = () => {
	return (
		<section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div className="max-w-[1440px]">
						{/* <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">
							WHAT WE OFFER
						</h2> */}
						<div className="flex items-center gap-2 mb-4">
							<div className="h-px w-10 bg-secondary"></div>
							<span className="text-secondary font-bold tracking-widest uppercase text-sm">What We Offer</span>
						</div>
						<h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6">
							Our Services
						</h2>
						<p className="text-slate-500 text-lg leading-relaxed">
							We offer a wide range of medical services to provide you and your family with the best possible care.
						</p>
					</div>
					<div className="hidden md:block">
						<Link
							href="/services"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300 group"
						>
							View All Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
						</Link>
					</div>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{servicesData
						.filter(service => [
							'emergency-care',
							'icu',
							'nicu',
							'cardio-pulmonary',
							'radiology',
							'pathology-laboratory',
							'hemo-dialysis',
							'physical-therapy'
						].includes(service.slug))
						.map((service, index) => {
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="group bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start h-full"
								>
									{/* Icon */}
									<div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
										<DynamicIcons name={service.icon} className="w-7 h-7" />
									</div>

									{/* Content */}
									<h3 className="text-xl font-bold font-heading text-slate-800 mb-3 group-hover:text-primary transition-colors">
										{service.title}
									</h3>
									<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
										{service.description}
									</p>

									{/* Action */}
									<div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors mt-auto">
										Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
									</div>
								</motion.div>
							);
						})}
				</div>

				{/* Mobile View All Button */}
				<div className="md:hidden mt-12 text-center">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300 group"
					>
						View All Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</Link>
				</div>
			</div>
		</section >
	);
};

export default OurServicesSection;
