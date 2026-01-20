'use client';
import AmbientBackground from '@/components/ui/AmbientBackground';
import { contactInfo } from '@/app/data/contactInfo';
import logo from '@/public/assets/logo_w.png';
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
	ArrowRight
} from 'lucide-react';
import Image from 'next/image';
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

	const companyLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about-us' },
		{ name: 'Find a Doctor', href: '/doctors' },
		{ name: 'Our Distinction', href: '/about-us' }, // Mapping to About Us for now
		{ name: 'Events', href: '/events' },
		{ name: 'Careers', href: '/careers' },
		{ name: 'Contact Us', href: '/contact' },
	];

	const serviceLinks = [
		{ name: 'Radiology', href: '/expertise/services/radiology' },
		{ name: 'Pathology & Laboratory', href: '/expertise/services/pathology-laboratory' },
		{ name: 'Pharmacy', href: '/expertise/services/pharmacy-service' },
		{ name: 'Dialysis Center', href: '/expertise/services/hemo-dialysis' },
		{ name: 'Emergency Care', href: '/emergency' },
		{ name: 'Physical Therapy', href: '/expertise/services/physical-therapy' },
	];

	return (
		<footer className="bg-primary mt-0 text-blue-100 relative overflow-hidden">
			<AmbientBackground />

			<div className="mx-auto max-w-[1440px] px-8 pt-20 pb-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

					{/* Brand Column (Span 4) */}
					<div className="lg:col-span-4 flex flex-col items-start space-y-6">
						<div className="flex items-center gap-4 group">
							<div className="relative">
								<div className="absolute inset-0 bg-white/20 blur-xl rounded-full group-hover:bg-white/30 transition-all" />
								<Image
									width={64}
									height={64}
									src={logo}
									alt="Divine Word Hospital Logo"
									className="brightness-0 invert relative z-10"
								/>
							</div>
							<h2 className="text-2xl font-bold font-heading text-white tracking-wide leading-none">
								Divine Word <br /> <span className="text-blue-200 font-medium">Hospital</span>
							</h2>
						</div>
						<p className="text-blue-100/80 text-base leading-relaxed max-w-sm">
							Providing compassionate care and healing for all since 1965. We are dedicated to being a trusted partner in your health journey, finding God in all things.
						</p>
						<div className="flex gap-4 pt-2">
							{[
								{ Icon: Facebook, label: 'Visit our Facebook page' },
								{ Icon: Twitter, label: 'Follow us on Twitter' },
								{ Icon: Instagram, label: 'Follow us on Instagram' }
							].map(({ Icon, label }, i) => (
								<a
									key={i}
									href="#"
									aria-label={label}
									className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-100 hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1"
								>
									<Icon className="h-5 w-5" aria-hidden="true" />
								</a>
							))}
						</div>
					</div>

					{/* Links Columns (Span 4 total - 2 cols) */}
					<div className="lg:col-span-4 grid grid-cols-2 gap-8">
						<div>
							<h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary">Company</h4>
							<ul className="space-y-3 text-sm font-medium text-blue-100/90">
								{companyLinks.map((item) => (
									<li key={item.name}>
										<Link href={item.href} className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300 group">
											<span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-secondary transition-colors" />
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary">Services</h4>
							<ul className="space-y-3 text-sm font-medium text-blue-100/90">
								{serviceLinks.map((item) => (
									<li key={item.name}>
										<Link href={item.href} className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300 group">
											<span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-secondary transition-colors" />
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Contact Column (Span 4) */}
					<div className="lg:col-span-4">
						<h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary">Quick Contact</h4>
						<ul className="space-y-6 text-sm text-blue-100/90 mb-8">
							<li className="flex items-start gap-4 group cursor-default">
								<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
									<Mail className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-blue-300 font-bold uppercase mb-0.5">Email Us</p>
									<span className="text-white hover:text-secondary transition-colors font-medium">{emailInfo.text}</span>
								</div>
							</li>
							<li className="flex items-start gap-4 group cursor-default">
								<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
									<Phone className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-blue-300 font-bold uppercase mb-0.5">Call Us</p>
									<span className="text-white hover:text-secondary transition-colors font-medium">{phoneInfo.text}</span>
								</div>
							</li>
							<li className="flex items-start gap-4 group cursor-default">
								<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
									<MapPin className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-blue-300 font-bold uppercase mb-0.5">Visit Us</p>
									<span className="text-white hover:text-secondary transition-colors font-medium leading-relaxed block max-w-xs">{addressInfo.text}</span>
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
									style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.8)' }}
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
						<Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
						<Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
