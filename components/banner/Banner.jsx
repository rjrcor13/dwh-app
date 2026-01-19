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
		<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-50 pt-28 md:pt-32">

			{/* Background Image Area */}
			<div className="absolute inset-0 z-0">
				<Image
					src={dwh}
					alt="Divine Word Hospital"
					className="w-full h-full object-cover"
					fill
					sizes="100vw"
					priority
				/>

				{/* Ambient Glow Orbs - Adds depth/color to the white */}
				<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
				<div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[100px]" />

				{/* Modern Light Overlay: Adjusted for more depth */}
				<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-slate-50/10 md:to-transparent" />

				{/* Bottom Fade for smooth transition */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12_ md:pt-12_ md:pb-48 flex-grow flex items-center">
				<div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "circOut" }}
						className="space-y-6 md:space-y-8"
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs md:text-sm font-bold tracking-wide uppercase shadow-sm">
							<span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
							Premier Healthcare
						</div>

						<h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
							Your health, <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
								our calling.
							</span>
						</h1>

						<p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-light">
							Experience world-class medical care with a compassionate touch.
							Serving the community with innovation and integrity since 1965.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button
								asChild
								size="lg"
								className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-primary text-white hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 hover:scale-105"
							>
								<Link href="/find-care" className="flex items-center">
									Find a Doctor <ChevronRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold border-2 border-slate-200 bg-white/50 text-slate-700 hover:bg-white hover:text-primary hover:border-primary transition-all backdrop-blur-sm"
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
				className="relative md:absolute bottom-0 left-0 right-0 z-20 border-t border-white/50 bg-white/70 backdrop-blur-2xl shadow-[0_-10px_40px_-15px_rgba(30,58,138,0.1)] w-full"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/50">
						{stats.map((stat, index) => (
							<div key={index} className="py-6 md:py-8 px-6 flex flex-row items-center justify-start md:justify-center gap-4 lg:gap-6 text-left group hover:bg-white/40 transition-colors">
								<div className="relative">
									<div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									<div className="relative p-3 md:p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-white text-primary border border-blue-100 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 shrink-0 shadow-sm">
										<stat.icon className="h-5 w-5 md:h-8 md:w-8" aria-hidden="true" />
									</div>
								</div>
								<div>
									<div className="text-2xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight">{stat.value}</div>
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
