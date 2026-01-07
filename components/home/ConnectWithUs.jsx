'use client';

import { contactInfo } from '@/app/data/contactInfo';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import React from 'react';

const ConnectWithUsSection = () => {
	const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
	let googleMapsEmbedUrl = contactInfo[2].href;

	if (googleMapsApiKey) {
		googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA`;
	}

	return (
		<section className="relative bg-white" id="connect-with-us">
			<div className="flex flex-col lg:flex-row min-h-[600px]">

				{/* Left Panel - Information */}
				<div className="w-full lg:w-[45%] bg-slate-900 text-white relative overflow-hidden flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-20">
					{/* Decorative Gradients */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

					<div className="relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center gap-2 mb-6">
								<span className="h-px w-8 bg-secondary"></span>
								<span className="text-secondary font-bold tracking-widest uppercase text-xs">
									Contact Us
								</span>
							</div>

							<h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
								Get in touch with <br className="hidden lg:block" />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
									Divine Word
								</span>
							</h2>

							<p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md">
								Expert care is just a call or visit away. Reach out to us for emergencies, appointments, or general inquiries.
							</p>

							<div className="space-y-8">
								{contactInfo.map((item, index) => (
									<div key={index} className="group flex items-start">
										<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mr-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
											<item.icon className="h-5 w-5 text-slate-300 group-hover:text-white" />
										</div>
										<div>
											<h5 className="font-semibold text-white text-lg mb-1 group-hover:text-secondary transition-colors">{item.title}</h5>
											<p className="text-slate-400 text-base mb-1">{item.text}</p>

											{item.isLink && (
												<a
													href={item.href}
													className="inline-flex items-center text-sm font-medium text-secondary hover:text-white transition-colors mt-1"
													target="_blank"
													rel="noopener noreferrer"
												>
													{item.subText} <ArrowRight className="ml-1 h-3 w-3" />
												</a>
											)}
											{!item.isLink && (
												<span className="text-xs text-slate-500 uppercase tracking-wide">{item.subText}</span>
											)}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>

				{/* Right Panel - Map */}
				<div className="w-full lg:w-[55%] h-[400px] lg:h-auto relative bg-slate-100">
					<iframe
						src={googleMapsEmbedUrl}
						width="100%"
						height="100%"
						className="absolute inset-0 w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>

					{/* Location Overlay Badge */}
					<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs hidden sm:block">
						<div className="flex items-center gap-3">
							<div className="bg-primary/10 p-2 rounded-lg text-primary">
								<MapPin className="h-5 w-5" />
							</div>
							<div>
								<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Located at</p>
								<p className="text-sm font-semibold text-slate-900 leading-tight">Tacloban City, Leyte</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ConnectWithUsSection;
