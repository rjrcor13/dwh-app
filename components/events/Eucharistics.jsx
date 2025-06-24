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
// 			</div>
// 		</section>
// 	);
// };

// export default Eucharistics;
// components/Eucharistics.jsx
// components/Eucharistics.jsx
// components/Eucharistics.jsx
'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
// We don't need the Button component for the Link anymore
// import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CalendarIcon, ClockIcon } from 'lucide-react';

import { eucharisticEvents } from '@/app/data/eucharistivEvents';
import Link from 'next/link';

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
						className="rounded-md"
					/>
				</div>
			);
		}
		return (
			<div
				key={index}
				className={`relative w-full ${className} bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 rounded-md`}
			>
				<span className="text-xs">Video available</span>
			</div>
		);
	};

	return (
		<section id="eucharistic-events" className="py-12 bg-gray-50 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center text-primary-dark dark:text-primary mb-10">
					Eucharistic Events
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{eucharisticEvents.map((event) => (
						<Card
							key={event.id}
							className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							{event.media && event.media.length > 0 && (
								<div className="relative h-48 w-full">
									{renderMediaItemThumbnail(event.media[0], 0, 'h-full')}
								</div>
							)}
							<CardHeader>
								<CardTitle className="text-xl text-primary-dark dark:text-primary">
									{event.title}
								</CardTitle>
								<CardDescription className="flex items-center text-gray-600 dark:text-gray-400">
									<CalendarIcon className="w-4 h-4 mr-2" />
									{event.date}
								</CardDescription>
								<CardDescription className="flex items-center text-gray-600 dark:text-gray-400">
									<ClockIcon className="w-4 h-4 mr-2" />
									{event.time}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
									{event.description}
								</p>
							</CardContent>
							<CardFooter className="flex justify-end">
								{/* Direct Link styled as a button */}
								<Link
									href={`/events/eucharistic-celebrations/${event.id}`}
									passHref
									className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
								>
									View Details
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Eucharistics;
