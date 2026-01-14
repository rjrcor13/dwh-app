'use client';

import { departmentsData } from '@/app/data/departments';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUpRight, Stethoscope, Sparkles } from 'lucide-react';
import Link from 'next/link';

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
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-[120px]" />
				<div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-amber-50/50 to-orange-50/20 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20 max-w-4xl mx-auto"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-blue-100 text-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-sm">
						<Stethoscope className="w-4 h-4 text-secondary" />
						<span>Centers of Excellence</span>
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 mb-6 leading-tight tracking-tight">
						Specialized Departments
					</h1>
					<p className="text-slate-600 text-lg leading-relaxed font-light max-w-2xl mx-auto">
						A diverse range of specialized departments committed to exceptional patient care,
						advanced medical training, and innovative research.
					</p>
				</motion.div>

				{/* Grid Layout */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{departmentsData.map((dept, index) => (
						<Link key={dept.id} href={`/expertise/departments/${dept.id}`} className="group">
							<motion.div
								variants={cardVariants}
								className={cn(
									"bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2rem] p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300",
									"hover:bg-white/80 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1"
								)}
							>
								{/* Gradient Blob on Hover */}
								<div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Icon Area */}
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:from-primary group-hover:to-blue-700 group-hover:text-white transition-all duration-500">
									<Stethoscope className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
								</div>

								{/* Content */}
								<h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">
									{dept.name.replace('Department of ', '')}
								</h3>
								<p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow">
									{dept.description}
								</p>

								{/* View More */}
								<div className="flex items-center gap-2 text-sm font-bold text-primary mt-auto pl-1">
									Explore <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</div>

							</motion.div>
						</Link>
					))}
				</motion.div>

			</div>
		</div>
	);
}
