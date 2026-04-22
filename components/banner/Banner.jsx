'use client';

import dwh from '@/public/assets/dwh.jpg';
import { ChevronRight, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion, useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

/* ─── Animated number counter ─────────────────────────────────────── */
const AnimatedCounter = ({ end, suffix = '', duration = 2000, inView }) => {
	const [count, setCount] = useState(0);
	const done = useRef(false);

	useEffect(() => {
		if (!inView || done.current) return;
		done.current = true;
		const t0 = performance.now();
		const tick = (now) => {
			const p = Math.min((now - t0) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setCount(Math.floor(eased * end));
			if (p < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	}, [inView, end, duration]);

	return <span>{count}{suffix}</span>;
};

/* ─── Main Banner ─────────────────────────────────────────────────── */
const Banner = ({ title, subtitle, image }) => {
	const statsRef = useRef(null);
	const isInView = useInView(statsRef, { once: true, margin: '-60px' });

	// Fallback content if props are missing
	const displayTitle = title || "In Faith We Serve, In Compassion We Care, In Excellence We Heal.";
	const displaySubtitle = subtitle || "Equipped with advanced medical facilities and backed by a highly skilled team of medical experts, it delivers quality, reliable services. With a healing environment and hospitable staff, it continues to uphold excellence in service—bringing healing grounded in faith, care, and service to the community. Since 1965.";
	const displayImage = image || dwh;

	const stats = [
		{
			label: 'Emergency Care',
			value: '24/7',
			numericValue: null,
			icon: HeartPulse,
			description: 'Always available, day and night',
			iconBg: 'bg-rose-500/20',
			iconColor: 'text-rose-400',
		},
		{
			label: 'Medical Providers',
			value: '500+',
			numericValue: 500,
			suffix: '+',
			icon: Stethoscope,
			description: 'Physicians & specialists',
			iconBg: 'bg-blue-500/20',
			iconColor: 'text-blue-400',
		},
		{
			label: 'Years of Service',
			value: '60+',
			numericValue: 60,
			suffix: '+',
			icon: ShieldCheck,
			description: 'Trusted since 1965',
			iconBg: 'bg-amber-500/20',
			iconColor: 'text-amber-400',
		},
	];

	return (
		<section className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center items-center overflow-hidden bg-slate-50 pt-28 md:pt-32">

			{/* Background */}
			<div className="absolute inset-0 z-0">
				<Image
					src={displayImage}
					alt="Divine Word Hospital"
					className="w-full h-full object-cover"
					fill sizes="100vw" priority
					placeholder={typeof displayImage === 'string' ? 'empty' : 'blur'}
				/>
				<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
				<div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[100px]" />
				<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-slate-50/10 md:to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
			</div>

			{/* Hero text */}
			<div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 md:pb-44 flex-grow flex items-center">
				<div className="grid lg:grid-cols-1 gap-8 md:gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'circOut' }}
						className="space-y-6 md:space-y-8"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-slate-900 leading-[1.15] tracking-tight">
							{displayTitle.split(',').map((part, index, array) => (
								<React.Fragment key={index}>
									{index === array.length - 1 ? (
										<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
											{part.trim()}
										</span>
									) : (
										<>
											{part.trim()},{' '}
											<br className="hidden sm:block" />
										</>
									)}
								</React.Fragment>
							))}
						</h1>

						<p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl font-light ">
							{displaySubtitle}
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button asChild size="lg"
								className=" rounded-2xl  h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-primary text-white hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 hover:scale-105">
								<Link href="/doctors" className="flex items-center">
									Find a Doctor <ChevronRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg"
								className="rounded-2xl  h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold border-2 border-red-500 bg-white/50 text-red-500 hover:bg-red-700 hover:text-white hover:border-red-500 transition-all backdrop-blur-sm">
								<Link href="/emergency">Emergency Services</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Stats bar */}
		<motion.div
			ref={statsRef}
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.35 }}
			className="relative md:absolute bottom-0 left-0 right-0 z-20 w-full"
		>
			<div
				className="relative overflow-hidden"
				style={{ background: 'linear-gradient(105deg, #080640 0%, #1F1B99 45%, #0d0b6b 100%)' }}
			>
				{/* Top shimmer line */}
				<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

				{/* Ambient glow blobs */}
				<div className="absolute -top-10 left-1/4 w-64 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
				<div className="absolute -top-10 right-1/4 w-48 h-28 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

				<div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
						{stats.map((stat, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 16 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.55, delay: 0.4 + i * 0.13 }}
								className="group flex items-center gap-5 px-6 md:px-10 py-8 md:py-9 hover:bg-white/[0.035] transition-colors duration-300 cursor-default"
							>
								{/* Icon with glow ring */}
								<div className="relative shrink-0">
									{/* Outer glow ring */}
									<div className={`absolute inset-0 rounded-2xl blur-[6px] opacity-40 group-hover:opacity-70 transition-opacity duration-300 ${stat.iconBg}`} />
									<div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 ${stat.iconBg} ${stat.iconColor} group-hover:scale-105 transition-transform duration-300`}>
										{/* Live pulse ring for 24/7 stat */}
										{stat.numericValue === null && (
											<span className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-rose-500" />
										)}
										<stat.icon className="w-6 h-6 relative z-10" strokeWidth={1.75} />
									</div>
								</div>

								{/* Text */}
								<div>
									<div className="text-3xl md:text-[2.5rem] font-extrabold font-heading text-white leading-none tracking-tight tabular-nums">
										{stat.numericValue !== null ? (
											<AnimatedCounter
												end={stat.numericValue}
												suffix={stat.suffix}
												inView={isInView}
												duration={stat.numericValue > 100 ? 2200 : 1800}
											/>
										) : (
											<span className="bg-gradient-to-r from-rose-300 to-rose-400 bg-clip-text text-transparent">
												{stat.value}
											</span>
										)}
									</div>
									<div className="mt-2 flex flex-col gap-0.5">
										<span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60 group-hover:text-white/80 transition-colors">
											{stat.label}
										</span>
										<span className="text-xs text-white/30 font-light hidden lg:block leading-snug">
											{stat.description}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Bottom accent bar — brand primary → amber → primary */}
				<div className="h-[3px] bg-gradient-to-r from-primary via-amber-400 to-primary" />
			</div>
		</motion.div>
		</section>
	);
};

export default Banner;
