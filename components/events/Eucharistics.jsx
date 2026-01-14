// // components/Eucharistics.jsx
// 'use client';

// import { Button } from '@/components/ui/button';
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardFooter,
// 	CardHeader,
// 	CardTitle,
// } from '@/components/ui/card';
// import {
// 	Dialog,
// 	DialogContent,
// 	DialogDescription,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from '@/components/ui/dialog';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';
// import { CalendarIcon, ClockIcon, InfoIcon, MapPinIcon } from 'lucide-react';
// import Image from 'next/image';
// import React, { useCallback, useState } from 'react'; // Import useCallback

// // Import Carousel components
// import { eucharisticEvents } from '@/app/data/eucharistivEvents';
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from '@/components/ui/carousel';

// const Eucharistics = () => {
// 	const [selectedEvent, setSelectedEvent] = useState(null);

// 	// Function to render media items (image or video)
// 	const renderMediaItem = useCallback((mediaItem, index, className) => {
// 		if (mediaItem.type === 'image') {
// 			return (
// 				<div key={index} className={`relative w-full ${className}`}>
// 					<Image
// 						src={mediaItem.src}
// 						alt={`Media ${index + 1}`}
// 						fill
// 						style={{ objectFit: 'cover' }}
// 						className="rounded-md" // Added rounded corners
// 					/>
// 				</div>
// 			);
// 		} else if (mediaItem.type === 'video') {
// 			return (
// 				<div
// 					key={index}
// 					className={`relative w-full ${className} bg-black flex items-center justify-center`}
// 				>
// 					<iframe
// 						src={mediaItem.src}
// 						title={`Video ${index + 1}`}
// 						frameBorder="0"
// 						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 						allowFullScreen
// 						className="absolute top-0 left-0 w-full h-full"
// 					></iframe>
// 				</div>
// 			);
// 		}
// 		return null;
// 	}, []);

// 	return (
// 		<section
// 			id="eucharistic-events"
// 			className="py-12 bg-gray-50 dark:bg-gray-900"
// 		>
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<h2 className="text-3xl font-bold text-center text-primary-dark dark:text-primary mb-10">
// 					Eucharistic Events
// 				</h2>

// 				{/* Event Grid */}
// 				{/* Removed ScrollArea around the grid for simpler display, can add back if many cards */}
// 				{/* For long lists of cards, ScrollArea can be beneficial for consistent layout */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{eucharisticEvents.map((event) => (
// 						<Dialog key={event.id}>
// 							<DialogTrigger asChild>
// 								<Card
// 									className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
// 									onClick={() => setSelectedEvent(event)}
// 								>
// 									{/* Display only the first media item as thumbnail */}
// 									{event.media && event.media.length > 0 && (
// 										<div className="relative h-48 w-full">
// 											{renderMediaItem(event.media[0], 0, 'h-full')}
// 										</div>
// 									)}
// 									<CardHeader>
// 										<CardTitle className="text-xl text-primary-dark dark:text-primary">
// 											{event.title}
// 										</CardTitle>
// 										<CardDescription className="flex items-center text-gray-600 dark:text-gray-400">
// 											<CalendarIcon className="w-4 h-4 mr-2" />
// 											{event.date}
// 										</CardDescription>
// 										<CardDescription className="flex items-center text-gray-600 dark:text-gray-400">
// 											<ClockIcon className="w-4 h-4 mr-2" />
// 											{event.time}
// 										</CardDescription>
// 									</CardHeader>
// 									<CardContent>
// 										<p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
// 											{event.description}
// 										</p>
// 									</CardContent>
// 									<CardFooter className="flex justify-end">
// 										<Button>View Details</Button>
// 									</CardFooter>
// 								</Card>
// 							</DialogTrigger>

// 							{/* Event Details DialogContent for this specific event */}
// 							<DialogContent className="sm:max-w-[425px] md:max-w-lg lg:max-w-xl max-h-[80vh] overflow-y-auto">
// 								{selectedEvent && selectedEvent.id === event.id && (
// 									<>
// 										<DialogHeader>
// 											<DialogTitle className="text-2xl font-bold text-primary-dark dark:text-primary">
// 												{selectedEvent.title}
// 											</DialogTitle>
// 											<DialogDescription className="text-gray-600 dark:text-gray-400">
// 												Details about this Eucharistic event.
// 											</DialogDescription>
// 										</DialogHeader>
// 										<div className="space-y-4 py-4">
// 											{/* Media Carousel */}
// 											{selectedEvent.media &&
// 												selectedEvent.media.length > 0 && (
// 													<Carousel
// 														className="w-full max-w-xl mx-auto" // Added max-w-xl for better sizing
// 													>
// 														<CarouselContent>
// 															{selectedEvent.media.map((mediaItem, index) => (
// 																<CarouselItem key={index}>
// 																	{renderMediaItem(
// 																		mediaItem,
// 																		index,
// 																		'h-64 md:h-80'
// 																	)}{' '}
// 																	{/* Adjust height as needed */}
// 																</CarouselItem>
// 															))}
// 														</CarouselContent>
// 														{selectedEvent.media.length > 1 && ( // Only show arrows if more than one item
// 															<>
// 																<CarouselPrevious />
// 																<CarouselNext />
// 															</>
// 														)}
// 													</Carousel>
// 												)}

