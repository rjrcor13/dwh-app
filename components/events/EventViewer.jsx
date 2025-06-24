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
	});

	const openImageViewer = (images, startIndex = 0) => {
		setMediaViewer({ isOpen: true, media: images, type: 'image' });
	};

	const openVideoViewer = (videos, startIndex = 0) => {
		setMediaViewer({ isOpen: true, media: videos, type: 'video' });
	};

	return (
		<>
			{event.images.length > 0 && (
				<div className="mb-8">
					<h3 className="text-xl font-semibold mb-4">Event Photos</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{event.images.map((image, index) => (
							<div
								key={index}
								className="relative cursor-pointer group"
								onClick={() => openImageViewer(event.images, index)}
							>
								<img
									src={image}
									alt={`Event photo ${index + 1}`}
									className="w-full h-48 object-cover rounded-lg"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
									<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
										View Full Size
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{event.videos.length > 0 && (
				<div className="mb-8">
					<h3 className="text-xl font-semibold mb-4">Event Videos</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{event.videos.map((video, index) => (
							<div
								key={index}
								className="relative cursor-pointer group"
								onClick={() => openVideoViewer(event.videos, index)}
							>
								<img
									src={video.thumbnail}
									alt={`Video thumbnail ${index + 1}`}
									className="w-full h-48 object-cover rounded-lg"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
									<Play className="w-12 h-12 text-white" />
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
