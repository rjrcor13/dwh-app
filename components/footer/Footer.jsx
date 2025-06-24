// import { contactInfo } from '@/app/data/contactInfo';
// import logo from '@/public/assets/logo_w.png';
// import {
// 	Facebook,
// 	Instagram,
// 	Mail,
// 	MapPin,
// 	Phone,
// 	Twitter,
// } from 'lucide-react'; // For icons
// import Image from 'next/image';
// import React from 'react';
// const addressInfo = contactInfo.find((info) => info.title === 'Location');
// const phoneInfo = contactInfo.find((info) => info.title === 'Phone');
// const emailInfo = contactInfo.find((info) => info.title === 'Email');
// const Footer = () => {
// 	const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// 	let googleMapsEmbedUrl =
// 		'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA'; // Default to the direct link

// 	if (googleMapsApiKey) {
// 		googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA`;
// 	}

// 	return (
// 		<footer className="bg-primary text-white pt-20 pb-8">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					{/* Logo and Description */}
// 					<div className="flex flex-col items-start">
// 						<div className="flex items-center mb-4 gap-2">
// 							{/* Replace with your actual logo -  */}

// 							<Image
// 								width={60}
// 								height={60}
// 								src={logo}
// 								alt="Divine Word Hospital Logo"
// 							/>
// 							<h2 className="text-xl font-bold">
// 								Divine Word <br />
// 								Hospital
// 							</h2>
// 						</div>
// 						<p className="text-sm text-indigo-200 mb-4">
// 							Providing compassionate care and healing for all since 1965.
// 						</p>
// 						<div className="flex space-x-4">
// 							<a
// 								href="#"
// 								aria-label="Facebook"
// 								className="hover:text-indigo-300"
// 							>
// 								<Facebook className="h-6 w-6" />
// 							</a>
// 							<a
// 								href="#"
// 								aria-label="Twitter"
// 								className="hover:text-indigo-300"
// 							>
// 								<Twitter className="h-6 w-6" />
// 							</a>
// 							<a
// 								href="#"
// 								aria-label="Instagram"
// 								className="hover:text-indigo-300"
// 							>
// 								<Instagram className="h-6 w-6" />
// 							</a>
// 						</div>
// 					</div>

// 					{/* Company and Our Services */}
// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// 						<div>
// 							<h4 className="font-semibold text-lg mb-4">Company</h4>
// 							<ul className="text-sm text-indigo-200 space-y-2">
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Home
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										About Us
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Find a Doctor
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Expertise
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Patient & Visitor's Guide
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Religious & Hospital Events
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Career
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Contact Us
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 						<div>
// 							<h4 className="font-semibold text-lg mb-4">Our Services</h4>
// 							<ul className="text-sm text-indigo-200 space-y-2">
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Radiology
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Ambulatory Infusion Unit
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Cardiopulmonary Unit
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Physical Therapy
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Hemodialysis Unit
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Pathology & Laboratory
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Pharmacy Services
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										TB DOTS
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										IPCU
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:text-indigo-300">
// 										Emergency Care Service
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>

// 					{/* Get In Touch */}
// 					<div>
// 						<h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
// 						<ul className="text-sm text-indigo-200 space-y-2">
// 							<li className="flex items-start">
// 								<Mail className="h-4 w-4 mr-2 mt-1" />
// 								<span>{emailInfo.text}</span>
// 							</li>
// 							<li className="flex items-start">
// 								<Phone className="h-4 w-4 mr-2 mt-1" />
// 								<span>{phoneInfo.text}</span>
// 							</li>
// 							<li className="flex items-start">
// 								<MapPin className="h-4 w-4 mr-2 mt-1" />
// 								<span>{addressInfo.text}</span>
// 							</li>
// 						</ul>
// 						{/* Map Placeholder -  */}
// 						<div className="mt-4 rounded-md overflow-hidden">
// 							<div className="rounded-lg overflow-hidden shadow-lg">
// 								<iframe
// 									src={googleMapsEmbedUrl}
// 									width="100%"
// 									height="200"
// 									style={{ border: 0 }}
// 									allowFullScreen=""
// 									loading="lazy"
// 									referrerPolicy="no-referrer-when-downgrade"
// 								></iframe>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Copyright */}
// 				<hr className=" border border-blue-800 shadow mt-8" />
// 				<div className="mt-8 text-center text-sm text-indigo-300">
// 					&copy; 2025 Divine Word Hospital. All Rights Reserved.
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;
'use client';
import { contactInfo } from '@/app/data/contactInfo';
import logo from '@/public/assets/logo_w.png';
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
	const [googleMapsEmbedUrl, setGoogleMapsEmbedUrl] = useState(''); // Use state to manage the URL

	useEffect(() => {
		// This code only runs on the client-side after initial render
		const googleMapsApiKey = process.env.NEXT_PUBLIC_Maps_API_KEY;

		if (googleMapsApiKey) {
			// Corrected string interpolation
			setGoogleMapsEmbedUrl(
				`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA`
			);
		} else {
			// Fallback for development if API key isn't set, or a generic map link
			setGoogleMapsEmbedUrl(
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.34444007823!2d124.9926413153406!3d11.24056639194269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300f898a1a3a60f%3A0x6b5a3e1a6c4b2a8d!2sDivine%20Word%20Hospital%20of%20Tacloban%20City!5e0!3m2!1sen!2sph!4v1678886400000!5m2!1sen!2sph' // Example fallback URL
			);
		}
	}, []); // Empty dependency array ensures this runs once on mount

	return (
		<footer className="bg-primary pt-20 pb-8 text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{/* Logo and Description */}
					<div className="flex flex-col items-start">
						<div className="mb-4 flex items-center gap-2">
							<Image
								width={60}
								height={60}
								src={logo}
								alt="Divine Word Hospital Logo"
							/>
							<h2 className="text-xl font-bold">
								Divine Word <br /> Hospital
							</h2>
						</div>
						<p className="mb-4 text-sm text-indigo-200">
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
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div>
							<h4 className="mb-4 text-lg font-semibold">Company</h4>
							<ul className="space-y-2 text-sm text-indigo-200">
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
							<h4 className="mb-4 text-lg font-semibold">Our Services</h4>
							<ul className="space-y-2 text-sm text-indigo-200">
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
						<h4 className="mb-4 text-lg font-semibold">Get In Touch</h4>
						<ul className="space-y-2 text-sm text-indigo-200">
							<li className="flex items-start">
								<Mail className="mr-2 mt-1 h-4 w-4" />
								<span>{emailInfo.text}</span>
							</li>
							<li className="flex items-start">
								<Phone className="mr-2 mt-1 h-4 w-4" />
								<span>{phoneInfo.text}</span>
							</li>
							<li className="flex items-start">
								<MapPin className="mr-2 mt-1 h-4 w-4" />
								<span>{addressInfo.text}</span>
							</li>
						</ul>
						{/* Map Placeholder */}
						<div className="mt-4 overflow-hidden rounded-md">
							<div className="overflow-hidden rounded-lg shadow-lg">
								{/* Only render iframe if googleMapsEmbedUrl is available */}
								{googleMapsEmbedUrl && (
									<iframe
										src={googleMapsEmbedUrl}
										width="100%"
										height="200"
										style={{ border: 0 }}
										allowFullScreen=""
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<hr className="mt-8 border border-blue-800 shadow" />
				<div className="mt-8 text-center text-sm text-indigo-300">
					© 2025 Divine Word Hospital. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
