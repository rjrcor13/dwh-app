// 'use client';

// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// } from '@/components/ui/carousel';
// import { motion } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';
// import ServiceCard from './ServicesCard';

// const Services = ({
// 	classaNames,
// 	title,
// 	description,
// 	label,
// 	servicesData,
// 	titleColor,
// }) => {
// 	const [isMobile, setIsMobile] = useState(false);
// 	const carouselRef = useRef(null);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setIsMobile(window.innerWidth < 768);
// 		};
// 		handleResize();
// 		window.addEventListener('resize', handleResize);
// 		return () => window.removeEventListener('resize', handleResize);
// 	}, []);

// 	// Autoplay for mobile
// 	useEffect(() => {
// 		if (!isMobile) return;
// 		const interval = setInterval(() => {
// 			if (carouselRef.current?.scrollNext) {
// 				carouselRef.current.scrollNext();
// 			}
// 		}, 4000); // every 4 seconds
// 		return () => clearInterval(interval);
// 	}, [isMobile]);

// 	if (isMobile) {
// 		return (
// 			<motion.div
// 				initial={{ opacity: 0, y: -20 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.5 }}
// 				className="relative py-8 bg-gray-50"
// 			>
// 				<div className="relative z-10 max-w-7xl mx-auto text-center">
// 					<div className="flex flex-col p-6 space-y-8 mb-10">
// 						{label && (
// 							<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
// 								{label}
// 							</h2>
// 						)}

// 						<div>
// 							{title && (
// 								<h3
// 									className={`text-4xl sm:text-5xl  font-bold mb-4 ${
// 										titleColor || 'text-gray-800'
// 									}`}
// 								>
// 									{title}
// 								</h3>
// 							)}
// 							{description && (
// 								<p className="text-gray-600 text-lg">{description}</p>
// 							)}
// 						</div>
// 					</div>

// 					<Carousel
// 						ref={carouselRef}
// 						opts={{ align: 'center', loop: true }}
// 						className="w-full px-4 "
// 					>
// 						<CarouselContent className="px-12  pb-8 pt-4">
// 							{Array.from(
// 								{ length: Math.ceil(servicesData.length / 2) },
// 								(_, i) => {
// 									const first = servicesData[i * 2];
// 									const second = servicesData[i * 2 + 1];
// 									return (
// 										<CarouselItem key={i} className="px-4">
// 											<div className="flex flex-col gap-6">
// 												{[first, second].map((service, indexInGroup) =>
// 													service ? (
// 														<ServiceCard
// 															key={indexInGroup}
// 															service={service}
// 															index={i * 2 + indexInGroup}
// 														/>
// 													) : null
// 												)}
// 											</div>
// 										</CarouselItem>
// 									);
// 								}
// 							)}
// 						</CarouselContent>
// 					</Carousel>
// 				</div>
// 			</motion.div>
// 		);
// 	}

// 	// Desktop layout
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 20 }}
// 			whileInView={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.4, delay: 0.1 }}
// 			className="relative py-16 pb-24 bg-gray-50"
// 		>
// 			<div className="relative z-10 max-w-7xl mx-auto text-center">
// 				<div className="flex flex-col  space-y-8 mb-10">
// 					{label && (
// 						<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
// 							{label}
// 						</h2>
// 					)}

// 					<div>
// 						{title && (
// 							<h3
// 								className={`text-4xl  font-bold mb-4 ${
// 									titleColor || 'text-gray-800'
// 								}`}
// 							>
// 								{title}
// 							</h3>
// 						)}
// 						{description && (
// 							<p className="text-gray-600 text-lg">{description}</p>
// 						)}
// 					</div>
// 				</div>

// 				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-4">
// 					{servicesData.map((service, index) => (
// 						<ServiceCard key={index} service={service} index={index} />
// 					))}
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// };

// export default Services;
'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
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
	const autoplayRef = useRef(null); // Ref to hold the autoplay interval ID

	// Autoplay function
	const startAutoplay = () => {
		if (autoplayRef.current) clearInterval(autoplayRef.current);
		autoplayRef.current = setInterval(() => {
			if (carouselRef.current?.scrollNext) {
				carouselRef.current.scrollNext();
			}
		}, 4000); // scrolls every 4s
	};

	const stopAutoplay = () => {
		if (autoplayRef.current) clearInterval(autoplayRef.current);
	};

	useEffect(() => {
		startAutoplay();
		return () => stopAutoplay();
	}, []);

	// Handle screen resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const chunkServices = (arr, size) => {
		const chunks = [];
		for (let i = 0; i < arr.length; i += size) {
			chunks.push(arr.slice(i, i + size));
		}
		return chunks;
	};

	// Mobile: 2 per slide
	if (isMobile) {
		return (
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative py-8 bg-gray-50"
			>
				<div className="relative z-10 max-w-7xl_ container mx-auto text-center">
					<div className="flex flex-col p-6 space-y-8 mb-10">
						{label && (
							<h2 className="text-gray-700 font-semibold text-sm mb-8 italic_">
								{label}
							</h2>
						)}

						<div>
							{title && (
								<h3
									className={`text-4xl sm:text-5xl font-bold mb-4 ${titleColor || 'text-gray-800'
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

					<Carousel ref={carouselRef} opts={{ align: 'center', loop: true }}>
						<CarouselContent className="px-12 pb-8 pt-4">
							{Array.from(
								{ length: Math.ceil(servicesData.length / 2) },
								(_, i) => {
									const first = servicesData[i * 2];
									const second = servicesData[i * 2 + 1];
									return (
										<CarouselItem key={i} className="px-4">
											<div className="flex flex-col gap-6">
												{[first, second].map((service, idx) =>
													service ? (
														<ServiceCard
															key={idx}
															service={service}
															index={i * 2 + idx}
														/>
													) : null
												)}
											</div>
										</CarouselItem>
									);
								}
							)}{' '}
						</CarouselContent>
					</Carousel>
				</div>
			</motion.div>
		);
	}

	// Desktop: 4 columns × 2 rows per slide
	const desktopChunks = chunkServices(servicesData, 8);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			className="relative py-24 bg-slate-50"
			onMouseEnter={stopAutoplay} // Pause autoplay on hover
			onMouseLeave={startAutoplay} // Resume autoplay when not hovering
		>
			<div className="relative z-10 max-w-7xl mx-auto text-center">
				<div className="flex flex-col space-y-6 mb-16">
					{label && (
						<h2 className="text-secondary font-bold tracking-wide uppercase text-sm">
							{label}
						</h2>
					)}

					<div>
						{title && (
							<h3
								className={`text-4xl lg:text-5xl font-bold font-heading mb-6 ${titleColor || 'text-slate-900'
									}`}
							>
								{title}
							</h3>
						)}
						{description && (
							<p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">{description}</p>
						)}
					</div>
				</div>

				<Carousel ref={carouselRef} opts={{ align: 'center', loop: true }}>
					<CarouselContent className="px-4 pb-12">
						{desktopChunks.map((chunk, i) => (
							<CarouselItem key={i} className="px-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
									{chunk.map((service, idx) => (
										<ServiceCard
											key={idx}
											service={service}
											index={i * 8 + idx}
										/>
									))}
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-primary border-primary/20" />
					<CarouselNext className="right-4 bg-white/80 hover:bg-white text-primary border-primary/20" />
				</Carousel>
			</div>
		</motion.div>
	);
};

export default Services;
