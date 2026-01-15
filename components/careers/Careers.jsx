'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ChevronRight, ArrowUpRight } from 'lucide-react';
import PremiumBadge from '@/components/ui/PremiumBadge';

const Careers = ({ jobListings }) => {
	return (
		<main className="bg-slate-50 min-h-screen relative font-sans pb-32 pt-24 text-slate-900">

			{/* --- Header --- */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mb-16 text-center">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="inline-block"
				>
					<PremiumBadge text="Join Our Team" icon={Briefcase} className="mb-6" />
					<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 font-heading mb-6">
						Careers at Divine Word
					</h1>
					<p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
						Join a community of compassionate healers and innovators. We are looking for dedicated professionals to help us shape the future of healthcare.
					</p>
				</motion.div>
			</div>

			{/* --- Grid --- */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{jobListings.map((job, index) => (
						<Link href={`/careers/${job.id}`} key={index}>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className="group cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full"
							>
								<div className="relative h-56 w-full overflow-hidden bg-slate-100">
									<Image
										src={job.image}
										alt={job.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
									<div className="absolute bottom-4 left-4 right-4 text-white">
										<div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-90">{job.department}</div>
										<h3 className="text-xl font-bold font-heading leading-tight group-hover:text-blue-200 transition-colors">
											{job.title}
										</h3>
									</div>
								</div>
								<div className="p-6 flex flex-col flex-grow">
									<div className="flex flex-wrap gap-2 mb-4 text-xs font-medium text-slate-500">
										<span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
											<MapPin className="w-3 h-3" /> {job.location}
										</span>
										<span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
											<Clock className="w-3 h-3" /> {job.type}
										</span>
									</div>
									<p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow font-light">
										{job.description}
									</p>
									<div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
										Read More <ArrowUpRight className="w-4 h-4" />
									</div>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
};

export default Careers;
