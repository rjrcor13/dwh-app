// 'use client';
// import aboutus from '@/public/assets/about-us.webp';
// import {
// 	BeakerIcon,
// 	HeartIcon,
// 	PlusCircleIcon,
// 	UserCircleIcon,
// } from 'lucide-react';
// import React from 'react';

// const servicesData = [
// 	{
// 		icon: BeakerIcon,
// 		title: 'Radiology',
// 		description: 'Precise Imaging for Accurate Diagnosis',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'CT-Scan & MRI',
// 		description: 'Detailed 3D Imaging for Complex Conditions',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'Ambulatory Infusion Unit',
// 		description: 'Precise Imaging for Accurate Diagnosis',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'Hemo-dialysis Unit',
// 		description: 'Detailed 3D Imaging for Complex Conditions',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'Pharmacy Service',
// 		description: 'Detailed 3D Imaging for Complex Conditions',
// 	},
// 	{
// 		icon: HeartIcon,
// 		title: 'Cardio-pulmonary Unit',
// 		description: 'Heart & Lung Care for Optimal Wellness',
// 	},
// 	{
// 		icon: HeartIcon,
// 		title: 'Emergency Care Services',
// 		description: 'Heart & Lung Care for Optimal Wellness',
// 	},
// 	{
// 		icon: UserCircleIcon,
// 		title: 'Physical Therapy',
// 		description: 'Personalized Rehabilitation for Your Recovery',
// 	},
// 	{
// 		icon: UserCircleIcon,
// 		title: 'Ultrasound',
// 		description: 'Real-Time Imaging for Safe and Effective Diagnostics',
// 	},
// 	{
// 		icon: UserCircleIcon,
// 		title: 'Pathology & Laboratory',
// 		description: 'Accurate and Timely Lab Results for Your Health',
// 	},
// ];

// const OurServicesSection = () => {
// 	return (
// 		<div className="py-16 bg-[url(@/public/assets/about-us.webp)] bg-cover bg-no-repeat">
// 			{/* Main container with padding and light gray background */}
// 			<div className="max-w-7xl mx-auto text-center">
// 				<div className="flex flex-col p-6 space-y-10">
// 					<h2 className="text-primary font-semibold text-md mb-2_ italic">
// 						Our Services
// 					</h2>
// 					<div>
// 						<h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
// 							Comprehensive care tailored to you{' '}
// 							<br className="hidden sm:block" />
// 							and your family's needs.
// 						</h3>
// 						<p className="text-gray-600 mb-10">
// 							Providing quality medical services for you and your family.
// 						</p>
// 					</div>
// 				</div>
// 				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8">
// 					{servicesData.map((service, index) => (
// 						<div
// 							key={index}
// 							className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
// 						>
// 							<div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mb-4">
// 								<service.icon className="w-6 h-6" />
// 							</div>
// 							<h4 className="text-lg font-semibold text-gray-700 mb-2">
// 								{service.title}
// 							</h4>
// 							<p className="text-sm text-gray-500 text-center">
// 								{service.description}
// 							</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default OurServicesSection;
// 'use client';
// import {
// 	BeakerIcon,
// 	HeartIcon,
// 	PlusCircleIcon,
// 	UserCircleIcon,
// } from 'lucide-react';
// import React from 'react';

// const servicesData = [
// 	{
// 		icon: BeakerIcon,
// 		title: 'Radiology',
// 		description: 'Precise Imaging for Accurate Diagnosis',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'CT-Scan & MRI',
// 		description: 'Detailed 3D Imaging for Complex Conditions',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'Ambulatory Infusion Unit',
// 		description: 'Precise Imaging for Accurate Diagnosis',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'Hemo-dialysis Unit',
// 		description: 'Detailed 3D Imaging for Complex Conditions',
// 	},
// 	{
// 		icon: BeakerIcon,
// 		title: 'Pharmacy Service',
// 		description: 'Detailed 3D Imaging for Complex Conditions',
// 	},
// 	{
// 		icon: HeartIcon,
// 		title: 'Cardio-pulmonary Unit',
// 		description: 'Heart & Lung Care for Optimal Wellness',
// 	},
// 	{
// 		icon: HeartIcon,
// 		title: 'Emergency Care Services',
// 		description: 'Heart & Lung Care for Optimal Wellness',
// 	},
// 	{
// 		icon: UserCircleIcon,
// 		title: 'Physical Therapy',
// 		description: 'Personalized Rehabilitation for Your Recovery',
// 	},
// 	{
// 		icon: UserCircleIcon,
// 		title: 'Ultrasound',
// 		description: 'Real-Time Imaging for Safe and Effective Diagnostics',
// 	},
// 	{
// 		icon: UserCircleIcon,
// 		title: 'Pathology & Laboratory',
// 		description: 'Accurate and Timely Lab Results for Your Health',
// 	},
// ];

