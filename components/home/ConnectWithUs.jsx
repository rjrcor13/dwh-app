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
		<section className="relative bg-primary py-24 overflow-hidden" id="connect-with-us">
			{/* Dynamic Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />

			{/* Background Atmosphere */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
				<div className="absolute top-[10%] right-[5%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
				<div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

					{/* Left Panel - Information */}
					<div className="w-full lg:w-1/2 flex flex-col justify-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center gap-2 mb-6">
								<span className="h-px w-8 bg-secondary"></span>
								<span className="text-secondary font-bold tracking-widest uppercase text-xs">
									Contact Us
								</span>
							</div>

							<h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
								Get in touch with <br />
								<span className="text-blue-200">
									Divine Word
								</span>
							</h2>

							<p className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-md">
								Expert care is just a call or visit away. Reach out to us for emergencies, appointments, or general inquiries.
							</p>

							<div className="grid grid-cols-1 gap-4">
								{contactInfo.map((item, index) => (
									<div
										key={index}
										className={`group p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-6 cursor-default`}
									>
										<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
											<item.icon className="h-6 w-6" />
										</div>
										<div className="flex-grow">
											<h5 className="font-bold text-white text-lg mb-1 group-hover:text-secondary transition-colors">
												{item.title}
											</h5>
											<p className="text-blue-100/70 text-sm font-medium">
												{item.text}
											</p>
											{item.isLink && (
												<a
													href={item.href}
													className="inline-flex items-center text-sm font-bold text-secondary hover:text-white transition-colors mt-1 group/link"
													target="_blank"
													rel="noopener noreferrer"
												>
													{item.subText} <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
												</a>
											)}
											{!item.isLink && (
												<div className="mt-2 flex items-center gap-2">
													<span className="relative flex h-2 w-2">
														<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
														<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
													</span>
													<span className="text-xs text-green-400 font-bold uppercase tracking-wider">Open 24/7</span>
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>

					{/* Right Panel - Map */}
					<div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-full">
						{/* Map Container */}
						<div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/30 border border-white/10 bg-white/5 backdrop-blur-sm relative group">
							<iframe
								src={googleMapsEmbedUrl}
								width="100%"
								height="100%"
								title="Google Maps Location of Divine Word Hospital"
								className="absolute inset-0 w-full h-full grayscale-[0.5] contrast-[1.1] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>

							{/* Location Overlay Badge */}
							<div className="absolute bottom-6 left-6 bg-[#0f0c50]/90 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-white/20 max-w-xs hidden sm:block">
								<div className="flex items-center gap-4">
									<div className="bg-secondary p-3 rounded-2xl text-white shadow-lg shadow-secondary/20">
										<MapPin className="h-6 w-6" />
									</div>
									<div>
										<p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-0.5">Visit Us</p>
										<p className="text-base font-bold text-white leading-tight">Tacloban City, Leyte</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ConnectWithUsSection;
