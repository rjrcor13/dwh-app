'use client';
import { contactInfo } from '@/app/data/contactInfo';
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState

const addressInfo = contactInfo.find((info) => info.title === 'Location');
const phoneInfo = contactInfo.find((info) => info.title === 'Phone');
const emailInfo = contactInfo.find((info) => info.title === 'Email');

const Footer = () => {
	const [googleMapsEmbedUrl, setGoogleMapsEmbedUrl] = useState('');

	useEffect(() => {
		const googleMapsApiKey = process.env.NEXT_PUBLIC_Maps_API_KEY;

		if (googleMapsApiKey) {
			setGoogleMapsEmbedUrl(
				`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA`
			);
		} else {
			setGoogleMapsEmbedUrl(
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.34444007823!2d124.9926413153406!3d11.24056639194269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300f898a1a3a60f%3A0x6b5a3e1a6c4b2a8d!2sDivine%20Word%20Hospital%20of%20Tacloban%20City!5e0!3m2!1sen!2sph!4v1678886400000!5m2!1sen!2sph'
			);
		}
	}, []);

	return (
		<footer className="bg-slate-900 pt-20 pb-8 text-slate-200 border-t border-slate-800">
			<div className="mx-auto max-w-7xl container px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
					{/* Logo and Description */}
					<div className="flex flex-col items-start space-y-4">
						<div className="flex items-center gap-3">
							<Image
								width={60}
								height={60}
								src={logo}
								alt="Divine Word Hospital Logo"
								className="brightness-0 invert"
							/>
							<h2 className="text-xl font-bold font-heading text-white tracking-wide">
								Divine Word <br /> Hospital
							</h2>
						</div>
						<p className="text-sm text-slate-400 max-w-sm leading-relaxed">
							Providing compassionate care and healing for all since 1965. A trusted partner in your health journey.
						</p>
						<div className="flex space-x-5 pt-2">
							<a
								href="#"
								aria-label="Facebook"
								className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
							>
								<Facebook className="h-6 w-6" />
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
							>
								<Twitter className="h-6 w-6" />
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
							>
								<Instagram className="h-6 w-6" />
							</a>
						</div>
					</div>

					{/* Company and Our Services */}
					<div className="grid grid-cols-2 gap-8 md:gap-12">
						<div>
							<h4 className="mb-6 text-lg font-bold font-heading text-white">Company</h4>
							<ul className="space-y-3 text-sm text-slate-400">
								{['Home', 'About Us', 'Find a Doctor', 'Expertise', "Patient & Visitor's Guide", 'Religious & Hospital Events', 'Career', 'Contact Us'].map((item) => (
									<li key={item}>
										<a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="mb-6 text-lg font-bold font-heading text-white">Our Services</h4>
							<ul className="space-y-3 text-sm text-slate-400">
								{['Radiology', 'Ambulatory Infusion', 'Cardiopulmonary', 'Physical Therapy', 'Hemodialysis', 'Pathology', 'Pharmacy', 'Emergency Care'].map((item) => (
									<li key={item}>
										<a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Get In Touch */}
					<div>
						<h4 className="mb-6 text-lg font-bold font-heading text-white">Get In Touch</h4>
						<ul className="space-y-4 text-sm text-slate-300">
							<li className="flex items-start group">
								<Mail className="mr-3 mt-1 h-5 w-5 text-secondary group-hover:text-white transition-colors" />
								<span className="group-hover:text-white transition-colors">{emailInfo.text}</span>
							</li>
							<li className="flex items-start group">
								<Phone className="mr-3 mt-1 h-5 w-5 text-secondary group-hover:text-white transition-colors" />
								<span className="group-hover:text-white transition-colors">{phoneInfo.text}</span>
							</li>
							<li className="flex items-start group">
								<MapPin className="mr-3 mt-1 h-5 w-5 text-secondary group-hover:text-white transition-colors" />
								<span className="group-hover:text-white transition-colors leading-relaxed">{addressInfo.text}</span>
							</li>
						</ul>
						{/* Map Placeholder */}
						<div className="mt-6 overflow-hidden rounded-xl border border-slate-700/50 shadow-2xl">
							{googleMapsEmbedUrl && (
								<iframe
									src={googleMapsEmbedUrl}
									width="100%"
									height="180"
									style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }}
									allowFullScreen=""
									loading="lazy"
									className="group-hover:filter-none transition-all duration-500"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							)}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
					© 2025 Divine Word Hospital. Finding God in all things. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
