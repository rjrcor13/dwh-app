// import aboutus from '@/public/assets/about-us.webp';
// import { SquareArrowOutUpRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '../ui/button';

// const AboutUs = ({ className }) => {
// 	return (
// 		<div className={`${className}  grid grid-cols-4 gap-4'`}>
// 			<div className="col-span-2">
// 				<Image
// 					src={aboutus}
// 					alt="About Us"
// 					width="100%"
// 					height={500}
// 					className="w-full object-cover"
// 				/>
// 			</div>
// 			<div className="p-8 flex flex-col justify-center items-start space-y-8  col-span-2 ">
// 				<p className="text-md italic text-primary  font-semibold mb-10">
// 					Who we are?
// 				</p>
// 				<div>
// 					<h1 className="text-3xl font-bold text-gray-800">
// 						A Place of Welcome Committed to Quality Health Care
// 					</h1>
// 					<p className="text-muted-foreground  mt-4">
// 						Divine Word Hospital is a Catholic tertiary hospital in Tacloban
// 						City, committed to quality healthcare and holistic wellness. Since
// 						1965, we have provided state-of-the-art medical services, trained
// 						future healthcare professionals, and upheld Christian values in
// 						patient care.
// 					</p>
// 				</div>

// 				<Button
// 					href="/about"
// 					// className="text-primary hover:underline flex flex-row gap-2"
// 				>
// 					Read more
// 				</Button>
// 			</div>
// 		</div>
// 	);
// };

// export default AboutUs;
'use client';
import { cn } from '@/lib/utils';
import aboutusImage from '@/public/assets/about-us.webp';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const AboutUs = ({ className }) => {
	return (
		<section className={cn("py-24 bg-white overflow-hidden", className)}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

					{/* Image Composition (Left) */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="w-full lg:w-1/2 relative"
					>
						{/* Main Image */}
						<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
							<Image
								src={aboutusImage}
								alt="Divine Word Hospital Building"
								width={600}
								height={500}
								className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
							/>
						</div>

						{/* Interactive Badge/Card Overlay */}
						<div className="absolute -bottom-10 -right-4 md:-right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[260px] hidden md:block animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-300">
							<div className="flex items-center gap-4 mb-3">
								<div className="bg-primary/10 p-3 rounded-full text-primary font-bold text-xl">55+</div>
								<div>
									<div className="text-slate-900 font-bold leading-tight">Years of Excellence</div>
									<div className="text-slate-500 text-xs">Since 1965</div>
								</div>
							</div>
							<p className="text-slate-500 text-sm leading-snug">
								Serving Eastern Visayas with unwavering dedication and faith.
							</p>
						</div>

						{/* Background Deco Blob */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-3xl -z-10" />
					</motion.div>

					{/* Content (Right) */}
					<div className="w-full lg:w-1/2 space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="flex items-center gap-2 mb-4">
								<div className="h-px w-10 bg-primary"></div>
								<span className="text-primary font-bold tracking-widest uppercase text-sm">About Us</span>
							</div>

							<h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-tight mb-6">
								A Sanctuary of Healing <br />
								<span className="text-slate-400">Guided by Faith.</span>
							</h2>

							<div className="space-y-6 text-lg text-slate-600 leading-relaxed">
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

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
								{['Tertiary Level Care', 'Accredited Training', 'Holistic Approach', 'Modern Diagnostics'].map((tag, i) => (
									<div key={i} className="flex items-center gap-3">
										<CheckCircle2 className="w-5 h-5 text-secondary" />
										<span className="font-semibold text-slate-700">{tag}</span>
									</div>
								))}
							</div>

							<Button
								asChild
								size="lg"
								className="bg-primary text-white hover:bg-slate-800 transition-all shadow-lg px-8 py-6 text-lg rounded-full"
							>
								<a href="/about-us" className="flex items-center gap-2">
									Discover Our Story <ArrowRight className="w-5 h-5" />
								</a>
							</Button>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
