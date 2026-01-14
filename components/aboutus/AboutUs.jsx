'use client';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Heart, ShieldCheck, Target, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const AboutUs = ({ data }) => {
	const { hero, history, qualityPolicy, visionMission } = data;

	// Helper for timeline animation
	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, margin: "-100px" },
		transition: { duration: 0.6, ease: "easeOut" }
	};

	return (
		<div className="bg-slate-50/50 min-h-screen relative overflow-hidden font-sans pb-32 pt-24">

			{/* --- Ambient Background Mesh --- */}
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-[120px]" />
				<div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-amber-50/50 to-orange-50/20 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* 1. HERO SECTION */}
				<section className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 pt-12">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "circOut" }}
					>
						<div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-blue-100 shadow-sm w-fit">
							<BadgeIcon />
							<span className="text-slate-500 font-bold tracking-widest uppercase text-xs">Since 1964</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 mb-8 leading-[1.1] tracking-tight">
							Healing with <br />
							<span className="text-primary relative inline-block">
								Compassion
								<svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
									<path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
								</svg>
							</span>
						</h1>
						<p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light max-w-lg">
							{hero.tagline}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl shadow-blue-900/10 border border-white/50 group">
							<Image
								src={hero.imageSrc}
								alt={hero.imageAlt}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />

							{/* Floating Badge */}
							<div className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
								<p className="text-sm text-slate-700 font-medium leading-relaxed italic">
									"{data.hero.welcome || "A place of welcome committed to quality health care."}"
								</p>
							</div>
						</div>

						{/* Decor Elements behind image */}
						<div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-dashed border-blue-200/50 rounded-[2.5rem]" />
					</motion.div>
				</section>


				{/* 2. HISTORY TIMELINE (Light Mode) */}
				<section className="mb-32 relative">
					<div className="text-center mb-20">
						<div className="inline-flex items-center gap-2 mb-4 justify-center">
							<Sparkles className="w-5 h-5 text-secondary" />
							<span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Our Legacy</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">Our Journey</h2>
						<p className="text-slate-500 text-lg">Six decades of service and innovation</p>
					</div>

					{/* Center Line */}
					<div className="absolute left-[20px] md:left-1/2 top-40 bottom-20 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent md:-translate-x-1/2" />

					<div className="space-y-12 relative">
						{history.paragraphs.map((para, index) => (
							<motion.div
								key={index}
								{...fadeInUp}
								className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0 group`}
							>
								{/* Content Card */}
								<div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-16">
									<div className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-300 relative">

										{/* Triangle Indicator */}
										<div className={`hidden md:block absolute top-8 w-4 h-4 bg-white rotate-45 border-b border-l border-white/40 shadow-sm
                                            ${index % 2 === 0 ? '-left-2 border-r-0 border-t-0' : '-right-2 border-l-0 border-b-0 rotate-[225deg]'}
                                        `} />

										<p className="text-slate-600 leading-relaxed text-lg">
											{para}
										</p>
									</div>
								</div>

								{/* Timeline Dot */}
								<div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center">
									<div className="w-4 h-4 bg-white rounded-full border-4 border-primary shadow-lg relative z-10 group-hover:scale-125 transition-transform duration-300" />
								</div>
							</motion.div>
						))}
					</div>
				</section>


				{/* 3. BENTO GRID (Values) */}
				<section>
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold font-heading text-slate-900 mb-4">Our Foundations</h2>
						<p className="text-slate-500 text-lg">The core values that guide our service.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

						{/* Vision (Large) */}
						<motion.div
							{...fadeInUp}
							className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 group"
						>
							<div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform">
								<Target className="w-7 h-7" />
							</div>
							<h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading">{visionMission.vision.title}</h3>
							<ul className="space-y-4">
								{visionMission.vision.points.map((pt, i) => (
									<li key={i} className="text-xl text-slate-600 leading-relaxed font-light flex gap-3">
										<span className="w-2 h-2 mt-3 rounded-full bg-secondary shrink-0" />
										{pt}
									</li>
								))}
							</ul>
						</motion.div>

						{/* Stat Hightlight (Tall) */}
						<motion.div
							{...fadeInUp}
							transition={{ delay: 0.1 }}
							className="md:row-span-2 bg-gradient-to-br from-primary to-blue-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between overflow-hidden relative group shadow-xl shadow-blue-900/20"
						>
							<div className="absolute top-0 right-0 p-8 opacity-10 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12">
								<Award className="w-40 h-40 text-white" />
							</div>
							<div className="relative z-10">
								<h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Excellence</h3>
								<h4 className="text-5xl font-bold text-white mb-6">Level 3</h4>
								<div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium">
									Tertiary Hospital
								</div>
							</div>
							<div className="mt-8 pt-8 border-t border-white/10 relative z-10 space-y-3">
								<div className="flex items-center gap-3 text-white/90">
									<CheckCircle2 className="text-secondary w-5 h-5 shadow-sm" />
									<span className="font-medium">PhilHealth Accredited</span>
								</div>
								<div className="flex items-center gap-3 text-white/90">
									<CheckCircle2 className="text-secondary w-5 h-5 shadow-sm" />
									<span className="font-medium">DOH Licensed</span>
								</div>
							</div>
						</motion.div>

						{/* Quality Policy */}
						<motion.div
							{...fadeInUp}
							transition={{ delay: 0.2 }}
							className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 group"
						>
							<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
								<ShieldCheck className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">{qualityPolicy.title}</h3>
							<p className="text-slate-600 text-lg leading-relaxed italic">"{qualityPolicy.content}"</p>
						</motion.div>

						{/* Mission */}
						<motion.div
							{...fadeInUp}
							transition={{ delay: 0.3 }}
							className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 group"
						>
							<div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
								<Heart className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">{visionMission.mission.title}</h3>
							<ul className="space-y-3">
								{visionMission.mission.points.slice(0, 3).map((pt, i) => (
									<li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
										<span className="w-1.5 h-1.5 mt-1.5 bg-pink-400 rounded-full shrink-0" />
										<span>{pt}</span>
									</li>
								))}
							</ul>
						</motion.div>

					</div>
				</section>
			</div>
		</div>
	);
};

const BadgeIcon = () => (
	<div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
		<div className="w-2 h-2 bg-white rounded-full" />
	</div>
);

export default AboutUs;
