'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ChevronRight, ArrowUpRight, Heart, Zap, Award, Users, GraduationCap } from 'lucide-react';
import PremiumBadge from '@/components/ui/PremiumBadge';
import AmbientBackground from '@/components/ui/AmbientBackground';

const Careers = ({ jobListings }) => {

	const features = [
		{
			icon: Heart,
			title: "Compassionate Culture",
			description: "Work in an environment where care and empathy are at the core of everything we do."
		},
		{
			icon: Zap,
			title: "Innovation",
			description: "Access to state-of-the-art medical technology and continuous professional development."
		},
		{
			icon: Users,
			title: "Community",
			description: "Join a supportive family of professionals dedicated to serving the region."
		},
		{
			icon: Award,
			title: "Excellence",
			description: "Be part of an award-winning team recognized for high standards of patient safety and quality."
		}
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 }
		}
	};

	return (
		<main className="bg-slate-50/50 min-h-screen relative font-sans pb-32 pt-8 text-slate-900 overflow-hidden">

			{/* Light Mode Ambient Background - Enhanced */}
			<div className="fixed inset-0 pointer-events-none">
				<AmbientBackground variant="light" />
				{/* Extra floating blobs for interest */}
				<div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
				<div className="absolute bottom-40 right-[10%] w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-700" />
			</div>

			{/* --- Hero Section --- */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-32 mb-20 md:mb-32 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="inline-block"
				>
					<PremiumBadge text="Join Our Team" icon={Briefcase} className="mb-6 md:mb-8" />
					<h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading text-slate-900 mb-8 tracking-tight leading-[0.9]">
						Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">Divine Word</span>
					</h1>
					<p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light px-4">
						Build a rewarding career with us. We are looking for passionate individuals to help us shape the future of healthcare.
					</p>
				</motion.div>
			</div>

			{/* --- Values / Why Join Us Section --- */}
			<section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{features.map((feature, idx) => (
						<motion.div
							key={idx}
							variants={itemVariants}
							className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 group"
						>
							<div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
								<feature.icon className="w-7 h-7" />
							</div>
							<h3 className="text-lg font-bold font-heading text-slate-900 mb-3">{feature.title}</h3>
							<p className="text-sm text-slate-500 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* --- Open Positions Header --- */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row items-end justify-between gap-6 border-b border-slate-200 pb-8">
				<div>
					<h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-3">Open Positions</h2>
					<p className="text-slate-500 text-lg">Current opportunities to join our medical and administrative teams.</p>
				</div>
				{/* Optional: Filter buttons could go here */}
			</div>

			{/* --- Job Listings Grid --- */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{jobListings.map((job, index) => (
						<Link href={`/careers/${job.id}`} key={index} className="block h-full">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -8 }}
								className="group h-full bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col overflow-hidden relative"
							>
								{/* Image Section */}
								<div className="relative h-64 w-full overflow-hidden">
									<Image
										src={job.image}
										alt={job.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

									{/* Floating Tag */}
									<div className="absolute top-4 left-4">
										<span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-slate-900 shadow-sm">
											{job.department || 'Medical Team'}
										</span>
									</div>
								</div>

								{/* Content Section */}
								<div className="p-8 flex flex-col flex-grow relative bg-white">
									{/* Overlap effect */}
									<div className="absolute -top-12 right-6 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-white z-10">
										<ArrowUpRight className="w-6 h-6" />
									</div>

									<h3 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">
										{job.title}
									</h3>

									<p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
										{job.description}
									</p>

									<div className="mt-auto flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
										<div className="flex items-center gap-1.5">
											<MapPin className="w-3.5 h-3.5" /> Tacloban City
										</div>
										<div className="flex items-center gap-1.5">
											<Clock className="w-3.5 h-3.5" /> Full Time
										</div>
									</div>

									<div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-primary">
										<span>View Requirements</span>
										<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
