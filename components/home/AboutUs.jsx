'use client';
import { cn } from '@/lib/utils';
import aboutusImage from '@/public/assets/about-us.webp';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Changed from importing Button
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const AboutUs = ({ className }) => {
	return (
		<section className={cn("py-24 bg-white relative overflow-hidden", className)}>


			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

					{/* Image Composition (Left) */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="w-full lg:w-1/2 relative"
					>
						{/* Main Image */}
						<div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100/50">
							<Image
								src={aboutusImage}
								alt="Divine Word Hospital Building"
								width={600}
								height={500}
								className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
							/>
						</div>

						{/* Interactive Badge/Card Overlay */}
						<div className="absolute -bottom-10 -right-4 md:-right-10 z-20 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 max-w-[260px] hidden md:block animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-300">
							<div className="flex items-center gap-4 mb-3">
								<div className="bg-primary/5 p-3 rounded-2xl text-primary font-bold text-xl">55+</div>
								<div>
									<div className="text-slate-900 font-bold leading-tight">Years of Excellence</div>
									<div className="text-slate-500 text-xs">Since 1965</div>
								</div>
							</div>
							<p className="text-slate-500 text-sm leading-snug">
								Serving Eastern Visayas with unwavering dedication and faith.
							</p>
						</div>
					</motion.div>

					{/* Content (Right) */}
					<div className="w-full lg:w-1/2 space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center gap-2 mb-4">
								<div className="h-px w-10 bg-secondary"></div>
								<span className="text-secondary font-bold tracking-widest uppercase text-sm">About Us</span>
							</div>

							<h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-tight mb-6">
								A Sanctuary of Healing <br />
								<span className="text-slate-400">Guided by Faith.</span>
							</h2>

							<div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
								<p>
									Divine Word Hospital is a premier Catholic tertiary institution in Tacloban City.
									More than just a hospital, we are a community committed to holistic wellness—healing
									the body, mind, and spirit.
								</p>
								<p>
									Since 1965, we have combined state-of-the-art medical technology with the
									compassionate values of our Christian heritage to serve the people of Region VIII.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8 mb-10">
								{['Tertiary Level Care', 'Accredited Training', 'Holistic Approach', 'Modern Diagnostics'].map((tag, i) => (
									<div key={i} className="flex items-center gap-3 group">
										<CheckCircle2 className="w-5 h-5 text-secondary transition-transform group-hover:scale-110" />
										<span className="font-semibold text-slate-700">{tag}</span>
									</div>
								))}
							</div>

							{/* Updated to Match "View All" Button Style */}
							<div className="pt-2">
								<Link
									href="/about-us"
									className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300 group"
								>
									Discover Our Story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
