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
import React from 'react';

const addressInfo = contactInfo.find((info) => info.title === 'Location');
const phoneInfo = contactInfo.find((info) => info.title === 'Phone');
const emailInfo = contactInfo.find((info) => info.title === 'Email');

const TopWidget = () => {
	return (
		<div className="bg-primary text-blue-50 border-b border-white/10 relative z-50 overflow-hidden" suppressHydrationWarning>
			{/* Dynamic Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-between items-center text-xs font-medium tracking-wide relative z-10">

				{/* Left Side: Socials */}
				<div className="flex items-center gap-6">
					<span className="hidden md:inline opacity-70">Connect with us:</span>
					<div className="flex items-center gap-3">
						{[
							{ icon: Facebook, href: "https://www.facebook.com/dwhtofficial" },
							{ icon: Instagram, href: "https://www.instagram.com/dwhtofficial" },
							{ icon: Youtube, href: "https://www.youtube.com/@divinewordhospital" },
							{ icon: Mail, href: `mailto:${emailInfo.text}` }
						].map((item, index) => (
							<Link
								key={index}
								href={item.href}
								target="_blank"
								className="opacity-80 hover:opacity-100 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
							>
								<item.icon className="w-3.5 h-3.5" />
							</Link>
						))}
					</div>
				</div>

				{/* Right Side: Contact Info */}
				<div className="flex items-center gap-6">
					<div className="hidden md:flex items-center gap-2 group cursor-default">
						<MapPin className="w-3.5 h-3.5 text-secondary transition-transform group-hover:scale-110" />
						<span className="opacity-90 group-hover:opacity-100 transition-opacity line-clamp-1 max-w-[200px] lg:max-w-none">
							{addressInfo.text}
						</span>
					</div>

					{/* Divider */}
					<div className="hidden md:block w-px h-3 bg-white/20" />

					<div className="flex items-center gap-2 group cursor-default">
						<Phone className="w-3.5 h-3.5 text-secondary transition-transform group-hover:scale-110" />
						<span className="opacity-90 group-hover:opacity-100 transition-opacity">
							{phoneInfo.text}
						</span>
					</div>

					{/* Divider */}
					<div className="hidden md:block w-px h-3 bg-white/20" />

					{/* Find a Doctor Link */}
					<Link
						href="/doctors"
						className="flex items-center gap-1.5 text-secondary font-bold hover:text-white transition-colors"
					>
						<span>Find a Doctor</span>
						<span className="bg-white/10 p-0.5 rounded-full">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</span>
					</Link>
				</div>

			</div>
		</div>
	);
};

export default TopWidget;
