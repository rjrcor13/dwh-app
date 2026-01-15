'use client';

import AmbientBackground from '@/components/ui/AmbientBackground';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	Activity,
	ArrowUpRight,
	GraduationCap,
	Heart,
	Microscope,
	ShieldCheck
} from 'lucide-react';

const WhyChooseUs = () => {
	// Linear features for a clean, professional grid
	const features = [
		{
			icon: Microscope,
			title: 'Advanced Innovation',
			description: 'Region VIII’s first MRI & Digital Mammography.',
		},
		{
			icon: ShieldCheck,
			title: 'Certified Safety',
			description: 'Level 3 Tertiary care adhering to global protocols.',
		},
		{
			icon: Heart,
			title: 'Compassionate Care',
			description: 'Inclusive service treating every patient as sacred.',
		},
		{
			icon: GraduationCap,
			title: 'Top Tier Training',
			description: 'Accredited Residency in Medicine & Pediatrics.',
		},
	];

	return (
		<section className="py-12 md:py-24 bg-primary relative overflow-hidden">
			<AmbientBackground />

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
					<div className="max-w-2xl">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
						>
							{/* Our Distinction */}
							<div className="flex items-center gap-2 mb-4">
								<div className="h-px w-10 bg-secondary"></div>
								<span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Distinction</span>
							</div>

						</motion.h2>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
							className="text-3xl lg:text-5xl font-bold font-heading text-white leading-tight"
						>
							World-Class Care, <br />
							<span className="text-blue-200">Right Here in Leyte.</span>
						</motion.h2>
					</div>

					<motion.p
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="text-blue-100 text-base md:text-lg max-w-sm border-l border-white/20 pl-6"
					>
						Setting the standard for healthcare with advanced technology and unwavering compassion.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					{features.map((feature, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="group relative h-full"
						>
							{/* Glass Card */}
							<div className={cn(
								"h-full relative overflow-hidden rounded-[2rem] p-6 md:p-8",
								"bg-white/5 backdrop-blur-sm border border-white/10",
								"transition-all duration-500 ease-out",
								"hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2"
							)}>
								{/* Hover Glow */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Icon Header */}
								<div className="flex justify-between items-start mb-8">
									<div className={cn(
										"w-14 h-14 rounded-2xl flex items-center justify-center",
										"bg-white/5 border border-white/10 text-secondary",
										"group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500"
									)}>
										<feature.icon className="h-7 w-7" strokeWidth={1.5} />
									</div>
									<ArrowUpRight className="text-white/30 w-6 h-6 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
								</div>

								{/* Content */}
								<div className="relative z-10">
									<h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-secondary transition-colors duration-300">
										{feature.title}
									</h3>
									<p className="text-blue-100/80 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
										{feature.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
