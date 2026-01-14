'use client';

import dwh from '@/public/assets/dwh.jpg';
import { UserRoundSearch, Clock, Users, Award, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const Banner = () => {
	// Stats Data
	const stats = [
		{ label: 'Emergency Care', value: '24/7', icon: Clock },
		{ label: 'Medical Providers', value: '500+', icon: Users },
		{ label: 'Years of Service', value: '60+', icon: Award },
	];

	return (
		<section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-slate-50">

			{/* Background Image Area */}
			<div className="absolute inset-0 z-0">
				<Image
					src={dwh}
					alt="Divine Word Hospital"
					className="w-full h-full object-cover"
					fill
					priority
				/>
				{/* Modern Light Overlay: Gradient from White (Left) to Transparent (Right) */}
				<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/20 md:to-transparent" />
				{/* Bottom Fade for smooth transition */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">

					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "circOut" }}
						className="space-y-8"
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs md:text-sm font-bold tracking-wide uppercase shadow-sm">
							<span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
							Premier Healthcare
						</div>

						<h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
							Your health, <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
								our calling.
							</span>
						</h1>

						<p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-light">
							Experience world-class medical care with a compassionate touch.
							Serving the community with innovation and integrity since 1965.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button
								asChild
								size="lg"
								className="h-14 px-8 text-lg font-bold bg-primary text-white hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 hover:scale-105"
							>
								<Link href="/find-care" className="flex items-center">
									Find a Doctor <ChevronRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="h-14 px-8 text-lg font-bold border-2 border-slate-200 bg-white/50 text-slate-700 hover:bg-white hover:text-primary hover:border-primary transition-all backdrop-blur-sm"
							>
								<Link href="/emergency">Emergency Services</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Floating Glass Stats Bar */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="absolute bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/60 backdrop-blur-xl shadow-lg"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
						{stats.map((stat, index) => (
							<div key={index} className="py-8 px-6 flex flex-row items-center justify-start md:justify-center gap-6 text-left group hover:bg-white/50 transition-colors">
								<div className="p-4 rounded-2xl bg-blue-50 text-primary border border-blue-100 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
									<stat.icon className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
								</div>
								<div>
									<div className="text-3xl md:text-5xl font-bold font-heading text-slate-900">{stat.value}</div>
									<div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Banner;
