'use client';

import {
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
const ConnectWithUsSection = () => {
	const contactInfo = [
		{
			icon: EnvelopeIcon,
			title: 'Email',
			text: 'dwh.marketing@dwh.com',
			subText: 'Send us an email today',
		},
		{
			icon: PhoneIcon,
			title: 'Phone',
			text: '(053) 888 8888',
			subText: 'Call us for more information',
		},
		{
			icon: MapPinIcon,
			title: 'Location',
			text: 'Avenida Veteranos St., Tacloban City',
			subText: 'Get Direction',
			isLink: true, // New property to indicate it's a link
			href: 'ttps://www.google.com/maps/embed/v1/place?q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA', // Add a placeholder for the link
		},
	];

	// const googleMapsEmbedUrl =
	// 	'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA&key=AIzaSyBnQ-ZhjWbLfLMZCQXshmDaZ-2GjInFX78'; // Replace with your actual Google Maps embed URL
	const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
	const googleMapsEmbedUrl = contactInfo[2].href;
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			className="bg-primary py-12 text-white"
			id="connect-with-us"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="text-center mb-8">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">
						Connect with Us
					</h2>
					<p className="text-lg text-indigo-200">
						We are here to assist you. Please feel free to reach out to us for
						any inquiries or assistance.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{contactInfo.map((item, index) => (
						<div key={index} className="flex items-center">
							<div className="w-10 h-10 rounded-md bg-indigo-700 flex items-center justify-center mr-4">
								<item.icon className="h-6 w-6" />
							</div>
							<div>
								<h6 className="font-semibold">{item.title}</h6>
								<p className="text-sm text-indigo-200">{item.text}</p>
								{item.isLink ? (
									<a
										href={item.href}
										className="text-xs text-indigo-300 hover:underline"
									>
										{item.subText}
									</a>
								) : (
									<p className="text-xs text-indigo-300">{item.subText}</p>
								)}
							</div>
						</div>
					))}
				</div>

				<div className="rounded-lg overflow-hidden shadow-md border-10 border-white">
					<iframe
						src={googleMapsEmbedUrl}
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</motion.div>
	);
};

export default ConnectWithUsSection;
