'use client';

import { servicesData } from '@/app/data/services';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const OurServicesSection = () => {
	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div className="max-w-2xl">
						<h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">
							WHAT WE OFFER
						</h2>
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
							className="group flex items-center gap-2 text-slate-600 font-semibold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
						>
							View All Services <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</Link>
					</div>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{servicesData.map((service, index) => {
						const ServiceIcon = service.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start h-full"
							>
								{/* Icon */}
								<div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
									<ServiceIcon className="w-7 h-7" />
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
									Learn More <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Mobile View All Button */}
				<div className="md:hidden mt-12 text-center">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 text-primary font-semibold border-b border-primary/20 pb-1"
					>
						View All Services <ArrowUpRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default OurServicesSection;
