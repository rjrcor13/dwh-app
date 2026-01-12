'use client';

import { hmoLogos } from '@/app/data/hmo'; // Ensure this data exists
import { motion } from 'framer-motion';
import { Building2, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

const HMOsSection = () => (
	<motion.section
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		className="scroll-mt-32"
		id="hmo"
	>
		<div className="space-y-12">

			{/* Header */}
			<div className="max-w-3xl">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/20">
						<Building2 className="w-6 h-6 text-secondary" />
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-white">Accredited HMOs</h2>
				</div>
				<p className="text-blue-100/80 leading-relaxed text-lg font-light">
					To use your Health Maintenance Organization (HMO) card, please ensure your provider is accredited with us.
					Coordinate with your provider for pre-authorization documents to ensure a smooth admission process.
				</p>
			</div>

			{/* HMO Grid */}
			<div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm">
				<h3 className="text-xl font-bold text-white mb-8 border-l-4 border-secondary pl-4">Our Partners</h3>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{hmoLogos.map((logo, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
							viewport={{ once: true }}
							transition={{ duration: 0.2 }}
							className="bg-white/80 p-4 rounded-xl flex items-center justify-center h-24 hover:shadow-lg transition-all duration-300 cursor-pointer"
						>
							<Image
								src={`/assets/hmos/${logo}`}
								alt={`HMO Partner ${idx + 1}`}
								width={120}
								height={60}
								className="object-contain max-h-12 w-auto grayscale0 transition-all" // Removed grayscale to show brand colors properly as requested typically
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Contact Info */}
			<div className="grid md:grid-cols-2 gap-6">
				<div className="bg-gradient-to-br from-secondary/10 to-blue-900/20 border border-secondary/20 p-8 rounded-[2rem]">
					<h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
						<Phone className="w-5 h-5 text-secondary" /> Contact Industrial Office
					</h3>
					<div className="space-y-4">
						<div className="flex items-start gap-4">
							<Mail className="w-5 h-5 text-blue-300 mt-1" />
							<div>
								<span className="block text-xs text-blue-300 uppercase tracking-widest">Email</span>
								<a href="mailto:hmodivinewordhospital2023@gmail.com" className="text-white hover:text-secondary transition-colors font-medium break-all">
									hmodivinewordhospital2023@gmail.com
								</a>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<Phone className="w-5 h-5 text-blue-300 mt-1" />
							<div>
								<span className="block text-xs text-blue-300 uppercase tracking-widest">Phone</span>
								<p className="text-white font-medium">0919-067-2673</p>
								<p className="text-blue-100/60 text-sm">053-888-7287 loc 147</p>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-center">
					<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
						<Clock className="w-5 h-5 text-secondary" /> Office Hours
					</h3>
					<ul className="space-y-3">
						<li className="flex justify-between text-blue-100/80 border-b border-white/5 pb-2">
							<span>Monday - Saturday</span>
							<span className="text-white font-medium">8:00 AM - 5:00 PM</span>
						</li>
						<li className="flex justify-between text-blue-100/80 pt-2">
							<span>Break Time</span>
							<span className="text-white font-medium">12:00 PM - 1:00 PM</span>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</motion.section>
);

export default HMOsSection;