// 											<div className="flex items-center text-gray-700 dark:text-gray-300">
// 												<CalendarIcon className="w-5 h-5 mr-3 text-blue-500" />
// 												<p>
// 													<span className="font-semibold">Date:</span>{' '}
// 													{selectedEvent.date}
// 												</p>
// 											</div>
// 											<div className="flex items-center text-gray-700 dark:text-gray-300">
// 												<ClockIcon className="w-5 h-5 mr-3 text-green-500" />
// 												<p>
// 													<span className="font-semibold">Time:</span>{' '}
// 													{selectedEvent.time}
// 												</p>
// 											</div>
// 											<div className="flex items-start text-gray-700 dark:text-gray-300">
// 												<MapPinIcon className="w-5 h-5 mr-3 mt-1 text-red-500" />
// 												<p>
// 													<span className="font-semibold">Location:</span>{' '}
// 													{selectedEvent.location}
// 												</p>
// 											</div>
// 											<Separator />
// 											<div className="flex items-start text-gray-700 dark:text-gray-300">
// 												<InfoIcon className="w-5 h-5 mr-3 mt-1 text-purple-500" />
// 												<p>
// 													<span className="font-semibold">Organizer:</span>{' '}
// 													{selectedEvent.organizer}
// 												</p>
// 											</div>
// 											<Separator />
// 											<div>
// 												<h3 className="font-semibold text-lg mb-2 text-primary-dark dark:text-primary">
// 													Description:
// 												</h3>
// 												<p className="text-gray-700 dark:text-gray-300">
// 													{selectedEvent.description}
// 												</p>
// 											</div>
// 										</div>
// 									</>
// 								)}
// 							</DialogContent>
// 						</Dialog>
// 					))}
// 				</div>
// 				{/* You can add back the ScrollArea around the grid if needed for many cards */}
// 				{/*
//                 <ScrollArea className="h-[600px] w-full rounded-md border p-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         ... (your mapped cards)
//                     </div>
//                 </ScrollArea>
//                 */}
'use client';

import { eucharisticEvents } from '@/app/data/eucharisticEvents';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Eucharistics = () => {
	const renderMediaItemThumbnail = (mediaItem, index, className) => {
		if (mediaItem.type === 'image') {
			return (
				<div key={index} className={`relative w-full ${className}`}>
					<Image
						src={mediaItem.src}
						alt={`Media ${index + 1}`}
						fill
						style={{ objectFit: 'cover' }}
						className="rounded-t-lg transition-transform duration-300 hover:scale-105"
					/>
				</div>
			);
		}
		return (
			<div
				key={index}
				className={`relative w-full ${className} bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 rounded-t-lg`}
			>
				<span className="text-sm font-medium">Video available</span>
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-gray-50/50">
			{/* Breadcrumb Section */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<nav className="flex items-center text-sm text-gray-500">
						<Link href="/events" className="hover:text-primary transition-colors">
							Events
						</Link>
						<span className="mx-2">/</span>
						<span className="text-gray-900 font-medium">Eucharistic Celebrations</span>
					</nav>
				</div>
			</div>

			{/* Hero Section */}
			<section className="bg-white pb-12 pt-8 border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 text-purple-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							/>
						</svg>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
						Eucharistic Celebrations
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Join us in spiritual communion. Discover our scheduled Masses, adoration sessions, 
						and other sacred gatherings designed to nourish your faith.
					</p>
				</div>
			</section>

			{/* Events Grid Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{eucharisticEvents.map((event) => (
							<Card
								key={event.id}
								className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white"
							>
								{event.media && event.media.length > 0 ? (
									<div className="relative h-56 w-full overflow-hidden">
										{renderMediaItemThumbnail(event.media[0], 0, 'h-full')}
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
											<span className="text-white font-medium">View Event Details</span>
										</div>
									</div>
								) : (
                                    <div className="h-56 bg-gray-200 w-full flex items-center justify-center">
                                        <span className="text-gray-400">No Image Available</span>
                                    </div>
                                )}
								<CardHeader className="pb-3">
									<div className="flex justify-between items-start">
										<CardTitle className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors">
											{event.title}
										</CardTitle>
									</div>
									<div className="space-y-2 mt-2">
										<CardDescription className="flex items-center text-sm font-medium text-gray-600">
											<CalendarIcon className="w-4 h-4 mr-2 text-purple-500" />
											{event.date}
										</CardDescription>
										<CardDescription className="flex items-center text-sm font-medium text-gray-600">
											<ClockIcon className="w-4 h-4 mr-2 text-purple-500" />
											{event.time}
										</CardDescription>
                                        <CardDescription className="flex items-center text-sm font-medium text-gray-600">
											<MapPinIcon className="w-4 h-4 mr-2 text-purple-500" />
											{event.location}
										</CardDescription>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
										{event.description}
									</p>
								</CardContent>
								<CardFooter className="pt-0 pb-6">
									<Link href={`/events/eucharistic-celebrations/${event.id}`} className="w-full">
										<Button className="w-full bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 transition-all shadow-sm">
											Read More
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>

					{/* Navigation Links */}
					<div className="mt-20 border-t pt-12">
						<h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
							Explore Other Events
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
							<Link href="/events/makapawa" className="group block h-full">
								<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:border-green-200 bg-gradient-to-br from-white to-green-50/30">
									<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<UsersIcon className="w-6 h-6 text-green-600" />
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700">
										Makapawa Events
									</h3>
									<p className="text-gray-600 text-sm">
										Community-focused healthcare programs and outreach services.
									</p>
								</div>
							</Link>

							<Link href="/events/hospital-celebrations" className="group block h-full">
								<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
									<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<CalendarIcon className="w-6 h-6 text-blue-600" />
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700">
										Hospital Celebrations
									</h3>
									<p className="text-gray-600 text-sm">
										Commemorating milestones and institutional achievements.
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Eucharistics;
