// 'use client'; // This component MUST be a client component

// import {
// 	Dialog,
// 	DialogContent,
// 	DialogOverlay,
// 	DialogTitle,
// } from '@/components/ui/dialog'; // Import DialogTitle
// import { Separator } from '@/components/ui/separator';
// import {
// 	CalendarIcon,
// 	ClockIcon,
// 	InfoIcon,
// 	MapPinIcon,
// 	XCircle,
// } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// // This component now receives 'event' as a prop
// const EventClientPage = ({ event }) => {
// 	const [viewer, setViewer] = useState({ open: false, type: '', src: '' });
// 	const [isClient, setIsClient] = useState(false);

// 	useEffect(() => {
// 		setIsClient(true);
// 	}, []);

// const handleMediaClick = (mediaItem) => {
//     if (mediaItem.src) {
//         let src = mediaItem.src;
//         if (mediaItem.type === 'video' && (mediaItem.src.includes('youtube.com') || mediaItem.src.includes('vimeo.com'))) {
//             // Construct embed URL with autoplay (you might adjust parameters)
//             src = `${mediaItem.src.includes('youtube') ? mediaItem.src.replace('/embed/', '/watch?v=') : mediaItem.src}?autoplay=1&rel=0&showinfo=0&controls=1`;
//             if (mediaItem.src.includes('vimeo.com')) {
//                 src = `${mediaItem.src}?autoplay=1&loop=0&muted=0&controls=1`;
//             }
//         }
//         setViewer({ open: true, type: mediaItem.type, src });
//     } else {
//         console.warn('Attempted to open media viewer with empty src:', mediaItem);
//     }
// };
// 	// Inside EventClientPage.jsx, in renderMediaItem function:
// 	const renderMediaItem = (mediaItem, index) => {
// 		if (!mediaItem.src) {
// 			console.warn('Skipping media item due to empty src:', mediaItem);
// 			return null;
// 		}

// 		// Determine if it's a direct video file or an embed
// 		const isDirectVideo =
// 			mediaItem.type === 'video' &&
// 			!mediaItem.src.includes('youtube.com') &&
// 			!mediaItem.src.includes('vimeo.com');

// 		return (
// 			<div
// 				key={index}
// 				className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
// 				onClick={() => handleMediaClick(mediaItem)}
// 			>
// 				{mediaItem.type === 'image' ? (
// 					<Image
// 						src={mediaItem.src || '/public/assets/billing.jpg'}
// 						alt={`Event Media ${index + 1}`}
// 						fill
// 						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// 						className="object-cover group-hover:scale-105 transition-transform duration-300"
// 					/>
// 				) : (
// 					// Video preview (for external embeds or direct videos with poster)
// 					<div className="absolute inset-0 flex items-center justify-center bg-black">
// 						{isDirectVideo ? (
// 							// If it's a direct video file, consider adding a poster attribute to the video tag
// 							// Example: <video src={mediaItem.src} poster={mediaItem.posterSrc || ''} ... />
// 							// For now, keep as is, but know that `poster` is better for true previews
// 							<video
// 								src={mediaItem.src}
// 								className="w-full h-full object-cover"
// 								preload="metadata"
// 								// If you have poster images in your data:
// 								// poster={mediaItem.posterSrc || ''}
// 							/>
// 						) : (
// 							// Use iframe for YouTube/Vimeo embeds to get their native thumbnail
// 							<iframe
// 								src={`${mediaItem.src}?autoplay=0&controls=0&mute=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`} // Add params for no autoplay, no controls for thumbnail
// 								title={`Video Preview ${index + 1}`}
// 								frameBorder="0"
// 								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 								allowFullScreen
// 								className="absolute top-0 left-0 w-full h-full pointer-events-none" // Disable pointer events to make the div clickable
// 							></iframe>
// 						)}
// 						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// 							▶
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		);
// 	};