// const OurServicesSection = () => {
// 	return (
// 		<div className="relative py-16">
// 			{/* Background Image */}
// 			<div
// 				className="absolute inset-0 bg-[url(@/public/assets/services.jpg)] bg-cover bg-no-repeat bg-center"
// 				style={{ filter: 'blur(4px)' }} // Apply blur directly
// 			>
// 				{/* Overlay */}
// 				<div className="absolute inset-0 bg-white/70" />{' '}
// 				{/* White overlay with opacity */}
// 			</div>

// 			{/* Content Container */}
// 			<div className="relative max-w-7xl_ container mx-auto z-10  text-center">
// 				<div className="flex flex-col p-6 space-y-10">
// 					<h2 className="text-primary font-semibold text-md mb-2_ italic">
// 						Our Services
// 					</h2>
// 					<div>
// 						<h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
// 							Comprehensive care tailored to you
// 							<br className="hidden sm:block" />
// 							and your family's needs.
// 						</h3>
// 						<p className="text-gray-600 mb-10">
// 							Providing quality medical services for you and your family.
// 						</p>
// 					</div>
// 				</div>
// 				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8">
// 					{servicesData.map((service, index) => (
// 						<div
// 							key={index}
// 							className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
// 						>
// 							<div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mb-4">
// 								<service.icon className="w-6 h-6" />
// 							</div>
// 							<h4 className="text-lg font-semibold text-gray-700 mb-2">
// 								{service.title}
// 							</h4>
// 							<p className="text-sm text-gray-500 text-center">
// 								{service.description}
// 							</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default OurServicesSection;
// 'use client';
// import { cn } from '@/lib/utils'; //Utility for combining class names
// import { motion } from 'framer-motion';
// import {
// 	CrossIcon,
// 	Filter,
// 	HeartIcon,
// 	Microscope,
// 	Monitor,
// 	Radiation,
// 	ShieldCheck,
// 	ShoppingCart,
// 	Syringe,
// 	Tv,
// } from 'lucide-react';

// import React from 'react';

// const servicesData = [
// 	{
// 		icon: Radiation,
// 		title: 'Radiology',
// 		description: 'Precise Imaging for Accurate Diagnosis',
// 	},
// 	{
// 		icon: Monitor,
// 		title: 'CT-Scan & MRI',
// 		description: 'Detailed 3D Imaging',
// 	},
// 	{
// 		icon: Syringe,
// 		title: 'Ambulatory Infusion',
// 		description: 'Outpatient infusion services',
// 	},
// 	{
// 		icon: Filter,
// 		title: 'Hemo-dialysis',
// 		description: 'Kidney Dialysis Center',
// 	},
// 	{
// 		icon: ShoppingCart,
// 		title: 'Pharmacy Service',
// 		description: 'Medications and Consultations',
// 	},
// 	{
// 		icon: HeartIcon,
// 		title: 'Cardio-pulmonary',
// 		description: 'Heart & Lung Care',
// 	},
// 	{
// 		icon: CrossIcon,
// 		title: 'Emergency Care',
// 		description: '24/7 Emergency Services',
// 	},
// 	{
// 		icon: CrossIcon, // Using Emoji
// 		title: 'Physical Therapy',
// 		description: 'Rehabilitation Services',
// 	},
// 	{
// 		icon: Tv,
// 		title: 'Ultrasound',
// 		description: 'Diagnostic Ultrasound Imaging',
// 	},
// 	{
// 		icon: Microscope,
// 		title: 'Pathology & Laboratory',
// 		description: 'Lab Testing',
// 	},
// 	{
// 		icon: Microscope,
// 		title: 'TB DOTS',
// 		description: 'Directly Observed Therapy',
// 	},
// 	{
// 		icon: ShieldCheck,
// 		title: 'Infection Prevention',
// 		description: 'Control Unit',
// 	},
// ];

