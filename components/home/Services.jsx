// 'use client';
// import { servicesData } from '@/app/data/services';
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	useCarousel,
// } from '@/components/ui/carousel';
// import { cn } from '@/lib/utils';
// import { AnimatePresence, motion } from 'framer-motion';
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
// import React, { useEffect, useRef, useState } from 'react';

// const OurServicesSection = ({ classaNames }) => {
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

// 	// Autoplay
// 	useEffect(() => {
// 		if (!isMobile) return;
// 		const interval = setInterval(() => {
// 			if (carouselRef.current?.scrollNext) {
// 				carouselRef.current.scrollNext();
// 			}
// 		}, 4000); // every 4 seconds

// 		return () => clearInterval(interval);
// 	}, [isMobile]);

// 	const serviceVariants = {
// 		hidden: { opacity: 0, y: 20 },
// 		visible: (i) => ({
// 			opacity: 1,
// 			y: 0,
// 			transition: {
// 				delay: i * 0.1,
// 				duration: 0.4,
// 				ease: 'easeInOut',
// 			},
// 		}),
// 		exit: { opacity: 0, y: -20 },
// 	};

// 	if (isMobile) {
// 		return (
// 			<motion.div
// 				initial={{ opacity: 0, y: -20 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.5 }}
// 				className="relative py-16 bg-gray-50"
// 			>
// 				<div className="relative z-10 max-w-7xl mx-auto text-center">
// 					<div className="flex flex-col p-6 space-y-8 mb-10">
// 						<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
// 							Our Services
// 						</h2>
// 						<div>
// 							<h3 className="text-2xl font-bold text-gray-800 mb-4">
// 								Comprehensive Care for Your Needs
// 							</h3>
// 							<p className="text-gray-600 text-lg">
// 								We offer a wide range of medical services to provide you and
// 								your family with the best possible care.
// 							</p>
// 						</div>
// 					</div>

// 					<Carousel
// 						ref={carouselRef}
// 						opts={{ align: 'center', loop: true }}
// 						className="w-full px-4"
// 					>
// 						<CarouselContent className="px-12 pb-4">
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
// 														<motion.div
// 															key={indexInGroup}
// 															variants={serviceVariants}
// 															initial="hidden"
// 															animate="visible"
// 															exit="exit"
// 															custom={i * 2 + indexInGroup}
// 															className={cn(
// 																'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start',
// 																'transition-all duration-300',
// 																'hover:shadow-xl hover:scale-[1.02]',
// 																'border border-gray-100 hover:border-indigo-500/30',
// 																'group'
// 															)}
// 														>
// 															<div
// 																className={cn(
// 																	'w-16 h-16 rounded-full flex items-center justify-center mb-4',
// 																	'transition-colors duration-300',
// 																	'group-hover:bg-indigo-500/20 bg-indigo-100',
// 																	'text-indigo-500'
// 																)}
// 															>
// 																<service.icon className="w-8 h-8" />
// 															</div>
// 															<h4
// 																className={cn(
// 																	'text-lg font-semibold mb-2',
// 																	'transition-colors duration-300',
// 																	'text-gray-800 group-hover:text-indigo-700 text-center'
// 																)}
// 															>
// 																{service.title}
// 															</h4>
// 															<p className="text-sm text-gray-600 text-center">
// 																{service.description}
// 															</p>
// 														</motion.div>
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

// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 20 }}
// 			whileInView={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.4, delay: 0.1 }}
// 			className="relative py-16  pb-24 bg-gray-50"
// 		>
// 			<div className="relative z-10 max-w-7xl mx-auto text-center">
// 				<div className="flex flex-col p-6 space-y-8 mb-10">
// 					<h2 className="text-indigo-500 font-semibold text-sm mb-8 italic_">
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
// 						const ServiceIcon = service.icon;
// 						return (
// 							<motion.div
// 								key={index}
// 								variants={serviceVariants}
// 								initial="hidden"
// 								animate="visible"
// 								exit="exit"
// 								custom={index}
// 								className={cn(
// 									'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start',
// 									'transition-all duration-300',
// 									'hover:shadow-xl hover:scale-[1.02]',
// 									'border border-gray-100 hover:border-indigo-500/30',
// 									'group h-full'
// 								)}
// 							>
// 								<div
// 									className={cn(
// 										'w-16 h-16 rounded-full flex items-center justify-center mb-4',
// 										'transition-colors duration-300',
// 										'group-hover:bg-indigo-500/20 bg-indigo-100',
// 										'text-indigo-500'
// 									)}
// 								>
// 									<ServiceIcon className="w-8 h-8" />
// 								</div>
// 								<h4
// 									className={cn(
// 										'text-lg font-semibold mb-2',
// 										'transition-colors duration-300',
// 										'text-gray-800 group-hover:text-indigo-700 text-center'
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
// 		</motion.div>
// 	);
// };

// export default OurServicesSection;
'use client';

import { servicesData } from '@/app/data/services';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ServiceCard from '../services/Services'; // Using the wrapper logic? No, let's just implement the card UI directly here or rename appropriately. The previous code imported ServiceCard from '../services/Services' which seems to be the CARD component. I will check the import content to be sure. 
// Wait, previous file view showed import ServiceCard from '../services/Services'. Let's stick to the inline card implementation for the new design to be safe, OR refactor the child component. 
// Actually, I'll implement the UI *here* to ensure the Dark Theme is applied perfectly to every card without dependency issues. 
// BUT, checking line 306 in previous file: `<ServiceCard ... />`. 
// I will implement the card structure inline to guarantee the "Dark Navy" look.

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

	// ... auto play logic ...

	return (
		<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
			{/* Background Texture */}
			<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

			<div className="relative z-10 max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-end px-6 mb-16 gap-8">
					<div className="max-w-2xl">
						<h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
							Centers of Excellence
						</h2>
						<h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
							World-Class Medical Services
						</h2>
						<p className="text-slate-400 text-xl leading-relaxed">
							Cutting-edge technology meets compassionate care. Explore our specialized departments designed for your well-being.
						</p>
					</div>
					<div className="hidden md:block">
						<button className="text-white border-b border-secondary hover:text-secondary transition-colors pb-1 flex items-center gap-2">
							View All Departments <ArrowUpRight className="w-4 h-4" />
						</button>
					</div>
				</div>

				{isMobile ? (
					<Carousel ref={carouselRef} opts={{ align: 'start', loop: true }} className="w-full px-4">
						<CarouselContent className="-ml-4">
							{servicesData.map((service, index) => {
								const ServiceIcon = service.icon;
								return (
									<CarouselItem key={index} className="pl-4 basis-11/12">
										<div className="bg-slate-800/50 border border-white/5 p-8 rounded-2xl h-[340px] flex flex-col relative group overflow-hidden">
											<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/10 transition-colors" />

											<div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
												<ServiceIcon className="w-7 h-7" />
											</div>

											<h3 className="text-2xl font-bold font-heading mb-3">{service.title}</h3>
											<p className="text-slate-400 leading-relaxed mb-6 flex-grow">{service.description}</p>

											<div className="flex items-center text-sm font-semibold text-secondary">
												Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
											</div>
										</div>
									</CarouselItem>
								);
							})}
						</CarouselContent>
					</Carousel>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
						{servicesData.map((service, index) => {
							const ServiceIcon = service.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
								>
									<div className="flex justify-between items-start mb-6">
										<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/5 flex items-center justify-center text-secondary group-hover:text-white group-hover:from-primary group-hover:to-blue-600 transition-all duration-500 shadow-inner">
											<ServiceIcon className="w-8 h-8" />
										</div>
										<ArrowUpRight className="w-6 h-6 text-slate-600 group-hover:text-secondary transition-colors" />
									</div>

									<h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
									<p className="text-slate-400 text-base leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
										{service.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
};

export default OurServicesSection;