// 	if (!isClient) {
// 		return (
// 			<main className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
// 				<p className="text-gray-600 dark:text-gray-400">
// 					Loading event details...
// 				</p>
// 			</main>
// 		);
// 	}

// 	return (
// 		<main className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
// 			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 lg:p-10">
// 				<Link
// 					href="/events/eucharistic-celebrations"
// 					className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center mb-6 text-lg font-medium"
// 				>
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						strokeWidth={2.5}
// 						stroke="currentColor"
// 						className="w-5 h-5 mr-2"
// 					>
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
// 						/>
// 					</svg>
// 					Back to all Events
// 				</Link>

// 				<header className="mb-8">
// 					<h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
// 						{event.title}
// 					</h1>
// 					<p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
// 						{event.description}
// 					</p>
// 				</header>

// 				{event.media?.length > 0 && (
// 					<>
// 						<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pt-4">
// 							Event Highlights
// 						</h2>
// 						<div
// 							className={`grid gap-6 mb-12 ${
// 								event.media.length === 1
// 									? 'grid-cols-1 max-w-2xl mx-auto'
// 									: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
// 							}`}
// 						>
// 							{event.media.map((media, i) => renderMediaItem(media, i))}
// 						</div>
// 						<Separator className="my-10 bg-gray-300 dark:bg-gray-700" />
// 					</>
// 				)}

// 				<section className="mb-10">
// 					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
// 						Event Details
// 					</h2>
// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-gray-700 dark:text-gray-300 text-lg">
// 						<div className="flex items-center">
// 							<CalendarIcon className="w-7 h-7 mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Date
// 								</p>
// 								<p>{event.date}</p>
// 							</div>
// 						</div>
// 						<div className="flex items-center">
// 							<ClockIcon className="w-7 h-7 mr-4 text-green-600 dark:text-green-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Time
// 								</p>
// 								<p>{event.time}</p>
// 							</div>
// 						</div>
// 						<div className="flex items-start">
// 							<MapPinIcon className="w-7 h-7 mr-4 mt-1 text-red-600 dark:text-red-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Location
// 								</p>
// 								<p>{event.location}</p>
// 							</div>
// 						</div>
// 						<div className="flex items-start">
// 							<InfoIcon className="w-7 h-7 mr-4 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Organizer
// 								</p>
// 								<p>{event.organizer}</p>
// 							</div>
// 						</div>
// 					</div>
// 				</section>

// 				<Separator className="my-10 bg-gray-300 dark:bg-gray-700" />

// 				<section>
// 					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
// 						More About This Event
// 					</h2>
// 					<p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
// 						This section may include additional information about the event such
// 						as schedules, speakers, special guests, and registration details.
// 						You can expand on the significance of the eucharistic celebration,
// 						share testimonials, or provide a detailed schedule of activities
// 						throughout the event. This section is ideal for any information that
// 						deepens the attendee&apos;s understanding and engagement.
// 					</p>
// 				</section>
// 			</div>

// 			{isClient && (
// 				<Dialog
// 					open={viewer.open}
// 					onOpenChange={() => setViewer({ open: false, type: '', src: '' })}
// 				>
// 					<DialogOverlay className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
// 						<DialogContent className="relative bg-transparent border-none p-0 max-w-5xl w-full h-[80vh] flex items-center justify-center">
// 							{/* FIX: Added DialogTitle for accessibility */}
// 							<DialogTitle className="sr-only">Media Viewer</DialogTitle>
// 							<button
// 								onClick={() => setViewer({ open: false, type: '', src: '' })}
// 								className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-50 focus:outline-none"
// 								aria-label="Close media viewer" // More descriptive aria-label
// 							>
// 								<XCircle className="h-10 w-10" />
// 							</button>
// 							{viewer.type === 'image' ? (
// 								<div className="relative w-full h-full">
// 									<Image
// 										src={viewer.src}
// 										alt="Full-size media viewer"
// 										fill
// 										className="object-contain"
// 										sizes="100vw"
// 									/>
// 								</div>
// 							) : (
// 								// Ensure viewer.src is not empty before rendering iframe
// 								viewer.src && (
// 									<iframe
// 										src={viewer.src}
// 										title="Full-size video viewer"
// 										frameBorder="0"
// 										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 										allowFullScreen
// 										className="w-full h-full rounded-lg"
// 									></iframe>
// 								)
// 							)}
// 						</DialogContent>
// 					</DialogOverlay>
// 				</Dialog>
// 			)}
// 		</main>
// 	);
// };

