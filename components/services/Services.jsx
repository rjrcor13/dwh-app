'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ServiceCard from './ServicesCard';

const Services = ({
	classaNames,
	title,
	description,
	label,
	servicesData,
	titleColor,
}) => {
	return (
		<section className="py-24 bg-slate-50_ bg-gray-100/20 relative overflow-hidde n">
			{/* Background Blob for Depth */}
			{/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
				<div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
				<div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
			</div> */}

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{/* Section Header - Centered */}
				<div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
					{label && (
						<h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
							{label}
						</h2>
					)}
					{title && (
						<h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6">
							{title}
						</h2>
					)}
					{description && (
						<p className="text-slate-500 text-lg leading-relaxed">
							{description}
						</p>
					)}
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{servicesData.map((service, index) => (
						<ServiceCard key={index} service={service} index={index} />
					))}
				</div>

				{/* View All Button - Centered Bottom */}
				<div className="mt-16 text-center">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300 group"
					>
						View All Services <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Services;
