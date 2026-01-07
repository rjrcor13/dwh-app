'use client';
import { motion } from 'framer-motion';
import React from 'react';
import {
	AcademicCapIcon,
	BeakerIcon,
	HeartIcon,
	ShieldCheckIcon,
	SparklesIcon
} from '@heroicons/react/24/solid';

const WhyChooseUsLight = () => {
	// Bento-style features with span hints
	const features = [
		{
			icon: BeakerIcon,
			title: 'Advanced Innovation',
			description: 'First in Region VIII with Hemodialysis, MRI, and Digital Mammography.',
			color: 'bg-blue-500',
			span: 'md:col-span-2'
		},
		{
			icon: ShieldCheckIcon,
			title: 'Certified Quality',
			description: 'Level 3 Tertiary Institution adhering to global safety protocols.',
			color: 'bg-teal-500',
			span: 'md:col-span-1'
		},
		{
			icon: HeartIcon,
			title: 'Compassionate Care',
			description: 'We treat every patient as sacred, upholding inclusive and dignified service.',
			color: 'bg-rose-500',
			span: 'md:col-span-1'
		},
		{
			icon: AcademicCapIcon,
			title: 'Accredited Training',
			description: 'Home to top-tier Residency Training Programs in Medicine & Pediatrics.',
			color: 'bg-indigo-500',
			span: 'md:col-span-2'
		},
	];

	return (
		<section className="py-24 bg-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="text-center mb-16">
					<h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
						Our Distinction
					</h2>
					<h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
						Why Choose Divine Word?
					</h2>
					<p className="text-slate-500 text-xl max-w-2xl mx-auto">
						Leading the region with advanced solutions, certified expertise, and mission-driven service.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{features.map((feature, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className={`relative group overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 ${feature.span}`}
						>
							{/* Background decoration */}
							<div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full ${feature.color} transition-transform group-hover:scale-150 duration-500`} />

							<div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg ${feature.color}`}>
								<feature.icon className="h-7 w-7" />
							</div>

							<h3 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors">
								{feature.title}
							</h3>
							<p className="text-slate-500 text-lg leading-relaxed mb-6">
								{feature.description}
							</p>

							<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
								<SparklesIcon className={`w-6 h-6 ${feature.color.replace('bg-', 'text-')}`} />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUsLight;