// export default EventClientPage;
// components/events/EventClientPage.jsx
// 'use client'; // This component MUST be a client component

// import {
// 	Dialog,
// 	DialogContent,
// 	DialogOverlay,
// 	DialogTitle,
// } from '@/components/ui/dialog';
// import { Separator } from '@/components/ui/separator';
// import {
// 	CalendarIcon,
// 	ClockIcon,
// 	InfoIcon,
// 	MapPinIcon,
// 	XCircle,
// } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// // Removed react-photo-view as it caused compilation issues.
// // We will use a custom dialog for both images and videos.

// // Import for video playback
// import ReactPlayer from 'react-player';

// // Helper function to get YouTube embed URL for preview (useful for preview thumbnails)
// const getYouTubePreviewEmbedUrl = (url) => {
// 	const regExp =
// 		/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/;
// 	const match = url.match(regExp);
// 	if (match && match[1]) {
// 		// Return embed URL with parameters for muted autoplay (for preview)
// 		return `https://www.youtube.com/embed/${match[1]}?autoplay=0&controls=0&mute=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`;
// 	}
// 	return url;
// };

// // Helper function to get Vimeo embed URL for preview (useful for preview thumbnails)
// const getVimeoPreviewEmbedUrl = (url) => {
// 	const regExp =
// 		/(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/|)(\d+)(?:\S+)?/;
// 	const match = url.match(regExp);
// 	if (match && match[1]) {
// 		// Return embed URL with parameters for muted autoplay (for preview)
// 		return `https://player.vimeo.com/video/${match[1]}?autoplay=0&loop=0&muted=1&controls=0`;
// 	}
// 	return url;
// };

// // This component now receives 'event' as a prop
// const EventClientPage = ({ event }) => {
// 	// Viewer state now handles both images and videos
// 	const [viewer, setViewer] = useState({ open: false, type: '', src: '' });
// 	const [isClient, setIsClient] = useState(false);

// 	// useEffect to ensure component is rendered client-side
// 	useEffect(() => {
// 		setIsClient(true);
// 	}, []);

// 	// Handles media click to open the custom viewer dialog
// 	const handleMediaClick = (mediaItem) => {
// 		if (mediaItem.src) {
// 			let processedSrc = mediaItem.src;

// 			// Only process video URLs for embedding when clicking for the full view
// 			if (mediaItem.type === 'video') {
// 				if (
// 					mediaItem.src.includes('youtube.com') ||
// 					mediaItem.src.includes('youtu.be')
// 				) {
// 					// For full video playback, ensure autoplay is enabled
// 					const youtubeMatch = mediaItem.src.match(
// 						/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/
// 					);
// 					if (youtubeMatch && youtubeMatch[1]) {
// 						processedSrc = `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1`;
// 					}
// 				} else if (mediaItem.src.includes('vimeo.com')) {
// 					const vimeoMatch = mediaItem.src.match(
// 						/(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/|)(\d+)(?:\S+)?/
// 					);
// 					if (vimeoMatch && vimeoMatch[1]) {
// 						processedSrc = `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&controls=1&loop=0`;
// 					}
// 				}
// 			}
// 			setViewer({ open: true, type: mediaItem.type, src: processedSrc });
// 		} else {
// 			console.warn('Attempted to open media viewer with empty src:', mediaItem);
// 		}
// 	};

