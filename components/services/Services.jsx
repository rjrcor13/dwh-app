'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServicesCard';

const Services = ({
	classaNames,
	title,
	description,
	label,
	servicesData,
	titleColor,
}) => {
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

	// Autoplay for mobile
	useEffect(() => {
		if (!isMobile) return;
		const interval = setInterval(() => {
			if (carouselRef.current?.scrollNext) {
				carouselRef.current.scrollNext();
			}
		}, 4000); // every 4 seconds
		return () => clearInterval(interval);
	}, [isMobile]);

	if (isMobile) {
		return (
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative py-8 bg-gray-50"
			>
				<div className="relative z-10 max-w-7xl mx-auto text-center">
					<div className="flex flex-col p-6 space-y-8 mb-10">
						{label && (
							<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
								{label}
							</h2>
						)}

						<div>
							{title && (
								<h3
									className={`text-4xl sm:text-5xl  font-bold mb-4 ${
										titleColor || 'text-gray-800'
									}`}
								>
									{title}
								</h3>
							)}
							{description && (
								<p className="text-gray-600 text-lg">{description}</p>
							)}
						</div>
					</div>

					<Carousel
						ref={carouselRef}
						opts={{ align: 'center', loop: true }}
						className="w-full px-4 "
					>
						<CarouselContent className="px-12  pb-8 pt-4">
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
														<ServiceCard
															key={indexInGroup}
															service={service}
															index={i * 2 + indexInGroup}
														/>
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

	// Desktop layout
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			className="relative py-16 pb-24 bg-gray-50"
		>
			<div className="relative z-10 max-w-7xl mx-auto text-center">
				<div className="flex flex-col  space-y-8 mb-10">
					{label && (
						<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
							{label}
						</h2>
					)}

					<div>
						{title && (
							<h3
								className={`text-3xl sm:text-4xl lg:text-5xl  font-bold mb-4 ${
									titleColor || 'text-gray-800'
								}`}
							>
								{title}
							</h3>
						)}
						{description && (
							<p className="text-gray-600 text-lg">{description}</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-4">
					{servicesData.map((service, index) => (
						<ServiceCard key={index} service={service} index={index} />
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Services;