// const OurServicesSection = () => {
// 	return (
// 		<div className="relative py-16 bg-gray-50">
// 			{/* Background Image (Optional -  use if you want a general image)*/}
// 			<div
// 				className="absolute inset-0 bg-[url(@/public/assets/services.jpg)] bg-cover bg-no-repeat bg-center"
// 				style={{ filter: 'blur(4px)' }}
// 			>
// 				<div className="absolute inset-0 bg-white/70" />
// 			</div>

// 			{/* Content Container */}
// 			<div className="relative z-10 max-w-7xl mx-auto text-center">
// 				<div className="flex flex-col p-6 space-y-8 mb-10">
// 					<h2 className="text-primary font-semibold text-md mb-8 italic">
// 						Our Services
// 					</h2>
// 					<div>
// 						<h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
// 							Comprehensive Care for Your Needs
// 						</h3>
// 						<p className="text-gray-600 text-lg">
// 							We offer a wide range of medical services to provide you and your
// 							family with the best possible care.
// 						</p>
// 					</div>
// 				</div>
// 				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
// 					{servicesData.map((service, index) => {
// 						const ServiceIcon = service.icon; // Get Icon
// 						return (
// 							<motion.div
// 								key={index}
// 								className={cn(
// 									'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start',
// 									'transition-all duration-300',
// 									'hover:shadow-xl hover:scale-[1.02]',
// 									'border border-gray-100 hover:border-indigo-500/30', //Added border
// 									'group' //Added group
// 								)}
// 								whileHover={{ y: -5 }} // Add a slight lift on hover
// 							>
// 								<div
// 									className={cn(
// 										'w-16 h-16 rounded-full flex items-center justify-center mb-4',
// 										'transition-colors duration-300',
// 										'group-hover:bg-blue-500/20 bg-blue-100', //Added hover color
// 										'text-blue-500' //Default icon color
// 									)}
// 								>
// 									<ServiceIcon
// 										className={cn(
// 											'w-8 h-8',
// 											'transition-colors duration-300',
// 											'group-hover:text-blue-500' //Icon color
// 										)}
// 									/>
// 								</div>
// 								<h4
// 									className={cn(
// 										'text-lg font-semibold mb-2',
// 										'transition-colors duration-300',
// 										'text-gray-800 group-hover:text-blue-700' //Title color
// 									)}
// 								>
// 									{service.title}
// 								</h4>
// 								<p className="text-sm text-gray-600 text-center">
// 									{service.description}
// 								</p>
// 							</motion.div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default OurServicesSection;
'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	useCarousel,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
	CrossIcon,
	Filter,
	HeartIcon,
	Microscope,
	Monitor,
	Radiation,
	ShieldCheck,
	ShoppingCart,
	Syringe,
	Tv,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const servicesData = [
	{
		icon: Radiation,
		title: 'Radiology',
		description: 'Precise Imaging for Accurate Diagnosis',
	},
	{ icon: Monitor, title: 'CT-Scan & MRI', description: 'Detailed 3D Imaging' },
	{
		icon: Syringe,
		title: 'Ambulatory Infusion',
		description: 'Outpatient infusion services',
	},
	{
		icon: Filter,
		title: 'Hemo-dialysis',
		description: 'Kidney Dialysis Center',
	},
	{
		icon: ShoppingCart,
		title: 'Pharmacy Service',
		description: 'Medications and Consultations',
	},
	{
		icon: HeartIcon,
		title: 'Cardio-pulmonary',
		description: 'Heart & Lung Care',
	},
	{
		icon: CrossIcon,
		title: 'Emergency Care',
		description: '24/7 Emergency Services',
	},
	{
		icon: CrossIcon,
		title: 'Physical Therapy',
		description: 'Rehabilitation Services',
	},
	{
		icon: Tv,
		title: 'Ultrasound',
		description: 'Diagnostic Ultrasound Imaging',
	},
	{
		icon: Microscope,
		title: 'Pathology & Laboratory',
		description: 'Lab Testing',
	},
	{
		icon: Microscope,
		title: 'TB DOTS',
		description: 'Directly Observed Therapy',
	},
	{
		icon: ShieldCheck,
		title: 'Infection Prevention',
		description: 'Control Unit',
	},
];