// 	// Renders individual media items (image or video preview)
// 	const renderMediaItem = (mediaItem, index) => {
// 		if (!mediaItem.src) {
// 			console.warn('Skipping media item due to empty src:', mediaItem);
// 			return null;
// 		}

// 		const isYouTube =
// 			mediaItem.src.includes('youtube.com') ||
// 			mediaItem.src.includes('youtu.be');
// 		const isVimeo = mediaItem.src.includes('vimeo.com');
// 		const isDirectVideo = mediaItem.type === 'video' && !(isYouTube || isVimeo);

// 		let previewSrc = mediaItem.src;
// 		if (mediaItem.type === 'video') {
// 			if (isYouTube) {
// 				previewSrc = getYouTubePreviewEmbedUrl(mediaItem.src);
// 			} else if (isVimeo) {
// 				previewSrc = getVimeoPreviewEmbedUrl(mediaItem.src);
// 			}
// 			// For direct video files, the src is already fine for preview
// 		}

// 		return (
// 			<div
// 				key={index}
// 				className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
// 				onClick={() => handleMediaClick(mediaItem)} // Click opens the custom dialog
// 			>
// 				{mediaItem.type === 'image' ? (

// 					<img
// 						src={
// 							mediaItem.src ||
// 							'https://placehold.co/1000x600/aabbcc/ffffff?text=Image+Missing'
// 						} // Fallback
// 						alt={`Event Media ${index + 1}`}
// 						className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
// 						onError={(e) => {
// 							e.target.src =
// 								'https://placehold.co/1000x600/aabbcc/ffffff?text=Image+Error';
// 						}}
// 					/>
// 				) : (
// 					// Video preview. Click opens the custom dialog with ReactPlayer
// 					<div className="absolute inset-0 flex items-center justify-center bg-black">
// 						{isDirectVideo ? (
// 							<video
// 								src={previewSrc}
// 								className="w-full h-full object-cover"
// 								preload="metadata"
// 							/>
// 						) : (
// 							// Use iframe for YouTube/Vimeo embeds to get their native thumbnail
// 							<iframe
// 								src={previewSrc}
// 								title={`Video Preview ${index + 1}`}
// 								frameBorder="0"
// 								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 								allowFullScreen
// 								className="absolute top-0 left-0 w-full h-full pointer-events-none" // Disable pointer events to make the div clickable
// 							></iframe>
// 						)}
// 						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// 							▶
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		);
// 	};

// 	// Show a loading state until the component is client-side rendered
// 	if (!isClient) {
// 		return (
// 			<main className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
// 				<p className="text-gray-600 dark:text-gray-400">
// 					Loading event details...
// 				</p>
// 			</main>
// 		);
// 	}

// 	return (
// 		<main className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
// 			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 lg:p-10">
// 				<a
// 					href="/events/eucharistic-celebrations"
// 					className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center mb-6 text-lg font-medium"
// 				>
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						strokeWidth={2.5}
// 						stroke="currentColor"
// 						className="w-5 h-5 mr-2"
// 					>
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
// 						/>
// 					</svg>
// 					Back to all Events
// 				</a>

// 				<header className="mb-8">
// 					<h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
// 						{event.title}
// 					</h1>
// 					<p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
// 						{event.description}
// 					</p>
// 				</header>

// 				{/* Event Highlights - Media Section */}
// 				{event.media?.length > 0 && (
// 					<>
// 						<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pt-4">
// 							Event Highlights
// 						</h2>
// 						<div
// 							className={`grid gap-6 mb-12 ${
// 								event.media.length === 1
// 									? 'grid-cols-1 max-w-2xl mx-auto'
// 									: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
// 							}`}
// 						>
// 							{event.media.map((media, i) => renderMediaItem(media, i))}
// 						</div>
// 						<Separator className="my-10 bg-gray-300 dark:bg-gray-700" />
// 					</>
// 				)}

