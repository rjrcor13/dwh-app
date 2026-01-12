'use client';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Heart, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const AboutUs = ({ data }) => {
	const { hero, history, qualityPolicy, visionMission } = data;

	// Helper for timeline animation
	const fadeInUp = {
		initial: { opacity: 0, y: 60 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, margin: "-100px" },
		transition: { duration: 0.6, ease: "easeOut" }
	};

	return (
		<div className="bg-primary min-h-screen relative overflow-hidden font-sans">
			{/* Dynamic Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />

			{/* Background Noise/Texture Overlay (Optional for 'Editorial' feel) */}
			<div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

			{/* Decor Blobs */}
			<div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen opacity-40 pointer-events-none" />
			<div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] mix-blend-screen opacity-30 pointer-events-none" />


			<div className="relative z-10 max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">

				{/* 1. EDITORIAL HERO (Split Layout) */}
				<section className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "circOut" }}
					>
						<div className="inline-flex items-center gap-3 mb-8">
							<span className="w-12 h-[1px] bg-secondary"></span>
							<span className="text-secondary font-bold tracking-widest uppercase text-xs">Since 1964</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-8 leading-[1.1]">
							Healing with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Compassion</span>
						</h1>
						<p className="text-blue-100/80 text-lg md:text-xl leading-relaxed font-light max-w-lg">
							{hero.tagline}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl border border-white/10 group">
							<Image
								src={hero.imageSrc}
								alt={hero.imageAlt}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />

							{/* Floating Badge */}
							<div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500">
								<p className="text-sm text-blue-100/90 font-light leading-relaxed">
									&quot;A place of welcome committed to quality health care.&quot;
								</p>
							</div>
						</div>
						{/* Decor Ring */}
						<div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 rotate-3" />
					</motion.div>
				</section>


				{/* 2. ZIG-ZAG TIMELINE HISTORY */}
				<section className="mb-32 relative">
					<div className="text-center mb-20">
						<h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Our Journey</h2>
						<p className="text-blue-100/60 mt-4">Six decades of service and innovation</p>
					</div>

					{/* Center Line */}
					<div className="absolute left-[20px] md:left-1/2 top-40 bottom-20 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

					<div className="space-y-12 relative">
						{history.paragraphs.map((para, index) => (
							<motion.div
								key={index}
								{...fadeInUp}
								className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0 group`}
							>
								{/* Content Card */}
								<div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-16">
									<div className={`
                                        bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-3xl 
                                        hover:bg-white/10 hover:border-white/10 transition-all duration-300
                                        relative
                                    `}>
										{/* Triangle Indicator (Desktop) */}
										<div className={`hidden md:block absolute top-8 w-4 h-4 bg-white/5 rotate-45 border-b border-l border-white/5 
                                            ${index % 2 === 0 ? '-left-2 border-r-0 border-t-0' : '-right-2 border-l-0 border-b-0 rotate-[225deg]'}
                                        `} />

										<p className="text-blue-100/80 leading-relaxed">
											{para}
										</p>
									</div>
								</div>

								{/* Timeline Dot */}
								<div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center">
									<div className="w-3 h-3 bg-secondary rounded-full ring-4 ring-primary relative z-10 group-hover:scale-125 transition-transform duration-300" />
									<div className="absolute w-10 h-10 bg-secondary/20 rounded-full animate-ping opacity-20" />
								</div>

								{/* Empty Spacer for Layout Balance */}
								<div className="w-full md:w-1/2" />
							</motion.div>
						))}
					</div>
				</section>


				{/* 3. BENTO GRID VALUES (Vision/Mission) */}
				<section>
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Our Foundations</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

						{/* Card 1: Vision (Large) */}
						<motion.div
							{...fadeInUp}
							className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-[2.5rem] p-10 border border-white/10 hover:border-white/20 transition-all"
						>
							<div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-8">
								<Target className="w-7 h-7" />
							</div>
							<h3 className="text-2xl font-bold text-white mb-4 font-heading">{visionMission.vision.title}</h3>
							<ul className="space-y-4">
								{visionMission.vision.points.map((pt, i) => (
									<li key={i} className="text-xl text-blue-100/90 leading-relaxed font-light">{pt}</li>
								))}
							</ul>
						</motion.div>

						{/* Card 2: Stat/Highlight (Tall) */}
						<motion.div
							{...fadeInUp}
							transition={{ delay: 0.1 }}
							className="md:row-span-2 bg-primary/40 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 flex flex-col justify-between overflow-hidden relative group"
						>
							<div className="absolute top-0 right-0 p-8 opacity-10 transition-opacity group-hover:opacity-20">
								<Award className="w-40 h-40 text-white" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-secondary uppercase tracking-widest mb-2">Excellence</h3>
								<h4 className="text-4xl font-bold text-white mb-6">Level 3</h4>
								<p className="text-blue-200/70 text-sm">Tertiary Hospital Accredited by DOH</p>
							</div>
							<div className="mt-8 pt-8 border-t border-white/10">
								<div className="flex items-center gap-3 text-white mb-2">
									<CheckCircle2 className="text-green-400 w-5 h-5" />
									<span>PhilHealth Accredited</span>
								</div>
								<div className="flex items-center gap-3 text-white">
									<CheckCircle2 className="text-green-400 w-5 h-5" />
									<span>DOH Licensed</span>
								</div>
							</div>
						</motion.div>

						{/* Card 3: Quality Policy */}
						<motion.div
							{...fadeInUp}
							transition={{ delay: 0.2 }}
							className="bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-10 border border-white/5 hover:bg-white/10 transition-colors"
						>
							<ShieldCheck className="w-10 h-10 text-blue-300 mb-6" />
							<h3 className="text-xl font-bold text-white mb-4 font-heading">{qualityPolicy.title}</h3>
							<p className="text-blue-100/70 text-sm leading-relaxed">&quot;{qualityPolicy.content}&quot;</p>
						</motion.div>

						{/* Card 4: Mission */}
						<motion.div
							{...fadeInUp}
							transition={{ delay: 0.3 }}
							className="bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-10 border border-white/5 hover:bg-white/10 transition-colors"
						>
							<Heart className="w-10 h-10 text-pink-400 mb-6" />
							<h3 className="text-xl font-bold text-white mb-4 font-heading">{visionMission.mission.title}</h3>
							<ul className="space-y-2">
								{visionMission.mission.points.slice(0, 3).map((pt, i) => (
									<li key={i} className="flex items-center gap-2 text-blue-100/80 text-sm">
										<span className="w-1 h-1 bg-pink-400 rounded-full" />
										<span className="line-clamp-1">{pt}</span>
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

export default AboutUs;
