import { contactInfo } from '@/app/data/contactInfo';
import logo from '@/public/assets/logo_w.png';
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react'; // For icons
import Image from 'next/image';
import React from 'react';
const addressInfo = contactInfo.find((info) => info.title === 'Location');
const phoneInfo = contactInfo.find((info) => info.title === 'Phone');
const emailInfo = contactInfo.find((info) => info.title === 'Email');
const Footer = () => {
	const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

	let googleMapsEmbedUrl =
		'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA'; // Default to the direct link

	if (googleMapsApiKey) {
		googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA`;
	}

	return (
		<footer className="bg-primary text-white pt-20 pb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Logo and Description */}
					<div className="flex flex-col items-start">
						<div className="flex items-center mb-4 gap-2">
							{/* Replace with your actual logo -  */}

							<Image
								width={60}
								height={60}
								src={logo}
								alt="Divine Word Hospital Logo"
							/>
							<h2 className="text-xl font-bold">
								Divine Word <br />
								Hospital
							</h2>
						</div>
						<p className="text-sm text-indigo-200 mb-4">
							Providing compassionate care and healing for all since 1965.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								aria-label="Facebook"
								className="hover:text-indigo-300"
							>
								<Facebook className="h-6 w-6" />
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="hover:text-indigo-300"
							>
								<Twitter className="h-6 w-6" />
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="hover:text-indigo-300"
							>
								<Instagram className="h-6 w-6" />
							</a>
						</div>
					</div>

					{/* Company and Our Services */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 className="font-semibold text-lg mb-4">Company</h4>
							<ul className="text-sm text-indigo-200 space-y-2">
								<li>
									<a href="#" className="hover:text-indigo-300">
										Home
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										About Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Find a Doctor
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Expertise
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Patient & Visitor's Guide
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Religious & Hospital Events
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Career
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-lg mb-4">Our Services</h4>
							<ul className="text-sm text-indigo-200 space-y-2">
								<li>
									<a href="#" className="hover:text-indigo-300">
										Radiology
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Ambulatory Infusion Unit
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Cardiopulmonary Unit
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Physical Therapy
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Hemodialysis Unit
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Pathology & Laboratory
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Pharmacy Services
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										TB DOTS
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										IPCU
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-300">
										Emergency Care Service
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Get In Touch */}
					<div>
						<h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
						<ul className="text-sm text-indigo-200 space-y-2">
							<li className="flex items-start">
								<Mail className="h-4 w-4 mr-2 mt-1" />
								<span>{emailInfo.text}</span>
							</li>
							<li className="flex items-start">
								<Phone className="h-4 w-4 mr-2 mt-1" />
								<span>{phoneInfo.text}</span>
							</li>
							<li className="flex items-start">
								<MapPin className="h-4 w-4 mr-2 mt-1" />
								<span>{addressInfo.text}</span>
							</li>
						</ul>
						{/* Map Placeholder -  */}
						<div className="mt-4 rounded-md overflow-hidden">
							<div className="rounded-lg overflow-hidden shadow-lg">
								<iframe
									src={googleMapsEmbedUrl}
									width="100%"
									height="200"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<hr className=" border border-blue-800 shadow mt-8" />
				<div className="mt-8 text-center text-sm text-indigo-300">
					&copy; 2025 Divine Word Hospital. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