// 				{/* Event Details Section */}
// 				<section className="mb-10">
// 					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
// 						Event Details
// 					</h2>
// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-gray-700 dark:text-gray-300 text-lg">
// 						<div className="flex items-center">
// 							<CalendarIcon className="w-7 h-7 mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Date
// 								</p>
// 								<p>{event.date}</p>
// 							</div>
// 						</div>
// 						<div className="flex items-center">
// 							<ClockIcon className="w-7 h-7 mr-4 text-green-600 dark:text-green-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Time
// 								</p>
// 								<p>{event.time}</p>
// 							</div>
// 						</div>
// 						<div className="flex items-start">
// 							<MapPinIcon className="w-7 h-7 mr-4 mt-1 text-red-600 dark:text-red-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Location
// 								</p>
// 								<p>{event.location}</p>
// 							</div>
// 						</div>
// 						<div className="flex items-start">
// 							<InfoIcon className="w-7 h-7 mr-4 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" />
// 							<div>
// 								<p className="font-semibold text-gray-900 dark:text-white">
// 									Organizer
// 								</p>
// 								<p>{event.organizer}</p>
// 							</div>
// 						</div>
// 					</div>
// 				</section>

// 				<Separator className="my-10 bg-gray-300 dark:bg-gray-700" />

// 				{/* More About This Event Section */}
// 				<section>
// 					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
// 						More About This Event
// 					</h2>
// 					<p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
// 						This section may include additional information about the event such
// 						as schedules, speakers, special guests, and registration details.
// 						You can expand on the significance of the eucharistic celebration,
// 						share testimonials, or provide a detailed schedule of activities
// 						throughout the event. This section is ideal for any information that
// 						deepens the attendee's understanding and engagement.
// 					</p>
// 				</section>
// 			</div>

// 			{/* Media Viewer Dialog for both images and videos */}
// 			{isClient && (
// 				<Dialog
// 					open={viewer.open}
// 					onOpenChange={() => setViewer({ open: false, type: '', src: '' })}
// 				>
// 					<DialogOverlay className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
// 						<DialogContent className="relative bg-transparent border-none p-0 max-w-5xl w-full h-[80vh] flex items-center justify-center">
// 							{/* DialogTitle for accessibility */}
// 							<DialogTitle className="sr-only">Media Viewer</DialogTitle>
// 							<button
// 								onClick={() => setViewer({ open: false, type: '', src: '' })}
// 								className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-50 focus:outline-none"
// 								aria-label="Close media viewer"
// 							>
// 								<XCircle className="h-10 w-10" />
// 							</button>

// 							{/* Conditional rendering based on viewer.type */}
// 							{viewer.src && viewer.type === 'image' ? (
// 								<div className="relative w-full h-full">
// 									<img
// 										src={viewer.src}
// 										alt="Full-size media viewer"
// 										className="object-contain w-full h-full"
// 										onError={(e) => {
// 											e.target.src =
// 												'https://placehold.co/1000x600/aabbcc/ffffff?text=Image+Error';
// 										}}
// 									/>
// 								</div>
// 							) : viewer.src && viewer.type === 'video' ? (
// 								<div className="relative w-full h-full rounded-lg overflow-hidden">
// 									<ReactPlayer
// 										url={viewer.src}
// 										controls
// 										playing // Auto-play when opened
// 										width="100%"
// 										height="100%"
// 										className="absolute top-0 left-0"
// 									/>
// 								</div>
// 							) : null}
// 						</DialogContent>
// 					</DialogOverlay>
// 				</Dialog>
// 			)}
// 		</main>
// 	);
// };

// export default EventClientPage;
'use client';

