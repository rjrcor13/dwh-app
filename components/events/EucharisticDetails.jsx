// // app/events/[eventId]/page.jsx

// import { eucharisticEvents } from '@/app/data/eucharistivEvents';
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from '@/components/ui/carousel';
// import { Separator } from '@/components/ui/separator';
// import { CalendarIcon, ClockIcon, InfoIcon, MapPinIcon } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link'; // For "Back to Events" button
// import { notFound } from 'next/navigation'; // For handling event not found

// // This function will be called by Next.js to pre-render paths
// export async function generateStaticParams() {
// 	// Return an array of objects, where each object has the 'eventId' param
// 	// matching the folder name [eventId]
// 	return eucharisticEvents.map((event) => ({
// 		eventId: event.id,
// 	}));
// }

// const EucharisticDetail = ({ params }) => {
// 	const { eventId } = params;

// 	// Find the event based on the eventId from the URL
// 	const event = eucharisticEvents.find((e) => e.id === eventId);

// 	// If event is not found, render a 404 page
// 	if (!event) {
// 		notFound();
// 	}

// 	// Helper function to render media items (reused from Eucharistics.jsx)
// 	const renderMediaItem = (mediaItem, index, className) => {
// 		if (mediaItem.type === 'image') {
// 			return (
// 				<div key={index} className={`relative w-full ${className}`}>
// 					<Image
// 						src={mediaItem.src}
// 						alt={`Media ${index + 1}`}
// 						fill
// 						style={{ objectFit: 'cover' }}
// 						className="rounded-md"
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
// 	};

// 	return (
// 		<main className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
// 			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
// 				<Link
// 					href="/#eucharistic-events"
// 					className="text-primary hover:underline mb-6 inline-block"
// 				>
// 					&larr; Back to all Events
// 				</Link>
// 				<h1 className="text-4xl font-bold text-primary-dark dark:text-primary mb-4">
// 					{event.title}
// 				</h1>
// 				<p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
// 					{event.description}
// 				</p>

// 				{/* Media Carousel */}
// 				{event.media && event.media.length > 0 && (
// 					<Carousel className="w-full max-w-2xl mx-auto mb-8">
// 						<CarouselContent>
// 							{event.media.map((mediaItem, index) => (
// 								<CarouselItem key={index}>
// 									{renderMediaItem(mediaItem, index, 'h-64 md:h-96')}{' '}
// 									{/* Larger height for detail page */}
// 								</CarouselItem>
// 							))}
// 						</CarouselContent>
// 						{event.media.length > 1 && (
// 							<>
// 								<CarouselPrevious />
// 								<CarouselNext />
// 							</>
// 						)}
// 					</Carousel>
// 				)}

// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
// 					<div className="flex items-center">
// 						<CalendarIcon className="w-6 h-6 mr-3 text-blue-500" />
// 						<p>
// 							<span className="font-semibold">Date:</span> {event.date}
// 						</p>
// 					</div>
// 					<div className="flex items-center">
// 						<ClockIcon className="w-6 h-6 mr-3 text-green-500" />
// 						<p>
// 							<span className="font-semibold">Time:</span> {event.time}
// 						</p>
// 					</div>
// 					<div className="flex items-start">
// 						<MapPinIcon className="w-6 h-6 mr-3 mt-1 text-red-500" />
// 						<p>
// 							<span className="font-semibold">Location:</span> {event.location}
// 						</p>
// 					</div>
// 					<div className="flex items-start">
// 						<InfoIcon className="w-6 h-6 mr-3 mt-1 text-purple-500" />
// 						<p>
// 							<span className="font-semibold">Organizer:</span>{' '}
// 							{event.organizer}
// 						</p>
// 					</div>
// 				</div>

// 				<Separator className="my-8" />

// 				{/* Potentially add more detailed content here */}
// 				<h2 className="text-2xl font-bold text-primary-dark dark:text-primary mb-4">
// 					About This Event
// 				</h2>
// 				<p className="text-gray-700 dark:text-gray-300">
// 					This is where you could add even more extensive details about the
// 					event, such as a full agenda, speakers, registration links, or
// 					additional context that wouldn't fit on the main event card.
// 				</p>
// 			</div>
// 		</main>
// 	);
// };

// export default EucharisticDetail;