const OurServicesSection = () => {
	const [isMobile, setIsMobile] = useState(false);
	const carouselRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Autoplay
	useEffect(() => {
		if (!isMobile) return;
		const interval = setInterval(() => {
			if (carouselRef.current?.scrollNext) {
				carouselRef.current.scrollNext();
			}
		}, 4000); // every 4 seconds

		return () => clearInterval(interval);
	}, [isMobile]);

	const serviceVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.4,
				ease: 'easeInOut',
			},
		}),
		exit: { opacity: 0, y: -20 },
	};

	if (isMobile) {
		return (
			<div className="relative py-16 bg-gray-50">
				<div className="relative z-10 max-w-7xl mx-auto text-center">
					<div className="flex flex-col p-6 space-y-8 mb-10">
						<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
							Our Services
						</h2>
						<div>
							<h3 className="text-3xl font-bold text-gray-800 mb-4">
								Comprehensive Care for Your Needs
							</h3>
							<p className="text-gray-600 text-lg">
								We offer a wide range of medical services to provide you and
								your family with the best possible care.
							</p>
						</div>
					</div>

					<Carousel
						ref={carouselRef}
						opts={{ align: 'center', loop: true }}
						className="w-full px-4"
					>
						<CarouselContent className="px-12 pb-4">
							{Array.from(
								{ length: Math.ceil(servicesData.length / 2) },
								(_, i) => {
									const first = servicesData[i * 2];
									const second = servicesData[i * 2 + 1];
									return (
										<CarouselItem key={i} className="px-4">
											<div className="flex flex-col gap-6">
												{[first, second].map((service, indexInGroup) =>
													service ? (
														<motion.div
															key={indexInGroup}
															variants={serviceVariants}
															initial="hidden"
															animate="visible"
															exit="exit"
															custom={i * 2 + indexInGroup}
															className={cn(
																'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start',
																'transition-all duration-300',
																'hover:shadow-xl hover:scale-[1.02]',
																'border border-gray-100 hover:border-indigo-500/30',
																'group'
															)}
														>
															<div
																className={cn(
																	'w-16 h-16 rounded-full flex items-center justify-center mb-4',
																	'transition-colors duration-300',
																	'group-hover:bg-indigo-500/20 bg-indigo-100',
																	'text-indigo-500'
																)}
															>
																<service.icon className="w-8 h-8" />
															</div>
															<h4
																className={cn(
																	'text-lg font-semibold mb-2',
																	'transition-colors duration-300',
																	'text-gray-800 group-hover:text-indigo-700 text-center'
																)}
															>
																{service.title}
															</h4>
															<p className="text-sm text-gray-600 text-center">
																{service.description}
															</p>
														</motion.div>
													) : null
												)}
											</div>
										</CarouselItem>
									);
								}
							)}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		);
	}

	return (
		<div className="relative py-8 pb-12 bg-gray-50">
			<div className="relative z-10 max-w-7xl mx-auto text-center">
				<div className="flex flex-col p-6 space-y-8 mb-10">
					<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
						Our Services
					</h2>
					<div>
						<h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
							Comprehensive Care for Your Needs
						</h3>
						<p className="text-gray-600 text-lg">
							We offer a wide range of medical services to provide you and your
							family with the best possible care.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
					{servicesData.map((service, index) => {
						const ServiceIcon = service.icon;
						return (
							<motion.div
								key={index}
								variants={serviceVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								custom={index}
								className={cn(
									'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start',
									'transition-all duration-300',
									'hover:shadow-xl hover:scale-[1.02]',
									'border border-gray-100 hover:border-indigo-500/30',
									'group h-full'
								)}
							>
								<div
									className={cn(
										'w-16 h-16 rounded-full flex items-center justify-center mb-4',
										'transition-colors duration-300',
										'group-hover:bg-indigo-500/20 bg-indigo-100',
										'text-indigo-500'
									)}
								>
									<ServiceIcon className="w-8 h-8" />
								</div>
								<h4
									className={cn(
										'text-lg font-semibold mb-2',
										'transition-colors duration-300',
										'text-gray-800 group-hover:text-indigo-700 text-center'
									)}
								>
									{service.title}
								</h4>
								<p className="text-sm text-gray-600 text-center">
									{service.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default OurServicesSection;