import {
	Dialog,
	DialogContent,
	DialogOverlay,
	DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
	CalendarIcon,
	ClockIcon,
	InfoIcon,
	MapPinIcon,
	XCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReactPlayer from 'react-player';

const EventClientPage = ({ event }) => {
	const [viewer, setViewer] = useState({ open: false, type: '', src: '' });
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleVideoClick = (mediaItem) => {
		if (mediaItem.src) {
			setViewer({ open: true, type: 'video', src: mediaItem.src });
		}
	};

	const renderMediaItem = (mediaItem, index) => {
		if (!mediaItem.src) return null;

		if (mediaItem.type === 'image') {
			return (
				<PhotoView key={index} src={mediaItem.src}>
					<div className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300">
						<Image
							src={mediaItem.src}
							alt={`Event Media ${index + 1}`}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover group-hover:scale-105 transition-transform duration-300"
						/>
					</div>
				</PhotoView>
			);
		}

		if (mediaItem.type === 'video') {
			return (
				<div
					key={index}
					className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
					onClick={() => handleVideoClick(mediaItem)}
				>
					{/* ReactPlayer for inline thumbnail */}
					<ReactPlayer
						url={mediaItem.src}
						light={true}
						playing={false}
						width="100%"
						height="100%"
						// controls={false}
						// style={{ pointerEvents: 'none' }} // Make entire container clickable
					/>
					{/* Play icon overlay */}
					{/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						▶
					</div> */}
				</div>
			);
		}

		return null;
	};

	if (!isClient) {
		return (
			<main className="py-12  bg-white min-h-screen flex  gap-4 items-center_ justify-center">
				{/* <p className="text-gray-600 dark:text-gray-400">
					Loading event details...
				</p> */}
				<div className="flex flex-col space-y-3">
					<Skeleton className="h-[500px] w-full rounded-xl" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[500px]" />
						<Skeleton className="h-4 w-[500px]" />
					</div>
				</div>
				<div className="flex flex-col space-y-3">
					<Skeleton className="h-[500px] w-full rounded-xl" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[500px]" />
						<Skeleton className="h-4 w-[500px]" />
					</div>
				</div>
			</main>
		);
	}

	return (
		<main className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 lg:p-10">
				{/* Back button and event header */}

				<a
					href="/events/eucharistic-celebrations"
					className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center mb-6 text-lg font-medium"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.5}
						stroke="currentColor"
						className="w-5 h-5 mr-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
						/>
					</svg>
					Back to all Events
				</a>

				<header className="mb-8">
					<h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
						{event.title}
					</h1>
					<p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
						{event.description}
					</p>
				</header>

				{event.media?.length > 0 && (
					<>
						<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 pt-4">
							Event Highlights
						</h2>
						<PhotoProvider>
							<div
								className={`grid gap-6 mb-12 ${
									event.media.length === 1
										? 'grid-cols-1 max-w-2xl mx-auto'
										: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
								}`}
							>
								{event.media.map((media, i) => renderMediaItem(media, i))}
							</div>
						</PhotoProvider>
						<Separator className="my-10 bg-gray-300 dark:bg-gray-700" />
					</>
				)}

				{/* ...Event details and other sections here... */}
			</div>

			{/* Video Viewer Modal */}
			<Dialog
				open={viewer.open && viewer.type === 'video'}
				onOpenChange={() => setViewer({ open: false, type: '', src: '' })}
			>
				<DialogOverlay className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
					<DialogContent className="relative bg-transparent border-none p-0 max-w-5xl w-full h-[80vh] flex items-center justify-center">
						<DialogTitle className="sr-only">Video Viewer</DialogTitle>
						<button
							onClick={() => setViewer({ open: false, type: '', src: '' })}
							className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
							aria-label="Close viewer"
						>
							<XCircle className="h-10 w-10" />
						</button>
						{viewer.src && (
							<ReactPlayer
								url={viewer.src}
								playing
								controls
								width="100%"
								height="100%"
								style={{ borderRadius: '0.5rem' }}
							/>
						)}
					</DialogContent>
				</DialogOverlay>
			</Dialog>
		</main>
	);
};

export default EventClientPage;
