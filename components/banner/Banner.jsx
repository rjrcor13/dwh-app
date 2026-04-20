'use client';

import dwh from '@/public/assets/dwh.jpg';
import { ChevronRight, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
const Banner = () => {
	const statsRef = useRef(null);
	const isInView = useInView(statsRef, { once: true, margin: '-60px' });

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
					src={dwh}
					alt="Divine Word Hospital"
					className="w-full h-full object-cover"
					fill sizes="100vw" priority
				/>
				<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
				<div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[100px]" />
				<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-slate-50/10 md:to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
			</div>

			{/* Hero text */}
			<div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 md:pb-44 flex-grow flex items-center">
				<div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'circOut' }}
						className="space-y-6 md:space-y-8"
					>
						<h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
							Serving, Caring, <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
								Healing.
							</span>
						</h1>

						<p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-light">
							In Faith We Serve, In Compassion We Care, In Excellence We Heal. Experience trusted, faith-driven healthcare at Divine Word Hospital since 1965.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button asChild size="lg"
								className=" rounded-2xl  h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-primary text-white hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 hover:scale-105">
								<Link href="/doctors" className="flex items-center">
									Find a Doctor <ChevronRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg"
								className="rounded-2xl  h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold border-2 border-slate-200 bg-white/50 text-slate-700 hover:bg-white hover:text-primary hover:border-primary transition-all backdrop-blur-sm">
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
					style={{ background: 'linear-gradient(90deg, #0c0950 0%, #1a1680 50%, #0c0950 100%)' }}
				>
					{/* Top border glow */}
					<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

					<div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
							{stats.map((stat, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 16 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ duration: 0.55, delay: 0.4 + i * 0.12 }}
									className="group flex items-center gap-5 px-6 md:px-10 py-7 md:py-8
										hover:bg-white/[0.04] transition-colors duration-300 cursor-default"
								>
									{/* Icon */}
									<div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${stat.iconBg} ${stat.iconColor}
										group-hover:scale-110 transition-transform duration-300`}>
										<stat.icon className="w-6 h-6" strokeWidth={1.75} />
									</div>

									{/* Text */}
									<div>
										<div className="text-3xl md:text-4xl font-bold font-heading text-white leading-none tracking-tight">
											{stat.numericValue !== null ? (
												<AnimatedCounter
													end={stat.numericValue}
													suffix={stat.suffix}
													inView={isInView}
													duration={stat.numericValue > 100 ? 2200 : 1800}
												/>
											) : stat.value}
										</div>
										<div className="mt-1.5 flex flex-col">
											<span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
												{stat.label}
											</span>
											<span className="text-xs text-white/30 font-light mt-0.5 hidden lg:block">
												{stat.description}
											</span>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Bottom accent */}
					<div className="h-[3px] bg-gradient-to-r from-primary via-amber-400 to-primary" />
				</div>
			</motion.div>
		</section>
	);
};

export default Banner;


