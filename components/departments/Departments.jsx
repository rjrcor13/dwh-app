'use client';

import { departmentsData } from '@/app/data/departments';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUpRight, Stethoscope } from 'lucide-react';
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
		<div className="bg-primary min-h-screen relative overflow-hidden font-sans">
			{/* Background Ambience */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />
			<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] mix-blend-screen opacity-30 pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20 max-w-4xl mx-auto"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
						<Stethoscope className="w-4 h-4 text-secondary" />
						<span>Centers of Excellence</span>
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
						Specialized Departments
					</h1>
					<p className="text-blue-100/70 text-lg leading-relaxed font-light">
						A diverse range of specialized departments committed to exceptional patient care,
						advanced medical training, and innovative research.
					</p>
				</motion.div>

				{/* Grid Layout */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{departmentsData.map((dept) => (
						<Link key={dept.id} href={`/expertise/departments/${dept.id}`} className="group">
							<motion.div
								variants={cardVariants}
								className={cn(
									"bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300",
									"hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
								)}
							>
								{/* Hover Glow */}
								<div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Icon Area */}
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
									{/* Since we can't reliably render the icon component from server data in this client context without props, 
									    we'll use a visual placeholder or rely on Static imports if mapped. 
										Using Stethoscope fallback for grid visuals for now to prevent errors.
									 */}
									<Stethoscope className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
								</div>

								{/* Content */}
								<h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-secondary transition-colors">
									{dept.name.replace('Department of ', '')}
								</h3>
								<p className="text-blue-100/70 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow font-light">
									{dept.description}
								</p>

								{/* View More */}
								<div className="flex items-center gap-2 text-sm font-bold text-blue-200 mt-auto group-hover:text-white transition-colors">
									Explore Department <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</div>

							</motion.div>
						</Link>
					))}
				</motion.div>

			</div>
		</div>
	);
}
