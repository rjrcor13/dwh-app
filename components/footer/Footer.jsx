'use client';
import { contactInfo } from '@/app/data/contactInfo';
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
} from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
		<footer className="bg-slate-900 text-blue-100 pt-20 pb-10">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
					{/* Brand & Description */}
					<div className="space-y-6">
						<Link href="/" className="inline-block">
							<div className="flex items-center gap-3">
								<div className="w-15 h-15 bg-white/10_ rounded-xl flex items-center justify-center backdrop-blur-sm">
									<img
										src="/assets/logo.png"
										alt="DWH Logo"
										className="w-15 h-15 object-contain brightness-0 invert"
									/>
								</div>
								<div>
									<h3 className="font-heading font-bold text-2xl text-white tracking-wide">
										Divine Word
									</h3>
									<p className="text-xl text-blue-200 tracking-wider uppercase">
										Hospital
									</p>
								</div>
							</div>
						</Link>
						<p className="text-blue-200/80 leading-relaxed text-sm max-w-xs">
							Providing world-class healthcare with compassion and excellence.
							Your health is our sacred commitment.
						</p>
						<div className="flex items-center gap-3">
							{[
								{
									icon: Facebook,
									href: 'https://www.facebook.com/dwhtofficial',
								},
								{
									icon: Instagram,
									href: 'https://www.instagram.com/dwhtofficial',
								},
								{
									icon: Youtube,
									href: 'https://www.youtube.com/@divinewordhospital',
								},
							].map((item, index) => (
								<Link
									key={index}
									href={item.href}
									target="_blank"
									className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 group"
								>
									<item.icon className="w-4 h-4 text-blue-200 group-hover:text-white transition-colors" />
								</Link>
							))}
						</div>
					</div>

					{/* Links Columns */}
					<div>
						<h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary">
							Company
						</h4>
						<ul className="space-y-3 text-sm font-medium text-blue-100/90">
							{[
								'Home',
								'About Us',
								'Find a Doctor',
								'Our Distinction',
								'Events',
								'Careers',
								'Contact Us',
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300 group"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-secondary transition-colors" />
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary">
							Services
						</h4>
						<ul className="space-y-3 text-sm font-medium text-blue-100/90">
							{[
								'Radiology',
								'Emergency Care',
								'Pharmacy',
								'Laboratory',
								'Check-ups',
								'Pedia',
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300 group"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-secondary transition-colors" />
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Column */}
					<div className="space-y-6">
						<h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary">
							Quick Contact
						</h4>
						<ul className="space-y-6 text-sm text-blue-100/90 mb-8">
							<li className="flex items-start gap-4 group cursor-default">
								<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
									<Mail className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-blue-300 font-bold uppercase mb-0.5">
										Email Us
									</p>
									<span className="text-white hover:text-secondary transition-colors font-medium">
										{emailInfo.text}
									</span>
								</div>
							</li>
							<li className="flex items-start gap-4 group cursor-default">
								<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
									<Phone className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-blue-300 font-bold uppercase mb-0.5">
										Call Us
									</p>
									<span className="text-white hover:text-secondary transition-colors font-medium">
										{phoneInfo.text}
									</span>
								</div>
							</li>
							<li className="flex items-start gap-4 group cursor-default">
								<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
									<MapPin className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-blue-300 font-bold uppercase mb-0.5">
										Visit Us
									</p>
									<span className="text-white hover:text-secondary transition-colors font-medium leading-relaxed block max-w-xs">
										{addressInfo.text}
									</span>
								</div>
							</li>
						</ul>

						{/* Mini Map */}
						<div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-32 relative group">
							<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
							{googleMapsEmbedUrl && (
								<iframe
									src={googleMapsEmbedUrl}
									width="100%"
									height="100%"
									style={{
										border: 0,
										filter: 'grayscale(1) contrast(1.1) brightness(0.8)',
									}}
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
				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300/80">
					<p>© 2025 Divine Word Hospital. Finding God in all things.</p>
					<div className="flex items-center gap-6">
						<a href="#" className="hover:text-white transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
