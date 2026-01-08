'use client';

import dwh from '@/public/assets/events.jpg';
import { ChevronDown, Phone, UserRoundSearch, Clock, Users, Award } from 'lucide-react';
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
		<section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden">

			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src={dwh}
					alt="Divine Word Hospital"
					className="w-full h-full object-cover scale-105"
					fill
					priority
				/>
				{/* Modern Gradient Overlay: Uses Brand Primary Color */}
				<div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
				<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
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
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold tracking-wide uppercase">
							<span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
							Premier Healthcare
						</div>

						<h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading text-white leading-[1.1] tracking-tight">
							Your health, <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-200">
								our calling.
							</span>
						</h1>

						<p className="text-xl lg:text-2xl text-slate-100 leading-relaxed max-w-xl font-light opacity-90">
							Experience world-class medical care with a compassionate touch.
							Serving the community with innovation and integrity since 1965.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button
								asChild
								size="lg"
								className="h-14 px-8 text-lg font-bold bg-secondary text-primary hover:bg-white transition-all shadow-xl shadow-secondary/20 hover:translate-y-[-2px]"
							>
								<Link href="/find-care" className="flex items-center">
									<UserRoundSearch size={20} className="mr-2" />
									Find a Doctor
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="h-14 px-8 text-lg font-bold border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
							>
								<Link href="/emergency">Emergency Services</Link>
							</Button>
						</div>
					</motion.div>

					{/* Mobile Emergency Card (Visible only on small screens) */}
					<div className="lg:hidden block mt-8">
						<div className="bg-red-600/90 backdrop-blur text-white p-6 rounded-2xl shadow-2xl border border-red-500/50 flex items-center justify-between">
							<div>
								<h3 className="font-bold text-xl mb-1">Emergency?</h3>
								<p className="text-red-100 text-sm">Call us immediately.</p>
							</div>
							<Button asChild variant="secondary" className="bg-white text-red-600 hover:bg-red-50 font-bold">
								<Link href="tel:911">Call 911</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Floating Glass Stats Bar */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-primary/80 backdrop-blur-xl"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-3 divide-x divide-white/10">
						{stats.map((stat, index) => (
							<div key={index} className="py-8 md:py-10 px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left group cursor-default hover:bg-white/5 transition-colors">
								<div className="p-3 rounded-full bg-white/5 text-secondary group-hover:scale-110 transition-transform duration-300">
									<stat.icon className="h-6 w-6 md:h-8 md:w-8" />
								</div>
								<div>
									<div className="text-2xl md:text-4xl font-bold font-heading text-white">{stat.value}</div>
									<div className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
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
