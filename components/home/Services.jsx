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

const OurServicesSection = ({ classaNames }) => {
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
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative py-16 bg-gray-50"
			>
				<div className="relative z-10 max-w-7xl mx-auto text-center">
					<div className="flex flex-col p-6 space-y-8 mb-10">
						<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
							Our Services
						</h2>
						<div>
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
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
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			className="relative py-16  pb-24 bg-gray-50"
		>
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
		</motion.div>
	);
};

export default OurServicesSection;
