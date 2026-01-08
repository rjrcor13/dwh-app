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
		<section className="relative bg-slate-50 py-24 overflow-hidden" id="connect-with-us">
			{/* Background Blobs for Atmosphere */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
				<div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
				<div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
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

							<h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
								Get in touch with <br />
								<span className="text-primary">
									Divine Word
								</span>
							</h2>

							<p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
								Expert care is just a call or visit away. Reach out to us for emergencies, appointments, or general inquiries.
							</p>

							<div className="grid grid-cols-1 gap-4">
								{contactInfo.map((item, index) => (
									<div
										key={index}
										className={`group p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex items-center gap-6 cursor-default`}
									>
										<div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
											<item.icon className="h-6 w-6" />
										</div>
										<div className="flex-grow">
											<h5 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-primary transition-colors">
												{item.title}
											</h5>
											<p className="text-slate-500 text-sm font-medium">
												{item.text}
											</p>
											{item.isLink && (
												<a
													href={item.href}
													className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors mt-1 group/link"
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
													<span className="text-xs text-green-600 font-bold uppercase tracking-wider">Open 24/7</span>
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
						<div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white relative group">
							<iframe
								src={googleMapsEmbedUrl}
								width="100%"
								height="100%"
								className="absolute inset-0 w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 hover:opacity-100"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>

							{/* Location Overlay Badge */}
							<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-slate-100 max-w-xs hidden sm:block">
								<div className="flex items-center gap-4">
									<div className="bg-primary/5 p-3 rounded-2xl text-primary">
										<MapPin className="h-6 w-6" />
									</div>
									<div>
										<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Visit Us</p>
										<p className="text-base font-bold text-slate-900 leading-tight">Tacloban City, Leyte</p>
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
