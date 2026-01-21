'use client';

import { departmentsData } from '@/app/data/departments';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUpRight, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import SectionCTA from '@/components/ui/SectionCTA';
import AmbientBackground from '@/components/ui/AmbientBackground';
import GlassCard from '@/components/ui/GlassCard';

// Animation Variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 }
	}
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function DepartmentsLanding() {
	return (
		<div className="bg-slate-50/50 min-h-screen relative overflow-hidden font-sans pb-32 pt-24">

			{/* --- Ambient Background Mesh --- */}
			<AmbientBackground variant="light" />

			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">

				{/* Header */}
				<PageHeader
					badgeText="Centers of Excellence"
					title="Specialized"
					highlightText="Departments"
					description="A diverse range of specialized departments committed to exceptional patient care, advanced medical training, and innovative research."
				/>

				{/* Grid Layout */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{departmentsData.map((dept, index) => (
						<Link key={dept.id} href={`/expertise/departments/${dept.id}`} className="group block h-full">
							<motion.div
								variants={cardVariants}
								className="h-full"
							>
								<GlassCard>
									{/* Icon Area */}
									<div className="relative w-20 h-20 mb-8">
										<div className="absolute inset-0 bg-blue-100/50 rounded-2xl rotate-6 scale-90 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
										<div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-lg shadow-blue-900/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-500">
											<Stethoscope className="w-9 h-9" />
										</div>
									</div>

									{/* Content */}
									<h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors relative z-10 leading-tight">
										{dept.name.replace('Department of ', '')}
									</h3>
									<p className="text-slate-500 text-base leading-relaxed line-clamp-3 mb-8 flex-grow relative z-10">
										{dept.description}
									</p>

									{/* View More */}
									<div className="flex items-center justify-between text-sm font-bold text-slate-400 uppercase tracking-wider mt-auto pt-6 border-t border-slate-100/60 group-hover:border-blue-100 transition-colors relative z-10">
										<span className="group-hover:text-primary transition-colors">Explore</span>
										<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 group-hover:translate-x-1">
											<ArrowUpRight className="w-5 h-5" />
										</div>
									</div>
								</GlassCard>
							</motion.div>
						</Link>
					))}
				</motion.div>

				{/* CTA Section */}
				<SectionCTA />

			</div>
		</div>
	);
}
