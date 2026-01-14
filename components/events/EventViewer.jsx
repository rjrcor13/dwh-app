// components/MediaViewer.tsx
'use client';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import React, { useState } from 'react';

const MediaModal = ({ media, isOpen, onClose, type = 'image' }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	if (!isOpen || !media.length) return null;

	const nextMedia = () => {
		setCurrentIndex((prev) => (prev + 1) % media.length);
	};

	const prevMedia = () => {
		setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
			<div className="relative max-w-4xl max-h-full p-4">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
				>
					<X className="w-8 h-8" />
				</button>

				{media.length > 1 && (
					<>
						<button
							onClick={prevMedia}
							className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
						>
							<ChevronLeft className="w-8 h-8" />
						</button>
						<button
							onClick={nextMedia}
							className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
						>
							<ChevronRight className="w-8 h-8" />
						</button>
					</>
				)}

				<div className="flex items-center justify-center h-full">
					{type === 'image' ? (
						<img
							src={media[currentIndex]}
							alt={`Media ${currentIndex + 1}`}
							className="max-w-full max-h-full object-contain"
						/>
					) : (
						<video
							src={media[currentIndex].url}
							controls
							className="max-w-full max-h-full"
							autoPlay
						/>
					)}
				</div>

				{media.length > 1 && (
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
						{currentIndex + 1} / {media.length}
					</div>
				)}
			</div>
		</div>
	);
};

export default function MediaViewer({ event }) {
	const [mediaViewer, setMediaViewer] = useState({
		isOpen: false,
		media: [],
		type: 'image',
        startIndex: 0
	});

    // Unified media array handling
    // If event has 'media' array (new format), filter it.
    // If event has 'images' and 'videos' (old format), combine them.
    const images = event.media 
        ? event.media.filter(m => m.type === 'image').map(m => m.src)
        : (event.images || []);
    
    const videos = event.media 
        ? event.media.filter(m => m.type === 'video').map(m => ({ url: m.src, thumbnail: '' })) // Thumbnail missing in new format, use placeholder or just video
        : (event.videos || []);

	const openImageViewer = (params, startIndex = 0) => {
		setMediaViewer({ isOpen: true, media: params, type: 'image', startIndex });
	};

	const openVideoViewer = (params, startIndex = 0) => {
		setMediaViewer({ isOpen: true, media: params, type: 'video', startIndex });
	};

	return (
		<>
			{images.length > 0 && (
				<div className="mb-8">
					<h3 className="text-xl font-semibold mb-4 text-gray-900">Event Photos</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{images.map((image, index) => (
							<div
								key={index}
								className="relative cursor-pointer group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
								onClick={() => openImageViewer(images, index)}
							>
								<div className="aspect-video relative">
                                    <img
                                        src={image}
                                        alt={`Event photo ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
								<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
									<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
										View Full Size
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{videos.length > 0 && (
				<div className="mb-8">
					<h3 className="text-xl font-semibold mb-4 text-gray-900">Event Videos</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{videos.map((video, index) => (
							<div
								key={index}
								className="relative cursor-pointer group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
								onClick={() => openVideoViewer(videos, index)}
							>
								<div className="aspect-video relative bg-black">
                                     {/* If we had thumbnails for videos in new format we'd use them here. 
                                        For now, maybe just a placeholder or the video element itself muted/paused? 
                                        Let's stick to standard thumbnail if available, else a geometric placeholder */}
                                    {video.thumbnail ? (
                                        <img
                                            src={video.thumbnail}
                                            alt={`Video thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                                            <Play className="w-12 h-12 text-white opacity-50" />
                                        </div>
                                    )}
                                </div>
								<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									    <Play className="w-8 h-8 text-white fill-current" />
                                    </div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			<MediaModal
				media={mediaViewer.media}
				isOpen={mediaViewer.isOpen}
				onClose={() => setMediaViewer({ ...mediaViewer, isOpen: false })}
				type={mediaViewer.type}
			/>
		</>
	);
}
