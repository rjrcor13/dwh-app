'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	GraduationCap,
	Heart,
	Microscope,
	ShieldCheck,
	Sparkles
} from 'lucide-react';

const WhyChooseUs = () => {
	// Bento-style features with span hints
	const features = [
		{
			icon: Microscope,
			title: 'Advanced Innovation',
			description: 'First in Region VIII with Hemodialysis, MRI, and Digital Mammography.',
			span: 'md:col-span-2'
		},
		{
			icon: ShieldCheck,
			title: 'Certified Quality',
			description: 'Level 3 Tertiary Institution adhering to global safety protocols.',
			span: 'md:col-span-1'
		},
		{
			icon: Heart,
			title: 'Compassionate Care',
			description: 'We treat every patient as sacred, upholding inclusive and dignified service.',
			span: 'md:col-span-1'
		},
		{
			icon: GraduationCap,
			title: 'Accredited Training',
			description: 'Home to top-tier Residency Training Programs in Medicine & Pediatrics.',
			span: 'md:col-span-2'
		},
	];

	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden">
			{/* Subtle Background Blobs for Depth */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
				<div className="absolute  top-[20%] right-[10%] w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
				<div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16 max-w-3xl mx-auto">
					<h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
						Our Distinction
					</h2>
					<h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6">
						Why Choose Divine Word?
					</h2>
					<p className="text-slate-500 text-xl leading-relaxed">
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
							className={cn(
								"group relative overflow-hidden rounded-[2rem] bg-white p-10 h-full flex flex-col items-start",
								"border border-slate-100 transition-all duration-300 ease-out",
								"hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2",
								"cursor-pointer",
								feature.span
							)}
						>
							{/* Hover Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/0 group-hover:to-primary/5 transition-colors duration-500 pointer-events-none" />

							{/* Icon */}
							<div className={cn(
								"w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
								"bg-primary/5 text-primary transition-transform duration-500 group-hover:scale-110 relative z-10"
							)}>
								<feature.icon className="h-8 w-8" strokeWidth={1.5} />
							</div>

							{/* Content */}
							<div className="relative z-10">
								<h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">
									{feature.title}
								</h3>
								<p className="text-slate-500 text-lg leading-relaxed font-medium">
									{feature.description}
								</p>
							</div>

							{/* Decorative Sparkle (Subtle) */}
							<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-0">
								<Sparkles className="w-6 h-6 text-secondary/40" />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
